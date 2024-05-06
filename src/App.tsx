import React, { useState, useEffect } from 'react';
import './App.css';
import HomeComponent from './components/Home'; // Import the component
import { ThemeProvider } from './components/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <ThemeProvider>
        <HomeComponent/>
      </ThemeProvider>
    </div>
  );
}

export default App;
