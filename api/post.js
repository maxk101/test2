export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, time } = req.body;

    if (!name || !time) {
      res.status(400).json({ error: 'Name and time are required.' });
      return;
    }

    // Add new score to leaderboard
    leaderboard.push({ name, time: parseFloat(time) });

    res.status(201).json({ message: 'Score added successfully.' });
  }
}
