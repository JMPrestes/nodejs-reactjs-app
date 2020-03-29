import React from 'react';
//Comunicação entre React e o Browser
import ReactDOM from 'react-dom';
//Importação  do componente App
import App from './App';


//Método para exibir os dados do componente App na tela, dentro da div com ID root
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

