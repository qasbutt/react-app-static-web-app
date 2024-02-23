import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFoundPage from './Components/NotFound';
import Home from './Components/home';


function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes as needed */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    );
  }


export default App;