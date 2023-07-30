import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './styles.css'; 
import CalculoForm from './components/CalculoForm';
import CalculoResult from './components/CalculoResult';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path={"/" } element= {<Navigate to = "/calculo" replace />}/> 
        <Route exact path="/calculo" element={<CalculoForm/>} />
        <Route path="/calculo/:id" element={<CalculoResult/>} />
      </Routes>
    </Router>
  );
};

export default App;
