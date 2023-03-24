import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {LineWave} from 'react-loader-spinner';

const HomePage = lazy(() => import('../../views/HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('../../views/MovieDetailsPage/MovieDetailsPage.jsx'),
);
const Navigation = lazy(() =>
  import('../../component/Navigation/Navigation.jsx'),
);
const NotFoundView = lazy(() =>
  import('../../views/NotFoundView/NotFoundView.jsx'),
);
const MoviesPage = lazy(() => import('../../views/MoviesPage/MoviesPage.jsx'));

function App() {
  return (
    <div>
      {' '}
      <Suspense fallback={<LineWave/>}>
        <Navigation />
        <Routes>
          <Route path="/"  element={<HomePage/>} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:slug" element={<MovieDetailsPage />} />
          <Route path="*" element={ <NotFoundView />} />
        </Routes>
        <ToastContainer />
      </Suspense>
    </div>
  );
}

export default App;
