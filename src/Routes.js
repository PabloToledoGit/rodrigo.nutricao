import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default AppRoutes;
