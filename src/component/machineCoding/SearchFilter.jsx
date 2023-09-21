import "./styles.css";
import React,{useState} from 'react';
export default function App() {
let data=["pc","laptop","microphone","apple","mouse"]
const[result,setResult]=useState([])


const handleSearch=(e)=>{
let newData=[...data]
let searchValue=e.target.value
searchValue=searchValue.toLowerCase()
let temp=newData.filter(item=>item.toLowerCase().indexOf(searchValue)!==-1)
setResult(temp)
}
return (

<div className="App">
  <input onChange={handleSearch} placeholder="search something" />
  <ul>
    {result?.map((item, key) => (
      <li key={key}>{item}</li>
    ))}
  </ul>
</div>
);
}


///optimize
import "./styles.css";
import React, { useState } from 'react';

export default function App() {
  const data = ["pc", "laptop", "microphone", "apple", "mouse"];
  const [result, setResult] = useState([]);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setResult(data.filter(item => item.toLowerCase().includes(searchValue)));
  }

  return (
    <div className="App">
      <input onChange={handleSearch} placeholder="search something" />
      <ul>
        {result.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

