import React, { useState } from 'react';

function MyComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = 'https://example.com/api'; // Replace with your API URL

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);

    fetch(apiUrl, {
      method: 'POST',
      body: form,
      headers: {
        // Add any required headers here (e.g., authorization headers)
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data here
        console.log(data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default MyComponent;


//
const apiUrl = 'https://example.com/api'; // Replace with your API URL
const accessToken = 'your-access-token'; // Replace with your actual access token

fetch(apiUrl, {
  method: 'POST',
  body: form,
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json', // Adjust the content type if needed
    // Add other headers as necessary for your API
  },
})


fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({ key1: 'value1', key2: 'value2' }),
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      // Add other headers as necessary for your API
    },
  })
  