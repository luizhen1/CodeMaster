import React from 'react';
import '../login.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';



function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./videos/videozada.mp4' autoPlay loop muted />
      <h1>O PODER DO SUCESSO</h1>
      <p>Está em suas mãos!</p>
      <div className='hero-btns'>
      
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
         
        >
          
          <a><Link to="/trailer">ASSISTA O TRAILER</Link></a>
        </Button>
        
        
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          ENTRE PARA A FAMÍLIA <i className='far fa-play-circle' />
        </Button>


      </div>
    </div>
  );
}

export default HeroSection;