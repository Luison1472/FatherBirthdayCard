import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Enter from './pages/Enter';
import Message from './pages/Message';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;