import React from "react";
import { Box, Typography } from "@mui/material";
import BasicList from "./List";
import NestedList from "./List";
import InsetList from "./List";

const LeftBlock = () => {
  return (
    <>
      <Box display={"flex"} flexDirection="column" gap={1}>
        <InsetList />
      </Box>
    </>
  );
};

export default LeftBlock;
