import { useState, useEffect, Suspense, lazy } from 'react';
import {
  useParams,
  Route,
  useMatch,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import{ LineWave} from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { fetchMovies } from '../../service/api';

const Reviews = lazy(() => import('../../component/Reviews/Reviews.jsx'));
const Cast = lazy(() => import('../../component/Cast/Cast.jsx'));
const Button = lazy(() => import('../../component/Button/Button.jsx'));
const MovieDetail = lazy(() => import('./MovieDetail/MovieDetail.jsx'));

const MovieDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { path } = useMatch();
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      const movie = await fetchMovies(`movie/${movieId}`);
      setMovie(movie);
    }; 
    asyncFetch();
  }, [movieId]);
 
  const onBackClick = () => {
    if (location && location.state && location.state.from) {
      const { pathname, search } = location.state.from;
      navigate.push(`${pathname}${search}`);
      return;
    }
    navigate.push(`/`);
  };

  return (
    <>
      <Suspense fallback={<LineWave />}>
        <Button onBackClick={onBackClick}  />

        {movie && <MovieDetail movie={movie} />}

        <Route path={`${path}/cast`}>
          <Button onBackClick={onBackClick}></Button>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Button onBackClick={onBackClick}></Button>
          <Reviews />
        </Route>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
