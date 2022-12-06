import React from 'react'
import { useState,useEffect } from 'react';
import "./Home.css"
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Home = () => {
  const [data, setData]= useState([]);
  const navigate= useNavigate();

  useEffect(()=>{
    getData()
  },[])

  function getData(){
    axios.get("http://localhost:8080/users/login")
    .then((res)=>{
      setData(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  


  const handleClick=()=>{
    navigate("/login")
  }

  return (
    <div className='main_container'>
        <h2>email</h2>
        <button onClick={handleClick}>Logout</button>
    </div>
  )
}
