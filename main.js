// const fs = require('fs')
//
// асинхронное удаление файла
// fs.unlink('./new-one/some_new.txt', () => {
//     fs.rmdir('new-one', () => {console.log('Папка удалена')})
// })
// fs.mkdir('new-one', () => {
//     fs.writeFile('./new-one/some_new.txt', 'Привет мир' ,() => {
//         console.log('Все сработало')
//     })
// })
//
// ВАЖНО!!! ЧТОБЫ УДАЛИТЬ ПАПКУ С ФАЙЛАМИ - СНАЧАЛА НАДА УДАЛИТЬ ФАЙЛЫ А ЗАТЕМ САМУ ПАПКУ
//
// const filereaded = fs.readFile('text.txt', 'utf-8', (err,data) => {
//     console.log(data)
// })
// console.log('test')
// console.log(filereaded)
//
// fs.writeFileSync('exemple.txt', 'Привет мир! Встречай меня')

// const fs = require('fs')
// const http = require('http')
//
// const server = http.createServer( (req, res) => {
//     console.log('URL: ' + req.url)
//     if( req.url === '/index' || req.url === '/') {
//         res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
//         fs.createReadStream(__dirname + '/index.html').pipe(res)
//     } else{
//         res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'})
//         fs.createReadStream(__dirname + '/404.html').pipe(res)
//     }
//
// })
//
// server.listen(3000,'127.0.0.1')
//
// console.log('мы отслеживаем порт 3000')

// const fs = require('fs')
//
// const myReadShort = fs.createReadStream(__dirname +'/compucter.txt')
//
// myReadShort.on('data', (chunk) => {
//     console.log('новые данные получены:\n' + chunk)
// })

const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.send('this is home')
})

app.get('/news', (req, res)=>{
    res.send('this is news')
})

app.get('/news/:id/:some', (req, res)=>{
    res.send('ID is - ' + req.params.id + ' Some - ' + req.params.some)
})

app.listen(2000)