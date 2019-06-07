import React from 'react';
import { Link, Route} from 'react-router-dom';
import Search from './search.js';
import App from './App.js';
import './App.css';



class NavBar extends React.Component {
    render(){

        return(
            
            <div id ="nav">
                <Route exact={true} path="/" component={App}/>
                <Route exact={true} path="/Search" component={Search}/>
                <ul>
                 <li><Link to="/Search">Search For Gif</Link></li> 
                 <li><Link to="/App">Home</Link></li> 
                </ul>
            </div>
        )
    }

}

export default NavBar;