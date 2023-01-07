const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 4000 || process.env.PORT;

// static files
app.use(express.static('public'));
app.use('/css',express.static(__dirname = 'public/css'));
app.use('/img',express.static(__dirname = 'public/img'));
app.use('/js',express.static(__dirname = 'public/js'));

// template  engine
app.set('views','./src/views');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
//Routes
const newsRouter = require("./src/routes/news");

app.use('/', newsRouter);

app.listen(port,'0.0.0.0',()=>{
  console.log(`Listening on Port ${port}`);
});

