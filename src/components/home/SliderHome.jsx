import React from "react";
import Slider from "react-slick";

const SliderHome = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center justify-center">
          <div>
            <div className="text-6xl font-bold">Richard Mille</div>
            <div className="text-xl my-3 pr-3">
            Official website of Richard Mille, the swiss watchmaking brand that combines the best in technical innovation, in architecture and in fine watchmaking ...
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] flex items-center justify-center h-16 bg-gray-200 hover:bg-#000-700 ">About</div>
          </div>
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/638/358/desktop-wallpaper-sell-your-richard-mille-watch-in-london-for-cash-richard-mille-watches.jpg"
            alt="Richard Mille"
          />
        </div>
        <div className="!flex items-center justify-center h-[529px]">
          <img
          
            src="https://e1.pxfuel.com/desktop-wallpaper/747/57/desktop-wallpaper-richard-mille-watches-richard-mille.jpg"
            alt="Richard Mille"
          />
          <div className="pl-5">
            <div className="text-6xl font-bold">Richard Mille</div>
            <div className="text-xl my-3">
            Official website of Richard Mille, the swiss watchmaking brand that combines the best in technical innovation, in architecture and in fine watchmaking ...
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] flex items-center justify-center h-16  bg-gray-200 ">About</div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
};

export default SliderHome;
