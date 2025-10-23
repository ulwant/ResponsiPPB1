require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const app = express();
app.use(express.json());

// optional logger (bantu debug)
app.use((req, res, next) => {
  console.log(new Date().toISOString(), req.method, req.url);
  next();
});

app.get('/items', async (req, res) => {
  try {
    const { status } = req.query;
    let q = supabase.from('items').select('*').order('created_at', { ascending: false });
    if (status) q = q.eq('status', status);
    const { data, error } = await q;
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// optional root route to avoid "Cannot GET /" (helps quick check)
app.get('/', (req, res) => res.send('Wash Shoes API — use /api/items'));

module.exports = app;
