import { Stack } from "@mui/material";
import React from "react";

import { categories } from "../../utils/constants";

const SideBar = ({ category, setCategory }) => {
  return (
    <Stack
      sx={{
        overflow: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: {xs: "row", sm: "row", md: "column" },
      }}
    >
      {categories?.map((cate, i) => (
        <button
          key={i}
          className="category-btn"
          style={{
            color: "white",
            background: cate.name === category && "#FC1503",
            width: {sm: "152px"}
          }}
          onClick={() => {
            setCategory(cate.name);
          }}
        >
          <span
            style={{
              color: cate.name === category ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {cate.icon}
          </span>
          <span
            style={{
              opacity: cate.name === category ? "1" : "0.8",
            }}
          >
            {cate.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
