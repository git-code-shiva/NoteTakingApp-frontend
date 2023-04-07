import React, { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './signin.css';
import { tokenstorage } from "../../App";
const SignIn=()=>{

    const [token,settoken] = useContext(tokenstorage);
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rem, setRem] = useState(false);

    const loginPermission = email.length && password.length && rem

    const signinbtn=async(e)=>{
        if(loginPermission){
            e.preventDefault();
            await axios.post('https://notetaker-app.onrender.com/login',{
                email,
                password
            }).then((res)=>{
                if(res.data.message === "login sucessfully"){
                    settoken(res.data.token);
                    localStorage.setItem('userData', JSON.stringify(res.data))
                    navigate('/home')
                }
            }).catch((err)=>{
                // alert("invalid credantial!")
                if(err.response.data.message === "user is not found please register first!"){
                    alert("user not found please register first");
                    navigate("/signup")
                }
                else{
                    alert('wrong password')
                }
            })
        }
        else{
            e.preventDefault();
            alert("Please fill all the datails");
        }
    }

    return(
        <>
        <div className="container_signin">
            <div className="main_container_signin">
                <main className="main_signin">
                    <header className="signin_header">Sign In</header>

                    <form className="signinForm" onSubmit={signinbtn}>
                        <div className="input_container">
                            <div className="email_heading">Email address</div>
                            <input type="text" value={email} className="in_signin" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                        </div>

                        <div className="input_container">
                            <div className="password_heading">Password</div>
                            <input type="password" value={password} className="in_signin" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
                        </div>

                        <div className="input_container">
                            <input className="x" onClick={()=>setRem(true)} type="checkbox" />
                            <span className="remember">Remember me</span>
                        </div>

                        <div className="input_container">
                            <button type="submit" className="signin_btn">Submit</button>
                        </div>

                        <div className="forget">Forgot <span className="forget_pass">password?</span></div>
                    </form>
                </main>
            </div>
        </div>
        </>
    )
}
export default SignIn;