import React from "react";
import { ReactDOM } from "react";
import classes from "@/components/Menu.module.css"
import Button from "@/common/Button";

export default function Menu({toggleClick}) {

  return (
    <div className={classes.menu}>
        <p> Click Button to Generate Recipe</p>
        <Button onClick={toggleClick}>Generate Recipe</Button>
      </div>
       );
}
