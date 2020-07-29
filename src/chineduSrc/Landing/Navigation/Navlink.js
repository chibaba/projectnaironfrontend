import React from "react";

import { NavLink } from "react-router-dom";

import "./Navlink.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">English</NavLink>
      </li>
      <li>
        <NavLink to="/ui/news">Get A Gift</NavLink>
      </li>
      <li>
        <NavLink to="/Login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Create Account</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
