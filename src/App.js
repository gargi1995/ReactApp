import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layouts/Header'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Body from './components/layouts/Body'

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Navbar></Navbar>
     <Body></Body>
     <Footer>&copy; Copyright 2020
</Footer>
    </div>
  );
}

export default App;
