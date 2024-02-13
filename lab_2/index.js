const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './templates')

app.use(express.static('public'))
app.use('/css', express.static(path.join(_dirname, 'node_modules/bootstrap/dist/css')))


app.get('/', (req, res) => {
    res.render('vadim', {name: 'Vadim', age: 1, faculty: 'FICT', city: 'Kyiv'})
})

app.get('/evgeniy', (req, res) => {
    res.sendFile(__dirname + '/templates/evgeniy.html')
})

let port = 3002
app.listen(port, () => {
    console.log(`Сервер запущений: http://localhost:${port}`)
})
