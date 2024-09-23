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
          <input type="submit" value="check availability" name="check" className="btn"></input>
        </form>
      </section>




      <section className="about" id="about">
      <div className="row">
        <div className="image">
          <img src="images/about-img-1.jpg" alt="" />
        </div>
        <div className="content">
          <h3>Best Staff</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum maxime alias aliquid temporibus unde?</p>
          <a href="#reservation" className="btn1">
            Make a reservation
          </a>
        </div>
      </div>

      <div className="row revers">
        <div className="image">
          <img src="images/about-img-2.jpg" alt="" />
        </div>
        <div className="content">
          <h3>Best foods</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum maxime alias aliquid temporibus unde?</p>
          <a href="#contact" className="btn1">
            contact us
          </a>
        </div>
      </div>

      <div className="row ">
        <div className="image">
          <img src="images/about-img-3.jpg" alt="" />
        </div>
        <div className="content">
          <h3>swimming pool</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum maxime alias aliquid temporibus unde?</p>
          <a href="#availability" className="btn1">
            check availability
          </a>
        </div>
      </div>
    </section>




    <section className="services">
      <div className="box-container">
        <div className="box">
          <img src="images/icon-1.png" alt="" />
          <h3>Food & Drinks</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sunt?</p>
        </div>

        <div className="box">
          <img src="images/icon-2.png" alt="" />
          <h3>Outdoor Dining</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sunt?</p>
        </div>

        <div className="box">
          <img src="images/icon-3.png" alt="" />
          <h3>Beach View</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sunt?</p>
        </div>

        <div className="box">
          <img src="images/icon-4.png" alt="" />
          <h3>Decorations</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sunt?</p>
        </div>

        <div className="box">
          <img src="images/icon-5.png" alt="" />
          <h3>Swimming Pool</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sunt?</p>
        </div>

        <div className="box">
          <img src="images/icon-6.png" alt="" />
          <h3>Resort Beach</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sunt?</p>
        </div>
      </div>
    </section>
   
    
 
 <section class="reservation" id="reservation">
  
    <form action="" method="post">
 <h3>make a reservation</h3>
 <div class="flex">
 <div class="box">
 <p>check in <span>*</span></p>
 <input type="date" name="check_in" class="input" required></input>
 </div>
 <div class="box">
 <p>check out <span>*</span></p>
 <input type="date" name="check_out" class="input" required></input>
 </div>
 <div class="box">
 <p>adults <span>*</span></p>
 <select name="adults" class="input" required>
 <option value="1">1 adult</option>
 <option value="2">2 adults</option>
 <option value="3">3 adults</option>
 <option value="4">4 adults</option>
 <option value="5">5 adults</option>
 <option value="6">6 adults</option>
 </select>
 </div>
 <div class="box">
 <p>childs <span>*</span></p>
 <select name="childs" class="input" required>
 <option value="-">0 child</option>
 <option value="1">1 child</option>
 <option value="2">2 childs</option>
 <option value="3">3 childs</option>
 <option value="4">4 childs</option>
 <option value="5">5 childs</option>
 <option value="6">6 childs</option>
 </select>
 </div>
 <div class="box">
 <p>rooms <span>*</span></p>
 <select name="rooms" class="input" required>
 <option value="1">1 room</option>
 <option value="2">2 rooms</option>
 <option value="3">3 rooms</option>
 <option value="4">4 rooms</option>
 <option value="5">5 rooms</option>
 <option value="6">6 rooms</option>
 </select>
 </div>
 </div>
 <input type="submit" value="check availability" name="check" class="btn"></input>
 </form>
 </section>

 



 

    
    
    </div>
  );
}


export default Home;
