import React,{useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function FactCard() {
    const[fact, setTriviaFacts] = useState(undefined);
    const newFact =() =>{
        console.log("I was pressed");
        requestNewFact ();
    }
    const requestNewFact = () => {
        axios.get("http://localhost:8080/trivia")
        .then(response =>{
            setTriviaFacts(response.data)
        });
    }

    useEffect(()=>{
        requestNewFact();
    },[]);
    
  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardMedia
        component="img"
        height="150"
        image="https://techcrunch.com/wp-content/uploads/2021/04/GettyImages-1282124793.jpg?w=1390&crop=1"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Random Trivia Fact
        </Typography>
        <Typography variant="body3" >
          Fact: {fact}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"onClick ={newFact}>Next</Button>
      </CardActions>
    </Card>
  );
}