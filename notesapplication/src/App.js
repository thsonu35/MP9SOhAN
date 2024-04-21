import React, { useState } from 'react'; // Import the React library and the useState hook
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import the BrowserRouter, Route, and Routes components from react-router-dom

// The App component is a functional component that returns a div element with a BrowserRouter component inside it
// The BrowserRouter component is used to wrap the application and provide routing functionality
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* The Routes component contains multiple Route components, each specifying a path and the component to render for that path */}
        <Routes>
          {/* The Route component specifies the path for the route (/) and the component to render for that path (Index) */}
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// The Index component is a functional component that returns a div element with a h1 element inside it
// The h1 element displays the text "Welcome to the app!"
function Index() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
    </div>
  );
}

export default App; // Export the App component