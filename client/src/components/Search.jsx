import React from 'react';

const filterBySearchValue = (searchValue, moviesData) => {
  return moviesData.filter(movie => {
    return movie.title.includes(searchValue)
  })
}


const clickHandle = (moviesData, setMoviesData) => {
  let searchValue = document.getElementById('search-box').value;
  let a = filterBySearchValue(searchValue, moviesData);
  setMoviesData(a);
}


const Search = ({moviesData, setMoviesData}) => {
  return (
    <div>
      <input type="text" id="search-box" />
      <button type="button" onClick={() => {clickHandle(moviesData, setMoviesData)}}>Go</button>
    </div>
  )
}

export default Search;