import { useState } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import Fade from "react-reveal/Fade";

export default function FadingCard({ item, wait }) {
  return (
    <Fade left delay={wait}>
      <Box
        mb={2}
        display="flex"
        sx={{
          cursor: "pointer",
          borderRadius: "5px",
          padding: 1,
          "&:hover": {
            bgcolor: "rgba(0,0,0,0.1)",
          },
        }}
      >
        <Avatar variant="rounded" src={item.picture} sx={{ mr: 1 }} />
        <Box display="flex" flexDirection="column">
          <Typography fontSize="0.7rem" fontWeight="600">
            #{item.id}/{item.timestamp.substring(0, 2)}/
            {item.timestamp.substring(3, 5)}
          </Typography>
          <Typography fontSize=".55rem">{item.timestamp}</Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          sx={{ marginLeft: "auto" }}
          textAlign="center"
        >
          {item.innerPic && (
            <Avatar
              src={item.innerPic}
              sx={{
                width: "23px",
                height: "23px",
                ml: 7,
                mr: 3,
              }}
            />
          )}
          <Box display="flex" flexDirection="column">
            <Typography
              fontSize="0.7rem"
              fontWeight="600"
              color={item.finalNmbr < 0 && "orange"}
            >
              {item.finalNmbr}`
            </Typography>
            <Typography color="rgba(0,0,0,0.7)" fontSize=".55rem">
              {item.finalTime}pm
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
