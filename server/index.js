require('dotenv').config();
const ctrl = require('./controller')
const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , checkUserSession = require('./middleware/checkSessionMiddleware')

const {
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env

const app = express()

app.use(bodyParser.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(checkUserSession)

app.post('/user/register', ctrl.registerUser)
app.post('/user/login', ctrl.loginUser)

const port = 3005
massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    app.listen(port, () => {
    console.log(`Listening on port: `, port); 
  });
})