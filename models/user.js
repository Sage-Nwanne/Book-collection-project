const mongoose = require('mongoose');

const librarySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    enum: ['Hardcover', 'audiobook', 'ebook','other']
  },
});


// Define the user schema
const users = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  librarySchema: [librarySchema],

});

const User = mongoose.model('User', users);

module.exports = User;
