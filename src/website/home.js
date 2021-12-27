import React from "react";
import { NavLink } from "react-router-dom";
import web from "../image/screen-rocket.svg"
import Common from "./common";

const Home = () => {
  return (
    <>
    <Common 
      name="Grow your business with " 
     imgsrc={web} v
     visit='/Service'
     btname="Get Started"
    />
    </>
  );
};

export default Home;
