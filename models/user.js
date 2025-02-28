const mongoose = require('mongoose');

const librarySchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  type: {
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
