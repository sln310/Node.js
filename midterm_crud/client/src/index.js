import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CreatePost from "./CreatePost";
import Posts from "./Post";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/create" element={<CreatePost />}></Route>
        <Route path="/create/posts" element={<Posts />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
