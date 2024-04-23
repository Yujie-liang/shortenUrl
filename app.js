const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

app.engine('.hbs', engine({ extname: 'hbs' }))
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static('public'))
// 為了解析 application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/submit', (req, res) => {
  const longUrl = req.body.url;
  console.log(longUrl)
  //const shortUrl = 
  res.render('shortUrl', { url: req.body.url })//, { shortUrl })
})
app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})