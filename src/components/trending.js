import React from 'react';
import axios from 'axios';
import Gifs from '../views/gifs';
import {Link} from 'react-router-dom';


class Trending extends React.Component{
    constructor(props){
        super(props);
        this.state={
              gifArray:[],
              apiKey: 'lEeAl251CSrVRY42fBIWkhBJpCtrApGX',
              requestSearch: false
        }
    
        
      }
      componentDidMount(){
        let url = 'http://api.giphy.com/v1/gifs/trending?api_key=' + this.state.apiKey;
        axios.get(url)
                .then(response =>{
                  this.setState({gifArray: response.data.data})
                  console.log(this.state.gifArray);
                })
                .catch(error=>{
                    console.log(error);
                }) 
              
      }
     
      render(){
          const gif = this.state.gifArray.map( g =>{
            return(
              <Gifs gifUrl = {g.images.original.url} alt={g.slug} key={g.id} />
            )
          });
    
        return(
          <div>
            <header> <h1>GIFS</h1></header>
            <Link to={{ pathname:"/search", state: { apiKey:this.state.apiKey} }}><h3>Search for a Gif</h3></Link>
            {this.state.gifArray.length === 0 ? <p>No Trending Gifs to display</p> :<div> <h2>Trending:</h2> {gif}</div>}
            </div>
        )
      }
    }


export default Trending;