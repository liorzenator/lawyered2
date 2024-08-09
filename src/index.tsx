import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createTheme } from '@mui/material/styles';

createTheme({
    direction: 'rtl',
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
