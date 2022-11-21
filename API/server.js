const express = require("express");

const jokes = require("./joke/jokes");

const app = express();

//defining port to api
app.listen(5000, () => {
    console.log('server is started at PORT 5000');
});


app.get('/', (req, res) => {
    res.send('api is running..');
});

//function to get random index

function getRandomItem(arr) {


    const randomIndex = Math.ceil(Math.random() * arr.length) + 1;

    return randomIndex;
}

app.get(`/random/jokes/joke/`, (req, res) => {
    try {
        const joke_index = getRandomItem(jokes);
        const joker = jokes[joke_index];
        res.status(200).send(joker);
    } catch (error) {
        res.status(400).send(error);

    }


});