import { Button } from '@mui/material';

interface ResetButtonProps {
  onClick: () => void;
}

export const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <Button variant="outlined" onClick={onClick}>
      Reset Scoreboard
    </Button>
  );
};
