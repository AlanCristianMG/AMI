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
        <p className='brandText'>
            Tu compañero en el camino hacia una vida más saludable. 
            Con la mezcla de tecnología avanzada y un enfoque pensado en ti
            <strong> ¡Es hora de cuidar de ti de una manera fácil y divertida! ¡Unete!</strong></p>
        <div className="buttons">
          <button class="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
          </svg>
          <div class="text">
            Unirse
          </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
