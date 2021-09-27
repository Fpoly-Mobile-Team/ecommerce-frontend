import React from "react";
import Slider from "../components/Slider";

const Banner = () => {
  return (
    <div className="banner flex w-full h-60">
      {/* Left */}
      <div className="banner-left w-2/3">
        <Slider />
      </div>
      {/* Right */}
      <div className="banner-right w-1/3 h-full">
        <img
          className="object-cover h-1/2"
          src="https://cf.shopee.sg/file/7079351f5d0868427250b89ee9249e39_xhdpi"
          alt=""
        />
        <img
          className="object-cover h-1/2"
          src="https://cf.shopee.sg/file/2706b32f2019df6eb60046db72ea85c1_xhdpi"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
