import { useEffect, useState } from 'react';
import { fetchMovies } from '../../service/api';
import InfiniteScroll from 'react-infinite-scroll-component';
import {LineWave} from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Movies from '../../component/Movies/Movies';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const asyncFetch = async () => {
      const movies = await fetchMovies(`/trending/movie/week?page=${page}`);
      setMovies(movies);
    };

    asyncFetch();
  }, [page]);

  const nextPage = () => setPage(page => page + 1);
  return (
    <>
      {movies && (
        <InfiniteScroll
          dataLength={movies.total_results}
          next={nextPage}
          hasMore={true}
          style={{ textAlign: 'center' }}
          loader={
          <LineWave
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="line-wave"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  firstLineColor=""
  middleLineColor=""
  lastLineColor=""
/>
          }
        >
          {''}
          <Movies movies={movies.results} />
        </InfiniteScroll>
      )}
    </>
  );
}
