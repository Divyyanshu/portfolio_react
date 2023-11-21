import React from 'react';
import './Services.css';
import Resume from '../../Components/Services/resume 0.2.pdf'
import Cards from '../Cards/Cards';
import Heartemoji from '../../img/heartemoji.png'
import Glasess from '../../img/glasses.png'
const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro magnam
          <br />
          consectetur adipisicing elit. Dolor, porro.</span>
        <a href={Resume} download><button className="button s-button">
          Download CV
        </button></a>
      </div>
      /*rightside*/
      <div style={{left : '18rem'}}>
        <div>
          <Cards
            emoji={Heartemoji}
            heading={"Design"}
            details={"Figma, Adobe Xd , PhotoShop , Illustrator"}
          />
        </div>
      </div>
    </div>
  )
}

export default Services;