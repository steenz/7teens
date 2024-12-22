import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Event as EventIcon,
  Description as DescriptionIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { styled } from '@mui/system';

const drawerWidth = 240;

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
}));

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
}));

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const Toolbar = styled(Toolbar)(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DoctorDashboard: React.FC = () => {
  return (
    <Root>
      <AppBarStyled position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Doctor Dashboard
          </Typography>
        </Toolbar>
      </AppBarStyled>
      <DrawerStyled variant="permanent">
        <Toolbar />
        <List>
          {['Dashboard', 'Patients', 'Appointments', 'Prescriptions', 'Settings'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <DashboardIcon />}
                {index === 1 && <PeopleIcon />}
                {index === 2 && <EventIcon />}
                {index === 3 && <DescriptionIcon />}
                {index === 4 && <SettingsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </DrawerStyled>
      <Main>
        <Toolbar />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
              <Typography variant="h6" gutterBottom>
                Today's Appointments
              </Typography>
              <Typography variant="h3" component="div">
                8
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
              <Typography variant="h6" gutterBottom>
                New Patients
              </Typography>
              <Typography variant="h3" component="div">
                3
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
              <Typography variant="h6" gutterBottom>
                Pending Reports
              </Typography>
              <Typography variant="h3" component="div">
                5
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
              <Typography variant="h6" gutterBottom>
                Total Patients
              </Typography>
              <Typography variant="h3" component="div">
                1,254
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" gutterBottom>
                Recent Patients
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Age</TableCell>
                      <TableCell>Condition</TableCell>
                      <TableCell>Last Visit</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { name: 'John Doe', age: 45, condition: 'Hypertension', lastVisit: '2023-05-15' },
                      { name: 'Jane Smith', age: 32, condition: 'Diabetes', lastVisit: '2023-05-14' },
                      { name: 'Bob Johnson', age: 58, condition: 'Arthritis', lastVisit: '2023-05-13' },
                    ].map((row) => (
                      <TableRow key={row.name}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.age}</TableCell>
                        <TableCell>{row.condition}</TableCell>
                        <TableCell>{row.lastVisit}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Main>
    </Root>
  );
};

export default DoctorDashboard;

