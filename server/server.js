const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const robotRoutes = require('./routes/robot');

const app = express();
const PORT = process.env.PORT || 4444;

mongoose.connect('mongodb://mongo:27017/robot');

app.use(cors());
app.use(express.json());
app.use('/api/robot', robotRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});