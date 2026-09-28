function Watchlist({ movies, onRemove }) {
  return (
    <div className="watchlist">
      <h2>My Watchlist</h2>

      {movies.length === 0 ? (
        <p>No movies in your watchlist.</p>
      ) : (
        movies.map((movie) => (
          <div
            className="watchlist-item"
            key={movie.id}
          >
            <img
              src={movie.imageUrl}
              alt={movie.title}
            />

            <div>
              <h3>{movie.title}</h3>
              <p>⭐ {movie.rating}</p>
            </div>

            <button
              onClick={() => onRemove(movie.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Watchlist;