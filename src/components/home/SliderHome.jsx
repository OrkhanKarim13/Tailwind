import React from "react";
import Slider from "react-slick";
const SliderHome = () => {
  
  return (
    <div>
      <Slider>
        <div className="!flex items-center justify-center">
          <div>
            <div className="text-6xl font-bold">Richard Mille</div>
            <div className="text-xl my-3 pr-3">
            Official website of Richard Mille, the swiss watchmaking brand that combines the best in technical innovation, in architecture and in fine watchmaking ...
            </div>
            <div>About</div>
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
            <div>About</div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
};

export default SliderHome;
