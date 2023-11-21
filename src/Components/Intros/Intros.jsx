import React from 'react'
import './Intros.css'
import Github from '../../img/github.png';
import Linkdin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Crown from '../../img/crown.png';
import Thumbup from '../../img/thumbup.png';
import Glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';



const Intros = () => {
  return (
    <div className="intros">
    <div className="i-left">
    <div className="i-name">
    <span>hey ! i Am</span>
    <span>DIVYANSHU TAILOR</span>
    <span>I am a fontend WEB or APP developer currently iam working on mern stack Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur libero commodi id amet omnis, autem rem ad? Consequatur, impedit repellendus.</span>
    </div>
    <div className="i-button button">Hire Me</div>
    <div className="i-icons">
    <img src={Github} alt="" />
    <img src={Linkdin} alt="" />
    <img src={Instagram} alt="" />
    </div>
    </div>
    <div className="i-right">
    <img src={Vector1} alt="" />
    <img src={Vector2} alt="" />
    <img src={Boy} alt="" />
    <img src={Glassesimoji} alt="" />
    <div style={{
      top : '-4%',
      left: '68%'
    }}>
    <FloatingDiv Image={Crown} text1 = 'Web' text2 = 'Developer'/>
    </div>
    <div style={{
      top : '20.48rem',
      left: '0.7rem'
    }}>
    <FloatingDiv Image={Thumbup} text1 = 'Best Design' text2 = 'Awards'/>
    </div>
    </div>
    </div>
  )
}

export default Intros