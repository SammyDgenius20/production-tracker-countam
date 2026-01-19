import React from "react";
import {NavLink} from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <img src="" alt="" />
      <ul>
        <NavLink to="/"><li>Dashboard</li></NavLink>
        <NavLink to="/raw-materials"><li>Raw Materials</li></NavLink>
        <NavLink to="/add-stock"><li>Add Stock</li></NavLink>
        <NavLink to="/reports"><li>Reports</li></NavLink>
        <NavLink to="/login"><li>Login</li></NavLink>
      </ul>
      <button>Login</button>
    </div>
  );
};

export default NavBar;
