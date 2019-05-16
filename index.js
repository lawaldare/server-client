const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const router = require('./router');

const mongoose = require('mongoose');
const cors = require('cors');

//DB setup
mongoose.connect(
  'mongodb://admin:QNQDd8wUBRhVUfrz@SG-client-21184.servers.mongodirector.com:48539,SG-client-21185.servers.mongodirector.com:48539,SG-client-21186.servers.mongodirector.com:48539/admin?replicaSet=RS-client-0&ssl=true',
  { useNewUrlParser: true }
);
//App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server listen on port: 3090');
