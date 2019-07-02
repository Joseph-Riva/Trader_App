import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Users from '../db';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
const styles = {
    userID: {
        marginTop: 12,
        flexGrow: .5,
    },
    favBrand: {
        flexGrow: .6,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
      },
      gridList: {
        width: 500,
        height: 450,
      },
      accountSpacer: {
        height: 10,
      },
    
}
class AccountPage extends React.Component{
    render() {
        this.state = {
            users: Users,
            key: 0,

        }
        const {classes} = this.props;
        return(
            <div>
                <Header />
                    <div className = "content">
                            <div className = "accountHeading">
                                <Typography className = {classes.userID} variant = "h3">{this.state.users[this.state.key].Userid}</Typography>
                                <Typography className = {classes.favBrand} variant = "body2" > Favorite Brand: {this.state.users[this.state.key].FavBrand}</Typography>
                            </div>
                            <div className = {classes.accountSpacer}></div>
                            <div className = {classes.root}>
                            <GridList cellHeight={180} className={classes.gridList}>
                                {this.state.users[this.state.key].Posts.map(post => (
                                    <GridListTile key={post.Url}>
                                        <img src={post.Url} alt={post.description} />
                                        <GridListTileBar
                                        title={post.Description}
                                        />
                                    </GridListTile>
                                ))}
                            </GridList>
                            </div>
                    </div>
            </div>
        )
    }
}
export default withStyles(styles)(AccountPage);

