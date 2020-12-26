import React from "react";
import classes from "./AboutUs.module.css";
import pic from "../../../assets/icons/coffeeCupThought.svg";

export default function AboutUs() {
  return (
    <div className={classes.aboutUs}>
      <div className={classes.aboutContent}>first box</div>
      <div className={classes.aboutImg}>{pic}</div>
    </div>
  );
}
