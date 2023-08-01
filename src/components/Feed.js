import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import SideBar from "./subComponents/SideBar";
import Videos from "./subComponents/Videos";
import { fetchData } from "../utils/fetchAPIData";

const Feed = () => {
  const [selectedCate, setSelectedCate] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData(`/search?part=snippet&q=${selectedCate}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedCate]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar category={selectedCate} setCategory={setSelectedCate} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ color: "#fff", mt: 1.5 }}
        >
          Copyright 2023 My Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCate} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
