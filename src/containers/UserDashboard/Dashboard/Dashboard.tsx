import React from "react";
import { Box } from "@mui/material";
import LeftBlock from "./Blogs/LeftBlock";
import CenterContaent from "./Blogs/CenterContaent";
import RightBlock from "./Blogs/RightBlock";

const Dashboard = () => {
  return (
    <>
      <Box display="flex" justifyContent={"space-between"} margin="80px 20px ">
        <LeftBlock />
        <CenterContaent />
        <RightBlock />
      </Box>
    </>
  );
};

export default Dashboard;
