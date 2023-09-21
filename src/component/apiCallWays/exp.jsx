// ExampleComponent.js
import React, { useEffect, useState } from 'react';
import axios from './axios-config'; // Import the Axios instance

async function ExampleComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define an asynchronous function to make the API request
    async function fetchData() {
      try {
        const response = await axios.get('/endpoint'); // Use await here
        setData(response);
      } catch (error) {
        console.error('API Error:', error);
      }
    }

    // Call the async function
    fetchData();
  }, []);

  return (
    <div>
      {/* Display data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default ExampleComponent;
