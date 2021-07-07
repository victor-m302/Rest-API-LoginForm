const express = require('express')
const app = express()
const bcrypt = require('bcrypt') //npm i bcrypt
const { response } = require('express')
const users = []

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    res.render('index.ejs', {name: 'Joe'})
})

app.get('/login', (req, res) => {
    res.render('login.ejs', {name: 'Login'})
})


app.get('/register', (req, res) => {
    res.render('register.ejs', {name: 'Register'})
})

app.post('/login', (req, res) => {
    req.body.name
})


app.post('/register', async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name, //acessa o name
            email: req.body.email, //acessa o name
            password: hashedPassword//req.body.password //acessa o name
        })
        res.redirect('/login')
    }
    catch{
        res.redirect('/register')
    }
    console.log(users);


})

app.listen(3000)
