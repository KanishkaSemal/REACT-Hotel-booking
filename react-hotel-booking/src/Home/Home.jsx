import React from "react";
import homeCSS from './../Home/Home.module.css'

function Home() {
  return (
    <div className={`${homeCSS.home} section`}>
      <div className="swiper home-slider">
        <div className="swiper-wrapper">

          <div className="box swiper-slide">
            <div className="flex">
              <h3>Luxurious Rooms</h3>
              <a href="#availability" className="btn">Check Availability</a>
            </div>
          </div>

          <div className="box swiper-slide">
            <div className="flex">
              <h3>Foods and Drinks</h3>
              <a href="#reservation" className="btn">Make a Reservation</a>
            </div>
          </div>

          <div className="box swiper-slide">
            <div className="flex">
              <h3>Luxurious Halls</h3>
              <a href="#contact" className="btn">Contact Us</a>
            </div>
          </div>

        </div>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>

      </div>
    </div>
  );
}

export default Home;
