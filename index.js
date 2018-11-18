import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/nemRaRoute';
var express = require('express');
//import express from 'express;

const app = express();
const PORT = 3000;

routes(app);

// setup mongoDB
mongoose.Promise = global.Promise;

app.get('/', (req, res) => {
  res.send('Node and express server started')
});

app.listen(PORT, () => {
  console.log(`listening on //localhost: ${PORT}`);
});
