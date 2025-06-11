import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContactProvider } from './context/ContactContext';
import HomePage from './pages/HomePage';
import AddEditContactPage from './pages/AddEditContactPage';

const App: React.FC = () => {
  return (
    <ContactProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddEditContactPage />} />
            <Route path="/edit/:id" element={<AddEditContactPage />} />
          </Routes>
        </div>
      </Router>
    </ContactProvider>
  );
};

export default App; 