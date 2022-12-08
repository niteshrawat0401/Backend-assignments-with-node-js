import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./style.css/Signup.css";
import axios from "axios";

let initialObj = {
  email: "",
  password: "",
};

export const Signup = () => {
  const [signData, setSignData] = useState(initialObj);
  const navigate = useNavigate();

  const handleonChange = (e) => {
    const { name, value } = e.target;
    setSignData({ ...signData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users/signup", signData)
      .then((res) => {
        // console.log("data", res.data);
        setSignData({ ...initialObj });
        alert("Sign in Successful");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signup_main_cont">
      <h1 style={{ fontWeight: "bold", fontSize: "21px", paddingTop: "2rem" }}>
        Sign up
      </h1>
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
        <br />
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
      <div style={{ paddingTop: "2px", marginTop: "8px" }}>
        <span>Already have account </span>
        <Link style={{ color: "blue", fontSize: "15px" }} to={"/"}>
          Login
        </Link>
      </div>
    </div>
  );
};
