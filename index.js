const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello My name is Himanshu Saraswat: and i am form a docker container');
});


app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

