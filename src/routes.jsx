import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddStock from "./pages/AddStock";
import Reports from "./pages/Stock/Reports";
import ProductionRecord from "./pages/ProductionRecord";
import ProductionUnits from "./pages/ProductionUnits";
import RawMaterials from "./pages/RawMaterials";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<RootLayout />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="add-stock" element={<AddStock />} />
        <Route path="reports" element={<Reports />} />
        <Route path="production-record" element={<ProductionRecord />} />
        <Route path="production-units" element={<ProductionUnits />} />
        <Route path="raw-materials" element={<RawMaterials />} />
      </Route>
    </Route>,
  ),
  { basename: import.meta.env.BASE_URL }
);