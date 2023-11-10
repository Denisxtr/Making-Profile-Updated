const express = require('express');
const router = express.Router();
const { getUser, getoneUser, createUser, updateUser, deleteUser } = require('./controller');

//gets all users
router.get('/', getUser);
//gets one user by id
router.get('/:id', getoneUser);
//creates user
router.post('/', createUser);
//updates user
router.put('/:id', updateUser);
//deletes user
router.delete('/:id', deleteUser);

module.exports = router;