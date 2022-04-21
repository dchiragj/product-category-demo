import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/header";
import ConfigRoute from "./ConfigRoutes/ConfigRoute";

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="font-sans bg-primary box-border"
        style={{ minHeight: "100vh" }}
      >
        <div className="container mx-auto">
          <Navbar />
          <ConfigRoute />
        </div>
      </div>
      </BrowserRouter>
  );
};

export default App;
