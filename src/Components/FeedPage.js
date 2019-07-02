import React, { Component } from 'react';
import '../App.css';
import Divider from '@material-ui/core/Divider';
import Header from './Header';
import Footer from './Footer';
import Users from '../db';
import Post from './Post';
import { withStyles } from '@material-ui/core/styles';
const setPosts = () => {
    let postsCopy = [];
    for(var i = 0; i < Users.length; i++){
        for(var j = 0; j < Users[i].Posts.length; j++){
            var cur = Users[i].Posts[j];
            postsCopy.push(cur);
        }
    }
    //console.log("Posts array length: " + postsCopy.length);
    //console.log("Users length " + Users[0].Posts.length);
    return postsCopy;
}
var posts = setPosts(); 

class FeedPage extends React.Component{ 
    makeFeed = () => {
        let feed = []; 
        for( let i = 0; i < posts.length; i++){
            feed.push(
            <div className = "Post">
                <Post curPost = {posts[i]} />
                <div className = "postSpacer"></div>   
            </div> 
            )
        }
        return feed;
    }
    render() {
        return(
            <div>
                <Header />
                    <div className = "content">
                        {this.makeFeed()}
                    </div>
            </div>
        )
    }
}
export default FeedPage;
