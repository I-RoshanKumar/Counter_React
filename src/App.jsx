import {useState}  from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)

  const addValue=()=>{
    if(counter<20){

      setCounter(counter+1)
    }
    else{
      alert("Counter cannot exceed 20");
    }
  }
  const removeValue=()=>{
    if(counter>0){

      counter=counter-1;
      setCounter(counter);
    }else{
      alert("Counter cannot go below 0");
    }
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
