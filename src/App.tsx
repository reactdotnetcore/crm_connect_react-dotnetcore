import React, { Children, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Layout from './Layout';
import Login from './Authentication/Login';
import { resolve } from 'path';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: JSX.Element;
}

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(()=>{
    const checkAuthStatus = async () =>{
      const authStatus = await fakeAuthStatus();
      setIsAuthenticated(authStatus);
    };
    checkAuthStatus();
  },[])

  const fakeAuthStatus = async () =>{
    return new Promise<boolean>((resolve) => setTimeout(() =>resolve(true),1000));
  }
  const ProtectedRoute = ({isAuthenticated, children}: ProtectedRouteProps) =>{
    return isAuthenticated ? children : <Navigate to="/login"/>
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Layout /></ProtectedRoute>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
