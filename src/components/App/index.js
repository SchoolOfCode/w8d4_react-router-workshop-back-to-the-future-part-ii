import React from "react";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../HomePage";
import AboutPage from "../BeetRoutePage";
import AceVenturaPage from "../AceVenturaPage";

function App() {
   return (
      <div className="App">
         <nav className="nav-bar">
            <h1>www.veg.com</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/aceVentura">AceVenturaPage</Link>
         </nav>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="aceVentura" element={<AceVenturaPage />} />
         </Routes>
      </div>
   );
}

export default App;
