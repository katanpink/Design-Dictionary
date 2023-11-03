import "./index.css"
import "./style.css"
import { useState, Fragment } from "react"
// import posts from "../posts.json"
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


export default function PostCreate() {
    const [Content, setContent] = useState([])
    const [userForm, setUserForm] = useState({
        title: "",
        header: "",
        text: "",
        img: ""  
    })

    const handleChange = e => {
        setUserForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleImageUpload = e => {
        const file = e.target.files[0];
      
        if (file) {
          const reader = new FileReader();
      
          reader.onload = function (e) {
            const base64String = e.target.result;
            setUserForm(prev=>{
                return {...prev,image:base64String}
            })
          };
      
          reader.readAsDataURL(file);
        }
      }

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault();
        var tit = document.getElementById('title').value
        console.log(tit)
        try {
            const response = await axios.post('http://localhost:4000/posts/createPost', userForm);
            console.log('Post created successfully', response.data.post);
            return navigate('/')
            
        } catch (err) {
            console.error('Error creating the post', err);
        }
    }
    return (
        <div>
            <div className="page" id="top">
                <form className="formstyle" onSubmit={onSubmit}>
                    <div className="editool">
                        <legend>Display Image</legend><input className="tools" type="file" name="image" onChange={handleImageUpload}></input>
                        <legend>Title</legend><input className="tools" type="text" id="title" name="title" onChange={handleChange}></input>
                        <legend>Header1</legend><input className="tools" type="text" name="header" onChange={handleChange}></input>
                        <legend>Text 1</legend><textarea className="tools" type="text" name="text" onChange={handleChange}></textarea>
                        <legend>Header2</legend><input className="tools" type="text" name="header1" onChange={handleChange}></input>
                        <legend>Text 2</legend><textarea className="tools" type="text" name="text1" onChange={handleChange}></textarea>
                        <legend>Header2</legend><input className="tools" type="text" name="header2" onChange={handleChange}></input>
                        <legend>Text 3</legend><textarea className="tools" type="text" name="text2" onChange={handleChange}></textarea>
                    </div>
                    {/* {Content.map((e, i) => {
                        return <Fragment key={i}>
                            <div className="editool">
                                <legend>Header</legend><input className="tools" type="text" name="header" onChange={handleChange}></input>
                                <legend>Text</legend>
                                <textarea className="tools" type="text" name="title" onChange={handleChange}></textarea>
                            </div>
                        </Fragment>
                    })} */}
                    <div className="editor">
                        {/* <button className="editbutton" onClick={() => {
                            const newElm = {
                                text: ''
                            }
                            console.log(Content)
                            setContent(prev => {
                                return [...prev, newElm]
                            })


                        }} type="button">Add New Section</button>
                        <button className="editbutton" onClick={() => {
                           setContent(prev => {
                            const newArray = [...prev];
                            newArray.pop();
                            return newArray;
                          });
                        }} type="button">Delete Last Section</button>  */}
                        <input type="submit" className="editbutton"></input>
                        <button className="editbutton">Submit and view</button>
                    </div>

                </form>
            </div>
        </div>
    )

}

