const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:5173' })); // Replace with frontend URL

// Other middleware and routes
