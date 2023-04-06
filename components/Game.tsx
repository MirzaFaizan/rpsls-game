import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { GameResult } from '../components/GameResult';
import { ResetButton } from '../components/ResetButton';
import { Scoreboard, ScoreboardEntry } from '../components/Scoreboard';
import { Choices } from '../interfaces';
import { ChoicesGrid } from './ChoicesGrid';

export const Game = () => {
  const [gameResult, setGameResult] = useState<ScoreboardEntry | null>(null);
  const [scoreboard, setScoreboard] = useState<ScoreboardEntry[]>([]);

  const resultStyles: Record<'win' | 'lose' | 'draw', object> = {
    win: { color: '#4caf50' },
    lose: { color: '#f44336' },
    draw: { color: '#9e9e9e' },
  };

  async function handleChoiceClick(choice: Choices) {
    const response = await fetch('/api/game', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userChoice: choice }),
    });
    const data = await response.json();
    setGameResult(data);
    setScoreboard([...scoreboard, data]);
  }

  const handleResetScoreboard = () => {
    setScoreboard([]);
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Choose your move:</Typography>
          <ChoicesGrid onChoiceClick={handleChoiceClick} />
          <Box mt={10}>
            {gameResult && (
              <GameResult
                userChoice={gameResult.userChoice}
                computerChoice={gameResult.computerChoice}
              />
            )}
            <Typography
              variant="h4"
              sx={gameResult ? resultStyles[gameResult.result] : {}}
            >
              {gameResult ? gameResult.result.toUpperCase() : 'Make a move'}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative' }}>
            <Box sx={{ position: 'absolute', top: -40, right: 0 }}>
              <ResetButton onClick={handleResetScoreboard} />
            </Box>
            <Scoreboard entries={scoreboard} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
