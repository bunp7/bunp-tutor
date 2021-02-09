import React from "react";
import InfoBox from "../components/InfoBox";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const channels = [
  {
    primary: "Bun P Tutoring",
    icon: faYoutube,
    href: "https://www.youtube.com/channel/UCBiZpQeL5-yWGXW0eQA-p4A"
  },
];

const YouTube = (props) => {
  return (
    <>
      <InfoBox title='YouTube Channel' list={channels} />
    </>
  );
};

export default YouTube;
