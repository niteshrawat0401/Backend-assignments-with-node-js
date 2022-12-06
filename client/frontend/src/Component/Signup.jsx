import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import {useState} from "react"
import "./style.css/Signup.css"

let initialObj = {
    email: "",
    password: ""
    
  };

export const Signup = () => {
    const [signData, setSignData] = useState(initialObj);

    const handleonChange=(e)=>{
        const {name, value}= e.target;
        setSignData({ ...signData, [name]: value})
    }
    const handleSubmit=()=>{

    }

  return (
    <div className="signup_main_cont">
    <h1 style={{ fontWeight: "bold",fontSize:"21px",paddingTop:"2rem" }}>Sign up</h1>
    <form onSubmit={handleSubmit}>
    <input
        className="inp1"
        type="text"
        name="email"
        placeholder="Email"
        value={signData.email}
        onChange={handleonChange}
        required
      />
      <br/>
      <input
        className="inp2"
        type="password"
        name="password"
        placeholder="password"
        value={signData.passWord}
        onChange={handleonChange}
        required
      />
      <br />
      <input className="inp3" type="submit" value="Sign UP" />
    </form>
    <div style={{ paddingTop: "2px",marginTop: "8px" }}>
          <span>Already have account </span>
          <Link style={{ color: "blue", fontSize: "15px" }} to={"/login"}>
            Login
          </Link>
        </div>
    </div>
  )
}
