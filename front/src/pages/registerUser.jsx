import "./index.css"
import "./style.css"
import { useState, Fragment } from "react"
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

//same as the post create but for users
export default function RegisterUser() {
    const [Content, setContent] = useState([])

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = e => {
        setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault();
        var tit = document.getElementById('title').value
        console.log(tit)
        try {
            const response = await axios.post('http://localhost:4000/signs/register', {
                name: user.name,
                email: user.email,
                password: user.password,
               
            });
            console.log('Post created successfully', response.data.signs);
            return navigate('/')
            
        } catch (err) {
            console.error('Error creating the user', err);
        }
    }
    return (
        <div>
            <div className="page" id="top">
                <h1 className="beeg title">Sign In/Log in</h1>
                <form className="formstyle1" onSubmit={onSubmit}>
                    <div className="signtool">
                        <br />
                        <legend>Name</legend><input className="extools" type="text" id="name" name="name" onChange={handleChange}></input>
                        <br />
                        <br />
                        <legend>Email</legend><input className="extools" type="text" name="email" onChange={handleChange}></input>
                        <br />
                        <br />
                        <legend>Password</legend><input className="extools" type="text" name="password" onChange={handleChange}></input>
                        <br />
                        <br />
                        <input type="submit" className=""></input>
                    </div>
                </form>
            </div>
        </div>
    )

}

