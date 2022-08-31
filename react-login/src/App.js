import React, { useState } from "react";
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
  };
  const Logout = () => {
    console.log("Logout");
  };

  return <div className="App"></div>;
}

export default App;
