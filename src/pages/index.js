import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/common/Banner";
import Card from "@/common/Card";
import Recipe from "@/components/Recipe";
import { useState, useEffect } from "react";
import Menu from "@/components/Menu";

export default function Home() {
  const messageStyle = { textAlign: "center" };
  const [recipeData, setRecipeData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const noDataMessage = (
    <h3 style={messageStyle}> Sorry, no recipe data is available.</h3>
  );

  const loadingMessage = <h3 style={messageStyle}> Loading...</h3>;

  const dataStatusMessage =
    !recipeData && !isFetching ? noDataMessage : loadingMessage;
  // useEffect(() => {
  //   console.log("Click happened")
  //   const fetchRecipeData = async () => {
  //     try {
  //     const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  //     const newData = await response.json()
  //     setRecipeData(newData)
  //     }

  //     catch (e) {
  //       console.log(e)
  //     }

  //     finally {
  //       setIsFetching(false)
  //     }
  // };

  const fetchRecipeData = async () => {
    setIsFetching(true);
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const newData = await response.json();
      setRecipeData(newData);
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  };

  const handleClick = () => {
    fetchRecipeData();
  };

  return (
    <>
      <Banner />
      <Menu toggleClick={handleClick} />
      <Card>
        {recipeData && !isFetching && <Recipe recipe={recipeData} />}
        {!recipeData && !isFetching && noDataMessage}
        {isFetching && loadingMessage}
      </Card>
    </>
  );
}
