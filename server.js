const Koa = require('koa')
const path = require('path')
const static = require('koa-static');

const routers = require('./servers/router/index')
const app = new Koa()
const render = require('koa-ejs');
render(app, {
    root: path.join(__dirname, '/web/pages'),
    layout: false,
    viewExt: 'html',
    cache: false,
    debug: true
})

const pageNoFound = require('./servers/router/handles/error')



// 路由
routers.forEach(route => {
  app.use(route)
})
// 静态资源
app.use(static(path.join(__dirname, '/web')))

// 404处理
app.use(ctx => {
  if (ctx.status === 404) {
    pageNoFound(ctx)
  }
})

app.listen(3001)