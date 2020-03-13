// リクエストの送信
fetch("https://uinames.com/api/?region=japan")
  .then(response => response.json())
  .then(json => console.log(json));

// addを取得
// addをクリックされたら以下を実行
// ul要素を取得
// li要素を作成して、テキストを追加
document.getElementById("add").addEventListener("click", e => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent.innerHTML = json();
  ul.appendChild(li);
  event.preventDefault();
});
