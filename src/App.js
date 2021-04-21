import React from 'react';
import { useState } from 'react';
import './App.scss'

const Calculator = (props) => {
  return (
    <div id="wrapper">
      <div id="display"></div>
      <div id="numbers">
        <div>
          <button id="seven">7</button>
          <button id="eight">8</button>
          <button id="nine">9</button>
          </div>
        <div>
          <button id="four">4</button>
          <button id="five">5</button>
          <button id="sic">6</button>
          </div>
        <div>
          <button id="one">1</button>
          <button id="two">2</button>
          <button id="three">3</button>
        </div>
        <div>
          <button id="zero">0</button>
          <button id="decimal">.</button>
        </div>        
      </div>  
      <div id="operators">
        <button id="divide">/</button>
        <button id="multiply">*</button>
        <button id="add">+</button>
        <button id="subtract">-</button>
        <button id="equals">=</button>
        <button id="clear">AC</button>
      </div>    
    </div>
  )
}

function App() {
  return (
      <Calculator />
  );
}

export default App;
