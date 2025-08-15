import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "@headlessui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import {images} from "@/assets/assets"
import { NavLink} from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
               <NavLink to="/">
          <img src={images.logo} width={157} height={40} alt="Logo" />
        </NavLink>


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/works" className={linkClass}>Works</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact-Us</NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg px-4 py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
         <NavLink to="/" className={`${linkClass} block py-2`} onClick={() => setIsOpen(false)}>Home</NavLink> 
          <NavLink to="/works" className={`${linkClass} block py-2`}  onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" className={`${linkClass} block py-2`}  onClick={() => setIsOpen(false)}>Contact-Us</NavLink>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
