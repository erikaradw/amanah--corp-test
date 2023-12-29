import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";

function DetailAdd(){

    const {state} = useLocation()
    const {id, title, body} = state

    return(
        <div className="container">
            <div className="row" style={{margin: "10px", padding: "10px"}}>
                <h2>Data adding success</h2>
            </div>
            <div className="row" style={{margin: "10px", padding: "10px"}}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{id} {title}</h5>
                        <p className="card-text">{body}</p>
                    </div>
                </div>
            </div>
            <div className="row" style={{margin: "10px", padding: "10px"}}>
                <Link to={"/"} className="btn btn-primary">Home</Link>
            </div>
        </div>
    )
}

export default DetailAdd