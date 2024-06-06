const express = require('express')
const app = express()
const addDays = require('date-fns/addDays')
app.get('/', (request, response) => {
  let after100Days = addDays(new Date(), 100)
  let date =
    after100Days.getDate() < 10
      ? '0' + after100Days.getDate()
      : after100Days.getDate()
  let month =
    after100Days.getMonth() + 1 < 10
      ? '0' + (after100Days.getMonth() + 1)
      : after100Days.getMonth() + 1
  response.send(`${date}/${month}/${after100Days.getFullYear()}`)
})
app.listen(3000)
module.exports = app
