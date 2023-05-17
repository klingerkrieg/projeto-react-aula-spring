import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Guard from './components/Guard';
 
export const history = createBrowserHistory();

const Home = lazy(() => import('./views/Home'));
const People = lazy(() => import('./views/People'));

const App = () => (
  <Router history={history}>
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/people" element={<Guard element={<People/>}/>} /> 
      </Routes>
    </Suspense>
  </Router>
);

export default App;
