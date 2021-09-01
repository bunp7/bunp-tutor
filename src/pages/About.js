import React from "react";
import InfoBox from "../components/InfoBox";
import Typography from "@material-ui/core/Typography";

import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faFlag } from "@fortawesome/free-solid-svg-icons/faFlag";
import { faUniversity } from "@fortawesome/free-solid-svg-icons/faUniversity";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

const personal = [
  {
    primary: "Chanat Pansubkul",
    secondary: "Bun",
    icon: faUser,
  },
  { primary: "Thai", icon: faFlag },
];

const education = [
  {
    primary: "London School of Economics",
    secondary: "MSc Quantitative Methods for Risk Management (Merit)",
    icon: faUniversity,
  },
  {
    primary: "Imperial College London",
    secondary: "MEng Biomedical Engineering (1st Class Honours)",
    icon: faUniversity,
  },
  {
    primary: "King's College, New Zealand",
    secondary: "CIE IGCSE and A Levels",
    icon: faSchool,
  },
];

const About = () => {
  return (
    <>
      <Typography gutterBottom variant="h6">About Me</Typography>
      <InfoBox title='Personal Information' list={personal} />
      <InfoBox title='Education' list={education} />
    </>
  );
};

export default About;
