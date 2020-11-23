function change(){     //js版媒介查询
    var iw=window.innerWidth;
    var fs=iw*100/1800;
    document.getElementsByTagName("html")[0].style.fontSize=fs+"px";
   }
   window.onresize=change;
   change();