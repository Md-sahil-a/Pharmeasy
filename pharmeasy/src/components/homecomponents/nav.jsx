import "../homecomponents/nav.scss";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
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
      <div className="navigation">
        <>
        
        </>
        <div className="nav-links-container">
        <Link  to="/">
        order medicines
        </Link>
        <Link to="/home">Healthcare products</Link>
        <Link to="/home">Lab tests</Link>
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
            <Link to="/sign-in" className="nav-link">Sign-in</Link>
            <Link to="/"> cart<i class="fa-solid fa-cart-shopping"></i> </Link>
        </div>
      </div>
      
    </div>
    <Outlet/>
    </>
  );
};

export default Nav;