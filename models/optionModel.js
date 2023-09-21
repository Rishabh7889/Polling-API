const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: String,
  votes: Number,
});

module.exports = mongoose.model('Option', optionSchema);
