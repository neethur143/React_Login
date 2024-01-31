import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyMovieForm = () => {
  const [title, setTitle] = useState('');
  const [actor, setActor] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const initialMovies = [
    { title: 'Theri', actor: 'Vijay', director: 'Jijo jose', year: 2020 },
    { title: 'Pandipada', actor: 'Surya', director: 'Basil', year: 2021 },
    { title: 'PK', actor: 'Vijay', director: 'Nelson', year: 2022 },
    { title: 'Kalyanaraman', actor: 'Ajith', director: 'Jijo', year: 2020 },
  ];
  const [movies, setMovies] = useState(initialMovies);

  const saveMovie = (e) => {
    e.preventDefault();
    setMovies([
      ...movies,
      {
        title: title,
        actor: actor,
        director: director,
        year: year,
      },
    ]);
  
    setTitle('');
    setActor('');
    setDirector('');
    setYear('');
  };

  const searchByActor = () => {
    const result = initialMovies.filter((movie) =>
      movie.actor.toLowerCase().includes(actor.toLowerCase())
    );
    setMovies(result);
    setActor('');
  };

  const searchByDirector = () => {
    const result = initialMovies.filter((movie) =>
      movie.director.toLowerCase().includes(director.toLowerCase())
    );
    setMovies(result);
    setDirector('');
  };

  const searchByYear = () => {
    const result = initialMovies.filter((movie) =>
      movie.year.toString().includes(year)
    );
    setMovies(result);
    setYear('');
  };

  return (
    <div className="container mt-2">
      <form onSubmit={saveMovie}>
     
      </form>

      <div className="mb-2 row">
        <label className="col-2 col-form-label">Enter Actor:</label>
        <div className="col-3">
          <input
            type="text"
            value={actor}
            onChange={(e) => setActor(e.target.value)}
            className="form-control "
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={searchByActor}
          >
            Movie By Actor
          </button>
        </div>
      </div>

      <div className="mb-2 row">
        <label className="col-2 col-form-label">Enter Director:</label>
        <div className="col-3">
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          className="form-control "
        />
        </div>
        <div className="col-2">
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={searchByDirector}
        >
          Movie By Director
        </button>
        </div>
      </div>

      <div className="mb-2 row">
        <label className="col-2 col-form-label">Enter Year:</label>
        <div className="col-3">
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="form-control"
        />
        </div>
        <div className="col-2">
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={searchByYear}
        >
          Movie By Year
        </button>
        </div>
      </div>

      <hr />
      <table className="table table-striped ">
        <thead class="table-info">
          <tr>
            <th>Title</th>
            <th>Actor</th>
            <th>Director</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.actor}</td>
              <td>{movie.director}</td>
              <td>{movie.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyMovieForm;
