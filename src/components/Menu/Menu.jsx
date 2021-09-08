import "./menu.css";

const Menu = (props) => {
  let drawerClasses = ["side-drawer"];

  if (props.open) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li className="menuItems">
          <a href="#">Home</a>
        </li>
        <li className="menuItems">
          <a href="#">Services</a>
        </li>
        <li className="menuItems">
          <a href="#">About Us</a>
        </li>
        <li className="menuItems">
          <a href="#">News</a>
        </li>
        <li className="menuItems">
          <a href="#">Blogs</a>
        </li>
        <li className="menuItems">
          <a href="#">Careers</a>
        </li>
        <li className="menuItems">
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
