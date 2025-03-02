import logo from "./logo.svg";
import "./styles/stylesheet.scss"
import "./App.css";
import { Route, Routes } from "react-router-dom";
//import { useState, useEffect } from "react";
//import axios from "axios";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TimeMachine from "./pages/TimeMachine";
import Search from "./pages/Search";
import TrendingNow from "./pages/TrendingNow";
import TrendPredictor from "./pages/TrendPredictor";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/timemachine" element={<TimeMachine />} />
        <Route path="/trendingnow" element={<TrendingNow />} />
        <Route path="/trendpredictor" element={<TrendPredictor />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
