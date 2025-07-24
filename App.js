import React, { useState } from 'react'

export default function App() {
  const[Count,setCount]=useState(0);
  const EvenHandeler=()=>{
         setCount((Count)=>Count+1)//1+1=2
         setCount((Count)=>Count+1)
         setCount((Count)=>Count+1);//2+1=3
     
  }
  const EvenHandeler1=()=>{
         setCount((Count)=>Count-1);
         setCount((Count)=>Count-1);
         setCount((Count)=>Count-1);
    
  }

  return (
    <div>
  
      <h1>Counter: {Count}</h1>
      <button onClick={EvenHandeler}>+</button>
       <button onClick={EvenHandeler1}>-</button>

    </div>
  )
}
