const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const userRoutes = require('./controller/routes');
const cors = require('cors');
const app = express();

// Configures cors
app.use(cors());

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
