import React from "react";
import Home from "./pages/Home/Home";
import SobreMim from "./pages/Sobremim/SobreMim";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/sobremim" element={<SobreMim />} />
        </Routes>
    </Router>
  );
}

export default AppRoutes;
