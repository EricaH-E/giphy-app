import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Search from './components/search.js';
import Trending from './components/trending.js';




class App extends React.Component{
  render(){
    return(
      <Router>
          <div>
            <Route exact path="/" component={Trending}/>
            <Route exact path="/search"  component={Search} />
          </div>
        </Router>
    )
  }
}
  

export default App;