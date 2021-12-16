import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

function CardList ({ moviesx, func, searchField}) {
  // const movies= useSelector(state => state.movies)
  const [movies, setMovies]= useState(moviesx)
  useEffect(()=>{
    setMovies(moviesx.filter((movie)=>{
      if(searchField === ''){
          return true
      }
      else if(movie.name.toLowerCase().includes(searchField.toLowerCase())){
          return true
      }
      return false
    }))
  },[searchField])
    return (
      <div>

          <div className="pa3">
          {movies.map((movie, i) => (
            <Card
              key={i}
              movieDetails={movie}
              func={func}
            />
          ))}
        </div>

      </div>
    );
  
}

export default CardList;
