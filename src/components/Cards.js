import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Veja nossos principais serviços!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='videos/dashboard1.png'
              text='Explore os principais estatísticas financeiros de sua empresa.'
              label='Balanço Mensal'
              path='/services'
            />
            <CardItem
              src='videos/dashboard2.png'
              text='Gerencie seus clientes com a melhor ferramenta do Brasil.'
              label='Gestão de Clientes'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='videos/dashboard3.png'
              text='Principais relatórios para a melhor tomada de decisão.'
              label='Relatórios'
              path='/services'
            />
            <CardItem
              src='videos/logintela.png'
              text='Com uma interface simples e rapida para uma melhor experiência.'
              label='Interface'
              path='/products'
            />
            <CardItem
              src='videos/dashboard4.png'
              text='Relatórios geográficos precisos sobre suas vendas.'
              label='Relações Internacionais'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;