import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("login");
  };
  return (
    <div className="navbar">
      {/* Navigation link */}

      <img src="" alt="" />
      <ul>
        <NavLink to="/">
          <li>Dashboard</li>
        </NavLink>
        <NavLink to="/raw-materials">
          <li>Raw Materials</li>
        </NavLink>
        <NavLink to="/add-stock">
          <li>Add Stock</li>
        </NavLink>
        <NavLink to="/reports">
          <li>Reports</li>
        </NavLink>
        <NavLink to="/login">
          <li>Login</li>
        </NavLink>
      </ul>
      <button onClick={onClick}>Login</button>
    </div>
  );
};

export default NavBar;
