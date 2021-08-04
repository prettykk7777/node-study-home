const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.listen(3000, ()=>{
    console.log('server start')
})

app.set('view engine', 'ejs')
app.set('views','views')
app.use(express.static('public'))
app.get('/', (req,res)=>{
    res.render('index.ejs', {title:'title'})
})