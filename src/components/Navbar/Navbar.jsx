import logo from "../../images/logo.png";

//css
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} />
      </div>
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
