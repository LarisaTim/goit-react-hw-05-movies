import { useState, useEffect, Suspense, lazy } from 'react';
import {
  useParams,Link,
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
      navigate(`${pathname}${search}`);
      return;
    }
    navigate(-1);
  };

  return (
    <>
      <Link to="/" >
        <Button onBackClick={onBackClick} />
        </Link>
     {movie && <MovieDetail movie={movie} />}
     <Suspense fallback={<LineWave />}>
        <Outlet />
      </Suspense>

    </>
  );
};


export default MovieDetailsPage;