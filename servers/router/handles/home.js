const fs = require('fs')
const path = require('path')
module.exports = async ctx => {
  console.log('首页')
  // ctx.response.type = 'html'
  // ctx.response.body = fs.createReadStream('./web/pages/index.html')
  await ctx.render('index', {})
}