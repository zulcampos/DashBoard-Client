import logo from './logo.svg';
import './App.css';
import Weather from "./components/domain/Weather"
import { Grid } from '@mui/material';
import FactCard from './components/domain/TriviaFacts';

function App() {
  return (
  <Grid container spacing={2}>
    <Grid item xs={3}>
      <Weather></Weather>
    </Grid>
    <Grid item xs={5}>
    <FactCard></FactCard>
    </Grid>
  </Grid>
  );
}

export default App;
