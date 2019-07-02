import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AccountPage from './AccountPage';
import FeedPage from './FeedPage';
import { BottomNavigationAction } from '@material-ui/core';
import List from '@material-ui/icons/List';
import Button from '@material-ui/core/Button';
import AccountBox from '@material-ui/icons/AccountBoxOutlined';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    position: "absolute",
    bottom: 0,
    width: "100%",  
  }
}

class Footer extends React.Component{
    state = {
        value: 0,
    };
      
      handleChange = (event, value) => {
        this.setState({ value });
      };
    
      render() {
        const { value } = this.state;
        const { classes } = this.props;
        return (
          <div>
            <BottomNavigation
            value={value}
            onChange={this.handleChange}
            showLabels
            className = {classes.root}
            >
              <BottomNavigationAction component = { Link } to = "/" label="Feed" icon={<List />} />
              <BottomNavigationAction component = { Link } to = "/AccountPage" label="Account" icon={<AccountBox />} />
            </BottomNavigation>
          </div>
        );
      }
  }
    export default withStyles(styles)(Footer);