require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    return res.json('Ok')
})

const port = process.env.PORT || 3000

app.listen(process.env.PORT, () => {
    console.log(`Servidor em pé ${port}`)
});

