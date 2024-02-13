const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './templates')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {name: 'Vadim', id: 1})
})

app.get('/about', (req, res) => {
    res.render('Hello Express')
})

let port = 3002
app.listen(port, () => {
    console.log(`Сервер запущений: http://localhost:${port}`)
})
