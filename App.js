import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Login from './Login';
import PropertyList from './PropertyList';
import RentalList from './RentalList';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/rentals" element={<RentalList />} />
          <Route path="/" element={<Outlet />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
