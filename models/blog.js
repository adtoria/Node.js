const mongoose = require('mongoose');
const Schema = mongoose.Schema; // a constructor function

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema); // singular of the collection that we have created because it's gonna look for Blog+s = Blogs
module.exports = Blog;