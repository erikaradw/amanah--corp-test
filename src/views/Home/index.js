import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField"

function Home(){

    const [posts, setPosts] = useState([])
    const [searchRes, setSearchRes] = useState([])

    const inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase()    
        if (lowerCase !== ""){
            const newPosts = posts.filter(post => post.title.toLowerCase().includes(lowerCase))
            setSearchRes(newPosts)
        } else {
            setSearchRes(posts)
        }
    }


    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = () => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            if (res.status === 200) {
                setPosts(res?.data)
                setSearchRes(res?.data)
            }
        })
        .catch((error) => {
            console.error(error);
        })
    }

    const table = 
    <table className="table table-striped table-bordered table-hover">
        <thead className="thead-dark">
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {searchRes.map((post) => (
                <tr
                    key={post?.id}
                >
                    <td> {post?.id} </td>
                    <td> {post?.title} </td>
                    <td> {post?.body} </td>
                    <td>
                        <Link className="btn btn-primary" to={`/detail/${post?.id}`}>Detail</Link>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>

    const noResult = <h3>No result has been found</h3>

    return(
        <div className="container">
            <div className="row" style={{margin: "10px", padding: "10px"}}>
                <h1>Posts</h1>
            </div>
            <div className="row" style={{margin: "10px", padding: "10px"}}>
                <TextField 
                    variant="outlined"
                    fullWidth
                    label="Search by title"
                    onChange={inputHandler}
                />
            </div>
            <div className="row" style={{margin: "10px", padding: "10px"}}>
                <Link className="btn btn-success" to={"/add"}>Add Post</Link>
            </div>
            <div className="row" style={{margin: "10px", padding: "10px"}}>
                {(searchRes.length != 0) ? table : noResult}
            </div>
        </div>
    )
}

export default Home