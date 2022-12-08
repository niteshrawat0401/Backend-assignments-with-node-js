import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  let pvtroute = JSON.parse(localStorage.getItem("emailid"));

  const handleClick = () => {
    // localStorage.removeItem("emailid");
    navigate("/");
  };

  return (
    <>
    <h2 style={{textAlign:"center"}}>Home</h2>
    <div className="main_container">
      <p>{pvtroute.email}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
    </>
  );
};
