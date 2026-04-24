const bcrypt = require('bcryptjs');
const User = require('../models/User');

const register = async (req, res) => {
  const { email, password } = req.body;

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // save user
  const user = await User.create({
    email,
    password: hashedPassword
  });

  res.json(user);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // check password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.send("Wrong password");
  }

  res.send("Login success");
};

module.exports = { register, login };