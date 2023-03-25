import React from "react";
import { useNavigate } from "react-router-dom";
import './header.css';

const Header=()=>{
    const navigate = useNavigate();
    const gotoMain=()=>{
        navigate('/home')
    }

    const gotoForm=()=>{
        navigate('/form');
    }
    return(
        <>
        <div className="header_container">
            <div className="home" onClick={gotoMain}>Home</div>
            <div className="add" onClick={gotoForm}>AddNote</div>
            <div className="delete">DeleteAll</div>
            <div className="export">Export</div>
        </div>
        </>
    )
}
export default Header;