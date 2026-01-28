import './App.scss';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { PageNotFound } from './Pages/PageNotFound';
import { HomePage } from './Pages/HomePage';
import { PeoplePage } from './Pages/PeoplePage';
export const App = () => {
  return (
    <div data-cy="app">
      <HashRouter>
        <Navbar />
        <main className="section">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/people" element={<PeoplePage />} />
              <Route path="/people/:slug" element={<PeoplePage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </main>
      </HashRouter>
    </div>
  );
};
