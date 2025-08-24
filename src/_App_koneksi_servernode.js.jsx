// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material'; // Impor komponen MUI
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(result => setData(result.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Data dari Backend:
        </Typography>
        <Typography variant="body1">
          {data}
        </Typography>
      </Box>
    </Container>
  );
}

export default App;