import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchData } from "../utils/fetchAPIData";
import { Box, Typography } from "@mui/material";
import Videos from "./subComponents/Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchData(`/search?part=snippet&q=${searchTerm}`)
      .then((response) => {
        setVideos(response.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "95vh" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search results for:{" "}
          <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
