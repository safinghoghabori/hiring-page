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
          <a href="javascript:void(0);">Home</a>
        </li>
        <li className="menuItems">
          <a href="javascript:void(0);">Services</a>
        </li>
        <li className="menuItems">
          <a href="javascript:void(0);">About Us</a>
        </li>
        <li className="menuItems">
          <a href="javascript:void(0);">News</a>
        </li>
        <li className="menuItems">
          <a href="javascript:void(0);">Blogs</a>
        </li>
        <li className="menuItems">
          <a href="javascript:void(0);">Careers</a>
        </li>
        <li className="menuItems">
          <a href="javascript:void(0);">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
