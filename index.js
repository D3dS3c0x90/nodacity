require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// connect database
connectDB();

const PORT = process.env.PORT;

app.use(express.json()); // to read JSON body

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
