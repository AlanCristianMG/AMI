import React, { useState } from 'react';
import '../css/startPage.css';
import Logo from '../img/logo/Logo-White-sf.png';

function StartPage() {
  const [isRotating, setIsRotating] = useState(false);

  return (
    <div className="app">
      <div className="blur-bg"></div>
      <div className="content">
        <img
          src={Logo}
          alt="Logo"
          className={`logo ${isRotating ? 'rotate' : ''}`}
          onClick={() => {(isRotating)?setIsRotating(false):setIsRotating(true)}}
          
        />
        <h1 className='logoName'>AMI</h1>
        <p className='brandText'></p>
        <div className="buttons">
          <button className="button">Botón 1</button>
          <button className="button">Botón 2</button>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
