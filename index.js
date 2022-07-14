const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json())

const users = [
    { id: 0, name: "saif", email: "saif@gmail.com", phone: "01988887766" },
    { id: 1, name: "rafi", email: "saif@gmail.com", phone: "01988887766" },
    { id: 2, name: "sufi", email: "saif@gmail.com", phone: "01988887766" },
    { id: 3, name: "asif", email: "saif@gmail.com", phone: "01988887766" },
    { id: 4, name: "jibon", email: "saif@gmail.com", phone: "01988887766" },
    { id: 5, name: "nirob", email: "saif@gmail.com", phone: "01988887766" }
]
app.get('/users', (req, res) => {
    const search = req.query.search
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
});

app.post('/users', (req, res) => {
    console.log("hitting the body", req.body)
    const newUser = req.body;
    newUser.id = users.length
    users.push(newUser);
    res.json(newUser)
});

app.get('/users/:id', (req, res) => {//just (./) dawer jonno kaj korlo nh
    const id = req.params.id;
    const user = users[id];
    res.send(user)
});


app.listen(port, () => {
    console.log('listening on port ', port);
});
