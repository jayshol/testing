// Import express
const express = require('express');
const app = express();

// Define a port to listen on
const PORT = 3000;

// Add a basic route
app.get('/', (req, res) => {
  res.send('Hello, world! The server is up and running and soon will be raising a pr!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

