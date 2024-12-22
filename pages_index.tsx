import React from 'react';
import { Button, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Healthcare Dashboards
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  );
}

