import "./styles.css";
import React, { useState,useEffect } from "react";


export default function App() {
const[running,setRunning]=useState(false)
const [count,setCount]=useState(100);
const handlerClick=()=>{
setRunning(!running)
}
useEffect(()=>{
let timer
if(running){
timer=setInterval(()=>{
setCount(prev=>prev-1)
},1000)
}
return ()=>{clearInterval(timer)}
},[running])
return (
<div className="App">
<button type="button" onClick={handlerClick} >{running?"pause":"start"}</button>
{count}
</div>
);
}
