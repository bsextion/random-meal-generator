import React from "react";
import { ReactDOM } from "react";
import classes from "@/components/Recipe.module.css";
import Image from "next/image";

export default function Recipe({ recipe }) {
  const { meals } = recipe;
  const meal = meals[0];
  const { strMeal, strMealThumb, strInstructions } = meal;

  const ingredients = Object.entries(meal)
    .filter(([k]) => k.startsWith("strIngredient"))
    .map(([, v]) => v);

  const ingredientList = ingredients
    .filter((el) => el != "")
    .map((ingredient, index) => {
      return <li className={classes.list} key={index}> {ingredient} </li>;
    });

    const instructionsList = strInstructions.split('\n').map((instruction, index) => {
      return <li className={classes.list} key={index}> {instruction} </li>;
     })
    console.log(strInstructions.split("\n"));

  return (
    <div className={classes.containers}>
      <div className={classes[`recipe-img-container`]}>
        <Image
          className={classes[`recipe-img`]}
          src={strMealThumb}
          alt={strMeal}
          width={150}
          height={150}
        />

        <h3 className={classes[`recipe-ing-title`]}>Ingredients</h3>
        <ul className={classes[`recipe-ing`]}>{ingredientList}</ul>
      </div>
      <div className={classes[`recipe-desc-container`]}>
        <h2 className={classes[`recipe-desc`]}>Recipe: {strMeal}</h2>
        <h3 className={classes[`recipe-desc`]}>Steps</h3>
        <ol>
          {instructionsList}
        </ol>
      </div>
    </div>
  );
}
