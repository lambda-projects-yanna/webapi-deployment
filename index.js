require('dotenv').config();

const port = process.env.PORT || 4000;

const server = require('./api/server.js');

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
