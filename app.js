const express = require('express') // подключение express
const path = require('path') // подключение path
const fs = require('fs')
const server = express() // вызов express 

const PORT = 3000

// функция, определения пути до файла
const createPath = (page) => path.resolve(__dirname, 'pages', `${page}`)

//базовая прослушка сервера
server.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

server.use(express.static(__dirname + '/pages'))
//базовая имплементация роутинга на express
server.get('/', (req, res) => {
    res.sendFile(createPath('main.html', 'html'))
})
server.get('/calc', (req, res) => {
    res.sendFile(createPath('calc.html', 'html'))
})
server.get('/lodash', (req, res) => {
    res.sendFile(createPath('lodash.html', 'html'))
})
server.get('/jsonPage', (req, res) => {
    res.sendFile(createPath('jsonPage.html', 'html'))
})
server.get('/getcss', (req, res) => {
    res.sendFile(createPath('/styles/main.css', 'css'))
})
server.get('/redirect', (req, res) => {
    res.redirect('/calc.html')
})
server.get('/PRODUCTS', (req, res) => {
    res.sendFile(createPath('products.json'));
  });
server.use(express.json());
server.post('/addData', (req, res) => {
    let data = fs.readFileSync(createPath('products.json'));
    data = JSON.parse(data);
    data.PRODUCTS.push(req.body);
    fs.writeFileSync(createPath('products.json'), JSON.stringify(data));
    res.send({ message: 'ok' });
  });
  
  server.get('/getData', (req, res) => {
    let data = fs.readFileSync(createPath('products.json'));
    data = JSON.parse(data);
    res.send(data);
  });
server.use((req, res) => {
    res.status(404).sendFile(createPath('error'))
})