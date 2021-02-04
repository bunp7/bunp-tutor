import React from "react";
import{ Drawer as MUIDrawer } from "@material-ui/core/";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 120;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    marginRight: theme.spacing(2),
  },
  drawerPaper: {
    width: drawerWidth
  }
}));

const Drawer = (props) => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      onClick: () => history.push("/bunp-tutor/"),
    },
    {
      text: "Notes",
      onClick: () => history.push("/bunp-tutor/notes"),
    },
    {
      text: "YouTube",
      onClick: () => history.push("/bunp-tutor/youtube"),
    },
    {
      text: "About",
      onClick: () => history.push("/bunp-tutor/about"),
    },
    {
      text: "Contact",
      onClick: () => history.push("/bunp-tutor/contact"),
    },
  ];
  return (
    <MUIDrawer variant='permanent' className={classes.drawer} classes={{paper: classes.drawerPaper}}>
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
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
