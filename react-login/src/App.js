import React, { useState } from "react";
import LoginForm from "./conponents/LoginForm";
import "./App.css";

function App() {
  const adminUser = {
    email: "zilvinas.zube@admin.com",
    password: "codeacademy",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match");
      setError("Email or password is incorrect!");
    }
  };
  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email != "" ? (
        <div className="welcome">
          <h2 className="welcome-text">
            Welcome, <span>{user.name}</span>
          </h2>
          <button className="logcut" onClick={Logout}>
            Logout
          </button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
