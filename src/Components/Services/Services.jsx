import React from 'react';
import './Services.css';
import Resume from '../../Components/Services/resume 0.2.pdf'
import Cards from '../Cards/Cards';
import Heartemoji from '../../img/heartemoji.png'
import Glasess from '../../img/glasses.png'
import Humble from '../../img/humble.png'
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
      <div className='cards'>
        <div style={
          {left : '18rem'}}
          >
          <Cards
            emoji={Heartemoji}
            heading={'Design'}
            details={"Figma, Adobe Xd , PhotoShop , Illustrator "}
          />
        </div>
        <div style={{
          left : '2rem',
          top:'12rem'
        }}>
        <Cards
        emoji={Glasess}
        heading={'Programming'}
        details={'JavaScript ,HTML ,CSS ,Python ,Java ,DSA'}
        />
        </div>
        <div style={{
          top: '20rem',
          left: '21rem'
        }}>
        <Cards
        emoji={Humble}
        heading={'UI/UX'}
        details={'Figma, Adobe Xd , PhotoShop , Illustrator ,Filmaura '}
        />
        </div>
        {/*<div style={{
          left:'-5rem',
          top:'-8rem'
        }}>
        <Cards
        emoji={Heartemoji}
            heading={'Design'}
            details={"Figma, Adobe Xd , PhotoShop , Illustrator"}
        />
      </div>*/}
      </div>
    </div>
  )
}

export default Services;