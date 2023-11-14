import axios from 'axios';
import "./index.css"
import "./style.css"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Post = () => {
    //fetches the id and creates blog post
    const { id } = useParams();

    const [post, setPost] = useState({})

    useEffect(() => {
        const fetchBlog = async () => {
            await axios.get(`http://localhost:4000/posts/getPost/${id}`).then((res) => {
                console.log(res.data.post)
                setPost(res.data.post)
            })
        }

        fetchBlog()
    }, [])

    //create the HTML page based off the database information
    return (
        <div>
            <div className="page" id="top">
                <div className="scape1"></div>
                <div className="overtext"><h1 className="beeg">{post.title}</h1></div>
                <div className="info">
                    <h1 className="big">{post.header}</h1>
                    <hr className="light"></hr>
                    <h2>{post.text}</h2>
                    <br />
                    <br />
                    <h1 className="big">{post.header1}</h1>
                    <hr className="light"></hr>
                    <h2>{post.text1}</h2>
                    <br></br>
                    <br />
                    <h1 className="big">{post.header2}</h1>
                    <hr className="light"></hr>
                    <h2>{post.text2}</h2>
                    <hr className="light"></hr>
                </div>
            </div>
            
        </div>
    )
}

export default Post