import React, {Component} from 'react';
import './Container.css';
import Navbar from './../navbar/Navbar';

const LIST_DATA = [
    {
        icon: "home",
        title: "Home"
    },
    {
        icon: "bell",
        title: "Notification"
    }
];
class Container extends Component{

    render() {
        return(
            <div className="container">
                <Navbar listData={LIST_DATA}></Navbar>
                E-Fiction
            </div>
        );
    }
}

export default Container;