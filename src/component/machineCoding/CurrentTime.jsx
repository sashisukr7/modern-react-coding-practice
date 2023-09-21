import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    let timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <div>{currentTime}</div>;
};
export default App;
