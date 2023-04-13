import React from 'react';

import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'

var moviesDataInitial = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];



const App = (props) => {

let [moviesData, setMoviesData] = React.useState([]);
const cbx = { filter: function(e) {return true;} }
let [cb, setCb] = React.useState(cbx);

  return (
    <div>
      <AddMovie moviesData={moviesData} setMoviesData={setMoviesData} />
      <Search moviesData={moviesData} setMoviesData={setMoviesData} />

      <button type="button" id="watched"
      onClick={() => {
        setCb({ filter: function(e) {return e.watch;} });
      }}>Watched</button>

      <button type="button" id="to-watch" onClick={() => {
        setCb({ filter: function(e) {return !e.watch;} })
      }}>To Watch</button>

      <MovieList moviesData={moviesData} cb={cb} setMoviesData={setMoviesData} />
    </div>
   )
}

export default App;