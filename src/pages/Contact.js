import React from "react";
import Typography from "@material-ui/core/Typography";
import InfoBox from "../components/InfoBox";
import { faLine } from "@fortawesome/free-brands-svg-icons/faLine";

const contact = [
  {
    primary: "bun17pansubkul",
    icon: faLine,
    href: "https://line.me/ti/p/j8voCm6Dmz",
  },
];

const Contact = () => {
  return (
    <>
      <Typography gutterBottom variant="h6">Contact Me</Typography>
      <InfoBox list={contact} />
    </>
  );
};

export default Contact;
