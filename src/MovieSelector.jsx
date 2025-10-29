import React, { useState } from 'react';

const mockMovies = {
  Action: [
    { id: 1, title: 'Die Hard', year: 1988 },
    { id: 2, title: 'Mad Max: Fury Road', year: 2015 },
    { id: 3, title: 'The Dark Knight', year: 2008 },
  ],
  Comedy: [
    { id: 4, title: 'The Hangover', year: 2009 },
    { id: 5, title: 'Superbad', year: 2007 },
    { id: 6, title: 'Anchorman', year: 2004 },
  ],
  Drama: [
    { id: 7, title: 'The Shawshank Redemption', year: 1994 },
    { id: 8, title: 'Forrest Gump', year: 1994 },
    { id: 9, title: 'The Godfather', year: 1972 },
  ],
};

const genres = ['Action', 'Comedy', 'Drama'];

export default function MovieSelector() {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    // Reset the state of setError and setMovies for each fetchMovies call
    setError('');
    setMovies([]);

    if (!selectedGenre) {
      setError('Please select a genre first.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const movieList = mockMovies[selectedGenre] || [];
      setMovies(movieList);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="container">
      <h1 className="title">Movie Selector</h1>

      <div className="controls">
        <label htmlFor="genre">Select Genre:</label>
        <select
          id="genre"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="select"
        >
          <option value="">-- Choose --</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>

        <button onClick={fetchMovies} disabled={isLoading} className="button">
          {isLoading ? 'Loading...' : 'Fetch Movies'}
        </button>
      </div>

      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading movies...</p>}

      {!isLoading && movies.length > 0 && (
        <div>
          <h2 className="subtitle">{selectedGenre} Movies:</h2>
          <ul className="movie-list">
            {movies.map((movie) => (
              <li key={movie.id} className="movie-item">
                <strong>{movie.title}</strong> ({movie.year})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}