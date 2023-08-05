const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

// DB Setup
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('Connected to Database...'));

const app = express();
const router = require('./router');

// CORS configuration
const allowedOrigins = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    // Check if the origin is in the allowedOrigins array
    // or if it's undefined (for same-origin requests)
    const isAllowed = !origin || allowedOrigins.indexOf(origin) !== -1;
    callback(null, isAllowed);
  },
};

// App Setup
app.use(morgan('combined'));
app.use(cors(corsOptions));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3009;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
