import React from 'react';
import './App.css';
import TopBanner from '../Blah';
import MovieList from '../Movies';
import Navbar from '../Navbar';
import Collection from '../pages/Collection';
import Home from '../pages/Home';
import Podcast from '../pages/Podcast';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Podcast" element={<Podcast />} />
          <Route path="/Collection" element={<Collection />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
