import axios from "axios"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddPost() {

    const [post, setPost] = useState([])
    const navigate = useNavigate()

    const onChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        })
    }

    const formSubmit = (event) => {
        event.preventDefault()

        axios
        .post(`https://jsonplaceholder.typicode.com/posts`, {
            title: post?.title,
            body: post?.body,
            userId: 1
        })
        .then((response) => {
            
            response && response.status === 201 &&
            console.log(response)
            navigate("/added", { state : response.data})
        })
        .catch((error) => {console.error(error)})
    }

    return(
        <div className="container-fluid" style={{marginTop: "30px"}}>
            <form method="POST" onSubmit={(e) => formSubmit(e)}>
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title"> Add Post</h5>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                name="title"
                                onChange={(e) => onChange(e)}
                                value={post?.title}
                            />
                        </div>
                        <div className="form-group my-3">
                            <label> Description </label>
                            <textarea
                                className="form-control"
                                onChange={(e) => onChange(e)}
                                placeholder="Description"
                                name="body"
                                rows="6"
                                value={post?.body}
                            />
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-success">
                                Save
                            </button>
                            {"\n"}
                            <Link to={"/"} className="btn btn-danger">Cancel</Link>
                        </div>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default AddPost