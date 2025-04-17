import express from 'express';
import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());



const client = new Client({
  connectionString: process.env.DATABASE_URL, // Your PostgreSQL connection string
});
client.connect();

app.get('/api/flashcards', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM flashcards');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching flashcards:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/flashcards', async (req, res) => {
  const { title, description, cards } = req.body;
  try {
    const setQuery = 'INSERT INTO flashcard_sets (title, description) VALUES ($1, $2) RETURNING id';
    const setRes = await client.query(setQuery, [title, description]);
    const setId = setRes.rows[0].id;

    for (const card of cards) {
      const cardQuery = 'INSERT INTO flashcards (set_id, front, back) VALUES ($1, $2, $3)';
      await client.query(cardQuery, [setId, card.front, card.back]);
    }

    res.json({ message: 'Flashcard set created successfully' });
  } catch (error) {
    console.error('Error creating flashcard set:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
