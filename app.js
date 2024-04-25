const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
let urlDatabase = {}

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
  let code = ''
  console.log(longUrl)
  if (urlDatabase[longUrl] !== undefined) {
    code = urlDatabase[longUrl]
    console.log(!urlDatabase[longUrl])
  } else {
    code = generateRandomCode()
    console.log(code)
    urlDatabase[longUrl] = code
  }
  const shortUrl = `http://localhost:3000/${code}`
  console.log(shortUrl)
  res.render('shortUrl', { url: req.body.url, shortUrl })
})

function generateRandomCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})