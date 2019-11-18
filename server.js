// require('dotenv').config();
const express = require('express');
// const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./models');
const app = express();

// Database setup

mongoose.connect('mongodb://localhost/googlebooks', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });;

// App middlewares setup
// app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// If we are in production, serve our clients build folder
// This 'build' is only created during production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

//  Routes setup
const routes = require('./routes');
app.use(routes);

app.get("/", function (req, res){
    res.send("hello")
});

app.get("/SAM", function(req, res){
    const number = Math.random()*20
    res.send(`${number}`)
});




// app.use(routes);

// Server setup
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));