const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user.js');


// INDEX: show all books in library
router.get('/', async (req, res) => {
    try {
        const user = await User.findById(req.session.user._id);
        const books = user.librarySchema;
        res.render('books/index.ejs', { books, user: req.session.user });
    } catch (error) {
        console.log(error);
        res.send('Error retrieving books'); }});

// NEW: show form to add a new book
router.get('/new', async (req, res) => {
    try {
        if(!req.session.user){res.redirect('/auth/sign-in');

       } else {res.render('books/new.ejs', { userId: req.session.user._id, user: req.session.user })} ;
   
   } catch (error) {
       res.send('Error loading book creation form');
   }
});
   
    
//create a new book request
router.post('/new', async (req, res) => {
    try {
        const newBook = await user.librarySchema.create(req.body);
        res.redirect('/books');
    } catch (error) {
        console.log(error);
        res.send('Error creating book');
    }
});
















module.exports = router;