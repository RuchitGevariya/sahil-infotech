import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { images } from "@/assets/assets";
import { Drawer } from "antd";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `hover:text-blue-600 transition-colors ${
      isActive ? "text-blue-600 font-semibold" : "text-gray-700"
    }`;



  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <NavLink to="/">
          <img src={images.logoTm} className="h-10 w-auto" alt="Logo" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center relative">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          {/* Services Dropdown (showcase only) */}
<div className="relative group">
  <span className="cursor-pointer text-gray-700 transition-colors">
    Services
  </span>

  <div
    className="absolute left-0 mt-2 opacity-0 scale-95 invisible 
               group-hover:opacity-100 group-hover:scale-100 group-hover:visible
               bg-white/90 backdrop-blur-md shadow-lg rounded-md 
               w-64 p-4 z-50 transition-all duration-300 ease-in-out"
  >
    <h3 className="font-semibold text-gray-900 mb-2">Our Services</h3>
    <ul className="space-y-2">
      {services.map((service, index) => (
        <li key={index} className="text-gray-700 cursor-default">
          {service}
        </li>
      ))}
    </ul>
  </div>
</div>

<NavLink to="/works" className={linkClass}>
            Works
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact-Us
          </NavLink>
        </div>
        {/* Mobile Drawer Trigger */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setDrawerOpen(true)}
        >
          <FaBars size={24} />
        </div>
      </div>

      {/* Ant Design Drawer (Mobile Full Menu) */}
      <Drawer
        title={<img src={images.logoTm} className="h-8 w-auto" alt="Logo" />}
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/"
              className="block text-gray-700 hover:text-blue-600 text-lg"
              onClick={() => setDrawerOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/works"
              className="block text-gray-700 hover:text-blue-600 text-lg"
              onClick={() => setDrawerOpen(false)}
            >
              Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="block text-gray-700 hover:text-blue-600 text-lg"
              onClick={() => setDrawerOpen(false)}
            >
              Contact-Us
            </NavLink>
          </li>
          {/* Services showcase (plain list) */}
          <li>
            <h3 className="font-semibold text-gray-900">Our Services</h3>
            <ul className="pl-2 mt-2 space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-600">
                  {service}
                </li>
              ))}
            </ul>
          </li>

         
        </ul>
      </Drawer>
    </motion.nav>
  );
};

export default Navbar;
