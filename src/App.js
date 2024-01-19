import { useEffect, useState } from 'react';
import searchIcon from './search.svg'
import './App.css';
import MovieCard from './MovieCard';

//c99bf62e
const API_URL = 'http://www.omdbapi.com/?apikey=c99bf62e'
/*const movie = 
  {
      "Title": "Avengers: Endgame",
      "Year": "2019",
      "imdbID": "tt4154796",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
    }*/
function App() {
  const [movies, setMovies] = useState()
  const [searchTerm, setSearchTerm] = useState()

const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  
  setMovies(data.Search);
  console.log(data.Search)
}

  useEffect(()=>{
    searchMovies('avengers')
  },[])

  return (
    <div className="app">
     <h1>MovieLand</h1> 

    <div className='search'>
      <input
      placeholder='Search for movies'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
      src={searchIcon}
      alt="search"
      onClick={() => searchMovies(searchTerm)}
      />
  </div>
{
  movies?.length > 0
  ? (
      <div className='container'>
        {movies.map((movie) => (
        <MovieCard movie={movie} />))}
      </div>
    ) : 
    (
    <div className='empty'>
      <h2>No movies found</h2>
    </div>
    )
}


    </div>
  );
}

export default App;
