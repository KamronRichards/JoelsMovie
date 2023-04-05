import { useState } from 'react';
import '../styles.css';
import { Movie } from '../types/movie';

function MovieList() {
  const [movieData, setmovieData] = useState<Movie[]>([]);

  const fetchMovie = async () => {
    const rsp = await fetch('https://localhost:7121/movie');
    const temp = await rsp.json();
    setmovieData(temp);
  };

  fetchMovie();

  return (
    <>
      <div>
        <table className="table table-striped table-bordered table-hover table-sm">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
              <tr>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
