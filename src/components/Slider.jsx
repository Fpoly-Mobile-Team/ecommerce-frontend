import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data/slider-data";

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="flex relative overflow-hidden h-full">
      <Arrow direction="left" onClick={() => handleClick("left")}>
        Left
      </Arrow>
      <Wrapper
        className="h-full flex transition-all duration-1000 ease-out"
        slideIndex={slideIndex}
      >
        {sliderItems.map((item) => (
          <div className="slide w-screen h-screen flex items-center ">
            <div className="imgContainer h-full">
              <img src={item.img} alt="" className="w-full" />
            </div>
          </div>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        Right
      </Arrow>
    </div>
  );
};

export default Slider;
