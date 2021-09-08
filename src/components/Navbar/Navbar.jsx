import { useState } from "react";
import Menu from "../Menu/Menu";

import logo from "../../images/logo.png";
import hamburgerIco from "../../images/hamburger.png";

import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="menu-icon">
        <img
          src={hamburgerIco}
          alt="hamburger menu"
          height="30"
          width="30"
          className="hamburger-menu"
          onClick={() => setOpen(!open)}
        />
      </div>
      <Menu open={open} />
      <div className="menu">
        <ul>
          <li className="menuItems">Home</li>
          <li className="menuItems">Services</li>
          <li className="menuItems">About Us</li>
          <li className="menuItems">News</li>
          <li className="menuItems">Blogs</li>
          <li className="menuItems">Careers</li>
          <li className="menuItems">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
