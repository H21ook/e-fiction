import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="navbar">
                {
                    this.props.listData.map((item , i) => {
                      return <li>{item.title}</li>  
                    })
                }
            </div>
        );
    }
}

export default Navbar;