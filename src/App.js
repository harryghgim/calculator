import React from 'react';
import { useState } from 'react';
import './App.scss'


const Calculator = () => {
  const [str, setStr] = useState('0')
  const [result, setResult] = useState('Change me')

  // const [state, setState] = useState({
  //   str: '0',
  //   result: 'Change me'
  // })

  function handleDot(e) {
    const DOT = '.'

    if (str.indexOf(DOT) > -1) {
      return false
    }

    return setStr(str + DOT)
  }

  function handleNumber(e) {
    const strNum = e.target.textContent

    if (str === '0') {
      return setStr(strNum)
    }
    return setStr(str + strNum)
  }

  function handleEqual(e) {    
    const lastIdx = str.length - 1
    const condition = str.indexOf('+') === lastIdx || 
                      str.indexOf('-') === lastIdx ||
                      str.indexOf('*') === lastIdx ||
                      str.indexOf('/') === lastIdx
    if (condition) {
      return false
    }
    return setResult(eval(str))
  }

  function handleAC(e) {
    return setStr('0')
  }

  const handleDiv = (e) => {
    const DIV = '/'
    if (str.indexOf(DIV) === str.length - 1) {
      return false
    }
    return setStr(`${str} ${DIV}`)
  }
  const handleMul = (e) => {
    const MUL = '*'
    if (str.indexOf(MUL) === str.length - 1) {
      return false
    }
    return setStr(`${str} ${MUL}`)
  }
  const handleSub = (e) => { 
    const SUB = '-'
    if (str.indexOf(SUB) === str.length - 1) {
      return false
    }
    return setStr(`${str} ${SUB}`)
  }
  const handleAdd = (e) => {
    const ADD = '+'
    if (str.indexOf(ADD) === str.length - 1) {
      return false
    }
    return setStr(`${str} ${ADD}`)
  }

  return (
    <div id="wrapper">
      <div id="display-wrapper">
        <div><span id="display">{result}</span></div>
        <div><span id="type">{str}</span></div>
      </div>
      <div id="numbers">
        <div>
          <button onClick={handleNumber} id="seven">7</button>
          <button onClick={handleNumber} id="eight">8</button>
          <button onClick={handleNumber} id="nine">9</button>
          </div>
        <div>
          <button onClick={handleNumber} id="four">4</button>
          <button onClick={handleNumber} id="five">5</button>
          <button onClick={handleNumber} id="six">6</button>
          </div>
        <div>
          <button onClick={handleNumber} id="one">1</button>
          <button onClick={handleNumber} id="two">2</button>
          <button onClick={handleNumber} id="three">3</button>
        </div>
        <div>
          <button onClick={handleNumber} id="zero">0</button>
          <button onClick={handleDot} id="decimal">.</button>
        </div>        
      </div>  
      <div id="operators">
        <button onClick={handleDiv} id="divide">/</button>
        <button onClick={handleMul} id="multiply">*</button>
        <button onClick={handleAdd} id="add">+</button>
        <button onClick={handleSub} id="subtract">-</button>
        <button onClick={handleEqual} id="equals">=</button>
        <button onClick={() => setStr('0')} id="clear">AC</button>
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
