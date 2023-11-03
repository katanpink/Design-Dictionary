const express = require('express');
const router = express.Router()
const postSchema = require('../models/Post')
const signSchema = require('../models/UserPosts')


router.route('/createPost').post(async (req, res) => {
    const postData = req.body;
    console.log(postData)
    await postSchema.create(postData).then(newPost => {
        res.json({
            status: "post created!",
            post: newPost,
        })
    })
})

router.route('/register').post(async (req, res) => {
    const signData = req.body;
    console.log(signData)
    await signSchema.create(signData).then(signPost => {
        res.json({
            status: "sign created!",
            post: signPost,
        })
    })
})


router.route('/getPosts').get(async (req, res) => {
    await postSchema.find().then(posts => {
        res.json({
            posts
        })
    })
})

router.route('/getPost/:id').get(async (req, res) => {
    const {id} = req.params;
    await postSchema.findOne({ _id: id}).then(post => {
        res.json({
            post
        })
    })
})


module.exports = router