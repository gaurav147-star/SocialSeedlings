// components/Layout.js
import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import DarkModeContext from "../context/DarkModeContext";
import { RiToggleLine, RiToggleFill } from "react-icons/ri";

const Layout = ({ children }) => {
  // Destructure the darkMode variable from the context
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  // Check if user has preferred dark mode enabled in their OS/browser settings
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDarkMode);
  }, []);

  // Update the body class based on the dark mode state
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const iconSize = 30;

  return (
    <>
      {/* Add a div with an onClick event to toggle dark mode */}
      <div className="toggleButton" onClick={toggleDarkMode}>
        {darkMode ? (
          <RiToggleFill size={iconSize} />
        ) : (
          <RiToggleLine size={iconSize} />
        )}
      </div>

      {/* Add a meta tag to control the theme color */}
      <Head>
        <meta name="theme-color" content={darkMode ? "#121212" : "#ffffff"} />
      </Head>

      {/* Add children components */}
      <div className={darkMode ? "dark" : "light"}>{children}</div>

      {/* Add global styles */}
      <style jsx global>{`
        body {
          /* Set default styles for both light and dark mode */
          background-color: ${darkMode ? "#121212" : "#ffffff"};
          color: ${darkMode ? "#ffffff" : "#000000"};
        }

        body.dark {
          /* Specific styles for dark mode */
        }

        body.light {
          /* Specific styles for light mode */
        }
      `}</style>
    </>
  );
};

export default Layout;
