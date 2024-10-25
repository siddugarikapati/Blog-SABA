const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user-routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 1234;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Database connected successfully'))
    .catch((error) => console.error('Database connection error:', error));

// Routes
app.use('/signup', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`);
});


