const express = require('express');

const app = express();

const PORT = 5000;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
