var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')



const clusterMongoDb = "mongodb+srv://testuser:testShinde@cluster0.shr0h.mongodb.net/bookmark-api?retryWrites=true&w=majority"

mongoose.connect(clusterMongoDb,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false },
    (err) => {
        console.log("connected", err ? err : true)
    }
)


const indexRouter = require('./routes/index');
const bookmarkRouter = require('./routes/bookmark');
const tagsRouter = require('./routes/tags')


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/bookmark', bookmarkRouter)
app.use('/api/tags', tagsRouter)


module.exports = app;
