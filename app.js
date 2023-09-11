// var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;



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

    // msgs.forEach(msg => {
    //     console.log(msg['text']);
    //     res.send(msg['text']);
    // })


    // let ss = JSON.stringify(msgs);
    // console.log(ss);
    // console.log(ss["messages"].length);
    // const entries = Object.entries(msgs);
    // console
    // .log(entries);
    // console.log(entries[1]);
    // // let len = 
    // msgs.forEach((value) => {
    //     // console.log(value[0].text);
    //     // console.log(value[1].text);
    //     console.log("Nothingggggggggggggggggg");
    //     console.log(value['text']);
    //     res.send(value['text']);
    // })
});

app.listen(port, () => {
    console.log('Example app listenning on port ' + port);
})