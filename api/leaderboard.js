let leaderboard = []; // In-memory leaderboard. Use a database for persistence if needed.

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request: Return the top 10 scores
    res.status(200).json(leaderboard.sort((a, b) => b.time - a.time).slice(0, 10));
  } else if (req.method === 'POST') {
    // Handle POST request: Add a new score to the leaderboard
    const { name, time } = req.body;

    // Validate input
    if (!name || typeof time !== 'number') {
      res.status(400).json({ error: 'Invalid input. Name and time are required.' });
      return;
    }

    // Add the new score
    leaderboard.push({ name, time });
    res.status(201).json({ message: 'Score added successfully!' });
  } else {
    // Handle unsupported methods
    res.status(405).json({ error: 'Method not allowed' });
  }
}
