const t=document.querySelector("button[data-start]"),e=(document.querySelector("button[data-stop]"),document.querySelector("body"));let a=null;e.addEventListener("click",(function(o){(function(o){o.target.hasAttribute("data-start")&&(a=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0)})(o),function(e){e.target.hasAttribute("data-stop")&&(t.disabled=!1,clearInterval(a))}(o)}));
//# sourceMappingURL=01-color-switcher.0e8a41bd.js.map
