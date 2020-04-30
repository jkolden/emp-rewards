import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  nav: {
    position: "absolute",
    overflow: "hidden",
    top: "80px",
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 9,
    padding: "0 20px",
    transitionDuration: "0.66s",
    transitionTimingFunction: "swing",
    WebkitTransform: "translateY(100%)",
  },
  animate: {
    WebkitTransform: "translateY(0%)",
  },
}));

export default function NavMenu({ open }) {
  const classes = useStyles();
  const navClasses = classNames(classes.nav, classes.animate);

  return (
    <div>
      <nav className={navClasses}>
        <ul>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
