import express from 'express'
import morgan from 'morgan'
import path from 'path'
import socketIO from 'socket.io'

const app = express()

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(morgan('dev'))

app.get('/', (request, response) => {
  response.render('index')
})

// app.listen(3000, () => {
//   console.log('Listen port: 3000')
// })
let server = app.listen(3000, () => {
  console.log('listen port: 3000')
})

let io = socketIO(server)

//事件监听
io.on('connect', (socket) => {
  console.log('user connected 连接成功')
  socket.on('disconnect', () => {
    consolo.log('user disconnected 连接失败')
  })
})