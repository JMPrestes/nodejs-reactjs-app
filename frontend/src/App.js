import React from 'react';

import './global.css';

import Routes from './routes';
//Componente - Função que retorna um html

function App() {
  //Variáveis não são alteradas diretamente no React
  //Método useState retorna um array [valor, funcaoDeAtualizacao]
  return (
    <Routes/>
  );
}

export default App;
