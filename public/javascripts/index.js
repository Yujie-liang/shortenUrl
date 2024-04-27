const submitButton = document.querySelector('#search-form')
if (submitButton) {
  submitButton.addEventListener('submit', function (event) {
    const inputURL = document.querySelector('#link-input').value;
    if (inputURL.trim() === '') {
      event.preventDefault();  // 阻止表單提交
      alert('Please enter a URL to shorten.');
    }
  });
}

const copyButton = document.querySelector('#copyButton')
if (copyButton) {
  copyButton.addEventListener('click', function (event) {
    const url = document.querySelector('#shortUrl').href;  // 獲取shortURL
    if (url) {
      console.log(url)
    } else {
      console.log('nothing')
    }
    navigator.clipboard.writeText(url).then(function () {
      alert('URL copied!');
    }).catch(function (error) {
      alert('Copy failed');
    });
  })
}
