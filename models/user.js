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



  




});


// Define the user schema
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  book: {
    type: String,
    required: true,
  },

});

const User = mongoose.model('User', userSchema);

module.exports = User;
