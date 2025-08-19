import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrustedBy from "./components/TrustedBy.jsx";
import Services from "./components/Services.jsx";
import OurWork from "./components/OurWork.jsx";
import Teams from "./components/Teams.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";

import { ThemeContext } from "./context/theme-context.js";

function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("themeMode")
      ? localStorage.getItem("themeMode")
      : "light"
  );

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <div className="border dark:bg-black relative">
        <Navbar />
        <Hero />
        <TrustedBy />
        <Services />
        <OurWork />
        <Teams />
        <ContactUs />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
