require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      app = express(),
      ctrl = require('./products_controller'),
      {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
    })
    .catch(err => console.log(err));


app.post('/api/products', ctrl.create);
app.get('/api/products', ctrl.getAll);
app.get('/api/products/:id', ctrl.getOne);
app.put('/api/products/:id', ctrl.update);
app.delete('/api/products/:id', ctrl.delete);



const port = SERVER_PORT;
app.listen(port, () => console.log(`Server running on ${port}`));