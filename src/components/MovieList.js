import { useEffect, useReducer, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams, useNavigate } from 'react-router';
import { API_KEY } from '../config';
import Movie from './Movie';
import { ajax, cache } from '../utils';

const initialMovieDetailsState = {};

function movieDetailsReducer(state, action) {
  switch (action.type) {
    case 'append':
      return {
        ...state,
        [action.id]: action.details,
      };
    default:
      break;
  }
}

export default function MovieList() {
  const params = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [movies, setMovies] = useState([]);
  const [movieDetails, dispatchMovieDetails] = useReducer(
    movieDetailsReducer,
    initialMovieDetailsState,
  );

  useEffect(() => {
    let paramPage = parseInt(params.page) || 1;
    if (isNaN(paramPage)) {
      paramPage = 1;
    }
    setPage(paramPage);
  }, [params]);

  useEffect(() => {
    async function fetchMovies() {
      const resp = await ajax.get('/movie/popular', {
        params: {
          api_key: API_KEY,
          page,
        },
      });
      setPageCount(resp.data.total_pages);
      setMovies(resp.data.results);
    }
    setIsLoading(true);
    fetchMovies().finally(() => {
      setIsLoading(false);
    });
  }, [page]);

  useEffect(() => {
    const fetchMovieDetails = async (movie) => {
      const cacheKey = `movieDetails-${movie.id}`;
      let details = cache.get(cacheKey);
      if (details === null) {
        const resp = await ajax.get(`/movie/${movie.id}`, {
          params: {
            api_key: API_KEY,
          },
        });
        details = resp.data;
        cache.set(cacheKey, details);
      }
      dispatchMovieDetails({
        type: 'append',
        id: movie.id,
        details: details,
      });
    };
    movies.forEach((movie) => {
      fetchMovieDetails(movie);
    });
  }, [movies]);

  const handlePageClick = ({ selected }) => {
    navigate(`/${selected + 1}`);
  };

  return (
    <>
      <div className="page-header">
        <div className="overlay"></div>

        <div className="container">
          <div className="inner">
            <h2 className="title">Movie Grid</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href=".">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Movie Grid
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="py-space">
          <div
            className="loading"
            style={{ display: isLoading ? 'block' : 'none' }}
          >
            <div className="loading-inner w-100 h-100">
              <div className="loading-effect">
                <div className="object"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {movies.map((movie) => (
              <Movie
                movie={movie}
                movieDetails={movieDetails[movie.id]}
                key={movie.id}
              />
            ))}
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            forcePage={page - 1}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="Previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination justify-content-center"
            activeClassName="active"
            pageClassName="page-item"
            previousClassName="page-item"
            nextClassName="page-item"
            breakClassName="page-item"
            pageLinkClassName="page-link"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            breakLinkClassName="page-link"
          />
        </div>
      </div>
    </>
  );
}
