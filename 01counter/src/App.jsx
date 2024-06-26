import './App.css'
import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(4)
  //let counter = 5

  const addValue = () => {
    // setCounter((prevCounter) => prevCounter + 1)
    // setCounter((prevCounter) => prevCounter + 1)
    // setCounter((prevCounter) => prevCounter + 1)
    // setCounter((prevCounter) => prevCounter + 1)
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
    // setCounter(counter - 1)
    // setCounter(counter - 1)
    // setCounter(counter - 1)
  }

  return (
    <>
      <h1>React Counter Project </h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>Add Value</button> {" "}
      <button onClick={removeValue} >Remove Value</button>
    </>
  )
}

export default App
