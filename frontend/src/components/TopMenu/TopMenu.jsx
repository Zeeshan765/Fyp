import React from "react";
import { Link } from "react-router-dom";
import Account from "../../Assets/account.png";
import Cart from "../../Assets/cart.png";
import "./TopMenu.css";

const TopMenu = () => {
  return (
    <div className="menu-container">
      <div className="left-part">
        <h3>Logo</h3>
      </div>
      <div className="middle-part">
        <ul>
          <li>
            <Link to="/" className="link-color">
              Home
            </Link>
          </li>
          <li>
            <Link to="/components" className="link-color">
              Components
            </Link>
          </li>
          <li>
            <Link to="/peripherals" className="link-color">
              Peripherals
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="link-color">
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="right-part">
        <Link to="/login">
          <img src={Account} alt="" />
        </Link>
        <Link to="/shop-cart">
          <img src={Cart} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default TopMenu;
