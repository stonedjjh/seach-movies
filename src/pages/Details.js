import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonBackToHome } from "./ButtonBackToHome";

const API_KEY = '62a96780'



export function Details (){
    let params = useParams();    
    const id = params.id;
    const [movie,setMovie] = useState([])    
    

    useEffect(() => {
        
        _fetchMovie(id)
      }, [id]);
    

    function _fetchMovie(id){     
        console.log("id "+id)   
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res=>res.json())
        .then(movie =>{                       
            setMovie(movie)  
            
        })        

    }

    
    const {Title, Actors, Metascore, Poster, Plot} = movie    
    return(    
        <div>
            
            <ButtonBackToHome/>
            <p className="title">Detail Page</p>
            <table className="table" style={{'text-align': 'left'}}>
                <tr>
                    <th>Title:</th>
                    <td><h1>{Title}</h1></td>
                </tr>
                <tr>
                    <td colSpan={2} style={{'text-align': 'center'}}><img src={Poster} alt="movie cover"/></td>
                </tr>
                <tr>
                    <th>Actors:</th>
                    <td><h3>{Actors}</h3></td>
                </tr>   
                <tr>
                    <th>Metascore:</th>
                    <td><h3>{Metascore}</h3></td>
                </tr>    
                <tr>
                    <th>Plot:</th>
                    <td><p>{Plot}</p></td>
                </tr>    
            </table>
            
        </div>    
    )

}

