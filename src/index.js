const express = require('express');
const app = express();

/**
 * request is all user send (url, parms ...)
 * response is all send answer 
 */
app.get('/', (request, response)=> {
  
  return response.send('hello world ');

});


app.listen(3333);
