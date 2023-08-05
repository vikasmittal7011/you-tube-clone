import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchData } from "../utils/fetchAPIData";
import ChannelCard from "./subComponents/ChannelCard";
import Videos from "./subComponents/Videos";

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData(`/channels?part=snippet&id=${id}`)
      .then((response) => {
        setChannelDetail(response?.items?.[0]);
      })
      .catch((err) => {
        console.log(err);
      });

    fetchData(`/search?part=snippet&channelId=${id}&order=date`)
      .then((response) => {
        setChannelVideos(response?.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 0, 1) 0%, rgba(0, 188, 212, 1) 50%, rgba(238, 130, 238, 1) 100%)",
            height: "300px",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} margin={true} />
      </Box>
      <Box display="flex" p="2" margin="auto" justifyContent="center" alignItems="center">
        <Videos videos={channelVideos} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
