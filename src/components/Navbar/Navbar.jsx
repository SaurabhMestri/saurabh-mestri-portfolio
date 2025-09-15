import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useTheme from "../../context/theme";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { themeMode, darkTheme, lightTheme,} = useTheme();

  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    // { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? " bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className=" py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-orange-500">&lt;</span>
          <span className="">Saurabh</span>
          <span className="text-orange-500">/</span>
          <span >Mestri</span>
          <span className="text-orange-500">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 ">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-orange-500 ${activeSection === item.id ? "text-orange-500" : ""
                }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>


        <button
          onClick={() =>
            themeMode === "light" ? darkTheme() : lightTheme()
          }
          className="px-2 py-1 rounded flex items-center gap-2 hover:bg-rose-600 transition"
        >
          {themeMode}
          {themeMode === "light" ? (<FaMoon size={15}/>) : (<FaSun size={15}/>)}
        </button>


        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/SaurabhMestri"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-orange-500"
          >
            <FaGithub size={24} />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-500"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="bg-transparent absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4  ">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-rose-600" : ""
                  }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/codingmastr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;