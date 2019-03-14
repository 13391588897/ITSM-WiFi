$(document).ready(function() {
	var $logo = $(".logo");
	var $back = $(".back");
	var $goItsm = $("#goitsm");
	var $navNo = $("#nav-no");
	var $navSlow = $("#nav-slow");
	var $navPro = $("#nav-pro");
	
	var $nWifi = $("#nwifi");
	var $yWifi = $("#ywifi");
	var $catNSolution = $("#catnsolution");
	var $catYSolution = $("#catysolution");
	var $adapterNSolution =$("#adapternsolution");
	var $adapterYSolution =$("#adapterysolution");
	var $ispYSolution = $("#ispysolution");
	var $ispNSolution = $("#ispnsolution");
	var $replaceNSolution = $("#replacensolution");
	var $repowerNSolution = $("#repowernsolution");
	var $supplyNSolution = $("#supplynsolution");
	
	var $cantIpos = $("#cantipos");
	var $cantEmail = $("#cantemail");
	var $cantPrinter = $("#cantprinter");
	var $restart1 = $("#restart1");
	var $restart2 = $("#restart2");
	var $restart3 = $("#restart3");
	var $slowPrint = $("#slowprint");
	var $slowIpos = $("#slowipos");
	var $slowWeb = $("#slowweb");
	var $restart4 = $("#restart4");
	var $restart5 = $("#restart5");
	var $restart6 = $("#restart6");
	var $callIspNSolution = $("#callispnsolution");
	var $callIspNSolution2 = $("#callispnsolution2");
	
	
	$goItsm.on("click", function() {
        var errornum = $.trim($(".inputcss").val());
        var URL = encodeURI("itsm.html?errornum="+errornum);
		location.href = URL;
	});
	$logo.on("click", function() {
		location.href = "index.html";
	});
	$back.on("click", function() {
		window.history.back();
	});
	/*无网*/
	$navNo.on("click", function() {
		location.href = "ifwifi.html";
	}); 
	$nWifi.on("click", function() {
		location.href = "nwifi.html";
	});
	$yWifi.on("click", function() {
		location.href = "ywifi.html";
	});
	$catNSolution.on("click", function() {
		location.href = "zhuanhuantou.html";
	}); 
	$catYSolution.on("click", function() {
		alert("恭喜你，wifi问题已解决");
		location.href = "index.html";
	});
	$adapterNSolution.on("click", function() {
		location.href = "ISP.html";
	}); 
	$adapterYSolution.on("click", function() {
		alert("恭喜你，wifi问题已解决");
		location.href = "index.html";
	});
	$ispYSolution.on("click", function() {
		alert("请联系网络供应商续费")
		location.href = "index.html";
	});
	$ispNSolution.on("click", function() {
		location.href = "supplier.html";
	});
	$repowerNSolution.on("click", function() {
		location.href = "replacepower.html";
	});
	$replaceNSolution.on("click", function() {
		location.href = "errorA0008.html";
	});
	$supplyNSolution.on("click", function() {
		location.href = "errorA0004.html";
	});
	/*软硬件问题*/
	$navPro.on("click", function() {
		location.href = "iposuse.html";
	});
	$cantIpos.on("click", function() {
		location.href = "ifrestart1.html";
	});
	$cantEmail.on("click", function() {
		location.href = "ifrestart2.html";
	});
	$cantPrinter.on("click", function() {
		location.href = "ifrestart3.html";
	});
	$restart1.on("click", function() {
		location.href = "errorC0002.html";
	});
	$restart2.on("click", function() {
		location.href = "errorC0004.html";
	});
	$restart3.on("click", function() {
		location.href = "errorC0006.html";
	});
	/*网速慢*/
	$navSlow.on("click", function() {
		location.href = "slowclassify.html";
	});
	$slowPrint.on("click", function() {
		location.href = "ifrestart4.html";
	});
	$slowIpos.on("click", function() {
		location.href = "ifrestart5.html";
	});
	$slowWeb.on("click", function() {
		location.href = "ifrestart6.html";
    });
	$restart4.on("click", function() {
		location.href = "errorB0002.html";
    });
	$restart5.on("click", function() {
		location.href = "callISP.html";
    });
	$restart6.on("click", function() {
		location.href = "callISP2.html";
    });
	$callIspNSolution.on("click", function() {
		location.href = "errorB0005.html";
    });
	$callIspNSolution2.on("click", function() {
		location.href = "errorB0008.html";
    });
});	
/*(function () {
    function resize() {
	    var body = document.getElementsByTagName('body')[0];
	    var html = document.getElementsByTagName('html')[0];
	    var width = html.clientWidth;
	    var height =  html.clientHeight;
	    var max = width > height ? width : height;
	    var min = width > height ? height : width;
	    body.style.width = max + "px";
	    body.style.height = min + "px";
    }
    resize();
    window.addEventListener("resize", resize)
})();*/
