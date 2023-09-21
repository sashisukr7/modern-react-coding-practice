import "./styles.css";
import React, { useState, useEffect } from "react";
const START_MINUTE = 1;
const START_SECOND = 0;
export default function App() {
  const [timeleft, setTimeLeft] = useState(START_MINUTE * 60 + START_SECOND);
  const [running, setIsRunning] = useState(false);
  const handlerTimer = () => {
    setIsRunning(!running);
  };
  useEffect(() => {
    let timerid;
    if (running && timeleft > 0) {
      timerid = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timerid);
    };
  }, [running, timeleft]);

  const formateTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };
  return (
    <div className="App">
      <div>{formateTime(timeleft)}</div>
      <button onClick={handlerTimer}>{running ? "pause" : "start"}</button>
    </div>
  );
}
