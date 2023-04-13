import React from 'react';

import Movie from './Movie.jsx'

  const MovieList = ({moviesData, cb, setMoviesData}) => {

    return (<div>
      {
        function() {
          if (moviesData.length === 0) {
            return (<div>no movie by that name found</div>)
          } else {
            return moviesData.filter(cb.filter).map(movie => {
              return <Movie movie={movie} moviesData={moviesData} setMoviesData={setMoviesData} />})
          }
        } ()
      }
    </div>)
  }


export default MovieList;