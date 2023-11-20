import React from 'react';
import './Services.css';
import Resume from '../../Components/Services/resume 0.2.pdf'

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
    <div className="cards">
    i am rifht side
    </div>
    </div>
  )
}

export default Services;