const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",n),e.addEventListener("click",(function(){t.removeAttribute("disabled",""),clearInterval(o)}));const o=setInterval(n,1e3);function n(){t.setAttribute("disabled",""),document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.9492c522.js.map
