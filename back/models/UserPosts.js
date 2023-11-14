//User schema
const mongoose = require('mongoose');
const signSchema = new mongoose.Schema({
    name: { type: String, default: 'John' },
    email: { type: String, default: 'johndoe@gmail.com' },
    password: { type: String, default: 'Password123' },
})
module.exports = mongoose.model('Signs', signSchema)