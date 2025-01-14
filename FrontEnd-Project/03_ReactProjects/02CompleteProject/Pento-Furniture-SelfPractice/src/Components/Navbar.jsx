import React from "react";
import { Link, NavLink } from "react-router-dom";

// Store NavBAr In Array
const NavItemList = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
];

//   Create NavItems
const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {NavItemList.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-primary text-bold" : "hover:text-primary"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
const Navbar = () => {
  return (
    <header>
      <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4">
        {/* Logo */}
        <Link to="/" className="font-bold">
          Logo
        </Link>

        {/* Desktop menu */}
        <div className="menu hidden md:flex">
          <NavItems />
        </div>
        {/* cart Icons */}
        <div>Cart</div>
      </nav>
    </header>
  );
};

export default Navbar;
