import React from "react";
import { ReactDOM } from "react";
import classes from "@/common/Button.module.css"

export default function Button({children, ...rest }) {
  return <button className={classes.button} {...rest}>{children} </button>;
}
