const express = require('express');
const routes = require('./routes');

// create server
const app = express();

// Middleware
app.use(express.json());

// Use routes
app.use(routes); // Middleware 1

// start server
app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
