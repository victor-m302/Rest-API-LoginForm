const express = require('express')
const app = express()
const { response } = require('express')
const users = []

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css/assets'))
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    res.render('index.ejs', {name: 'Joe'})
})

app.get('/success', (req, res) => {
    res.render('success.ejs')
})


app.get('/login', (req, res) => {
    res.render('login.ejs', {name: ''})
})


app.get('/register', (req, res) => {
    res.render('register.ejs', {name: 'Register'})
})



app.post('/register', (req, res) => {
    try{
        users.push({
            id: Date.now().toString(),
            name: req.body.name, //acessa o name
            email: req.body.email, //acessa o email do form
            password: req.body.password //acessa o passw
        })
        res.redirect('/login')
    }
    catch{
        res.redirect('/register')
    }
    console.log(users);


})

app.post('/login', (req, res) => {
    let correctLogin = false
    users.forEach(element => { 
        if(element.email == req.body.email && element.password == req.body.password ){
            correctLogin = true
            return
        }
    });
    if(correctLogin){
        res.redirect('/success')
    }
    else{
        res.redirect('/register')
    }
})


app.listen(3000)
 