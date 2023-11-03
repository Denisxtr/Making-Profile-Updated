const User = require('./models/user.js');

// Create a new user
const newUser = new User({
  name: 'John Doe',
  email: 'johndoe@example.com',
});

newUser.save()
  .then(() => console.log('User created'))
  .catch((err) => console.log(err));

