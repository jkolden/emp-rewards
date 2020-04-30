import React, { useState, useContext, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import Card from "../components/Card";
import Data from "../assets/static/Data";

import { UserContext } from "../context/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  appBarSpacer: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    overflow: "auto",
  },
}));

export default function Home() {
  const { user } = useContext(UserContext);

  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.appBarSpacer} />
      <Grid
        container
        spacing={3}
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.root}
      >
        {Data.filter((star) => star.name === "Edward Norton").map((star) => (
          <Grid key={star.name}>
            <Card star={star} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
