import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import { logo } from "../utils/constants";
import SearchBar from "./subComponents/SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    p={2}
    alignItems="center"
    sx={{
      background: "#000",
      position: "sticky",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
