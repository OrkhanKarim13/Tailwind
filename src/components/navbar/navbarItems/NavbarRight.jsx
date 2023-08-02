import React from "react";
import {FaSearch, FaRegHeart, FaShoppingBasket} from "react-icons/fa";


const NavbarRight = () => {
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input className='bg-gray-200 outline-none' type="text" placeholder="search.." />
        <FaSearch size={25}/>
      </div>
        <FaRegHeart size={25}/>
        <div className="relative">
            <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">3</div>
            <FaShoppingBasket size={25}/>
        </div>
    </div>
  );
};

export default NavbarRight;
