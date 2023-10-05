import NavBar from './components/NavBar';
import SliderSelect from './components/SliderSelect'
import TenureSelect from './components/TenureSelect'
import Result from './components/Result'
import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { Stack } from '@mui/material';


function App() {

  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000*0.2,
    loanAmount: 3000*0.8,
    loanTerm:5,
    intrestRate:5


  })

  return (
    <div className="App">
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>

        <Grid container spacing={5} alignItems='center'>

          <Grid item xs={12} md={6} >
            <SliderSelect data={data} setData={setData} />
            <Stack marginTop={2}>
            <TenureSelect data={data} setData={setData} />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>

            <Result  data={data} />
          </Grid>

        </Grid>





      </Container>
    </div>
  );
}

export default App;
