// src/app.js
require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('Missing SUPABASE_URL or SUPABASE_KEY in environment');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const app = express();
app.use(express.json());

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

app.get('/items/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase.from('items').select('*').eq('id', id).single();
        if (error) return res.status(404).json({ error: error.message });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/items', async (req, res) => {
    try {
        const { name, customer_name, status = 'Menunggu', price = 0, note = '' } = req.body;
        if (!name) return res.status(400).json({ error: 'name is required' });
        const { data, error } = await supabase.from('items').insert([{ name, customer_name, status, price, note }]).select().single();
        if (error) return res.status(500).json({ error: error.message });
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/items/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const { data, error } = await supabase.from('items').update(updates).eq('id', id).select().single();
        if (error) return res.status(404).json({ error: error.message });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/items/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase.from('items').delete().eq('id', id).select().single();
        if (error) return res.status(404).json({ error: error.message });
        res.json({ message: 'deleted', item: data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = app;
