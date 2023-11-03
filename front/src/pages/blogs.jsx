import axios from "axios"
import "./index.css"
import "./style.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import posts from "../posts.json"


export default function Blogs() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            await axios.get("http://localhost:4000/posts/getPosts").then(res => {
                console.log(res.data.posts)
                setPosts(res.data.posts)
            })
        }
        getPosts();
    }, [])


    return (
        <div>
            <div className="page" id="top">
                <div className="scape1"></div>
                <div className="overtext"><h1 className="beeg">Blog</h1><br /><h1 className="beeg">Gallery</h1><br /></div>
                <div className="info">
                    <hr className="light"></hr>
                    <h1 className="Big">Featured</h1>
                    <hr className="light"></hr>

                    {/* Featured projects */}
                    <Feature posts={posts} />

                    <hr className="light"></hr>
                    <h1 className="Big">All Posts</h1>
                    <hr className="light"></hr>

                    <br></br>
                    <Projects posts={posts} />
                    <br></br>
                    <hr className="light"></hr>
                    <br></br>
                </div>

            </div>
        </div>
    )
}

function Feature({ posts }) {
    const [selectedId, setSelectedId] = useState(null)

    function handleClick(id) {
        setSelectedId(id !== selectedId ? id : null)
    }
    return (
        <div className="flashcards">
            {posts.map((post, index) => {
                console.log(post)
                if (index < 3) {
                    return (
                        <Link to={`/post/${post._id}`}>
                        <div
                            key={post._id}
                            onClick={() => handleClick(post.id)}
                            className={post.id === selectedId ? "selected" : "selectedoff"}
                        >
                            <h3 className="cardtit">
                                {post.id === selectedId ? post.title : post.title}
                                <br></br>
                                <img className="cardimg" src={post.image}></img>
                            </h3>
                        </div>
                        </Link>
                    )
                }
            })}
        </div>
    )
}

function Projects({ posts }) {
    const [selectedId, setSelectedId] = useState(null)

    function handleClick(id) {
        setSelectedId(id !== selectedId ? id : null)
    }
    return (
        <div className="flashcards">
            {posts.map((post) => (
                <Link to={`/post/${post._id}`}>
                <div
                    key={post._id}
                    onClick={() => handleClick(post.id)}
                    className={post.id === selectedId ? "selected" : "selectedoff"}
                >
                    <h3 className="cardtit">
                        {post.id === selectedId ? post.title : post.title}
                        <br></br>
                        <img className="cardimg" src={post.image}></img>
                    </h3>
                </div>
                </Link>
            ))}
        </div>
    )
}