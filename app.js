const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://adt:test@nodetuts.ytyy0ky.mongodb.net/';

// async task =>
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// to remove deprecation warning, add an optional argument
// { useNewUrlParser: true, useUnifiedTopology: true}

// register view engine
app.set('view engine', 'ejs');

// middleware & static files (css, images etc)
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

// use existing middleware:
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {    
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);
// adding '/blogs' as the first argument means that we are scoping
// this route to a particular url
// it's only going to apply this route if we only go to '/blogs'

// 404 page
// this should be at the very bottom
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});