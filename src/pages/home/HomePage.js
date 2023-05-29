import HeroSection from './../../components/HeroSection';
import React from 'react';
import Cards from './../../components/Cards';
import "./HomePage.css"
import face from './../../assets/facebooklogo.png'
import insta from './../../assets/instagramlogo.png'
import linkedin from './../../assets/linkedinlogo.png'
import twitter from './../../assets/twitterlogo.png'


const Homepage = () => {
  return (
    <>
    <HeroSection />
    <Cards />
    <footer className="footer">
      <div className="sb__footer section_padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Recursos Populares</h4>
            <a href="/employer">
              <p>Relatórios</p>
            </a>
            <a href="/healthplan">
              <p>Gráficos</p>
            </a>
            <a href="/individual">
              <p>Análises</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Clientes</h4>
            <a href="/resource">
              <p>Suporte ao cliente</p>
            </a>
            <a href="/recourse">
              <p>Grupo de clientes</p>
            </a>
            <a href="/recourse">
              <p>STV</p>
            </a>
          </div>

          <div className="sb__footer-links_div">
            <h4>Parceiros</h4>
            <a href="/employer">
              <p>Todos os Parceiros</p>
            </a>
          </div>

          <div className="sb__footer-links_div">
            <h4>Empresa</h4>
            <a href="/about">
              <p>Sobre nós</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/carrer">
              <p>Carrer</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>

          <div className="sb__footer-links_div">
            <h4>Mídias Sociais</h4>
            <div className="socialmedia">
              <a href="/facebook"><p><img src={face} alt=""/></p></a>
              <a href="/instagram"><p><img src={insta} alt=""/></p></a>
              <a href="/linkedin"><p><img src={linkedin} alt=""/></p></a>
              <a href="/twitter"><p><img src={twitter} alt=""/></p></a>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              @{new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms"><div><p>Termos & Condições</p></div></a>
            <a href="/privacy"><div><p>Privacidade</p></div></a>
            <a href="/security"><div><p>Segurança</p></div></a>
            <a href="/cookie"><div><p>Cookie e Declarações</p></div></a>
          </div>
        </div>
      </div>
    </footer>
    </>

    
  );
};

export default Homepage;
