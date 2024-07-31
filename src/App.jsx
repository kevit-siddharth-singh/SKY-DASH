import { Routes, Route } from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import React, { useState } from "react";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
