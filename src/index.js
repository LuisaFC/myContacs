const express = require('express');
const routes = require('./routes');

// create server
const app = express();

// Use routes
app.use(routes);

// start server
app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
