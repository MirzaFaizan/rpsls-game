import { Button } from '@mui/material';
import { Choices } from '../interfaces';

interface GameButtonProps {
  choice: Choices;
  onClick: () => void;
}

export const GameButton: React.FC<GameButtonProps> = ({ choice, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {choice}
    </Button>
  );
};
