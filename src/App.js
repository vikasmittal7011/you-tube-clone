import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Feed,
  Navbar,
  ChannelDetails,
  SearchFeed,
  VideoDetails,
} from "./components/index";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route exact path="/video/:id" element={<VideoDetails />} />
          <Route exact path="/channel/:id" element={<ChannelDetails />} />
          <Route exact path="/search/:searchTerm" element={<SearchFeed />} />
          <Route exact path="*" element={<Feed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
