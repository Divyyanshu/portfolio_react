import React from 'react';
import './Portfolio.css';
import {Swiper , SwiperSlide} from 'swiper/react';
import Sidebar from '../../img/sidebar.png'

const Portfolio = () => {
  return (
    <div className="portfolio">
    <span>Recent Projects</span>
    <span>Protfolio</span>
    <Swiper>
    <SwiperSlide>
    <img src={Sidebar} alt="" />
    </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Portfolio;