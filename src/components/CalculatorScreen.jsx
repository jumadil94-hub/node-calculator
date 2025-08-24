import { TextField, Typography, Box } from '@mui/material';
import React from 'react';

const CalculatorScreen = ({ input, result }) => (
  <Box>
    <TextField
      fullWidth
      variant="outlined"
      value={input}
      sx={{ mb: 2 }}
      InputProps={{ readOnly: true }}
    />
    <Typography variant="h5" sx={{ mb: 2 }}>
      Hasil: {result}
    </Typography>
  </Box>
);

export default CalculatorScreen;