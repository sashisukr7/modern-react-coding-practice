import "./styles.css";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (response.ok) {
        const data = await response.json();
        setData(data);
        setError("");
      } else {
        setError(`httpError${response.status}`);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!error ? (
        data?.map((dataElement, index) => <div key={index}>{dataElement.title}</div>)
      ) : (
        <div>{error}</div>
      )}
      <div>ds</div>
    </>
  );
};

export default App;



///or

import "./styles.css";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error(`httpError${response.status}`);
      }
        const data = await response.json();
        console.log("response",response);
        console.log("data",data);

        setData(data);
        setError("");
    
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!error ? (
        data?.map((dataElement, index) => <div key={index}>{dataElement.title}</div>)
      ) : (
        <div>{error}</div>
      )}
      <div>ds</div>
    </>
  );
};

export default App;


///or

import "./styles.css";
import { useEffect, useState } from "react";


const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (response.ok) {
        console.log("ss", response);
        const data=await response.json();
        setData(data);
        setError("");
      } else {
        setError(`httpError${response.status}`);
      }
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!error ? (
        data?.map((dataElement, index) => <div>{dataElement.title}</div>)
      ) : (
        <div>{error}</div>
      )}
      <div>ds</div>
    </>
  );
};

export default App;
