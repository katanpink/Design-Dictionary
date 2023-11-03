import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home.jsx"
import Blogs from "./pages/blogs.jsx"
import Contact from "./pages/contac.jsx"
import About from "./pages/about.jsx"
import PostCreate from "./pages/postcreate.jsx"
import Nav from "./pages/navbar.jsx"
import Post from "./pages/post.jsx"
import Footer from "./pages/footer.jsx"
import RegisterUser from "./pages/registerUser.jsx"


export default function App() {
    
    return (
        <div> 
            <BrowserRouter>
             <Nav />
                <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route exact path="/blogs" element={<Blogs />}></Route>
                        <Route exact path="/contact" element={<Contact />}></Route>
                        <Route exact path="/about" element={<About />}></Route>
                        <Route exact path="/create" element={<PostCreate />}></Route>
                        <Route path="/post/:id" element={<Post />}></Route>
                        <Route path="/register" element={<RegisterUser />}></Route>
                </Routes>
                <br />
             <Footer />
            </BrowserRouter>
        </div>
        )
    }
