function MovieCard({ movie, onAdd, isAdded }) {
  return (
    <div className="movie-card">
      <img
        src={movie.imageUrl}
        alt={movie.title}
      />

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p>Genre: {movie.genre}</p>

        <p>⭐ {movie.rating}</p>

        <p>Year: {movie.year}</p>

        <button
          onClick={() => onAdd(movie)}
          disabled={isAdded}
        >
          {isAdded ? "Added" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;