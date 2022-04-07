import logo from './logo.svg';
import './App.css';
import OutlineCard from "./components/weather/Weather"
import { Grid } from '@mui/material';
function App() {
  return (
  <Grid container spacing={2}>
    <Grid item xs={4}>
      <OutlineCard></OutlineCard>
    </Grid>
  </Grid>  
  );
}

export default App;
