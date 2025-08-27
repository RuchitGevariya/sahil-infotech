import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaFacebook,FaGlobe} from "react-icons/fa";
import { images } from "@/assets/assets";
const footer = () => {
  return (
    <div>
      <footer
        className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-white"
        style={{ backgroundColor: "#232930" }}
      >
        <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
          <div className="md:max-w-96">
            <img
              src={images.logoTm}
              style={{
                filter: "brightness(0) invert(1)",
              }}
              width={157}
              height={40}
              alt="logo"
            />
            <p className="mt-6 text-sm">
              We are a team of innovative developers at Sahil Infotech, building
              cutting-edge websites with the latest technologies to elevate your
              business.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/company/sahil-infotech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/sahil_infotech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/sahilinfotech06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600 transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.sahilinfotech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600 transition-colors duration-300"
              >
                <FaGlobe size={20} />
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col md:flex-row items-center md:items-start md:justify-end gap-10 md:gap-20 text-center md:text-left">
            <div>
              <h2 className="font-semibold mb-5">Company</h2>
              <ul className="text-sm space-y-2">
                <li>
                  <Link to="/" className="hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/works" className="hover:text-blue-600">
                    Works
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-600">
                    Contact-Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div>
              <h2 className="font-semibold mb-5">Our Services</h2>
              <ul className="text-sm space-y-2">
                {[
                  "UI/Ux Design",
                  "Web Design & Development",
                  "Full Stack Development",
                  "AI Services",
                  "DevOps Services",
                  "QA Testing",
                ].map((services, index) => (
                  <li
                    key={index}
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    <a href="#">{services}</a>
                  </li>
                ))}
              </ul>
            </div> */}
            <div>
              <h2 className="font-semibold mb-5">Get in touch</h2>
              <div className="text-sm space-y-2">
                <p className="hover:text-blue-500 transition-colors duration-300">
                  +91 90167-38858
                </p>
                <p className="hover:text-blue-500 transition-colors duration-300">
                  sahilinfotech@yahoo.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-4 text-center text-xs md:text-sm pb-5">
          Copyright 2024 © <a href="https://prebuiltui.com"> Sahil Infotech</a>.
          All Right Reserved.
        </p>
      </footer>
    </div>
  );
};

export default footer;
