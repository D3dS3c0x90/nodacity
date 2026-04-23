const User = require('../models/User');

// GET all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find().select('email name age');
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// CREATE user
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,      // user id from URL
      {name, email},      // new data
      { new: true }       // return updated user
    );

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.send('User deleted');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
