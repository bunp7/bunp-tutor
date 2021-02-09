import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withRouter } from "react-router-dom";

const DrawerList = (props) => {
  const { history } = props;

  const itemsList = [
    {
      text: "Home",
      onClick: () => history.push("/"),
    },
    {
      text: "Notes",
      onClick: () => history.push("/notes"),
    },
    {
      text: "YouTube",
      onClick: () => history.push("/youtube"),
    },
    {
      text: "About",
      onClick: () => history.push("/about"),
    },
    {
      text: "Contact",
      onClick: () => history.push("/contact"),
    },
  ];
  return (
    <List>
      {itemsList.map((item, index) => {
        const { text, onClick } = item;
        return (
          <ListItem button key={text} onClick={onClick}>
            <ListItemText primary={text} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default withRouter(DrawerList);
