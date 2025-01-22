let leaderboard = []; // Replace with a database for persistence.

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Sort leaderboard by time (descending) and send top 10
    res.status(200).json(leaderboard.sort((a, b) => b.time - a.time).slice(0, 10));
  }
}
