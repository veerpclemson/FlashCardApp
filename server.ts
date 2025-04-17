import express from 'express';
import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


const client = new Client({
  connectionString: process.env.DATABASE_URL, // Your PostgreSQL connection string
});
client.connect();

app.get('/api/flashcards', async (req, res) => {
  try {
      const flashcardSet = await prisma.flashcardSet.findAll();
      console.log("logged set" + flashcardSet);
  
      if (!flashcardSet) {
        res.status(404).json({ error: 'Flashcard set not found' });
      }
  
      res.status(200).json({
        id: flashcardSet.id,
        title: flashcardSet.title,
        description: flashcardSet.description,
        cards: flashcardSet.flashcards,
      });
    } catch (error: any) {
      console.error('Error fetching flashcard set:', error);
      res.status(500).json({ error: 'Internal server error' }
       );
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
