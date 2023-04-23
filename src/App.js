import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './component/main/Index';
import Detail from './component/detail/Detail';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
