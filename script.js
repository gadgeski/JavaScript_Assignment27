const paramNameDisplay = document.getElementById("paramName");
const paramCityDisplay = document.getElementById("paramCity");

// URLからクエリ文字列を取得
const queryString = window.location.search;

// URLSearchParamsオブジェクトを作成
const urlParams = new URLSearchParams(queryString);

// 'name'パラメータの値を取得
const name = urlParams.get("name");
if (name) {
  paramNameDisplay.textContent = name;
} else {
  paramNameDisplay.textContent = "名前がありません";
  paramNameDisplay.style.color = "red";
}

// 'city'パラメータの値を取得
const city = urlParams.get("city");
if (city) {
  paramCityDisplay.textContent = city;
} else {
  paramCityDisplay.textContent = "都市がありません";
  paramCityDisplay.style.color = "red";
}

// 全てのパラメータをコンソールに出力して確認（デバッグ用）
console.log("URL Parameters:");
for (const [key, value] of urlParams.entries()) {
  console.log(`${key}: ${value}`);
}
