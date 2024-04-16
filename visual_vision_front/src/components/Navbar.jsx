"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { logo } from "../../public/assets";

const Navbar = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Visual Vision WEB", href: "/classifier" },
    { name: "Documentation", href: "/doc" },
    { name: "About Us", href: "/about" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-deep-700 border-gray-200 shadow-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://i.postimg.cc/FK6QK1yW/logo-3.png"
            className="h-8 w-8"
            alt="Logo"
          />
          <span className="self-center text-2xl  whitespace-nowrap text-gray-200 font-oswald font-semibold">
            Visual vision
          </span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>

          <IoMenu className="w-8 h-8" />
        </button>
        <div
          className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block py-2 px-3 md:text-gray-200 rounded md:border-0 md:p-0 text-gray-900 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
