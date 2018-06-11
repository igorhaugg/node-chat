const path = require('path');
const express = require('express');
// const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');
let app = express();

app.use(express.static(publicPath));

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}!`);
});

module.exports = { app };
