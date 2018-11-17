import routes from './src/routes/nemRaRoutes';
var express = require('express');
//import express from 'express;

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  res.send('Node and express server started')
});

app.listen(PORT, () => {
  console.log(`listening on //localhost: ${PORT}`);
});
