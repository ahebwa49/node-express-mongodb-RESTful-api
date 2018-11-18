var express = require('express');
import routes from './src/routes/nemRaRoute';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/NEMRAdb', {
  useMongoClient: true
});

//setup bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

//serving static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Node and express server started')
});

app.listen(port, () => {
  console.log(`listening on //localhost: ${port}`);
});
