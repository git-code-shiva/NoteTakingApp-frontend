// import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from '../../card';
import Header from "../header/header";


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
    return(
        <>
        <Header/>
            <div className="post_container">
                {post.map((post,i)=>{
                    return <Card post={post} key={i}/>
                })}
            </div>
        </>
    )
}
export default HomePage;