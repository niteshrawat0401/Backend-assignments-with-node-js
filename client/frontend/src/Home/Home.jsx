import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  let pvtroute = JSON.parse(localStorage.getItem("emailid"));

  const handleClick = () => {
    localStorage.removeItem("emailid");
    navigate("/login");
  };

  return (
    <div className="main_container">
      <p>{pvtroute.email}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};
