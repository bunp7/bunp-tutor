import React from "react";

import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { ListItemIcon } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// We can inject some CSS into the DOM.
const styles = (theme) => ({
  paper: {
    maxWidth: 600,
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
});

const makeListItem = (item, index) => {
  const { primary, secondary, icon, href } = item;
  console.log(icon)
  const children = (
    <React.Fragment>
      <ListItemIcon><FontAwesomeIcon icon={icon} size='2x' /></ListItemIcon>
      <ListItemText primary={primary} secondary={secondary} />
    </React.Fragment>
  );
  if (href) {
    return (
      <ListItem button key={index} component='a' href={href} target='_blank'>
        {children}
      </ListItem>
    );
  } else {
    return <ListItem key={index}>{children}</ListItem>;
  }
};

function InfoBox(props) {
  const { classes, title, list } = props;

  return (
    <Paper className={classes.paper}>
      <Typography variant='h5'>{title}</Typography>
      <List>{list.map((item, index) => makeListItem(item, index))}</List>
    </Paper>
  );
}

InfoBox.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  list: PropTypes.arrayOf(Object),
};

export default withStyles(styles)(InfoBox);
