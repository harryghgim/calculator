import React, { useEffect, useState } from 'react';
import './App.scss'


const Calculator = () => {

  const OPERATORS = ['/', '*', '-', '+']

  const [str, setStr] = useState('0')
  const [result, setResult] = useState('0')
  const [hasDot, setHasDot] = useState(false)
  const [operator, setOperator] = useState(null)

  function handleDot(e) {
    const lastChar = str.slice(-1)
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
    const condition = OPERATORS.some((op) => str.endsWith(op))

    // TODO

    if (condition) {
      return false
    }
    
    setResult(`${eval(str)}`)
    setStr(`${eval(str)}`)
    setOperator(null)
    setHasDot(false)
  }

  function handleAC(e) {
    setStr('0')
    setResult('0')
    setHasDot(false)
    setOperator(null)
  }

  const handleOperation = (e) => {
    const OPR = e.target.textContent
    const regex = /[0-9.]/g

    if (regex.test(str.slice(-1))) { // last char number or DOT
      setOperator(OPR)
      setStr(prevStr => prevStr + OPR)
      setHasDot(false)
      return false
    } 

    // last char operator
    const matched = (operator + OPR).match(/^[/*]-$/g)
    if (matched) {
      setOperator(matched[0])
      const newStr = str.slice(0,-1) + matched[0]
      setStr(newStr)
      setHasDot(false)
      return false
    }

    if ( operator.length === 1 && operator !== OPR ) {
      setOperator(OPR)
      setStr(prevStr => prevStr.slice(0,-1) + OPR)
      setHasDot(false)
      return false
    }

    if (operator.length === 2 && operator !== OPR ) {
      setOperator(OPR)
      const newStr = str.slice(0,-2) + OPR
      setStr(newStr)
      setHasDot(false)
      return false
    }
  }
    

  console.log(str)
  console.log(operator)
  console.log(result)

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
