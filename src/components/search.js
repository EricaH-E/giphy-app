import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Gifs from '../views/gifs';



class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchParam: '',
            searchParam2:'',
            searchParam3:'',
            gifArray: []
        }
    }
    getParams =(event) =>{
        event.preventDefault();
        this.setState({searchParam: event.target.value});
    }
    getParams2 =(event) =>{
        event.preventDefault();
        this.setState({searchParam2: event.target.value});
    }
    getParams3 =(event) =>{
        event.preventDefault();
        this.setState({searchParam3: event.target.value});
    }

    getGifs = (event) => {
        event.preventDefault();
        const {apiKey} = this.props.location.state;
        let searchTerms = this.state.searchParam + "+" + this.state.searchParam2 + "+" + this.state.searchParam3;
        console.log(searchTerms);

   let url = 'http://api.giphy.com/v1/gifs/search?q='  + searchTerms + '&api_key=' + apiKey;
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
              <Gifs gifs = {g.images.original.url} alt={g.slug} key={g.id} />
            )
          });
        return(
            <div>
                <header><h1>Search For a Gif </h1></header>
                <Link to="/"><h3>Return to Trending</h3></Link>
                <br/>
                Enter up to 3 search term:
                <input type="text" onChange={this.getParams}  placeholder="term 1 (required) ..." required/>
                <input type="text" onChange={this.getParams2}  placeholder="term 2 ..."/>
                <input type="text" onChange={this.getParams3}  placeholder="term 3 ..."/>
                <button onClick={this.getGifs}>submit</button>
                <br />
                <br />
                {this.state.gifArray.length === 0 ? <h2>No Gifs to display</h2> :<div> <h2>Results:</h2> {gif}</div>}
            </div>
        )
    }
}

export default Search;