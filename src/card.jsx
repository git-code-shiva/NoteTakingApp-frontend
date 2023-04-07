import React from "react";
import { useNavigate } from "react-router-dom";
// import Header from "./components/header/header";
import "../src/card.css"
const Card=({post,handleDelete,handleEdit})=>{
    // const navigate = useNavigate();

    // const handleEdit=()=>{
    //     navigate(`/editPage?title=${post.title}&description=${post.description}`);
    // }
    return(
        <>
            <div className="card_container">
                {/* <div className="title_desc_container" onClick={handleEdit}> */}
                <h3 className="card_title">{post.title}</h3>
                <div className="card_desc">{post.description}</div>
                {/* </div> */}

                <div className="icon">
                    <img src="https://w7.pngwing.com/pngs/1018/119/png-transparent-computer-icons-editing-pencil-miscellaneous-angle-pencil.png" height="25px" alt="icon" onClick={handleEdit}/>
                    <img src="https://icons.veryicon.com/png/o/business/simple-linear-icon-icon/delete-332.png" height="30px" alt="icon" onClick={handleDelete} />
                </div>
            </div>
        </>
    )
}
export default Card;