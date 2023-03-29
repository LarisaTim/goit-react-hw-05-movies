import { useState, useEffect, Suspense, lazy } from 'react';
import {
  useParams,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import{ LineWave} from 'react-loader-spinner';
import { fetchMovies } from '../../service/api';


const Button = lazy(() => import('../../component/Button/Button.jsx'));
const MovieDetail = lazy(() => import('./MovieDetail/MovieDetail.jsx'));

const MovieDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const{ slug  }= useParams();
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
      <Button onBackClick={onBackClick} />
     {movie && <MovieDetail movie={movie} />}
     <Suspense fallback={<LineWave />}>
        <Outlet />
      </Suspense>

    </>
  );
};


export default MovieDetailsPage;