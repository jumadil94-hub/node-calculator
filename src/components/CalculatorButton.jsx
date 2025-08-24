import { Button } from '@mui/material';
import React from 'react';

const CalculatorButton = ({ value, onClick }) => (
  <Button
    variant="contained"
    fullWidth
    onClick={onClick}
    sx={{ p: 2, fontSize: '1.2rem' }}
  >
    {value}
  </Button>
);

export default CalculatorButton;