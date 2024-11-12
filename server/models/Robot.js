const mongoose = require('mongoose');

const robotSchema = new mongoose.Schema({
    x: { type: Number, required: true },
    y: { type: Number, required: true },
});

const Robot = mongoose.model('Robot', robotSchema);

module.exports = Robot;