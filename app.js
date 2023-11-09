const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const routes = require('./controller/routes');
const cors = require('cors');

const app = express();

//configures cors
app.use(cors());

app.use(bodyParser.json());

app.use('/', routes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

