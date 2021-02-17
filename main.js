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

const http = require('http')

const server = http.createServer( (req, res) => {
    console.log('URL: ' + req.url)
    res.writeHead(200, {'Content-Type':'text/plain;charset=utf-8'})
    res.end('Привет мир')
})

server.listen(3000,'127.0.0.1')

console.log('мы отслеживаем порт 3000')