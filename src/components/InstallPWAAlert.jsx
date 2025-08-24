// src/components/InstallPWAAlert.jsx

import React from 'react';
import {
  Modal, Box, Typography, Button,
  colors,
  withTheme,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  
  p: 4,
  textAlign: 'center',
};

function InstallPWAAlert({ open, handleClose, handleInstall }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" gutterBottom>
          Instal Aplikasi Ini
        </Typography>
        <Typography sx={{ mt: 2, mb: 3 }}>
          Untuk pengalaman terbaik, instal aplikasi ini ke layar utama Anda.
        </Typography>
        <Button
          variant="contained"
          onClick={handleInstall}
          sx={{ mr: 2 }}
        >
          Instal
        </Button>
        <Button onClick={handleClose}>
          Tidak, terima kasih
        </Button>
      </Box>
    </Modal>
  );
}

export default InstallPWAAlert;