import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" style={{ position: "sticky", top: 0, zIndex: 50, borderRadius:"20px", padding:"20px",margin:"20px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <h1
          className="text-2xl font-bold text-blue-600"
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "Black",
            fontSize: "2rem",
            fontWeight: "bold",
            textDecoration: "none",
            fontFamily: "cursive",
          }}
        >
          <Link to="/">ShopEasy</Link>
        </h1>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="./ProductList"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;