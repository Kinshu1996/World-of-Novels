import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import BookRegistrationPage from './pages/bookRegistrationPage/BookRegistrationPage';
import StartingSearchPage from './pages/startingSearchPage/StartingSearchPage'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/bookRegistrationPage' element={<BookRegistrationPage />}></Route>
        <Route path='/startingSearchPage' element={<StartingSearchPage />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
