const express = require('express');
const axios = require('axios');
const cors = require('cors')
require('dotenv').config();


const app = express();
const port = process.env.port

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors())
// Define a route to fetch data from the public API
app.get('/api/data', async (req, res) => {
  try {
    // Fetch data from the public API 
    const apiResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = apiResponse.data;

    // Send the  data to the client
    res.json(data);
    // console.log(data)
  } catch (error) {
    // Handle errors
    // console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
