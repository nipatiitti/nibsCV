import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import colors from './styles/colors';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
  }
});

function Application() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}
ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
