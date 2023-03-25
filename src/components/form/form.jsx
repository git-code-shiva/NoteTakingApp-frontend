import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import './form.css';
const Form=()=>{

    const navigate = useNavigate();
    const [allData, setAllData] = useState({title:"", description:""})
    // const [imageURL , setImageURL] = useState("");

    

    const handleValue=(e)=>{
        setAllData({...allData, [e.target.name]:e.target.value});

    }

   
        // useEffect(()=>{
        //     fetch('http://localhost:8081/createPost',{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json",
        //         "jwttoken":JSON.parse(
        //             localStorage.getItem('userData')
        //         ).token
        //     },
        //     body: JSON.stringify({
        //         title: allData.title,
        //         description: allData.description
        //     })
        // }).then(res=>res.json()).then(data=>{
        //     if(data.error){}
        //     else{
        //         navigate('/home')
        //     }
        // }).catch(err=>console.log(err))
        // },[allData.title])
        
        const handlePost=async(e)=>{
            e.preventDefault();
            const data = new FormData();

            fetch('https://notetaker-app.onrender.com/createPost',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "jwttoken":JSON.parse(
                    localStorage.getItem('userData')
                ).token
            },
            body: JSON.stringify({
                title: allData.title,
                description: allData.description
            })
        }).then(res=>res.json()).then(data=>{
            if(data.error){}
            else{
                navigate('/home')
            }
        }).catch(err=>console.log(err))
        }
    
    return(
        <>
            <Header/>
            <div className="form_container">
            <div className="title">
                <div className="title_heading">Title</div>
                <textarea type="text" name="title" placeholder="Title" onChange={handleValue} />
            </div>
            <div className="desc">
                <div className="desc_heading">Description</div>
                <textarea type="text" name="description" placeholder="what's on your mind?" onChange={handleValue} />
            </div>

            <button className="form-btn" onClick={handlePost}>Add Note</button>
            </div>
        </>
    )
}
export default Form;