const app = require('express')()
const PORT = 3000

app.use('*', (req, res) => {
  res.send('Chandelier CHANDELIERRRRRRR')
})

app.listen(PORT, (err) => {
  console.log('listening on PORT', PORT)
})
