const express = require('express') // подключение express
const path = require('path') // подключение path

const server = express() // вызов express 

const PORT = 3000

// функция, определения пути до файла
const createPath = (page) => path.resolve(__dirname, 'pages', `${page}.html`)

//базовая прослушка сервера
server.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

server.use(express.static(__dirname + '/pages'))
//базовая имплементация роутинга на express
server.get('/', (req, res) => {
    res.sendFile(createPath('main', 'html'))
})
server.get('/calc', (req, res) => {
    res.sendFile(createPath('calc', 'html'))
})
server.get('/lodash', (req, res) => {
    res.sendFile(createPath('lodash', 'html'))
})
server.get('/getcss', (req, res) => {
    res.sendFile(createPath('/styles/main', 'css'))
})
server.get('/redirect', (req, res) => {
    res.redirect('/calc')
})
server.use((req, res) => {
    res.status(404).sendFile(createPath('error'))
})