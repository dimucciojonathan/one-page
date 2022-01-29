// src/Title.js

import React from 'react';
import './Header.css';

// mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Title() {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{boxShadow: "none",}} color="transparent" position="fixed">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Logo
            </Typography>
          </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Title