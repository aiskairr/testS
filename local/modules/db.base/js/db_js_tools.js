;(function(window) {

	BX.DbScrollTo = function(IdScrollTo, FinishPosition){
		if(IdScrollTo.length > 0){
			var windowScroll = BX.GetWindowScrollPos(),
			objPos = BX.pos(BX(IdScrollTo), true);
			if(!FinishPosition){
				FinishPosition = 350;
			}
			(new BX.easing({
        		delay: 100,
        		duration : 1000,
        		start : { top: windowScroll.scrollTop },
        		finish : { top: objPos.top + (FinishPosition)},
        		transition : BX.easing.makeEaseOut(BX.easing.transitions.back   ), //quad 
        		step : function(state){
        			window.scrollTo(windowScroll.scrollLeft, state.top);
        		},
        		complete : function(){
        			BX.fx.colorAnimate(BX(IdScrollTo), 'showActive');
        		}
        	})).animate();
		}
	};

	BX.DbSetPrintCSS = function(isPrint){
	    var link;

	    if (document.getElementsByTagName)
	        link = document.getElementsByTagName('link');
	    else if (document.all)
	        link = document.all.tags('link');
	    else
	        return;

	    for (var index=0; index < link.length; index++)
	    {
	        if (!link[index].title || link[index].title != 'print')
	            continue;

	        if (isPrint)
	        {
	            link[index].disabled = false;
	            link[index].rel = "stylesheet";
	        }
	        else
	        {
	            link[index].disabled = true;
	            link[index].rel = "alternate stylesheet";
	            
	        }
	    }
	};
	BX.DbBackToDesignMode = function(){
	    if (document.all)
	        window.location.href = window.location.href.replace('#print','');
	    else
	        BX.DbSetPrintCSS(false);

	    return false;
	};
})(window);
BX.ready(function(){
	BX.addClass(document.body, 'js-on');
	BX.removeClass(document.body, 'js-off');
	if(!!BX.fx){
		BX.fx.colorAnimate.addRule('showActive', "#FFFFFF", "#F7F8FB", "background-color", 300, 1, true);
	}
	
	if (document.location.hash == '#print')
		BX.DbSetPrintCSS(true);

});