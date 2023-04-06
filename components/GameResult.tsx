import { Typography } from '@mui/material';
import { Choices } from '../interfaces';

interface GameResultProps {
  userChoice: Choices;
  computerChoice: Choices;
}

export const GameResult: React.FC<GameResultProps> = ({
  userChoice,
  computerChoice,
}) => {
  return (
    <div>
      <Typography variant="h6">You: {userChoice}</Typography>
      <Typography variant="h6">Computer: {computerChoice}</Typography>
    </div>
  );
};
