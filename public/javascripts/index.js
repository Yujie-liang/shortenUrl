document.querySelector('#search-form').addEventListener('submit', function (event) {
  const inputURL = document.querySelector('#link-input').value;
  if (inputURL.trim() === '') {
    event.preventDefault();  // 阻止表單提交
    alert('Please enter a URL to shorten.');
  }
});
