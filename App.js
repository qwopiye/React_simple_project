import React, { useState } from 'react'
// // import STATE from './componens/state.js'
// import CONDITION_RANGERING from './CONDITION_RANDERING/index.js'
// import CONDITION_RANGRING from './CONDITION_RANDERING index.js'
// import HOOKS_USES1 from './HOOKS_USES/index2'
// import HOOKS_USES2 from './HOOKS_USES/index1'
// import HOOKS_USES from './HOOKS_USES/index1'
// import HOOKS_USES from './HOOKS_USES/index2'
export default function App() {
  const[Count,setCount]=useState(0);
  const EvenHandeler=()=>{
        // setCount((Count)=>Count+1)//1+1=2
        // setCount((Count)=>Count+1)
        //  setCount((Count)=>Count+1);//2+1=3
         setCount(Count+1)
  }
  const EvenHandeler1=()=>{
        // setCount((Count)=>Count-1);
        // setCount((Count)=>Count-1);
        // setCount((Count)=>Count-1);
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
