import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./pages/LoginForm";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import View from "./pages/View";
import "./pages/LoginForm.css";
import Layout from "./component/Layout";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
        </Route>
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", fontSize: "36px" }}>
              This page does not exist. Please check your link!
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
