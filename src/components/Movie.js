import { useState } from 'react';
import { READ_MORE_URL, RES_URL } from '../config';
import { storage } from '../utils';

export default function Movie({ movie, movieDetails = {} }) {
  const {
    imdb_id: imdbId,
    overview,
    vote_average: voteAverage,
    genres = [],
  } = movieDetails;

  const watchKey = `watch-${movie.id}`;
  const [watched, setWatched] = useState(storage.get(watchKey) || false);
  const toggleWatched = () => {
    const newWatched = !watched;
    storage.set(watchKey, newWatched, null);
    setWatched(newWatched);
  };

  const movieUrl = imdbId ? `${READ_MORE_URL}/${imdbId}` : '.';

  return (
    <div className="col-md-4 col-12 movie-box-container" key={movie.id}>
      <div className="movie-box mb-3">
        <div className="listing-container">
          <div className="listing-image">
            <img
              src={`${RES_URL}/w500${movie.poster_path}`}
              className="img-fluid"
              alt={movie.title}
            />
          </div>
        </div>

        <div className="listing-content">
          <div className="inner h-100">
            <div className="play-btn">
              <a href="." className="play-video">
                <i className="fas fa-play"></i>
              </a>
            </div>

            <div className="title">
              <a href="." className="text-decoration-none">
                <h2>{movie.title}</h2>
              </a>
            </div>

            <div className="stars my-3">
              <div className="row no-gutters">
                <div className="col-auto rating">
                  <i className="fa fa-star"></i>
                  <small className="text-muted">{voteAverage} / 10</small>
                </div>
                <div className="col text-end ps-0">
                  <small className="text-muted">
                    {genres.map((genre) => genre.name).join(', ')}
                  </small>
                </div>
              </div>
            </div>

            <p className="listing-overview">{overview}</p>

            <div className="mt-auto">
              <a
                className="btn btn-primary text-uppercase"
                href={movieUrl}
                target="_blank"
                rel="noreferrer"
              >
                Details
              </a>

              <button
                className="float-end btn btn-link track-watch"
                onClick={toggleWatched}
                title="Toggle watched"
              >
                <span className={`watch-icon ${watched ? 'hidden' : ''}`}>
                  <i className="far fa-clock fa-lg"></i>
                </span>
                <span
                  className={`watch-icon text-success ${
                    watched ? '' : 'hidden'
                  }`}
                >
                  <i className="fas fa-check fa-lg"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
