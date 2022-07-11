import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import Box from "@mui/material/Box";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  StyledAccordionExpandIcon,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledAccordionTitle
} from "src/styles";
import DependenciesItem from "./DependenciesItem";
import { Dependency } from "src/common/models";

interface IDependenciesProps {
  dependencies: Dependency[];
}

const Dependencies = ({ dependencies }: IDependenciesProps) => {
  const [list, setList] = useState(dependencies);
  const listLength = list.length;

  const nextDependencies = [
    {
      id: Math.random(),
      channel: {
        id: 2,
        name: "https://conda.anaconda.org/conda-forge",
        last_update: null
      },
      build: "pyhd8ed1ab_0",
      license: "Apache-2.0",
      sha256:
        "4da0fe03babc950532513e9165dbc337a663880352392f496992776608dd77ca",
      name: "asttokens",
      version: "2.0.5",
      summary:
        "The asttokens module annotates Python abstract syntax trees (ASTs) with the positions of tokens and text in the source code that generated them."
    },
    {
      id: Math.random(),
      channel: {
        id: 2,
        name: "https://conda.anaconda.org/conda-forge",
        last_update: null
      },
      build: "pyh9f0ad1d_0",
      license: "BSD-3-Clause",
      sha256:
        "ee62d6434090c1327a48551734e06bd10e65a64ef7f3b6e68719500dab0e42b9",
      name: "backcall",
      version: "0.2.0",
      summary: "Specifications for callback functions passed in to an API"
    },
    {
      id: Math.random(),
      channel: {
        id: 2,
        name: "https://conda.anaconda.org/conda-forge",
        last_update: null
      },
      build: "pyh9f0ad1d_0",
      license: "BSD-3-Clause",
      sha256:
        "ee62d6434090c1327a48551734e06bd10e65a64ef7f3b6e68719500dab0e42b9",
      name: "backcall",
      version: "0.2.0",
      summary: "Specifications for callback functions passed in to an API"
    }
  ];

  const addDependencies = () => {
    if (list.length <= 15) {
      setList(list.concat(nextDependencies));
    }
  };

  return (
    <Accordion sx={{ maxWidth: "490px", boxShadow: "none" }} disableGutters>
      <StyledAccordionSummary expandIcon={<StyledAccordionExpandIcon />}>
        <StyledAccordionTitle>
          Packages Installed as Dependencies
        </StyledAccordionTitle>
      </StyledAccordionSummary>
      <StyledAccordionDetails
        id="infScroll"
        sx={{ padding: "15px 40px", maxHeight: "100px" }}
      >
        <InfiniteScroll
          hasMore={true}
          loader={null}
          dataLength={listLength}
          next={addDependencies}
          scrollableTarget="infScroll"
        >
          {list.map((dependency, index) => (
            <Box
              key={dependency.id}
              sx={{ marginBottom: index === listLength - 1 ? "0px" : "20px" }}
            >
              <DependenciesItem dependency={dependency} />
            </Box>
          ))}
        </InfiniteScroll>
      </StyledAccordionDetails>
    </Accordion>
  );
};

export default Dependencies;
