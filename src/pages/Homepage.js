// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { searchMovies } from '../services/movieService';
import MovieCard from '../components/MovieCard';
import '../css/Home.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = async (searchTerm) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchMovies(searchTerm);
      setMovies(data);
    } catch (err) {
      setError(err.message || "Error fetching movies.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      
      {loading && <div className="loading">Loading movies...</div>}
      {error && <div className="error">{error}</div>}
      
      <div className="movies-grid">
        {movies?.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;