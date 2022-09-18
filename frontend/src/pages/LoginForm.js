import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [details, setDetails] = useState({ email: "", password: "" });

  const adminUser = {
    email: "zilvinas.zube@admin.com",
    password: "codeacademy",
  };

  const login = () => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      navigate("/home");
    } else {
      console.log("Details do not match");
      setError("Email or password is incorrect!");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login!</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          ></input>
        </div>

        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
