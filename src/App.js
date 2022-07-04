import React from 'react';
import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
// import Hello from "./component/Hello";
import Header from "./component/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmptyPage from './component/EmptyPage';


function App() {
  return (
    
        <BrowserRouter>
    <div className="App">
        {/* <h3>props : properties</h3>
        <Hello age={10} />
        <Hello age={20} />
        <Hello age={30} /> */}
        <Header/>
        <Routes>
          <Route path="/"  element={<DayList/>} />
          <Route path="/day/:day" element={<Day/>} />
          <Route path='*' element={<EmptyPage/>} />
        </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
