import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <img src="" alt="" />
      <ul>
        <Link to="/"><li>Dashboard</li></Link>
        <Link to="/raw-materials"><li>Raw Materials</li></Link>
        <Link to="/add-stock"><li>Add Stock</li></Link>
        <Link to="/reports"><li>Reports</li></Link>
        <Link to="/login"><li>Login</li></Link>
      </ul>
      <button>Login</button>
    </div>
  );
};

export default NavBar;
