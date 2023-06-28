const express = require('express');

const app = express();

/**
 * Middleware -  general handler functions which apply to 
 * more than one type of request are typically 
 * called middleware function.
 * 
 * In this case is used for parsing data
 */
app.use(express.urlencoded({extended: false}))

app.get('/currentime', function (req, res) {
    res.send('works');
});

app.get('/', function (req, res) {
    res.send(`<form method="POST" action="/store-user">
    <label>Name</label>
    <input name="username" type="text"/>
    <button>Submit</button>
    </form>`);
});

/**
 * The url for post method should be equal to the value passed 
 * in the action attribute of a form.
 * 
 * The request argument can be used to access the values of the form. 
 * The request will be an object with properties corresponding 
 * to the name attribute of the form fields/inputs.
 * 
 * In this case req.body will have a property called username 
 * (as defined above in the form)
 */
app.post("/store-user", function (req, res) {
    const userName = req.body['username'];
    console.log('username', userName);

    res.send(`<h1>Username stored!!!! </h1>`);
});

app.listen(3000);