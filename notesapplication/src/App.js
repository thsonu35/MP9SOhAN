import React, { useState } from 'react'; // Import the React library and the useState hook
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import the BrowserRouter, Route, and Routes components from react-router-dom

import Index from './Pages/Index';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={<Index/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; // Export the App component