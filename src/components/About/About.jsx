import React from "react";
import Profile from '../../assets/profile/profile.png'

const About = () => {
  return (
    <section
      id="about"
      className="fade-in py-4 px-10 md:px-50 lg:px-50 font-sans pb-20 lg:pb-20 pt-20 sm:pt-10 md:pt-20 lg:pt-35 "
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-xl sm:text-4xl md:text-2xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-2xl sm:text-5xl md:text-4xl font-bold text-white mb-1 lg:mb-4 leading-tight">
           Saurabh Mestri
          </h2>
          {/* Skills */}
          <h3 className="text-2xl sm:text-2xl md:text-2xl font-semibold mb-4 text-orange-500 leading-tight">
            Front-End Developer | Coder
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 lg:mb-10 mt-2 lg:mt-8 leading-relaxed">
           I am a passionate Frontend Developer eager to begin my career in creating responsive and user-friendly web applications. Skilled in modern technologies like HTML, CSS, JavaScript, React, and Next.js, I focus on building clean, efficient, and visually appealing user interfaces
          </p>
          {/* Resume Button */}
          <a
            href=""
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-white px-1.5 py-2 lg:py-3 lg:px-8 rounded-full mt-5 text-sm font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, orange, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        
        <div className="md:w-2xl flex justify-center md:justify-end">
          <img
            src={Profile}
            alt=""
            className="w-40 h-40 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-full object-contain border-4 border-purple-700 shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
