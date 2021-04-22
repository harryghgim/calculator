import React, { useEffect, useState } from 'react';
import './App.scss'


const Calculator = () => {

  const OPERATORS = ['/', '*', '-', '+']

  const [str, setStr] = useState('0')
  const [result, setResult] = useState('0')
  const [hasDot, setHasDot] = useState(false)
  const [operator, setOperator] = useState(null)

  // useEffect(() => {
  //   document.getElementById('display').textContent = str
  // })


  function handleDot(e) {
    const lastChar = str[str.length - 1]
    const DOT = OPERATORS.includes(lastChar) ? '0.' : '.'

    if (hasDot) {
      return false
    }
    
    setStr(prevStr => prevStr + DOT)
    setHasDot(true)
  }
  
  function handleNumber(e) {
    const strNum = e.target.textContent
    const condition = str === '0' || str === result

    if (condition) {
      setStr(strNum)
    }
    else {
      setStr(prevStr => prevStr + strNum)
    }
  }

  function handleEqual(e) {    
    const trimmed = str.trim()
    const lastIdx = trimmed.length - 1
    const condition = OPERATORS.some((op) => trimmed.indexOf(op) === lastIdx)
    // TODO

    if (condition) {
      return false
    }
    else {
      setResult(`${eval(str)}`)
      setStr(`${eval(str)}`)
      setHasDot(false)
    }

  }

  function handleAC(e) {
    setStr('0')
    setResult('0')
    setHasDot(false)
  }

   const handleOperation = (e) => {
      const OPR = e.target.textContent  
      
      setOperator(OPR)
      setStr(prevStr => prevStr + OPR)

    }

  console.log(str)
  console.log(operator)

  return (
    <div id="wrapper">
      <div id="display-wrapper">
        <div><span id="result">{result}</span></div>
        <div><span id="display">{str}</span></div>
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
        <button onClick={handleOperation} id="divide">/</button>
        <button onClick={handleOperation} id="multiply">*</button>
        <button onClick={handleOperation} id="add">+</button>
        <button onClick={handleOperation} id="subtract">-</button>
        <button onClick={handleEqual} id="equals">=</button>
        <button onClick={handleAC} id="clear">AC</button>
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
