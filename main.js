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

app.set('view engine','ejs')

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/news', (req, res)=>{
    res.sendFile(__dirname + '/404.html')
})

app.get('/news/:id', (req, res)=>{
    const obj = {title: 'новость', id: 3, paragraphs: ['Иван', 'Обычный текст', 'Числа: 2, 4, 6', 99]}
    //render ищет файлы которые уже находяться в папке views
    //отправляем в шаблонизатор параметр newsId со значением req.param.id
    res.render('news', {newsId: req.params.id, obj: obj})
})

app.listen(3000)