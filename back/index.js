//Require assets
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Posts = require('./models/blogPost.js');
const postRoutes = require('./routes/post.route.js');
const cors = require('cors');
require('dotenv').config();

//Connecting backend to the frontend
const port = process.env.PORT || 4000;
const app = express();

//Database handling
app.use(cors());
app.use(bodyParser.json({limit:'50mb'}));

//Creates the new urls
mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Handle Connection errors
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

//Handle routes
app.use('/posts', postRoutes);
app.use('/signs', postRoutes);

//connecting to the port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
