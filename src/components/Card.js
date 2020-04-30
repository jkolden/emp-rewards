import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import classNames from "classnames";
import { TweenMax } from "gsap";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Card({ star, spinning, setSpinning }) {
  const [active, setActive] = useState();
  const [inTransition, setInTransition] = useState();
  const ref = React.createRef();

  const classes = useStyles();

  const cardClasses = classNames("material-card", `${active}`, `${star.color}`);

  const handleClick = () => {
    setSpinning(true);
    active == "mc-active" ? setActive("") : setActive("mc-active");
  };

  useEffect(() => {
    if (spinning) {
      TweenMax.to(ref.current, 0.05, {
        rotation: "+=360",
        transformOrigin: "50% 50%",
        yoyo: true,
        repeat: 7,
      });
    }
  });

  return (
    <React.Fragment>
      <div>
        <article className={cardClasses}>
          <h2>
            <span>{star.name}</span>
            <div className={classes.flex}>
              <StarIcon />
              {star.movie}
            </div>
          </h2>
          <div className="mc-content">
            <div className="img-container">
              <img className="img-responsive" src={star.img} />
            </div>
            <div className="mc-description">{star.description}</div>
          </div>

          <IconButton
            onClick={handleClick}
            className="mc-btn-action"
            aria-label="active"
            color="primary"
          >
            {active === "mc-active" ? (
              <ArrowBackIcon ref={ref} />
            ) : (
              <MenuIcon ref={ref} />
            )}
          </IconButton>
          <div className="mc-footer">
            <h4>{`Connect with ${star.first}:`}</h4>
            <a className="fa fa-fw fa-facebook">
              <FacebookIcon />
            </a>
            <a className="fa fa-fw fa-twitter">
              <TwitterIcon />
            </a>
            <a className="fa fa-fw fa-linkedin">
              <InstagramIcon />
            </a>
            <a className="fa fa-fw fa-google-plus">
              <LinkedInIcon />
            </a>
          </div>
        </article>
      </div>
    </React.Fragment>
  );
}
