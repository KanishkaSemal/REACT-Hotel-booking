import React from "react";
import navCSS from './../Components/Nav.module.css'

function Nav() {
  return(
    <div className={navCSS.header}>
    <div class="flex">
        <a href="#home" class="logo">Hotel And Resorts</a>
        <a href="#availability" class="btn">chek availability</a>
        <div id="menu-btn" class="fas fa-bars"></div>
    </div>      

      

      <ul class="navbar">
        <a href="#">home</a>
        <a href="#">about</a>
        <a href="#">reservation</a>
        <a href="#">gallery</a>
        <a href="#">contact</a>
        <a href="#">reviews</a>
      </ul>
      </div>
   
  )
}

export default Nav