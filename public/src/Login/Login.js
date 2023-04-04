import React from "react";
import "./login.css";
import facebook from "../images/facebook.png";

function Login() {
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png";
  const signIn = () => {
    // sign in...
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={url} alt="Facebook logo" />
        <img src={facebook} alt="Facebook logo" />
      </div>
      <button type="submit" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default Login;
