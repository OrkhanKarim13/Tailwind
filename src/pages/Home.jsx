import React from "react";
import SliderHome from "../components/home/SliderHome";
import Sorting  from "../components/home/Sorting";
import Category from "../components/home/Category";
import Product from "../components/home/Product";

const Home = () => {
  return (
    <div>
      <SliderHome />
      <Sorting />
      <div className="flex">
        <Category/>
        <Product/>
      </div>
    </div>
  );
};

export default Home;
