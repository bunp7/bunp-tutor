import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import avatar from "../images/photo_black.jpg";

const drawerWidth = 120;

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "200px",
    height: "200px",
    margin: "auto",
  },
  grid: {
    alignContent: "center",
    alignItems: "flex-start",
    justify: "center",
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    "& > *": {
      padding: theme.spacing(1),
    },
    "& .MuiTypography-body1": {
      textAlign: "center",
    },
  },
  
}));

const Home = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} md={4}>
        <Avatar src={avatar} className={classes.avatar} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography paragraph variant='body1'>
          Hi, I'm Bun and I'm a tutor.
        </Typography>
        <Typography paragraph variant='body1'>
          I teach IGCSE Maths, A Level Maths, A Level Further
          Maths, IB Math, SAT Math and Calculus.
        </Typography>
        <Typography paragraph variant='body1'>
          I have been tutoring for over 3 years and have done both face-to-face
          and online tutoring.
        </Typography>
        <Typography paragraph variant='body1'>
          I have achieved 5A* (A Level Maths, Further Maths,
          Physics, Chemistry and Biology)
        </Typography>
        <Typography paragraph variant='body1'>
          I have recently graduated from the London School of Economics (LSE) with a MSc (Merit) in
          Quantitative Methods in Risk Management (Department of Statistics) after previously graduating 
          from Imperial College London with a MEng (First Class Honours) in Biomedical Engineering.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
