import { useState, useEffect } from "react";
// import {  useLocation, useNavigate} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import {LineWave} from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Form from "../../component/Form/Form";
import { fetchMovies } from "../../service/api";
import Movies from "../../component/Movies/Movies";

export default function MoviesPage() {
  // const location = useLocation();
  // const navigate = useNavigate();
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState();

  useEffect(() => {
    if (!query) {
      return;
    }
    const asyncFetch = async () => {
      const movies = await fetchMovies(
        `search/movie?query=${query}&page=${page}`
      );
      setMovies(movies);
    };

    asyncFetch();
  }, [page, query]);

  const onFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    // navigate.push({ ...location, search: `query=${query}` });
  };

  return (
    <>
      <Form onSubmit={onFormSubmit} />
      {movies && (
        <InfiniteScroll
          dataLength={movies.total_results}
          next={() => setPage(page + 1)}
          hasMore={true}
          style={{ textAlign: "center" }}
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
          {""}
          <Movies movies={movies.results} />
        </InfiniteScroll>
      )}
    </>
  );
}
