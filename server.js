'use strict';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));
app.get('/hello',(request,response)=>{
    response.status(200).send('Hello!');
})
app.get('/data', (request, response) => {
    let airplanes = {
      departure: Date.now(),
      canFly: true,
      pilot: 'Well Trained',
    };
    response.status(200).json(airplanes);
  });
app.get ('*',(request,response)=> response.status(400).send('Error 404:Page not found.'))
app.listen(PORT, ()=> console.log(`listening to port ${PORT}`));