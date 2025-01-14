import React from "react";

import logo from "../image/brand_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header mt-6">
        <div className="container mx-auto">
          <div className="nav-wrapper flex justify-between items-center">
            <div className="logo">
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="menu flex gap-9">
              <Link
                to={"/"}
                className="text-xl font-medium hover:text-red-600 transition-all"
              >
                Home
              </Link>
              <Link
                to={"/About"}
                className="text-xl font-medium hover:text-red-600 transition-all"
              >
                About
              </Link>
              <Link
                to={"/Works"}
                className="text-xl font-medium hover:text-red-600 transition-all"
              >
                Work
              </Link>
              <Link
                to={"/Blog"}
                className="text-xl font-medium hover:text-red-600 transition-all"
              >
                Blog
              </Link>
              <Link
                to={"/Contact"}
                className="text-xl font-medium hover:text-red-600 transition-all"
              >
                Contact
              </Link>
            </div>
            <div className="nav-btn inline-block">
              <Link
                to="/"
                className="text-xl text-white font-medium bg-red-600 py-3 px-7 rounded-lg hover:bg-red-500  transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
