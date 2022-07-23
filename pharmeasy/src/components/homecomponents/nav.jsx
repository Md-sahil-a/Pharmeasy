import "../homecomponents/nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Navbar">
      <div className="logocontainer">
        <img
          alt="logo"
          className="logo"
          src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
        />
        <div id="search">
          <input
            type="text"
            id="search_bar"
            placeholder="search medicines/Healthcare products"
          />
          <i class="fa-solid fa-magnifying-glass" id="search_icon"></i>
        </div>
      </div>
      <div className="subNav">
       

      </div>
    </div>
  );
};

export default Nav;
