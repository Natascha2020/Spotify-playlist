import React from "react";
//import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
//import Box from "@material-ui/core/Box";
//import Container from "@material-ui/core/Container";
//import Avatar from "@material-ui/core/Avatar";
import "./FixedHeader.css";

function FixedHeader(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

//Creating header and using selected song-data which were passed as updated value(useState) from Playlist-View
export default function ElevateAppBar(props) {
  return (
    <>
      <CssBaseline />
      <FixedHeader {...props} className="fixed-header">
        <AppBar>
          <Toolbar className="fixed-header-toolbar">
            {props.playedSong ? (
              <Typography variant="h6" className="playing">
                {props.title}
              </Typography>
            ) : (
              <Typography variant="h6">{props.title}</Typography>
            )}
            {props.playedSong ? (
              <div>
                <img className="song-image" src={props.playedSong.image} alt={"Cover for " + props.playedSong.title} />
                <div className="song-details">
                  <div className="song-title">{props.playedSong.title}</div>
                  <div className="song-artist">by {props.playedSong.author}</div>
                </div>
              </div>
            ) : (
              ""
            )}
          </Toolbar>
        </AppBar>
      </FixedHeader>
      <Toolbar />
    </>
  );
}
