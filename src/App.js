import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
//  git option after creating project in github, choose below option
//  …or push an existing repository from the command line
//git remote add origin https://github.com/sashisukr7/modern-react-coding-practice.git
//git branch -M main
//git push -u origin main

//router 6 
function App() {
  const[running,setRunning]=useState(false)
const [count,setCount]=useState(100);
const handlerClick=()=>{
setRunning(!running)
}
useEffect(()=>{
  console.log("a",count,running);
let timer
if(running){
timer=setInterval(()=>{
setCount(prev=>prev-1)
},1000)
}
return ()=>{
  console.log("b",count);
  clearInterval(timer)
}
},[])
return (
<div className="App">
<button type="button" onClick={handlerClick} >{running?"pause":"start"}</button>
{count}
</div>
);
}

export default App;
