import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";

function Detail(){

    let {id} = useParams()

    const [post, setPost] = useState()
    const [comments, setComments] = useState([])

    const getPost = () => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
            if (res.status === 200) {
                setPost(res?.data)
                axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then((resComments) => {
                    if (resComments.status === 200) {
                        setComments(resComments?.data)
                    }
                })
                .catch((error) => {
                    console.error(error);
                })
            }
        })
        .catch((error) => {
            console.error(error);
        })
    }


    useEffect(() => {
        getPost()
    }, [])

    return(
        <div className="container">
            <div className="row" style={{margin: "10px", padding: "10px"}}>
                <h4>Post</h4>
            </div>
            <div className="row" style={{margin: "10px", padding: "10px"}}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{post?.title}</h5>
                        <p className="card-text">{post?.body}</p>
                    </div>
                </div>
            </div>
            <div className="row" style={{margin: "10px", padding: "10px"}}>
                <Link to={"/"} className="btn btn-primary">Home</Link>
            </div>
            <div className="row" style={{margin: "10px", padding: "10px"}}>
                <h4>Comments</h4>
            </div>
            <div className="row" style={{margin: "10px", padding: "10px"}}>
            {comments.map((comment) => (
                <div className="col-auto mb-3">
                     <div className="card" key={comment?.id}>
                        <div className="card-body">
                            <h5 className="card-title">{comment?.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{comment?.email}</h6>
                            <p className="card-text">{comment?.body}</p>
                        </div>
                    </div>
                </div>
               
                ))}
            </div>
          
        </div>
        
    )  
}

export default Detail