import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AccountPage from './Components/AccountPage';
import FeedPage from './Components/FeedPage';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            <Router> 
                <div>
                    <Route exact path = "/" component = {FeedPage}/>
                    <Route path = "/AccountPage" component = {AccountPage} />
                    <Footer />
                </div>
            </Router> 
        );
    }
}
export default App;
