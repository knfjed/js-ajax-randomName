// addを取得
// addをクリックされたら以下を実行
// ul要素を取得
// li要素を作成して、テキストを追加
document.getElementById("add").addEventListener("click", e => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = randomName();
  ul.appendChild(li);
  event.preventDefault();
});

// randomNameファンクションが呼び出されたら、以下を実行
// リクエストの送信
// 成功ならコンソールにレスポンス内容を表示
// エラーの場合はエラーとコンソール表示
function (randomName) { fetch("https://uinames.com/api/?region=japan")
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  })};