import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from './components/Home/Home';


function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
