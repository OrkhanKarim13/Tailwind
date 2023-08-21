import React from "react";
import SliderHome from "../components/home/SliderHome";
import Sorting  from "../components/home/Sorting";
import Category from "../components/home/Category";
import Product from "../components/home/Product";
import Shop from "../components/home/Shop";

const Home = () => {
  return (
    <div>
      <SliderHome />
      <Sorting />
      
      <div className="flex">
        <Category/>
        <Product/>
      </div>
      <Shop/>
    </div>
  );
};

export default Home;
