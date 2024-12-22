import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Paper,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  Event as EventIcon,
  Description as DescriptionIcon,
  Medication as MedicationIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import { styled } from '@mui/system';

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

const Main = styled('main')(({ theme }) => ({
  padding: theme.spacing(3),
}));

const Toolbar = styled(Toolbar)(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const PatientDashboard: React.FC = () => {
  return (
    <Root>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Patient Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Main>
        <Toolbar />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" gutterBottom>
                Welcome, John Doe
              </Typography>
              <Typography variant="body1">
                Your next appointment is on May 20, 2023 at 2:00 PM with Dr. Smith.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2, alignSelf: 'flex-start' }}>
                Book New Appointment
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" gutterBottom>
                Upcoming Appointments
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <EventIcon />
                  </ListItemIcon>
                  <ListItemText primary="May 20, 2023 - 2:00 PM" secondary="Dr. Smith - General Checkup" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EventIcon />
                  </ListItemIcon>
                  <ListItemText primary="June 5, 2023 - 10:00 AM" secondary="Dr. Johnson - Follow-up" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" gutterBottom>
                Medication Reminders
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <MedicationIcon />
                  </ListItemIcon>
                  <ListItemText primary="Lisinopril" secondary="1 tablet daily in the morning" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <MedicationIcon />
                  </ListItemIcon>
                  <ListItemText primary="Metformin" secondary="1 tablet twice daily with meals" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Health Records</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText primary="Blood Test Results - May 1, 2023" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText primary="X-Ray Report - April 15, 2023" />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" gutterBottom>
                Health Resources
              </Typography>
              <List>
                <ListItem button component="a" href="#">
                  <ListItemText primary="Understanding Hypertension" />
                </ListItem>
                <ListItem button component="a" href="#">
                  <ListItemText primary="Diabetes Management Tips" />
                </ListItem>
                <ListItem button component="a" href="#">
                  <ListItemText primary="Importance of Regular Exercise" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Main>
    </Root>
  );
};

export default PatientDashboard;

