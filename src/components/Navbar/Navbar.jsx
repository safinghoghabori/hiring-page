import { useState } from "react";
import Menu from "../Menu/Menu";

import logo from "../../images/logo.png";
import hamburgerIco from "../../images/hamburger.png";
import hamburgerClose from "../../images/hamburger-close.png";

import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="menu-icon">
        {!close && (
          <img
            src={hamburgerIco}
            alt="hamburger menu"
            height="30"
            width="30"
            className="hamburger-menu"
            onClick={() => {
              setOpen(!open);
              setClose(true);
            }}
          />
        )}
        {close && (
          <img
            src={hamburgerClose}
            alt="hamburger menu"
            height="30"
            width="30"
            className="hamburger-menu"
            onClick={() => {
              setClose(!close);
              setOpen(false);
            }}
          />
        )}
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
