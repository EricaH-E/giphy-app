import React from 'react';
import '../App.css';



const Gifs= props =>{
        const {gifUrl, alt} = props;
        return(
            <div >
                <img className="img-responsive" scr={gifUrl} alt={alt} />
            </div>
        )
}

export default Gifs;