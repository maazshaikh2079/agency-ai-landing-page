import React, { useState, useContext, useEffect } from "react";

import {
  logo_dark,
  logo,
  close_icon,
  menu_icon_dark,
  menu_icon,
  arrow_icon,
} from "../assets/assets.js";
import ThemeToggleButton from "./ThemeToggleButton.jsx";
import Backdrop from "./Backdrop.jsx";
import { ThemeContext } from "../context/theme-context.js";

const Navbar = () => {
  // const { mode, setMode } = useContext(ThemeContext);
  const theme = useContext(ThemeContext);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {sidebarOpen && <Backdrop onClick={() => setSidebarOpen(false)} />}

      <div className="border flex justify-between items-center px-4 min-[775px]:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
        <img
          src={theme.mode === "dark" ? logo_dark : logo}
          alt=""
          className="border w-32 min-[775px]:w-40 "
        />

        {/* <div
        className={`border text-gray-700 dark:text-white min-[775px]:text-sm ${!sidebarOpen ? "max-[775px]:w-0 overflow-hidden" : "max-[775px]:w-60 max-[775px]:pl-10"} max-[775px]:fixed top-0 bottom-0 right-0 max-[775px]:min-h-screen max-[775px]:h-full max-[775px]:flex-col max-[775px]:bg-primary max-[775px]:text-white max-[775px]:pt-20 flex min-[775px]:items-center gap-5 transition-all`}
      > */}
        <div
          //border
          className={`border text-gray-700 dark:text-white min-[775px]:text-sm top-0 bottom-0 right-0 flex min-[775px]:items-center gap-5 transition-all ${!sidebarOpen ? "max-[775px]:w-0 overflow-hidden" : "max-[775px]:w-60 max-[775px]:pl-10 max-[775px]:fixed  max-[775px]:min-h-screen max-[775px]:h-full max-[775px]:flex-col max-[775px]:bg-primary max-[775px]:text-white max-[775px]:pt-20"}`}
        >
          <img
            src={close_icon}
            alt=""
            className={`border w-5 absolute right-4 top-4 ${!sidebarOpen ? "hidden" : "min-[775px]:hidden"} `}
            onClick={() => setSidebarOpen(false)}
          />

          <a
            href="#"
            onClick={() => setSidebarOpen(false)}
            className="border min-[775px]:hover:border-b"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setSidebarOpen(false)}
            className="border min-[775px]:hover:border-b"
          >
            Services
          </a>
          <a
            href="#our-work"
            onClick={() => setSidebarOpen(false)}
            className="border min-[775px]:hover:border-b"
          >
            Our Work
          </a>
          <a
            href="#contact-us"
            onClick={() => setSidebarOpen(false)}
            className="border min-[775px]:hover:border-b"
          >
            Contact Us
          </a>
        </div>

        <div className="border flex items-center gap-2 min-[775px]:gap-4">
          <ThemeToggleButton />
          <img
            src={theme.mode === "dark" ? menu_icon_dark : menu_icon}
            alt=""
            onClick={() => setSidebarOpen(true)}
            className="border w-8 min-[775px]:hidden"
          />
          <a
            href="#contact-us"
            className="border text-sm max-[775px]:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
          >
            Connect{" "}
            <img src={arrow_icon} width={14} alt="" className="border" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
