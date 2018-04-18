const route = require('koa-route')

const home =  require('./handles/home')
const about = require('./handles/about')


module.exports = [
  route.get('/', home),
  route.get('/home', home),
  route.get('/about', about)
]