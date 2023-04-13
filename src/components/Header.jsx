import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="text-3xl text-red-400">this is Header</div>
      <div className="flex justify-evenly">
        <Link to="/cart">Cart</Link>
        <Link to="/">Home</Link>
        <Link to="/item">Item</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </>
  );
};

export default Header;
