import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [poster, setPoster] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !director || !description || !duration || !poster) return;

    const durationNumber = parseInt(duration);
    if (isNaN(durationNumber) || durationNumber <= 0) {
      alert('Please enter a valid positive number for duration');
      return;
    }

    const newMovie = {
      title,
      director,
      description,
      duration: durationNumber,
      poster,
    };

    addMovie(newMovie);

    setTitle('');
    setDirector('');
    setDescription('');
    setDuration('');
    setPoster('');
  };
  return (
    <div className="movie-form-container">
      <h2 className="add-movie-title">Add New Movie</h2>
      <form className="movie-form" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Director:
          <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Duration (minutes):
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </label>
        <label>
          Poster (URL):
          <input
            type="text"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};
export default MovieForm;
