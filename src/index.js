const express = require('express');
const routes = require('./routes');
require('express-async-errors');

// create server
const app = express();

// Middleware
app.use(express.json());

// Use routes
app.use(routes); // Middleware 1

// Middleware 2
app.use((error, request, response, next) => {
  console.log('### ERROR HANDLER ###');
  console.log(error);
  response.sendStatus(500);
});

// start server
app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
