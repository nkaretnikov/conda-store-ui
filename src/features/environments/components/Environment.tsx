import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Environment as EnvironmentModel } from "../../../common/models";
import { StyledIconButton } from "../../../styles";
import { getStylesForStyleType } from "../../../utils/helpers";

interface IEnvironmentProps {
  /**
   * @param environment environment
   * @param onClick click handler
   * @param selectedEnvironmentId id of the currently selected environment
   */
  environment: EnvironmentModel;
  onClick: () => void;
  selectedEnvironmentId: number | undefined;
}

export const Environment = ({
  environment,
  onClick,
  selectedEnvironmentId
}: IEnvironmentProps) => {
  const isSelected = selectedEnvironmentId === environment.id;

  const circleIconStyles = getStylesForStyleType(
    { width: "9px", height: "9px", color: isSelected ? "#454545" : "#5f6367" },
    { width: "9px", height: "9px", color: isSelected ? "#33A852" : "#B9D9BD" }
  );

  const buttonStyles = getStylesForStyleType(
    {
      textTransform: "none",
      fontSize: "13px",
      fontWeight: isSelected ? 600 : 400,
      color: "#454545"
    },
    {
      textTransform: "none",
      fontSize: "13px",
      fontWeight: isSelected ? 600 : 400,
      color: isSelected ? "#33A852" : "#454545"
    }
  );

  return (
    <>
      <ListItemIcon
        sx={{ width: "5px", minWidth: "auto", marginRight: "12px" }}
      >
        <CircleIcon sx={circleIconStyles} />
      </ListItemIcon>
      <StyledIconButton sx={buttonStyles} onClick={onClick}>
        {environment.name}
      </StyledIconButton>
    </>
  );
};
