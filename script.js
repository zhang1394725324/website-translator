function translate(){

let url = document.getElementById("url").value.trim();

if(!url){
alert("请输入网址");
return;
}

// 自动补全 https
if(!url.startsWith("http")){
url = "https://" + url;
}

// Google Translate 代理
let translateURL =
"https://translate.google.com/translate?sl=auto&tl=zh-CN&u=" + encodeURIComponent(url);

// 跳转方式（更稳定）
window.location.href = translateURL;

}

```javascript

function translate(){

let url=document.getElementById("url").value

if(!url){
alert("请输入网址")
return
}

let translateURL=

"https://translate.googleusercontent.com/translate?sl=auto&tl=zh-CN&u="

let viewer=document.getElementById("viewer")

viewer.src=translateURL+encodeURIComponent(url)

}
