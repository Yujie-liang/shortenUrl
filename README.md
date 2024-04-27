短網址產生器
===
短網址產生器方便使用者產生縮短後的網址，以利分享，並在點擊短網址後，自動重新導向回原先網址。  
## 功能規格
- 使用者可輸入原始網址，並提交
- 產生的短網址格式為5碼英數亂碼
- 輸入相同網址時，產生一樣的縮址。
- 若使用者沒有輸入內容，就按下了送出鈕，需要防止表單送出並提示使用者
- 使用者可以一鍵複製生成的短網址
- 使用者可以透過按鈕返回主畫面，輸入其他網址
- 使用者可以在生成短網址的畫面看到原始網址

## 成品
![home page](https://i.imgur.com/rIQ8E88.png)
![shortUrl page](https://i.imgur.com/UptuwoJ.png)

## 開發環境
```
node.js
express
```
## 專案安裝
1. 將此專案clone到本地
  ```
  https://github.com/Yujie-liang/shortenUrl.git
  ```
2. 在本地的專案資料夾內安裝套件
  ```
  npm i express
  npm i express-handlebars
  ```
3. 執行專案
  ```
  npm run dev
  ```
4. 可以在http://localhost:3000 使用專案囉~