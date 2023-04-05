import data from './MovieDataSample.json';
import { useState } from 'react';

const MDS = data.MovieDataSampleList;

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(MDS);

  const addMovie = () => {
    setListOfMovies([
      ...MDS,
      {
        MovieId: 6,
        Category: 'Action/Adventure',
        Title: 'Batman & Robin',
        Year: 1997,
        Director: 'Joel Schumacher',
        Rating: 'PG-13',
      },
    ]);
  };

  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m) => (
              <tr key={m.MovieId}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
