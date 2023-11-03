const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://projectprofile:zsedcx18891889@profiledb.nknz4f7.mongodb.net/', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});