import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import { Choices } from '../interfaces';

export interface ScoreboardEntry {
  userChoice: Choices;
  computerChoice: Choices;
  result: 'win' | 'lose' | 'draw';
}

interface ScoreboardProps {
  entries: ScoreboardEntry[];
}

const headerStyles = {
  fontWeight: 'bold',
  backgroundColor: '#f5f5f5',
};

const resultStyles: Record<'win' | 'lose' | 'draw', object> = {
  win: { color: '#4caf50' },
  lose: { color: '#f44336' },
  draw: { color: '#9e9e9e' },
};

export const Scoreboard: React.FC<ScoreboardProps> = ({ entries }) => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 4 }}>
      <Typography variant="h6" sx={{ textAlign: 'center', paddingTop: 1 }}>
        Recent Results
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={headerStyles}>You</TableCell>
            <TableCell sx={headerStyles}>Computer</TableCell>
            <TableCell sx={headerStyles}>Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.slice(-10).map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{entry.userChoice}</TableCell>
              <TableCell>{entry.computerChoice}</TableCell>
              <TableCell sx={resultStyles[entry.result]}>
                {entry.result.toUpperCase()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
