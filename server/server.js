'use strict';

const morgan = require('morgan');
const express = require('express');
const {check, oneOf, validationResult} = require('express-validator'); // validation middleware
const dao = require('./dao');



/* init express */
const app = new express();
const port = 3001;

app.use(express.json());
app.use(morgan('dev'));

/* activate the server */
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


/*** API ***/

// GET /api/allCpu
app.get('/api/allCpu', async (req, res) => {
  try {
    const result = await dao.listCPU();
    res.json(result);
  } catch(err) {
    res.status(500).end();
  }
});

// GET /api/allGpu
app.get('/api/allGpu', async (req, res) => {
  try {
    const result = await dao.listGPU();
    res.json(result);
  } catch(err) {
    res.status(500).end();
  }
});

// GET /api/allHdd
app.get('/api/allHdd', async (req, res) => {
  try {
    const result = await dao.listHdd();
    res.json(result);
  } catch(err) {
    res.status(500).end();
  }
});

// GET /api/allMb
app.get('/api/allMb', async (req, res) => {
  try {
    const result = await dao.listMb();
    res.json(result);
  } catch(err) {
    res.status(500).end();
  }
});

// GET /api/allRam
app.get('/api/allRam', async (req, res) => {
  try {
    const result = await dao.listRam();
    res.json(result);
  } catch(err) {
    res.status(500).end();
  }
});

// GET /api/allGames
app.get('/api/allGames', async (req, res) => {
  try {
    const result = await dao.listGames();
    res.json(result);
  } catch(err) {
    res.status(500).end();
  }
});