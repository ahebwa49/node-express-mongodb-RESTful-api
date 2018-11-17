import routes from './src/routes/nemRaRoute';
var express = require('express');
//import express from 'express;

const app = express();
const PORT = 3000;

routes(app);

app.get('/', (req, res) => {
  res.send('Node and express server started')
});

app.listen(PORT, () => {
  console.log(`listening on //localhost: ${PORT}`);
});
