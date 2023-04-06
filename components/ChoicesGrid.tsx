// components/ChoicesGrid.tsx
import { Grid } from '@mui/material';
import { GameButton } from './GameButton';
import { Choices } from '../interfaces';

interface ChoicesGridProps {
  onChoiceClick: (choice: Choices) => void;
}

export const ChoicesGrid: React.FC<ChoicesGridProps> = ({ onChoiceClick }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {Object.values(Choices).map((choice) => (
        <Grid item xs={6} sm={4} md={3} key={choice}>
          <GameButton choice={choice} onClick={() => onChoiceClick(choice)} />
        </Grid>
      ))}
    </Grid>
  );
};
