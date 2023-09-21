import "./styles.css";
import React, { useState } from "react";
export default function App() {
const [name, setName] = useState("");
const [data, setData] = useState([]);
const nameHandler = (event) => {
setName(event.target.value);
};
const submitHandler = (event) => {
event.preventDefault();
setData((prev) => [...prev, name]);
setName("");
};
const removeNameHandler = (id) => {
setData((prev) => prev.filter((_, index) => id !== index));
};


//setData((prev)=>prev.filter((todo)=>id!==todo))
return (
<div className="App">
<form onSubmit={submitHandler}>
<input value={name} type="text" onChange={nameHandler} />
{data.map((todo, key) => (
<h1 key={key} onClick={removeNameHandler.bind(null, key)}>
{todo}
</h1>
))}
</form>
</div>
);
}
