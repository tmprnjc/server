const express = require('express');
const app = express();
require('dotenv').config();

app.listen(3000,  () => console.log('Starting server: {process.env.PORT}'));
app.use(express.static('public'));

app.post('/velox', (req, res) => {

})