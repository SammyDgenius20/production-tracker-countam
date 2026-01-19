import React from "react";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Reports from "./pages/Stock/Reports.jsx";
import AddStock from "./pages/AddStock.jsx";
import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import ProductionRecord from "./pages/ProductionRecord";
import ProductionUnits from "./pages/ProductionUnits.jsx";
import RawMaterials from "./pages/RawMaterials.jsx";
import './App.css';
const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-stock" element={<AddStock />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/production-record" element={<ProductionRecord />} />
          <Route path="/production-units" element={<ProductionUnits />} />
          <Route path="/raw-materials" element={<RawMaterials />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
