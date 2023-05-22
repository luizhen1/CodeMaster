import HeroSection from './../../components/HeroSection';
import React from 'react';
import Cards from './../../components/Cards';
import "./HomePage.css"


const Homepage = () => {
  return (
    <>
    <HeroSection />
    <Cards />
    <footer className="footer">
      <p>&copy; 2023 Todos os direitos reservados.</p>
    </footer>
    </>

    
  );
};

export default Homepage;
