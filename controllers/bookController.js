const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user.js');


// INDEX: show all books in library
router.get('/', async (req, res) => {
    try {
        if (!req.session.user) { 
            return res.redirect('/auth/sign-in');  // Redirect if user is not logged in
        }

        const user = await User.findById(req.session.user._id);

        if (!user) {
            return res.send('User not found');
        }

        const books = user.librarySchema;  // Fetch books from user's librarySchema
        res.render('books/index.ejs', { books, user: user });
    } catch (error) {
        console.log(error);
        res.send('Error retrieving books');
    }
});

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
router.post('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.librarySchema.push(req.body);
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/books`);
    } catch (error) {
        console.log(error);
        res.send('Error creating book');
    }
});


// SHOW: show details of a specific book
router.get('/:bookId', async (req, res) => {
    try {
        if (!req.session.user) {
            return res.redirect('/auth/sign-in');
        }
        const user = await User.findById(req.session.user._id);
        if (!user) {
            return res.send('User not found');
        }
        const book = user.librarySchema.id(req.params.bookId);
        if (!book) {
            return res.send('Book not found');
        }
        res.render('books/show.ejs', { book:book, user: user });
    } catch (error) {
        console.log(error);
        res.send('Error retrieving book details');
    }});


// EDIT: show form to edit a specific book
router.get('/:bookId/edit', async (req, res) => {
    try {
        if (!req.session.user) { return res.redirect('/auth/sign-in'); }

        const user = await User.findById(req.session.user._id);
        const book = user.librarySchema.id(req.params.bookId);
        res.render('books/edit.ejs', { book: book , user: user });
    } catch (error) {
        console.log(error);
        res.send('Error loading book edit form');
    }});

// UPDATE: update a specific book
router.put('/:bookId', async (req, res) => {
    try {
        if (!req.session.user) { return res.redirect('/auth/sign-in'); }
        const user = await User.findById(req.session
            .user._id);
        const book = user.librarySchema.id(req.params.bookId);
        book.set(req.body);
        await user.save();

        res.redirect(`/users/${user._id}/books`);
    } catch (error) {
        console.log(error);
        res.send('Error updating book');
    }
});


// DELETE: delete a specific book
router.delete('/:bookId', async (req, res) => {
    try {
        if (!req.session.user) { return res.redirect('/auth/sign-in'); }
        const user = await User.findById(req.session
            .user._id);
        user.librarySchema.id(req.params.bookId).deleteOne();
        await user.save();
        res.redirect(`/users/${user._id}/books`);
    } catch (error) {
        console.log(error);
        res.send('Error deleting book');
    }
});


// BROWSE: show other users' libraries
router.get('/libraries', async (req, res) => {
    try {
        if (!req.session.user) { return res.redirect('/auth/sign-in'); }
        const users = await User.findById(req.session.user._id);
        //how would i get all users?
        // const users = await User.find({});
        // const users = await User.find({ _id: { $ne: req.session.user._id } });
        if (!users) {
            return res.send('Users not found');
        }
        // const books = users.librarySchema;  // Fetch books from user's librarySchema
        // console.log(books);
        // res.render('books/browse.ejs', { books: books, user: users });
        // res.render('books/browse.ejs', { users: users, user: req.session.user });
        // console.log(users);
  
        res.render('books/browse.ejs', { users: users, user: req.session.user });
    } catch (error) {
        console.log(error);
        res.send('Error loading browse page');
    }
});

// ACTIVE BOOKS //Need to add a status to the book schema... feature coming soon
router.get('/active', async (req, res) => {
    try {
        if (!req.session.user) { return res.redirect('/auth/sign-in'); }
        const user =
            await User.findById(req.session.user._id);
        if (!user) {
            return res.send('User not found');
        }
        const books = user.librarySchema.filter(book => book.status === 'active');
        res.render('books/active.ejs', { books: books, user: user });
    } catch (error) {
        console.log(error);
        res.send('Error retrieving active books');
    }
});

// Browse other users' libraries
router.get('/libraries', async (req, res) => {
    try {
        if (!req.session.user) { return res.redirect('/auth/sign-in'); }
        const users = await User.find({ });
        if (!users) {
            return res.send('Users not found');
        }
        res.render('books/browse.ejs', { users: users, user: req.session.user });
    } catch (error) {
        console.log(error);
        res.send('Error loading browse page');
    }
});






module.exports = router;



// Add the following style to the respective pages:

// landing page - index.ejs:

// Add book page- new.ejs:

// edit book page - edit.ejs:

// show book page- show.ejs:

// show library page- /books/index.ejs: