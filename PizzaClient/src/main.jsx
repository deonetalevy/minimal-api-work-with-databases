import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const theme = createTheme();

import Pizza from './Pizza'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App className="App"/>
      <Pizza className="Pizza"/>
    </ThemeProvider>
  </React.StrictMode>,
)