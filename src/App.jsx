import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin.jsx";
import Frame2018776438 from "./pages/Frame2018776438.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Frame2018776438" element={<Frame2018776438 />} />
      </Routes>
    </Router>
  );
};

export default App;
