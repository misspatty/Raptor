//imports
const express = require('express')
const res = require('express/lib/response')
const bodyParser = require('body-parser')

const app = express()

//static file  (public is the name of the folder)
app.use(express.static('External'))

app.use('/css', express.static(__dirname+'External/css'))
app.use('/js', express.static(__dirname+'External/js'))
app.use('/img', express.static(__dirname+'External/img'))
app.use(express.urlencoded({extended: true}));

app.set('views','./Pages')
app.set('view engine', 'ejs')

app.get('/LoginPage', (req, res) => {
    res.render('LoginPage')
})
//Listen on prt 8080
app.listen(8080)