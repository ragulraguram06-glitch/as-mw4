import { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "./components/MovieCard";
import Watchlist from "./components/Watchlist";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [loading, setLoading] = useState(true);

  // Fetch movies
  useEffect(() => {
    axios
      .get("/movies.json")
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // Add movie
  const addToWatchlist = (movie) => {
    const alreadyAdded = watchlist.some(
      (item) => item.id === movie.id
    );

    if (!alreadyAdded) {
      setWatchlist([...watchlist, movie]);
    }
  };

  // Remove movie
  const removeFromWatchlist = (id) => {
    setWatchlist(
      watchlist.filter((movie) => movie.id !== id)
    );
  };

  // Genres
  const genres = [
    "All",
    ...new Set(movies.map((movie) => movie.genre))
  ];

  // Filter movies
  const filteredMovies =
    selectedGenre === "All"
      ? movies
      : movies.filter(
          (movie) => movie.genre === selectedGenre
        );

  if (loading) {
    return <h2>Loading movies...</h2>;
  }

  return (
    <div className="app">

      <h1>🎬 Movie Watchlist</h1>

      {/* Genre buttons */}
      <div className="genre-buttons">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Movies */}
      <div className="movie-container">
        {filteredMovies.length === 0 ? (
          <p>No movies found.</p>
        ) : (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onAdd={addToWatchlist}
              isAdded={watchlist.some(
                (item) => item.id === movie.id
              )}
            />
          ))
        )}
      </div>

      {/* Watchlist */}
      <Watchlist
        movies={watchlist}
        onRemove={removeFromWatchlist}
      />

    </div>
  );
}

export default App;