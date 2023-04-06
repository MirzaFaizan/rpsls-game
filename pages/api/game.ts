import type { NextApiRequest, NextApiResponse } from 'next';
import { Choices } from '../../interfaces';

function calculateResult(userChoice: Choices, computerChoice: Choices) {
  const rules: Record<Choices, Choices[]> = {
    [Choices.ROCK]: [Choices.SCISSORS, Choices.LIZARD],
    [Choices.PAPER]: [Choices.ROCK, Choices.SPOCK],
    [Choices.SCISSORS]: [Choices.PAPER, Choices.LIZARD],
    [Choices.LIZARD]: [Choices.SPOCK, Choices.PAPER],
    [Choices.SPOCK]: [Choices.SCISSORS, Choices.ROCK],
  };

  if (userChoice === computerChoice) {
    return 'draw';
  }

  return rules[userChoice].includes(computerChoice) ? 'win' : 'lose';
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { userChoice } = req.body;
    const response = await fetch('https://codechallenge.boohma.com/random');
    const data = await response.json();
    const randomNumber = data.random_number;
    const computerChoice = Object.values(Choices)[(randomNumber - 1) % 5];
    const result = calculateResult(userChoice, computerChoice);

    res.status(200).json({ userChoice, computerChoice, result });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
