import React from "react";

import { Link } from "react-router-dom";

export const Movie = (props)=>{
    
    const {id, title, year, poster} = props


     return(
        
        <Link to={`detail/${id}`} className="card">
            <div className="card-image">
                <figure className="image">
                <img
                    src={poster}
                    alt="prueba"
                />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">             
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{year}</p>
                    </div>
                </div>              
            </div>
        </Link>
    )

    
}