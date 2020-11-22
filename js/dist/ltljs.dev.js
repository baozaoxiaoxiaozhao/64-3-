"use strict";

/* 响应式js设置  */
function chuang() {
  var x = window.innerWidth;
  var y = x * 100 / 1898;
  document.getElementsByTagName("html")[0].style.fontSize = y + "px";
}

window.onresize = chuang;
chuang();