import React, { useState } from 'react';
import '../css/startPage.css';
import Logo from '../img/logo/Logo-White-sf.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
            Con la mezcla de tecnología avanzada y un enfoque pensado en ti</p>
           <p className='brandText'> <strong> ¡Es hora de cuidar de ti de una manera fácil y divertida! ¡Unete!</strong></p>
        <div className="buttons">
          <button class="button">
          <FontAwesomeIcon className='ArrowButton' icon={faArrowRight} />
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
