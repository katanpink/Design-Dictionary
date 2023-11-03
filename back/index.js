const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Posts = require('./models/blogPost.js');

const postRoutes = require('./routes/post.route.js');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json({limit:'50mb'}));

mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Routes
// app.get('/', async (req, res) => {
//     const posts = await Posts.find();
//     res.json(posts);
// });

app.use('/posts', postRoutes);
app.use('/signs', postRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
