import React from "react";
import { useState } from "react";
import "./style.css/Login.css";
import { useNavigate, Link } from "react-router-dom";

let initData = {
  email: "",
  password: "",
};

export const Login = () => {
  const [loginData, setLoginData] = useState(initData);

  function handlechanaged(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  function handleLogin() {

  }
  function handleLogin() {}

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
          //   type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handlechanaged}
          required
        />
        <br />
        <input className="inpu3" type="submit" value="Login" />
      </form>
      <div style={{ paddingTop: "2px",marginTop: "8px" }}>
          <span>Already have account </span>
          <Link style={{ color: "blue", fontSize: "15px" }} to={"/signup"}>
            Login
          </Link>
        </div>
    </div>
  );
};
