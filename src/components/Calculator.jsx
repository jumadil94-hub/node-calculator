import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import useCalculator from '../hooks/useCalculator';
import CalculatorScreen from './CalculatorScreen/';
import CalculatorButton from "./CalculatorButton/";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input)); // eval() untuk mengevaluasi ekspresi matematika
      } catch (e) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  const buttonLayout = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  return (
    <Container maxWidth="xs" sx={{ mt: 5 }}>
      <Box
        sx={{
          p: 2,
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
        }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Kalkulator
        </Typography>
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
        <Grid container spacing={1}>
          {buttonLayout.map((btn) => (
            <Grid item xs={3} key={btn}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleButtonClick(btn)}
                sx={{ p: 2, fontSize: "1.2rem" }}>
                {btn}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Calculator;
