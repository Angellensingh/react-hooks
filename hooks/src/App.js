
import './App.css';
import { useEffect, useMemo, useReducer, useRef, useState,useLayoutEffect, useCallback } from 'react';
import Header from './Header';
//USEREF
// function App() {
//   const [value,setValue]=useState(1)
//   const count=useRef(0)
//   console.log(count)
//   useEffect(()=>{
//     count.current=count.current + 1;
  
//   })
//  function increment()
//  {
//   setValue(value+1)
//  }
//  function decrement()
//  {
//   setValue(value-1)
//  }

//   return (
//     <div>
//     <button onClick={decrement}>-1</button>
//     <h1>{value}</h1>
//     <button onClick={increment}>+1</button>
//     <h2>render count:{count.current}</h2>
//    </div>
//   );
// }

// export default App;


//USE STATE
// import { useState } from 'react';

// function App() {
//   const [color,setColor]=useState("red")
//   const changeColor=()=>{
//     setColor("blue")
//   }

//   return (
//    <>
   
//    <h1>my favorite color is {color}</h1>
//    <button onClick={changeColor} >blue</button>

//    </>
//   );
// }


// import { useState } from 'react';

// function App() {
//   const [car,setCar]=useState({
//     brand:"ferrari",
//     model:"roma",
//     year:"2023",
//     color:"red"
//   })
//   const changeColor=()=>{
//     setCar((car)=>{
//       return{...car,color:"blue"}
//     })
//   }

//   return (
//    <>
   
//    <h1>my favorite color is {car.color}</h1>
//    <h2>it is a {car.brand}</h2>
//    <button onClick={changeColor} >blue</button>

//    </>
//   );
// }

// export default App;

// USEEFFECT:

// function App() {
//   const [count,setCount]=useState(0)
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(count+1)
//     },2000)
//   },[])

//   return (
//    <>
   
//    <h1>{count}</h1>
 

//    </>
//   );
// }

// export default App;

//USEMEMO

// function App(){
//   const [number,setNumber]=useState(0)
//   const [counter,setCounter]=useState(0)

//   function cubesum(num){
//     console.log("calculation done!")
//     return Math.pow(num,3)
//   }

//   const result=useMemo(()=>{return (cubesum(number))},[number])
//   function increment(){
//     setCounter(counter+1)
//   }

// return(
//   <>
//   <input type="number"  onChange={(e)=>{setNumber(e.target.value)}} />
//   <h1>Cube of the Number is:{result}</h1>
//  <h2>counter:{counter}</h2>
//   <button onClick={increment}>couter++</button>
//  
//   </>
// ) 
// }
// export default App;

// USE REDUCER

function App(){
  const initialState = {count:0}
  const reducer = (state,action)=>{
    switch(action.type){
      case 'increase':{
        return{count:state.count+1}
      }
      case 'decrease':{
        return{count:state.count-1}
      }
      default:{
        return state
      }
    }
  }
 const [state,dispatch] = useReducer(reducer,initialState)
 return(
  <>
  <h1>{state.count}</h1>
  <button onClick={()=>dispatch({type:'decrease'})}>decrease</button>
  <button onClick={()=>dispatch({type:'increase'})}>increase</button>
  </>
 )
}
export default App;

//USE LAYOUTEFFECT HOOK
// function App() {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log('useEffect: Value changed');

//   }, [value]);

//   useLayoutEffect(() => {
//     console.log('useLayoutEffect: Updating input value');
//   }, [value]);

//   return (
//     <div>
//       <input type="text" value={value} readOnly />
//       <button onClick={() => setValue(value + 1)}>Increment</button>
//       <p>Value: {value}</p>
//     </div>
//   );
// };
// export default App;

//USE CALLBACK

// function App(){
//   const [count,setCount]=useState(0)
//   const newFn=useCallback(()=>{},[])
//   return(
//     <>
//     <Header newFn={newFn}/>
//     <h1>{count}</h1>
//     <button onClick={()=>setCount(count+1)}>click</button>
//     </>
//   )
// }
// export default App;