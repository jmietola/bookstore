import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import SuspenseFallback from '../components/SuspenseFallback';

const BooksContainer = lazy(async () => await import('../containers/BooksContainer'));

const Router: React.FC = () => {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="/" element={<BooksContainer />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
