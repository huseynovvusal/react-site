import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import image1 from "../img/first.png";
import image2 from "../img/second.png";
import image3 from "../img/third.png";
import image4 from "../img/last.png";

export default class Projects extends Component {
  state = {
    slides: [image1, image2, image3, image4],
  };

  render() {
    return (
      <div className="projects">
        <div>
          <h3>Projects</h3>
          <p>My last projects</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          className="swipper"
          spaceBetween={0}
          slidesPerView={1}
        >
          {this.state.slides.map((image, key) => {
            return (
              <SwiperSlide key={key} className="slide">
                <img alt="slide images" src={image} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }
}
