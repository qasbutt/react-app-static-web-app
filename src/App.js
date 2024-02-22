import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import Home from './Components/home'; // Import your other components

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Define other routes here */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;