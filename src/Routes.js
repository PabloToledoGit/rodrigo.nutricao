import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/home" element={<Home />}></Route>
        </Routes>
    </Router>
  );
}

export default AppRoutes;
