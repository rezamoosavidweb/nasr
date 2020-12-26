import { ThemeProvider, StylesProvider, jssPreset } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './theme/theme'
import { BrowserRouter } from 'react-router-dom'
import MasterLayout from './screens/MasterLayout'
import MasterLayoutContextProvider from './contexts/MasterLayoutContext'
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StylesProvider>
          <MasterLayoutContextProvider>
            <CssBaseline />
            <MasterLayout />
          </MasterLayoutContextProvider>
        </StylesProvider>
      </ThemeProvider>
    </BrowserRouter>
    
  );
}

export default App;
