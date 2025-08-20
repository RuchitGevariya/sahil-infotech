import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import ContactUS from "./Pages/ContactUS";
import ProjectPage from "./Pages/ProjectPage";
import ProjectDetailed from "./Pages/ProjectDetailed";
import {Toaster} from "react-hot-toast"
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
     <div>
      <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/works" element={<ProjectPage />} />
            <Route path="/works/:id" element={<ProjectDetailed />} />
            <Route path="/contact" element={<ContactUS />} />
          </Routes>
          </main>
        <Footer />
      </div>
  );
};

export default App;
