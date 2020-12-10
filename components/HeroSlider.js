import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src="/images/aroma-hero-1.png" />
        </div>
        <div>
        <img src="/images/aroma-hero-2.png" />
        </div>
        <div>
        <img src="/images/aroma-hero-3.png" />
        </div>
      </Slider>
    );
  }