import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { tokenstorage } from "../../App";
import './header.css';

const Header=()=>{
    const [token, settoken] = useContext(tokenstorage);
    const navigate = useNavigate();
    const gotoMain=()=>{
        navigate('/home')
    }

    const gotoForm=()=>{
        navigate('/form');
    }
    const logout=()=>{
        localStorage.clear();
        settoken(null)
    }
    if(token){
    return(
        <>
        <div className="header_container">
            <div className="home" onClick={gotoMain}>Home</div>
            <div className="add" onClick={gotoForm}>AddNote</div>
            <div className="delete">DeleteAll</div>
            <div className="export">Export</div>
            <div className="logout" onClick={logout}>
                <img src="https://w7.pngwing.com/pngs/475/85/png-transparent-computer-icons-logout-angle-text-black.png" height="30px" alt="logout" />
            </div>
        </div>
        </>
    )} else{
        navigate('/*')
    }
}
export default Header;