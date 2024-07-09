import React, { useState } from "react";
import { Title } from '../componets/Title';
import { SearchForm } from '../componets/SearchForm';
import { MoviesList } from '../componets/MoviesList';

export function Home (){

    const [ results, setResults] = useState([]);
    const [ usedSearch, setUsedSearch] = useState(false);  
  
  
    const  _handleResults = (results)=>{
        setResults(results)   
        setUsedSearch(true)
    }
  
    function _renderResults()
    {
      return results.length===0
      ?<p>Sorry! Results not Found!</p>
      :<MoviesList movies={results}/>   
    }
  
    
    return (
       <div>
            <Title>Search Movies</Title>
            <div className='SearchForm-wrapped'>
            
            <SearchForm onResults={_handleResults}/>
            </div>   
            {        
            usedSearch
            ?_renderResults()
            :<small>Use the form to search a movie</small>
            }
        </div>)
}        