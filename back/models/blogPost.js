//Blog Post schema
const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title: { type: String, default: 'Untitled' },
    author: { type: String, default: 'John Doe' },
    header: { type: String, default: 'Section' },
    header1: { type: String},
    header2: { type: String},
    text: { type: String, default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    text1: { type: String},
    text2: { type: String},
    date: { type: Date, default: Date.now() },
    rating: Number,
    image: String
})
module.exports = mongoose.model('Posts', postSchema)