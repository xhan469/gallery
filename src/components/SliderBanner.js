import React from "react";
import avatar from "../assets/img/avatar.webp";
import banner from "../assets/img/banner-bg.webp";
import piano from "../assets/img/piano.webp";
import hogwarts from "../assets/img/hogwarts.webp";
import albedo from "../assets/img/albedo.webp";
import klee from "../assets/img/klee.webp";
import agon from "../assets/img/agon.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderBanner = () => {
  const settings = {
    dots: true, // Enable dots navigation
    arrows: true, // Enable previous/next buttons
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 768, // Apply settings below 768px (tablet/phone view)
        settings: {
          slidesToShow: 1, // Show only 1 slide on smaller screens
          centerPadding: "0", // Adjust padding for mobile if needed
        },
      },
    ],
  };

  

  const data = [
    { img: klee },
    { img:  agon},
    { img: piano },
    { img: avatar },
    { img: banner },

  ];

  return (
    <section className="slider-container" >
      {/* <h1 className="slider-title">My Gallery</h1> */}
      <Slider {...settings} >
        {data.map((d, index) => (
          <div key={index} className="card">
            <img className="slider-img" src={d.img} alt={`Slide ${index}`} />
            <a href="/gallery">
              <button class="slider-button">Enter Gallery</button>
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};
