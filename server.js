const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');

const authController = require('./controllers/auth.js');
const bookController = require('./controllers/bookController.js');
const port = process.env.PORT ? process.env.PORT : '3100';

const path = require('path');

//middleware: redirect logged in users away from auth pages
// require our new middleware!
const isSignedIn = require('./middleware/is-signed-in.js');
const passUserToView = require('./middleware/pass-user-to-view.js');

const redirectIfLoggedIn = (req, res, next) => {
  if (req.session.user) {
    return res.redirect(`/users/${req.session.user._id}/books`);
  }
  next();
};

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use('/auth/sign-up', redirectIfLoggedIn);
app.use('/auth/sign-in', redirectIfLoggedIn);


app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
// app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passUserToView); // use new passUserToView middleware here



app.get('/', (req, res) => {
  res.render('index.ejs', {
    user: req.session.user,
  });
});



app.use('/auth', authController);
app.use(isSignedIn);
app.use('/users/:userId/books', bookController);


app.listen(port,  () => {
  console.log(`The express app is ready on port ${port}!`);
});
