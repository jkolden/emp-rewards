import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import Card from "../components/Card";
import Data from "../assets/static/Data";
import Badge from "../components/Badge";

import { UserContext } from "../context/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-around",
  },
  child: {
    width: "330px",
    margin: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  container: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.up("sm")]: {
    // styles
  },

  appBarSpacer: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    overflow: "auto",
  },
}));

export default function Settings() {
  const [spinning, setSpinning] = useState(false);
  const { user } = useContext(UserContext);
  const classes = useStyles();

  const paperClasses = classNames(classes.paper, classes.fixedHeight);

  return (
    <React.Fragment>
      <div className={classes.appBarSpacer} />
      <Container>
        <h1>Celebrate Me</h1>
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={paperClasses}>
              <Badge title={"Personal Award Points"} value={20} icon="star" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={paperClasses}>
              <Badge title="Current Nominations" value={2} icon="flash" />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <h1>Recent Award Winners</h1>
      <div className={classes.root}>
        {Data.map((star) => (
          <div key={star.name} className={classes.child}>
            <Card star={star} spinning={spinning} setSpinning={setSpinning} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
