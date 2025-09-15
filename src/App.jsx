import React, {  useEffect, useState } from "react";
import {
  Navbar,
  Footer,
  About,
  Contact,
  Skills,
  Education,
} from "./utils";
import BlurBlob from "./components/BlurBlob";
import ProjectList from "./components/Projects/Projects";
import { ThemeProdiver } from "./context/theme";

function App() {
  const [themeMode, setThemeMode ] = useState("light");
  
  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");
  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light","dark");
    document.querySelector("html").classList.add(themeMode);
  },[themeMode])
  return (
    <>
    <ThemeProdiver value={{themeMode,toggleTheme ,darkTheme,lightTheme}}>

    <div >
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative">
        <Navbar />
        <About />
        <Skills />
        {/* <Experience /> */}
        {/* <Work/> */}
        <ProjectList/>
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
    </ThemeProdiver>
    </>
  );
}

export default App;
