function getNamesByCountryAndAmount(country, amount) {
  return new Promise((resolve, reject) => {
    fetch(`https://uinames.com/api/?region=${country}&amount=${amount}`).then(
      res => {
        if (res.status === 200) {
          res.json().then(data => {
            resolve(data);
          });
        } else {
          reject("response error");
        }
      }
    );
  });
}
const root = document.getElementById("root");

{
  /* 
  name list を受け取ってしたを返す
  <ol>
    <li>ryo togashi1</li>
    <li>ryo togashi2</li>
   <li>ryo togashi3</li>
  </ol>
*/
}

function createNameListOlEl(nameList) {
  //ol要素を作成
  const ol = document.createElement("ol");

  nameList.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    ol.appendChild(li);
  });

  return ol;
}

window.addEventListener("load", () => {
  getNamesByCountryAndAmount(
    "japan",
    15,
    "age",
    "birthday",
    "email",
    "phone",
    "password"
  )
    .then(data => {
      console.log(data);
      const nameList = data.map(({ name, surname }) => `${name} ${surname}`);
      root.appendChild(createNameListOlEl(nameList));
    })
    .catch(err => {
      console.log(err);
    });
});

// addを取得
// addをクリックされたら以下を実行
// ul要素を取得
// li要素を作成して、テキストを追加
// document.getElementById("add").addEventListener("click", event => {
//   event.preventDefault();
//   const ul = document.querySelector("ul");
//   const li = document.createElement("li");
//   ul.appendChild(li);
//   li.textContent = "hello";
// });
