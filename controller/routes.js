const express = require('express');
const User = require('../models/user.js');
const router = express.Router();

// Create a new user
  router.post('/users', async (req, res) => {
  const { name, email, description, age, hobbie } = req.body;

  try {
    const user = new User({ name, email, description, age, hobbie });
    await user.save();
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
// Get all users
router.get('/users/:id', async (req, res) => {
  try {
    const {id} = req.params
    const users = await User.findById({_id:id});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Update a user
router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, description, age, hobbie } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, { name, email, description, age, hobbie }, { new: true });
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Delete a user
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
module.exports = router;