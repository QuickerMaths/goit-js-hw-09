!function(){var t,e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");e.addEventListener("click",(function(){t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e.disabled=!0})),o.addEventListener("click",(function(){clearInterval(t),e.disabled=!1,document.body.style.backgroundColor="white"}))}();
//# sourceMappingURL=01-color-switcher.f18065be.js.map
