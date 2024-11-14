import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './Authentication/Registration';

class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Layout} />
            <Route Component={Layout} >
              <Route path="Sign" Component={Registration} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;