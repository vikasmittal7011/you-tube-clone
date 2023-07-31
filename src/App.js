import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {Navbar} from "./components/index"

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element />
          <Route exact path="/video/:id" element />
          <Route exact path="/channel/:id" element />
          <Route exact path="/search/:searchTerm" element /> */}
          <Route exact path="*" element />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
