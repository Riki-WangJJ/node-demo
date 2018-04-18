const fs = require('fs')

module.exports = ctx => {
  ctx.response.type = 'html'
  // ctx.response.body = fs.createReadStream('./web/pages/about.html')
  ctx.body = fs.createReadStream('./web/pages/about.html')
}