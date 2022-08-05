import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Display from './components/Display';
import Main from './components/Main';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/display' element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
