var express = require('express');
var path = require('path');

var app = express();


// const express = require('express');
// const app = express();
const port = 8080;
const msgs = require('./routes/messages');

// console.log(msgs);
app.get('/', (req, res) => {
    let tmp = JSON.stringify(msgs);


    console.log(msgs);
    let len = msgs.length;
    console.log(len);

    
    let test = '';
    msgs.forEach(msg => {
        // console.log(msg['text']);
        // console.log(typeof(msg['text']));
        let str = msg['text'] + '\n';
        test += str;
        // test += (msg['text']);
        // test += '\n';
    });

    let lines = [];
    msgs.forEach(msg => {
        lines.push(msg['text']);
    });
    const resss = lines.join('\n');
    console.log(resss);

    res.send(resss);

});


// app.get('/messages', (res, req) => {
//     console.log(res);
//     res.render('index', {title: msgs[0]['text']});
// })
// app.listen(port, () => {
//     console.log('Example app listenning on port ' + port);
// })

const bodyParser = require('body-parser'); // Import body-parser


// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));


const pug = require('pug');
const messages = require('./routes/messages');


// Serve your .pug files from a "views" directory
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/messages', (req, res) => {
    const people = msgs;
    console.log(people);
    console.log(people[0]['text']);
    res.render('index.pug', {people});
})



app.get('/new', (req, res) => {
    res.render('new.pug');
});


app.post('/new', (req, res) => {
    const name = req.body.name;
    const msg = req.body.message;

    console.log('Name: ' + name);
    console.log('Message: ' + msg);

    msgs.push({"text": msg, "user": name, "added": Date.now()});
    
    // At the end of router.post() ,, we want to send the user back to 
    // the messages page to see the added message.
    res.redirect('/messages');
    
    res.send('Form Submitted Successfully!');
});


app.listen(port, () => {
    console.log(`Server is listenning at http://localhost:${port}`);
})

