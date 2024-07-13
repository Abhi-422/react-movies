import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=1b4f13c8";

// const movie1 = {
//   Title: "Italian Spiderman",
//   Year: "2007",
//   imdbID: "tt2705436",
//   Type: "movie",
//   // Poster: "N/A",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
// };

const App = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search );
  };

  useEffect(() => {
    searchMovies("Spiderman");
  },[]);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
          type="text"
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(search)} />
      </div> 
      
      {
      movies.length > 0 ?
      (<div className="container">
        {movies.map((movie)=>{return <MovieCard movie = {movie}/>} )}
      </div>):(
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
