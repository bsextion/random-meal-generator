import React from "react";
 import { ReactDOM } from "react";
import classes from "@/common/Card.module.css"

 export default function Card({children}) {
    return (
    <div className={classes.card}>
        {children}
    </div>
    )
 }
