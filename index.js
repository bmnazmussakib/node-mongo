const express = require('express');

const app = express();

const users = [
    {name: 'Sabana', 
    Age: 18, 
    Profession: 'Student', 
    Phone: '+000 888 555'},
    {name: 'Sabana', 
    Age: 18, 
    Profession: 'Student', 
    Phone: '+000 888 555'},
    {name: 'Sabnoor', 
    Age: 20, 
    Profession: 'Student', 
    Phone: '+000 888 555'},
    {name: 'Purnima', 
    Age: 30, 
    Profession: 'Student', 
    Phone: '+000 888 555'},
    {name: 'Mehzabin', 
    Age: 16, 
    Profession: 'Student', 
    Phone: '+000 888 555'},
    {name: 'Apurbo', 
    Age: 20, 
    Profession: 'Student', 
    Phone: '+000 888 555'},
    {name: 'Nisho', 
    Age: 15, 
    Profession: 'Student', 
    Phone: '+000 888 555'}
]

// const rootCall = (req, res) => res.send ('I know how to run Node......');

app.get('/', (req, res) => {

    const fruit = {
        product:'banana',
        price: 200
    }

    res.send(fruit);
})

app.get('/fruits/banana', (req, res) => {
    res.send({fruit: 'Banana', Qty: 1000, Price: 10000})
})

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const id = users[userId]
    res.send(id);
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(5000, ()=> console.log('Listening to port 5000'));