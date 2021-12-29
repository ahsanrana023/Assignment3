import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <nav style={{ backgroundColor: "#000", height: "40px" }}>
        <Link
          to="/"
          style={{ color: "#fff", padding: "15px", marginLeft: "500px" }}
        >
          Home
        </Link>
        <Link to="/about" style={{ color: "#fff", padding: "15px" }}>
          About
        </Link>
        <Link to="/contact" style={{ color: "#fff", padding: "15px" }}>
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
