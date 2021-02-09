import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Hidden from "@material-ui/core/Hidden";

import Typography from "@material-ui/core/Typography";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Divider from "@material-ui/core/Divider";

import Drawer from "@material-ui/core/Drawer";
import DrawerList from "./constants/DrawerList";

import Home from "./pages/Home";
import Notes from "./pages/Notes";
import YouTube from "./pages/YouTube";
import Contact from "./pages/Contact";
import About from "./pages/About";

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default function App(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <DrawerList />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.container}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            onClick={handleDrawerToggle}
            color='inherit'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Bun P Tutor
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp>
          <Drawer
            container={container}
            variant='temporary'
            classes={{ paper: classes.drawerPaper }}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <div onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
              {drawer}
            </div>
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact from='/' render={(props) => <Home {...props} />} />
          <Route
            exact
            path='/contact'
            render={(props) => <Contact {...props} />}
          />
          <Route exact path='/about' render={(props) => <About {...props} />} />
          <Route exact path='/notes' render={(props) => <Notes {...props} />} />
          <Route
            exact
            path='/youtube'
            render={(props) => <YouTube {...props} />}
          />
        </Switch>
      </main>
    </div>
  );
}
