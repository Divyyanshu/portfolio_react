import React from 'react'
import './Works.css'
import Facebook from '../../img/Facebook.png';
import Upwork from '../../img/Upwork.png';
import Shopify from '../../img/Shopify.png';
import Amazon from '../../img/amazon.png';
import Fiverr from '../../img/fiverr.png';


const Works = () => {
  return (
    <div className="works">
  {/* left side */}
    <div className="awesome">
    <span>Works For All These</span>
    <span>Brands & Clients</span>
    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro magnam
      <br />
      consectetur adipisicing elit. Dolor, porro.
      <br />
      Lorem ipsum dolor sit amet.
      <br />
      Lorem ipsum dolor sit.enginer jki feed hte the thtm
      </span>
    <button className="button s-button">
      Hire Me
    </button>
  </div>
    {/* left side */}
    <div className="w-right">
    <div className="w-mainCircle">
    <div className="w-secoundCircle">
    <img src={Upwork} alt="" />
    </div>
    <div className="w-secoundCircle">
    <img src={Shopify} alt="" />
    </div>
    <div className="w-secoundCircle">
    <img src={Amazon} alt="" />
    </div>
    <div className="w-secoundCircle">
    <img src={Fiverr} alt="" />
    </div>
    <div className="w-secoundCircle">
    <img src={Facebook} alt="" />
    </div>
    {/* Background Circles */}
    <div className="w-backCircle blueCircle"></div>
    <div className="w-backCircle yellowCircle"></div>
    <div className="w-backCircle redCircle"></div>
    </div>
    </div>
  </div>
  )
}

export default Works