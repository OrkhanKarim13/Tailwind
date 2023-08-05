import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  console.log(categories, "categories");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return <div className="w-1/6 p-4">
    <div className="border-b pb-1 px-2 text-xl font-bold">Category</div>
    {
      categories?.map((category,i) => (
        <div className="text-lg mt-2 cursor-pointer hover:bg-gray-200 p-2 rounded-lg" key={i}>{category}</div>
      ))
    }
  </div>;
};

export default Category;
