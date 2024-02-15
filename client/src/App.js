import React from 'react';
import NavBar from './Component/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Homepage from './Screens/Homepage';

function App() {
  return (
    <div>
      <NavBar />
      <Homepage/>
    </div>
  );
}

export default App;
