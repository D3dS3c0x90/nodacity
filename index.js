require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

const User = require('./models/User');

// connect database
connectDB();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/add-user', async (req, res) => {
  try {
    const user = new User({
      name: 'Abdelrahman',
      email: 'abdelrahman@test.com',
      age: 22
    });

    await user.save();

    res.send('User saved!');
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
