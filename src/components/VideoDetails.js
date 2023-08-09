import React, { useEffect, useState } from "react";
import { CheckCircle } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";

import { fetchData } from "../utils/fetchAPIData";
import Videos from "./subComponents/Videos";

const VideoDetails = () => {
  const [videos, setVideos] = useState([]);
  const [videoContent, setVideoContent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchData(`/videos?part=snippet&id=${id}`).then((response) => {
      setVideoContent(response?.items?.[0]);
    });

    fetchData(`/search?part=snippet&relatedToVideoId=${id}`).then(
      (response) => {
        setVideos(response.items);
      }
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ sx: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            {videoContent && (
              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                {videoContent?.snippet?.title}
              </Typography>
            )}
            {videoContent && (
              <Stack
                sx={{ color: "#fff" }}
                justifyContent="space-between"
                direction="row"
                py={1}
                px={2}
              >
                <Link
                  style={{ color: "#fff" }}
                  to={`/channel/${videoContent?.snippet?.channelId}`}
                >
                  <Typography variant="subtitle1">
                    {videoContent?.snippet?.channelTitle}
                    <CheckCircle
                      sx={{ fontSize: 14, color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>
                <Stack direction="row" gap={3} alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(
                      videoContent?.statistics?.viewCount
                    ).toLocaleString()}{" "}
                    views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(
                      videoContent?.statistics?.likeCount
                    ).toLocaleString()}{" "}
                    likes
                  </Typography>
                </Stack>
              </Stack>
            )}
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
