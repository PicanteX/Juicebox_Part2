const PORT = 3000;
const express = require('express');
const server = express();

server.listen(PORT, () => {
  console.log('The server is up on port', PORT);
});

<<<<<<< Updated upstream
=======
const morgan = require('morgan');
server.use(morgan('dev'));

server.use(express.json())
const apiRouter = require('./api');
server.use('/api', apiRouter);
>>>>>>> Stashed changes
