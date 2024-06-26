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
  res.render('index');
});

app.post('/submit', (req, res) => {
  const longUrl = req.body.url;
  let code = '';
  //console.log(longUrl)
  // check if the url already has code generated
  if (urlDatabase[longUrl] !== undefined) {
    code = urlDatabase[longUrl];
    //console.log(!urlDatabase[longUrl])
  } else {
    //console.log(urlDatabase[longUrl])
    const codeSet = new Set(Object.values(urlDatabase));
    // make sure the code is unique, if not, generate again
    do {
      code = generateRandomCode();
      //console.log(`code: ${code}`)
    } while (codeSet.has(code))

    urlDatabase[longUrl] = code;
    //console.log(`urlDatabase: ${Object.entries(urlDatabase)}`)
  }
  const shortUrl = `http://localhost:3000/${code}`;
  //console.log(`shortUrl: ${shortUrl}`)
  res.render('shortUrl', { url: req.body.url, shortUrl });
});

function generateRandomCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
};

app.get('/:code', (req, res) => {
  const code = req.params.code;
  let longUrl = findLongUrlByCode(code);
  //console.log(`longUrl: ${longUrl}`)
  if (longUrl !== null) {
    res.redirect(longUrl);
  } else {
    res.status(404).send('The short URL does not exist');
  }
});

function findLongUrlByCode(code) {
  for (let key in urlDatabase) {
    if (urlDatabase[key] === code) {
      return key;
    }
  }
  return null; // 如果沒有找到，返回null
};

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`);
})