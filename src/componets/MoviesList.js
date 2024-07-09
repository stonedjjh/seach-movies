import React from "react";
import { Movie } from "./Movie";

export function MoviesList(props){
    const {movies} = props  
    return (
        <div className="MoviesList">    
        {
            movies.map(movie=>{
            return (
                <div key ={movie.imdbID} className="MovieList-item">
                <Movie                     
                    id={movie.imdbID}
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}>
                </Movie>
                </div>
            )
            })          
        }
        </div>    

    )

}