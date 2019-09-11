import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { lightBlue, lightGreen } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: {
      main: lightGreen.A400,
      light: lightBlue[200],
      dark: lightGreen[700],
    },
    type: 'dark',
  },
  spacing: {
    unit: 10,
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
