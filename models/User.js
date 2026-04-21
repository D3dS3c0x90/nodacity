const mongoose = require('mongoose');

// create schema (structure)
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // must exist
  },
  email: {
    type: String,
    required: true,
    unique: true, // no duplicate emails
  },
  age: {
    type: Number,
  },
}, {
  timestamps: true // adds createdAt & updatedAt
});

// create model
const User = mongoose.model('User', userSchema);

module.exports = User;