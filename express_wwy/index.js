
//导入模块
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import bodyParser from 'body-parser'

//创建express项目 app
const app = express()

//设置一个预定义的日志格式  名字是 dev
app.use(morgan('dev'))
//使用bodyParser
/**
 * app.use(bodyParser.json());    解析json数据格式
 * app.use(bodyParser.urlencoded({ extended: false }));   解析form表单提交的数据
 */
app.use(bodyParser.urlencoded( { extended: false}))

//定义变量comments,创建一个本地变量comments,让上面的comments等于下面的comments
let comments = []
app.locals.comments = comments

//设置视图
app.set('views', path.resolve(__dirname, 'views')) //视图的地址在views目录下面
//创建view engine
app.set('view engine', 'ejs')

//创建路由
app.get('/', (requset, response) => {
   response.render('index')  
})

app.get('/comments/new', (request, response) => {
    response.render('comments/new')
})

app.get('/comments', (request, response) => {
    response.render('comments/index')
})

app.post('/comment/new', (request, response) => {
    if(!request.body.comments) {
        response.status(400).send('Do you have something to say?')
        return
    }
    //
    comments.push({
        comments:requset.body.comments,
        created_at: new Date()
    })
    response.redirect('/comments')
})

//创建服务器,服务器端口3000
app.listen(3000, () => {
    console.log('Listen port: 3000')   
})

