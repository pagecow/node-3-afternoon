require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      app = express(),
      {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
    })
    .catch(err => console.log(err));

const port = SERVER_PORT;
app.listen(port, () => console.log(`Server running on ${port}`));