require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('./database'); // Connect to DB
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));