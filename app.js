var express     = require('express'),
    bodyParser  = require('body-parser'),
    routers     = require('./routers'),
    app         = express(),    
    path        = require ("path"),
    port        = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

// static file path and middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// router setup
app.use('/', routers);

app.listen(port);
