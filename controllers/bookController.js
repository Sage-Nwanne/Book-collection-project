const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user.js');



// create a new book page
router.get('/new', (req, res) => { res.render('new.ejs')});
//create a new book request
router.post('/new', async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.redirect('/books');
    } catch (error) {
        console.log(error);
        res.send('Error creating book');
    }
});
















module.exports = router;