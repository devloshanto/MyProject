import React from "react";

import logo from "../image/brand_logo.png";

const Header = () => {
  return (
    <div>
      <div className="header py-5">
        <div className="container mx-auto">
          <div className="nav-wrapper flex justify-between items-center">
            <div className="logo">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="menu flex gap-9">
              <a
                href="#"
                className="text-xl font-medium hover:text-red-600 transition-all"
              >
                Menu
              </a>
              <a
                href="#"
                className="text-xl font-medium hover:text-red-600 transition-all"
              >
                Location
              </a>
              <a
                href="#"
                className="text-xl font-medium hover:text-red-600 transition-all"
              >
                About
              </a>
              <a
                href="#"
                className="text-xl font-medium hover:text-red-600 transition-all"
              >
                Contact
              </a>
            </div>
            <div className="nav-btn inline-block">
              <a
                href="#"
                className="text-xl text-white font-medium bg-red-600 py-3 px-7 rounded-lg hover:bg-red-500  transition-colors"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
