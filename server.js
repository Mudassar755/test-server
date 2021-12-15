const express = require('express')
const connectDB = require('./config/db')
const app = express();
var cors = require("cors");
var helmet = require('helmet')
const users = require('./routes/api/users');
const profile = require('./routes/Api/profile')
const auth = require('./routes/Api/auth')
const posts = require('./routes/Api/posts')
const contact = require('./routes/Api/contact')

connectDB();
app.use(helmet())

app.get('/', (req, res)=> res.send('API Running'))

var whitelist = ['http://localhost:3000', 'https://classproject-uet.netlify.app']
var corsOptions = {
    origin: function (origin, callback) {
        console.log("origin", origin)
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
// app.use(cors(corsOptions));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
app.use(express.json({ extended : false}))
// app.use('./Api/users', require('./routes/Api/users'))
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/auth', auth);
app.use('/api/posts', posts);
app.use('/api/contact', contact);

// app.use('./Api/profile', require('./routes/api/profile'))
// app.use('./Api/posts', require('./routes/api/posts'))
// app.use('./pi/auth', require('./routes/api/auth'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server Started on Port ${PORT}`))