const express = require('express');
const app = express();
require('dotenv').config();

app.listen(process.env.PORT,  () => console.log('Starting server: {process.env.PORT}'));
app.use(express.static('public'));

app.post('/velox', (req, res) => {

})