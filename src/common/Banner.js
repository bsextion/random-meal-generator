import React from "react";
import { ReactDOM } from "react";
import classes from "@/common/Banner.module.css";
import Image from "next/image"
import logo from "@/images/bowl.png";

export default function Banner(){
    return (
        <div className={classes.containers}>
            <Image className={classes.img}  src={logo} alt="small image of ramen bowl"/>
            <h1 className={classes.container}>Food Generator App</h1>
            </div>
           
    )
}