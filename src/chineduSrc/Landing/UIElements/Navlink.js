import React from "react";

import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">List of Authors</NavLink>
      </li>
      <li>
        <NavLink to="/ui/news">Get A Gift</NavLink>
      </li>
      <li>
        <NavLink to="/news/new">Login</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Create Account</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
