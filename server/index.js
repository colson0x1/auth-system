const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// DB Setup
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('Connected to Database...'));

const app = express();
const router = require('./router');

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3009;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
