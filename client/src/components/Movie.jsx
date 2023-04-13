import React from 'react';

let rebuildMovie = (movie, status) => {
  let newObj = {};
  for (let prop in movie) {
      newObj[prop] = movie[prop];
  }
  newObj.watch = status;
  return newObj;
}

let handleToggle = (movie, seenState, setSeenState, moviesData, setMoviesData) => {
  let newMovie = rebuildMovie(movie, !movie.watch);

    let newArr = moviesData.map(e => {
      if (e.title === movie.title) {
        e = newMovie;
      }
      return e;
    })
    setMoviesData(newArr)
  }


  const Movie = ({movie, moviesData, setMoviesData}) => {
    let [seenState, setSeenState] = React.useState('TO WATCH')

    return (<div>
      <span>{movie.title}</span>
      <button type="button" onClick={() => {handleToggle(movie, seenState, setSeenState, moviesData, setMoviesData)}}>{movie.watch ? 'WATCHED' : 'TO WATCH'}</button>

    </div>)
  }


export default Movie;