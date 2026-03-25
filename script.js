function translateSite(){

let url=document.getElementById("url").value

if(!url){
alert("请输入网址")
return
}

let googleTranslate=

"https://translate.google.com/translate?sl=auto&tl=zh-CN&u="

let iframe=document.createElement("iframe")

iframe.src=googleTranslate+encodeURIComponent(url)

let viewer=document.getElementById("viewer")

viewer.innerHTML=""
viewer.appendChild(iframe)

}
