document.addEventListener("DOMContentLoaded", function(){
    const btn = document.getElementById("btn");
    const input = document.getElementById("url");

    function translate(){
        let url = input.value.trim();
        if(!url){
            alert("请输入网址");
            return;
        }
        if(!url.startsWith("http")){
            url = "https://" + url;
        }
        // 最稳定方案：直接在新标签打开 Google 翻译
        const translateURL = "https://translate.google.com/translate?sl=auto&tl=zh-CN&u=" + encodeURIComponent(url);
        window.open(translateURL, "_blank");
    }

    btn.addEventListener("click", translate);
    input.addEventListener("keypress", function(e){
        if(e.key === "Enter") translate();
    });
});
