import React from "react";
import { useNavigate } from "react-router-dom";
// import Header from "./components/header/header";
import "../src/card.css"
const Card=({post})=>{
    const navigate = useNavigate();

    const handleEdit=()=>{
        navigate(`/editPage?title=${post.title}&description=${post.description}`);
    }
    return(
        <>
            <div className="container" onClick={handleEdit}>
                <h3 className="card_title">Title: {post.title}</h3>
                <div className="card_desc">Description: {post.description}</div>
            </div>
        </>
    )
}
export default Card;