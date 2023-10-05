import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const NavBar = () => {
  return (
    <AppBar position="static">
  <Container maxWidth="xl">
  <Toolbar>
     
     <Typography variant="h5" component="div" >
     Bank Of React
     </Typography>
  
   </Toolbar>
  </Container>
  </AppBar>
  )
}

export default NavBar