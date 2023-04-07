// import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from '../../card';
import Header from "../header/header";
import axios from "axios";
import './homePage.css'
import { Route, Routes } from "react-router-dom";
import EditPage from "../editPage/editPage";


const HomePage=()=>{
    const [post, setPost] = useState([]);

    useEffect(()=>{
        fetch("https://notetaker-app.onrender.com/all").then((res)=> res.json()).then((data)=>{
            setPost(data);
        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        })
    },[])

    const handleDelete=async(id)=>{
        // id.preventDefault()
        if(window.confirm("Are u sure want to delete!")){
            await axios.delete(`https://notetaker-app.onrender.com/delete/${id}`);
            setPost(post.filter(post=>post._id !==id))
        }
    }

    const handleEdit=async(id)=>{

    }
    return(
        <>
        <Header/>
            <div className="post_container">
                {post.map((post,i)=>{
                    return <Card post={post} key={i} handleDelete={()=>handleDelete(post._id)} handleEdit={handleEdit(post._id)} />
                })}
            </div>
        </>
    )
}
export default HomePage;