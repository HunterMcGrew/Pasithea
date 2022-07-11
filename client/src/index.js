import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
// import styles
import "./assets/css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./index.css";
// import components
import NavBar from "./components/NavBar";
// import pages
import App from "./App";
import Home from "./pages/Home";
import TopicList1 from "./pages/TopicList1";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="topics" element={<TopicList1 /> } />
    </Routes>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
