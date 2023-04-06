import type { NextPage } from 'next';
import { Container, Typography } from '@mui/material';
import { Game } from '../components/Game';

const Home: NextPage = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Rock, Paper, Scissors, Lizard, Spock
      </Typography>
      <Game />
    </Container>
  );
};

export default Home;
