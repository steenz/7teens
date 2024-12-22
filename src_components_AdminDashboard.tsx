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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Event as EventIcon,
  AttachMoney as MoneyIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { styled } from '@mui/system';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

const chartData = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 2000, expenses: 9800 },
  { name: 'Apr', revenue: 2780, expenses: 3908 },
  { name: 'May', revenue: 1890, expenses: 4800 },
  { name: 'Jun', revenue: 2390, expenses: 3800 },
];

const AdminDashboard: React.FC = () => {
  return (
    <Root>
      <AppBarStyled position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBarStyled>
      <DrawerStyled variant="permanent">
        <Toolbar />
        <List>
          {['Dashboard', 'Users', 'Appointments', 'Financials', 'Settings'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <DashboardIcon />}
                {index === 1 && <PeopleIcon />}
                {index === 2 && <EventIcon />}
                {index === 3 && <MoneyIcon />}
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
                Total Users
              </Typography>
              <Typography variant="h3" component="div">
                1,543
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
              <Typography variant="h6" gutterBottom>
                Active Appointments
              </Typography>
              <Typography variant="h3" component="div">
                87
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
              <Typography variant="h6" gutterBottom>
                Monthly Revenue
              </Typography>
              <Typography variant="h3" component="div">
                $52,450
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
              <Typography variant="h6" gutterBottom>
                System Uptime
              </Typography>
              <Typography variant="h3" component="div">
                99.9%
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" gutterBottom>
                User Management
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { name: 'Dr. John Smith', role: 'Doctor', status: 'Active' },
                      { name: 'Jane Doe', role: 'Patient', status: 'Active' },
                      { name: 'Bob Johnson', role: 'Admin', status: 'Inactive' },
                    ].map((row) => (
                      <TableRow key={row.name}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.role}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell>
                          <Button size="small" variant="outlined">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" gutterBottom>
                Financial Overview
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#4527A0" />
                  <Bar dataKey="expenses" fill="#F44336" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </Main>
    </Root>
  );
};

export default AdminDashboard;

