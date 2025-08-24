// src/App.jsx

import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Calculator from './components/Calculator';

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setOpenSnackbar(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleInstallClick = () => {
    if (deferredPrompt) {
      setOpenSnackbar(false);
      deferredPrompt.prompt();
      setDeferredPrompt(null);
    }
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleInstallClick}>
        Instal
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Calculator />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Aplikasi ini dapat diinstal di perangkat Anda"
        action={action}
        // Tambahkan properti berikut untuk mengatur posisi
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </Grid>
  );
}

export default App;