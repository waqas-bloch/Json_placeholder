import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Editpost from './EditPost';

const RoutesCompo = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:usman/edit" element={<Editpost />} />
    </Routes>
  );
};

export default RoutesCompo;
