!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=document.querySelector("body"),n=null;function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}a.addEventListener("click",(function(e){e.target.dataset===t.dataset&&(n=setInterval((function(){a.style.backgroundColor=o()}),1e3),t.disabled=!0,a.style.backgroundColor=o())})),a.addEventListener("click",(function(a){a.target.dataset===e.dataset&&(t.disabled=!1,clearInterval(n))}))}();
//# sourceMappingURL=01-color-switcher.cba5b388.js.map
