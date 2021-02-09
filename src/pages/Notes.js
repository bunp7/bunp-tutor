import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Link from "@material-ui/core/Link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const cieIgcseMaths = [
  {
    id: "E1",
    name: "Numbers",
    subtopics: [],
  },
  {
    id: "E2",
    name: "Algebra and Graphs",
    subtopics: [
      {
        id: "E2.5",
        description: "Derive and solve linear equations",
        youtube: (
          <React.Fragment>
            <Link href='https://youtu.be/ecEhTje78eM' target="_blank" rel="noopener" color="inherit">
              <FontAwesomeIcon icon={faYoutube} /> Linear equations
            </Link>
          </React.Fragment>
        ),
      },
      {
        id: "E2.5",
        description: "Derive and solve quadratic equations",
        youtube: (
          <React.Fragment>
            <Link href='https://youtu.be/yCjj1Zy7h_Y' target="_blank" rel="noopener" color="inherit">
              <FontAwesomeIcon icon={faYoutube} /> Solving quadratics: Intro
            </Link>
            <br/>
            <Link href='https://youtu.be/Jj2gHMoySFw' target="_blank" rel="noopener" color="inherit">
              <FontAwesomeIcon icon={faYoutube} /> Solving quadratics: Factorising
            </Link>
            <br/>
            <Link href='https://youtu.be/4uSd3N1DgrQ' target="_blank" rel="noopener" color="inherit">
              <FontAwesomeIcon icon={faYoutube} /> Solving quadratics: Completing the square
            </Link>
          </React.Fragment>
        ),
      },
    ],
  },
  {
    id: "E3",
    name: "Coordinate Geometry",
    subtopics: [],
  },
  {
    id: "E4",
    name: "Geometry",
    subtopics: [],
  },
  {
    id: "E5",
    name: "Mensuration",
    subtopics: [],
  },
  {
    id: "E6",
    name: "Trigonometry",
    subtopics: [],
  },
  {
    id: "E7",
    name: "Vectors and Transformations",
    subtopics: [],
  },
  {
    id: "E8",
    name: "Probability",
    subtopics: [],
  },
  {
    id: "E9",
    name: "Statistics",
    subtopics: [],
  },
];
const useStyles = makeStyles((theme) => ({
  container: {
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      width: 750,
      flexShrink: 0,
    },
  },
}));

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.id}
        </TableCell>
        <TableCell>{row.name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Table size='small'>
                <TableHead>
                  <TableRow>
                    <TableCell>Subtopic</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Youtube Videos</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.subtopics.map((subtopic, index) => (
                    <TableRow key={index}>
                      <TableCell scope='row'>{subtopic.id}</TableCell>
                      <TableCell>{subtopic.description}</TableCell>
                      <TableCell>{subtopic.youtube}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const Notes = (props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell>Topic</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cieIgcseMaths.map((row, index) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Notes;
