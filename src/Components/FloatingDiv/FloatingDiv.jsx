import React from 'react';
import './FloatingDiv.css';

const FloatingDiv = ({Image,text1,text2}) => {
  return (
    <div className="floatingdiv">
    <img src={Image} alt="" />
    <span>
    {text1}
    <br />
    {text2}
    </span>
    </div>
  )
}

export default FloatingDiv;