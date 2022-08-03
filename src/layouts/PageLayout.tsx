import React from "react";
import Box from "@mui/material/Box";
import { Environments } from "src/features/environments";
import { mockEnvironments } from "src/features/environments/mocks";
import { ArtifactsList } from "src/features/artifacts";
import { Typography } from "@mui/material";
import { PageTabs } from "src/features/tabs";

const artifactsList = [
  {
    name: "Link to lockfile",
    route: "/api/v1/build/{build_id}/lockfile/"
  },
  {
    name: "Link to yml file",
    route: "/api/v1/build/{build_id}/yaml/"
  },
  {
    name: "Link to archive",
    route: "/api/v1/build/{build_id}/archive/"
  },
  {
    name: "Conda Env {build_id} log",
    route: "/api/v1/build/{build_id}/logs"
  }
];

export const PageLayout = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Environments list={mockEnvironments} />
      <Box sx={{ borderTop: "1px solid #A7A7A7", width: "100%" }}>
        <PageTabs />
        <Box
          sx={{
            border: "1px solid #000",
            width: "100%",
            marginTop: "-1px"
          }}
        >
          <Box sx={{ padding: "12px" }}>
            <Box sx={{ height: "500px" }}>
              <Typography>Environment Details</Typography>
            </Box>
            <ArtifactsList artifacts={artifactsList} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
