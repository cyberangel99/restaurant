import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSlider() {
  var settings = {
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="/images/aroma-hero-1.png" className="hero-image" />
      </div>
      <div>
        <img src="/images/aroma-hero-2.png" className="hero-image" />
      </div>
      <div>
        <img src="/images/aroma-hero-3.png" className="hero-image" />
      </div>
    </Slider>
  );
}