import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory, Link } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => {
  // let img = <img src="avatar.png" alt="User avatar"></img>
  // if(hasHiddenAuthButtons){
  //   img = <img src="logo_light.svg" alt="QKart-icon"></img>
  // }
  const history = useHistory();
  const register = (event) => {
    history.push("/register", { from: "Login" });
  };

  const login = (event) => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("balance");
    history.push("/login", { from: "Login" });
    window.location.reload();
  };

  const product = () => {
    history.push("/", { from: "Login" });
  };

  let loggedIn;
  if (hasHiddenAuthButtons != true) {
    if (localStorage.username && localStorage.username.length > 0) {
      loggedIn = (
        <Stack direction="row" spacing={2}>
          <img src="avatar.png" alt={localStorage.username} />
          <h4 className="title">{localStorage.username}</h4>
          <Button
            className="explore-button"
            onClick={(e) => login()}
            variant="text"
          >
            Logout
          </Button>
        </Stack>
      );
    } else {
      loggedIn = (
        <Stack direction="row" spacing={2}>
          <Button
            className="explore-button"
            onClick={(e) => login()}
            variant="text"
          >
            Login
          </Button>
          <Button
            className="button"
            variant="contained"
            onClick={(e) => register()}
          >
            Register
          </Button>
        </Stack>
      );
    }
  } else {
    loggedIn = (
      <Button
        className="explore-button"
        startIcon={<ArrowBackIcon />}
        variant="text"
        onClick={(e) => product()}
        name="back to explore"
      >
        Back to explore
      </Button>
    );
  }
  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      {children}
      {loggedIn}
    </Box>
  );
};

export default Header;
