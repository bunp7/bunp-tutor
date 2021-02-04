import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Drawer from "./components/Drawer";
import Home from "./components/Home";
import Notes from "./components/Notes";
import YouTube from "./components/YouTube";
import Contact from "./components/Contact";
import About from "./components/About";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer />
      <Switch>
        <Route
          exact
          from='/bunp-tutor/'
          render={(props) => <Home {...props} />}
        />
        <Route
          exact
          path='/bunp-tutor/contact'
          render={(props) => <Contact {...props} />}
        />
        <Route
          exact
          path='/bunp-tutor/about'
          render={(props) => <About {...props} />}
        />
        <Route
          exact
          path='/bunp-tutor/notes'
          render={(props) => <Notes {...props} />}
        />
        <Route
          exact
          path='/bunp-tutor/youtube'
          render={(props) => <YouTube {...props} />}
        />
      </Switch>
    </div>
  );
}
