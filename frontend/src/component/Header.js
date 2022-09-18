import React, { useEffect, useInsertionEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddUser");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);

  return (
    <div className="header">
      <p className="logo">Zube&Co</p>
      <div className="header-right">
        <Link to="/home">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activeTab === "AddUser" ? "active" : ""}`}
            onClick={() => setActiveTab("AddUser")}
          >
            New user
          </p>
        </Link>
        <Link to="/">
          <p>Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
