import React, { useState } from "react";
import homeCSS from './../Home/Home.module.css';

function Home() {
  const [formData, setFormData] = useState({
    check_in: '',
    check_out: '',
    adults: 1,
    children: 0,
    rooms: 1
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`${homeCSS.home} section`}>
      <div className="swiper home-slider">
        <div className="swiper-wrapper">
          <div className="box1">
            <img src="/images/home-img-1.jpg" alt="luxurious room" />
            <a href="#home" className="logo2">luxurious rooms</a>
            <a href="#availability" className="btn">check availability</a>
          </div>
        </div>
      </div>

      <section id="availability" className="availability">
        <form action="" method="post">
          <div className="flex">
            <div className="box">
              <p>check in <span>*</span></p>
              <input 
                type="date" 
                name="check_in" 
                className="input" 
                value={formData.check_in} 
                onChange={handleChange} 
                required
              />
            </div>
            <div className="box">
              <p>check out <span>*</span></p>
              <input 
                type="date" 
                name="check_out" 
                className="input" 
                value={formData.check_out} 
                onChange={handleChange} 
                required
              />
            </div>
            <div className="box">
              <p>adults <span>*</span></p>
              <select 
                name="adults" 
                className="input" 
                value={formData.adults} 
                onChange={handleChange} 
                required
              >
                <option value="1">1 adult</option>
                <option value="2">2 adults</option>
                <option value="3">3 adults</option>
                <option value="4">4 adults</option>
                <option value="5">5 adults</option>
                <option value="6">6 adults</option>
              </select>
            </div>
            <div className="box">
              <p>children <span>*</span></p>
              <select 
                name="children" 
                className="input" 
                value={formData.children} 
                onChange={handleChange} 
                required
              >
                <option value="0">0 child</option>
                <option value="1">1 child</option>
                <option value="2">2 child</option>
                <option value="3">3 child</option>
                <option value="4">4 child</option>
                <option value="5">5 child</option>
              </select>
            </div>
            <div className="box">
              <p>rooms <span>*</span></p>
              <select 
                name="rooms" 
                className="input" 
                value={formData.rooms} 
                onChange={handleChange} 
                required
              >
                <option value="1">1 room</option>
                <option value="2">2 rooms</option>
                <option value="3">3 rooms</option>
                <option value="4">4 rooms</option>
                <option value="5">5 rooms</option>
                <option value="6">6 rooms</option>
              </select>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Home;
