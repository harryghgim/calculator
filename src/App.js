import React, { useState } from 'react';
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
    let OPR = e.target.textContent

    if (str.slice(-1).match(/[0-9.]/g)) { // last char number or DOT
      setStr(prevStr => prevStr + OPR)
    }
    else {
      // last char operator
      const matched = (operator + OPR).match(/^[/*]-$/g)
      if (matched) {
        OPR = matched[0]
        setStr(str.slice(0,-1) + OPR)
      }
      else if ( operator.length === 1 && operator !== OPR ) {
        setStr(prevStr => prevStr.slice(0,-1) + OPR)
      }
      else if (operator.length === 2 && operator !== OPR ) {
        setStr(str.slice(0,-2) + OPR)
      }
    }

    // run always 
    setOperator(OPR)
    setHasDot(false)

  }



  return (
    <div id="wrapper">
      <div id="display-wrapper">
        <div><span id="result">{result}</span></div>
        <div><span id="display">{str}</span></div>
      </div>
      <div id="numbers">
        <div>
          <Keypad handler={handleNumber} id="seven" number="7"/>
          <Keypad handler={handleNumber} id="eight" number="8"/>
          <Keypad handler={handleNumber} id="nine" number="9"/>
          </div>
        <div>
          <Keypad handler={handleNumber} id="four" number="4"/>
          <Keypad handler={handleNumber} id="five" number="5"/>
          <Keypad handler={handleNumber} id="six" number="6"/>
          </div>
        <div>
          <Keypad handler={handleNumber} id="one" number="1"/>
          <Keypad handler={handleNumber} id="two" number="2"/>
          <Keypad handler={handleNumber} id="three" number="3"/>
        </div>
        <div>
          <Keypad handler={handleNumber} id="zero" number="0"/>
          <Keypad handler={handleDot} id="decimal" number="."/>
        </div>        
      </div>  
      <div id="operators">
        <Keypad handler={handleOperation} id="divide" number="/" />
        <Keypad handler={handleOperation} id="multiply" number="*" />
        <Keypad handler={handleOperation} id="add" number="+" />
        <Keypad handler={handleOperation} id="subtract" number="-" />
        <Keypad handler={handleEqual} id="equals" number="=" />
        <Keypad handler={handleAC} id="clear" number="AC" />
      </div>    
    </div>
  )
}

const Keypad = (props) => {
  return (
    <button onClick={props.handler} id={props.id}>{props.number}</button>
  )
}

function App() {
  return (
      <Calculator />
  );
}

export default App;
