import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import DoctorDashboard from './components/DoctorDashboard';
import PatientDashboard from './components/PatientDashboard';
import AdminDashboard from './components/AdminDashboard';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/doctor" component={DoctorDashboard} />
          <Route path="/patient" component={PatientDashboard} />
          <Route path="/admin" component={AdminDashboard} />
          {/* Add more routes as needed */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;

