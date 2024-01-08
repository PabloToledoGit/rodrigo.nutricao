import './App.css';
import React from 'react';
import './reset.css';
import Titulo from './components/titulo/titulo.js';
import Header from './components/header/header.js';
import './rodrigo.svg';
import rodrigoSvg from './rodrigo.svg';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='divmeio'>
      <Titulo />
      <img className='imagemrodrigo' src={rodrigoSvg} alt="" />
      </div>
    </div>
  );
}

export default App;
