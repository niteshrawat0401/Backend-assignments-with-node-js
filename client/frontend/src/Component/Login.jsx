import React from "react";
import { useState } from "react";
import "./style.css/Login.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

let initData = {
  email: "",
  password: "",
};

export const Login = () => {
  const [loginData, setLoginData] = useState(initData);
  const navigate = useNavigate();

  function handlechanaged(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  function handleLogin(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/users/login`, loginData)
      .then((res) => {
        localStorage.setItem(
          "emailid",
          JSON.stringify({
            email: loginData.email,
          })
        );
        // console.log("data", res.data);
        setLoginData({ ...initData });
        alert("Login in Successful");
        navigate("/home");
      })
      .catch((e) => {
        alert("Invalid Password");
        console.log(e);
      });
  }

  return (
    <div className="login_main_container">
      <form onSubmit={handleLogin}>
        <h2
          style={{ fontWeight: "bold", paddingTop: "2rem", fontSize: "21px" }}
        >
          Login
        </h2>
        <input
          className="inpu1"
          type="text"
          name="email"
          placeholder="Email"
          value={loginData.userName}
          onChange={handlechanaged}
          required
        />
        <br />
        <input
          className="inpu2"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handlechanaged}
          required
        />
        <br />
        <input className="inpu3" type="submit" value="Login" />
      </form>
      <div style={{ paddingTop: "2px", marginTop: "8px" }}>
        <span>Create an account </span>
        <Link style={{ color: "blue", fontSize: "15px" }} to={"/signup"}>
          Sign up
        </Link>
      </div>
    </div>
  );
};
