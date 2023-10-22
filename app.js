const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

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
app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1})
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result });
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => {
            console.log(err);
        });
});

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => console.log(err));
});

// 404 page
// this should be at the very bottom
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});