import "../homecomponents/nav.scss";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext";
import {useContext} from 'react'
import { signOutUser } from "../firebase_utitls/firebase_auth";

const Nav = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <>
    <div className="Navbar">
      <div className="logocontainer">
       <a href="./"><img
          alt="logo"
          className="logo"
          src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
        />
        </a>
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
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Signout
            </span>
          ) : (
            <Link to="/sign-in">Sign-in</Link>
          )}
            <Link to="/"> cart<i class="fa-solid fa-cart-shopping"></i> </Link>
        </div>
      </div>
      
    </div>
    <Outlet/>
    </>
  );
};

export default Nav;