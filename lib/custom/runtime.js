$(document).ready(function () {

  var createruntime = function() {
        var nowRuntime = new Date();
        var grt= new Date("05/01/2016 00:00:00");
        days = (nowRuntime - grt ) / 1000 / 60 / 60 / 24; dnum = Math.floor(days);
        hours = (nowRuntime - grt ) / 1000 / 60 / 60 - (24 * dnum); hnum = Math.floor(hours);
        if(String(hnum).length ==1 ){hnum = "0" + hnum;} minutes = (nowRuntime - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
        mnum = Math.floor(minutes); if(String(mnum).length ==1 ){mnum = "0" + mnum;}
        seconds = (nowRuntime - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
        snum = Math.round(seconds); if(String(snum).length ==1 ){snum = "0" + snum;}
        document.getElementById("runday").innerHTML = "我已鸟悄运行了 "+dnum+" 天 ";
        document.getElementById("runtime").innerHTML = hnum + " 时 " + mnum + " 分 " + snum + " 秒";
  }
  setInterval(createruntime,1000);

});
