import React from "react";
import Slider from 'react-slick';


export default function Menu() {
    var settings = {
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false
    };
    return (
        <div id="menu">
            <h1 className="menu-header mt-4 text-center">Menu</h1>
            <div className="menu-slider container-sm">
                <Slider {...settings}>
                    <div>
                        <img src="/images/menu-image1.jpg" />
                    </div>
                    <div>
                        <img src="/images/menu-image2.jpg" />
                    </div>
                    <div>
                        <img src="/images/menu-image3.jpg" />
                    </div>
                </Slider>
            </div>
        </div>

    );
}