
//导入模块
import express from 'express'
import morgan from 'morgan'
import path from 'path'

//创建express项目 app
const app = express()

//设置一个预定义的日志格式  名字是 dev
app.use(morgan('dev'))

//设置视图
app.set('views', path.resolve(__dirname, 'views')) //视图的地址在views目录下面
//创建view engine
app.set('view engine', 'ejs')

//创建路由
app.get('/', (requset, response) => {
   response.render('index')  
})

//创建服务器,服务器端口3000
app.listen(3000, () => {
    console.log('Listen port: 3000')   
})

