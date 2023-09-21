import React, { useState } from 'react';
import './styles.css'; // Import your CSS file here


const CircleGenerator = () => {
const [circles, setCircles] = useState([]);


const generateRandomColor = () => {
const letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
};


const addCircle = () => {
const newCircle = {
id: Date.now(),
color: generateRandomColor(),
};
setCircles([...circles, newCircle]);
};


const changeCircleColor = (id) => {
setCircles((prevCircles) =>
prevCircles.map((circle) =>
circle.id === id ? { ...circle, color: generateRandomColor() } : circle
)
);
};


return (
<div>
<button onClick={addCircle}>Add Circle</button>
<div className="circle-container">
{circles.map((circle) => (
<div
key={circle.id}
className="circle"
style={{ backgroundColor: circle.color }}
onClick={() => changeCircleColor(circle.id)}
></div>
))}
</div>
</div>
);
};


export default CircleGenerator;
