const express = require('express')

//create server
const app = express()

//create route
app.get('/', (request, response) => {
  response.send('Hello World')
})

//start server
app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'))