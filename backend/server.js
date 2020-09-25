const express = require('express');
const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {
    bike: [
        {
            id: '123',
            name: 'Model A',
            price: '300',
            month: '1',
        },
        {
            id: '124',
            name: 'Model B',
            price: '430',
            month: '1'
        },
        {
            id: '125',
            name: 'Model C',
            price: '250',
            month: '1'
        }
    ],
}

app.get('/',(req,res)=> {
    res.send(database.users);
})

app.get('/bikes', (req, res) =>
{
    res.status(200).json({bike: database.bike})
})

app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user =>
    {
        if(user.id === id)
        {
            found = true;
            user.entries++;
            return res.json(user.entries);
        }
    })
    if(!found)
    {
        res.status(400).json('not found'); 
    }
})


// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });

app.listen(3001, ()=> {
    console.log('app is running on port 3001');
})

/*
/---> res
/signin--> POST = success/fail
/register -->POST =user
/profilr/:userid -->GET=user
/image -->PUT --> user
*/