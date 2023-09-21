import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (response.status === 200) {
        console.log("ss", response);
        setData(response.data);
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

//
axios.post(apiUrl, data, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json', // Set Content-Type to indicate JSON data
      // Add other headers as necessary for your API
    },
  })


  //
  axios({
    method: 'post',
    url: apiUrl,
    data: data, // JavaScript object to be sent as JSON
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json', // Set Content-Type to indicate JSON data
      // Add other headers as necessary for your API
    },
  })
  //
  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({ key1: 'value1', key2: 'value2' }), // JavaScript object serialized as JSON
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json', // Set Content-Type to indicate JSON data
      // Add other headers as necessary for your API
    },
  })