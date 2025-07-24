import React, { useState } from 'react'
/
export default function App() {
  const[Count,setCount]=useState(0);
  const EvenHandeler=()=>{

         setCount(Count+1)
  }
  const EvenHandeler1=()=>{
  
        setCount(Count-1);
  }

  return (
    <div>
  
      <h1>Counter: {Count}</h1>
      <button onClick={EvenHandeler}>+</button>
       <button onClick={EvenHandeler1}>-</button>

    </div>
  )
}
