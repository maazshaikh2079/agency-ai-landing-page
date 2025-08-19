import { useEffect, useContext } from "react";

import { sun_icon, moon_icon } from "../assets/assets.js";
import { ThemeContext } from "../context/theme-context.js";

const ThemeToggleButton = () => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    // Check localStorage first
    const savedThemeMode = localStorage.getItem("themeMode");

    if (savedThemeMode) {
      theme.setMode(savedThemeMode);
    }
    // Otherwise, fallback to system preference
    else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      theme.setMode(prefersDarkMode ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (theme.mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("themeMode", theme.mode);
  }, [theme.mode]);

  return (
    <>
      <button className="border">
        {theme.mode === "dark" ? (
          <img
            src={sun_icon}
            alt=""
            onClick={() => theme.setMode("light")}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
          />
        ) : (
          <img
            src={moon_icon}
            alt=""
            onClick={() => theme.setMode("dark")}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggleButton;
