import React from "react";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Reports from "./pages/Stock/Reports.jsx";
import AddStock from "./pages/AddStock.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ProductionRecord from "./pages/ProductionRecord.jsx";
import ProductionUnits from "./pages/ProductionUnits.jsx";
import RawMaterials from "./pages/RawMaterials.jsx";
import "./App.css";
import RootLayout from "./layout/RootLayout.jsx";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="add-stock" element={<AddStock />} />
        <Route path="reports" element={<Reports />} />
        <Route path="production-record" element={<ProductionRecord />} />
        <Route path="production-units" element={<ProductionUnits />} />
        <Route path="raw-materials" element={<RawMaterials />} />
      </Route>,
    ),
    {
      basename: import.meta.env.BASE_URL,
    },
  );
  return <RouterProvider router={router} />;
};

export default App;
