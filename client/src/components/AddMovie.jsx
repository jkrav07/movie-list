import React from 'react';


const clickHandle = (moviesData, setMoviesData, entry, setEntry) => {

  let newMovieName = entry//document.getElementById('add-box').value;
  let newMovie = {title: newMovieName, watch: false};
  setMoviesData([...moviesData, newMovie]);
  setEntry('');
}

const handleInputChange = (event, setEntry) => {
  setEntry(event.target.value);
}

const AddMovie = ({moviesData, setMoviesData}) => {
  let [entry, setEntry] = React.useState('');
  return (
    <div>
      <input type="text" id="add-box"
        value={entry} onChange={() => {handleInputChange(event, setEntry)}}/>
      <button type="button" onClick={() => {clickHandle(moviesData, setMoviesData, entry, setEntry)}}>Add</button>
    </div>
  )
}


export default AddMovie;