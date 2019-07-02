import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const Header = () => (
    <div>
    <AppBar position="static" color="primary">
      <Toolbar>
        <div className = "LandingButtonWrapper">
          <div className = "LandingButton">
            <Typography variant="h6" style = {{alignment: 'inlineBlock', color: 'White'}}>
              Trader App
            </Typography>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);
export default Header;