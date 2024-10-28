import {useState}  from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)

  const addValue=()=>{
    setCounter(counter+1)
  }
  const removeValue=()=>{
    counter=counter-1;
    setCounter(counter);
  }


  
  return (
    <>
    
      <h1>Vite + React</h1>
      <h2>Counter value: {counter}</h2> 
    
      <button onClick={addValue}>Add Value</button>
      <br></br>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
