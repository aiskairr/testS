
; /* Start:"a:4:{s:4:"full";s:78:"/local/templates/html_dev/js/libs/jquery.magnific-popup.min.js?149398880420938";s:6:"source";s:62:"/local/templates/html_dev/js/libs/jquery.magnific-popup.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){var t,i,n,o,a,r,s,l=function(){},c=!!window.jQuery,p=e(window),u=function(e,i){t.ev.on("mfp"+e+".mfp",i)},d=function(t,i,n,o){var a=document.createElement("div");return a.className="mfp-"+t,n&&(a.innerHTML=n),o?i&&i.appendChild(a):(a=e(a),i&&a.appendTo(i)),a},f=function(i,n){t.ev.triggerHandler("mfp"+i,n),t.st.callbacks&&(i=i.charAt(0).toLowerCase()+i.slice(1),t.st.callbacks[i]&&t.st.callbacks[i].apply(t,e.isArray(n)?n:[n]))},m=function(i){return i===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=i),t.currTemplate.closeBtn},g=function(){e.magnificPopup.instance||(t=new l,t.init(),e.magnificPopup.instance=t)},h=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};l.prototype={constructor:l,init:function(){var i=navigator.appVersion;t.isIE7=i.indexOf("MSIE 7.")!==-1,t.isIE8=i.indexOf("MSIE 8.")!==-1,t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(i),t.isIOS=/iphone|ipad|ipod/gi.test(i),t.supportsTransition=h(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(i){n||(n=e(document.body));var a;if(i.isObj===!1){t.items=i.items.toArray(),t.index=0;var s,l=i.items;for(a=0;a<l.length;a++)if(s=l[a],s.parsed&&(s=s.el[0]),s===i.el[0]){t.index=a;break}}else t.items=e.isArray(i.items)?i.items:[i.items],t.index=i.index||0;if(t.isOpen)return void t.updateItemHTML();t.types=[],r="",i.mainEl&&i.mainEl.length?t.ev=i.mainEl.eq(0):t.ev=o,i.key?(t.popupsCache[i.key]||(t.popupsCache[i.key]={}),t.currTemplate=t.popupsCache[i.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,i),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=d("bg").on("click.mfp",function(){t.close()}),t.wrap=d("wrap").attr("tabindex",-1).on("click.mfp",function(e){t._checkIfClose(e.target)&&t.close()}),t.container=d("container",t.wrap)),t.contentContainer=d("content"),t.st.preloader&&(t.preloader=d("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(a=0;a<c.length;a++){var g=c[a];g=g.charAt(0).toUpperCase()+g.slice(1),t["init"+g].call(t)}f("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(u("MarkupParse",function(e,t,i,n){i.close_replaceWith=m(n.type)}),r+=" mfp-close-btn-in"):t.wrap.append(m())),t.st.alignTop&&(r+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:p.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup.mfp",function(e){27===e.keyCode&&t.close()}),p.on("resize.mfp",function(){t.updateSize()}),t.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&t.wrap.addClass(r);var h=t.wH=p.height(),v={};if(t.fixedContentPos&&t._hasScrollBar(h)){var C=t._getScrollbarSize();C&&(v.marginRight=C)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):v.overflow="hidden");var y=t.st.mainClass;return t.isIE7&&(y+=" mfp-ie7"),y&&t._addClassToMFP(y),t.updateItemHTML(),f("BuildControls"),e("html").css(v),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||n),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP("mfp-ready"),t._setFocus()):t.bgOverlay.addClass("mfp-ready"),o.on("focusin.mfp",t._onFocusIn)},16),t.isOpen=!0,t.updateSize(h),f("Open"),i},close:function(){t.isOpen&&(f("BeforeClose"),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP("mfp-removing"),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){f("Close");var i="mfp-removing mfp-ready ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(i+=t.st.mainClass+" "),t._removeClassFromMFP(i),t.fixedContentPos){var n={marginRight:""};t.isIE7?e("body, html").css("overflow",""):n.overflow="",e("html").css(n)}o.off("keyup.mfp focusin.mfp"),t.ev.off(".mfp"),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,f("AfterClose")},updateSize:function(e){if(t.isIOS){var i=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*i;t.wrap.css("height",n),t.wH=n}else t.wH=e||p.height();t.fixedContentPos||t.wrap.css("height",t.wH),f("Resize")},updateItemHTML:function(){var i=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),i.parsed||(i=t.parseEl(t.index));var n=i.type;if(f("BeforeChange",[t.currItem?t.currItem.type:"",n]),t.currItem=i,!t.currTemplate[n]){var o=!!t.st[n]&&t.st[n].markup;f("FirstMarkupParse",o),t.currTemplate[n]=!o||e(o)}a&&a!==i.type&&t.container.removeClass("mfp-"+a+"-holder");var r=t["get"+n.charAt(0).toUpperCase()+n.slice(1)](i,t.currTemplate[n]);t.appendContent(r,n),i.preloaded=!0,f("Change",i),a=i.type,t.container.prepend(t.contentContainer),f("AfterChange")},appendContent:function(e,i){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[i]===!0?t.content.find(".mfp-close").length||t.content.append(m()):t.content=e:t.content="",f("BeforeAppend"),t.container.addClass("mfp-"+i+"-holder"),t.contentContainer.append(t.content)},parseEl:function(i){var n,o=t.items[i];if(o.tagName?o={el:e(o)}:(n=o.type,o={data:o,src:o.src}),o.el){for(var a=t.types,r=0;r<a.length;r++)if(o.el.hasClass("mfp-"+a[r])){n=a[r];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=n||t.st.type||"inline",o.index=i,o.parsed=!0,t.items[i]=o,f("ElementParse",o),t.items[i]},addGroup:function(e,i){var n=function(n){n.mfpEl=this,t._openClick(n,e,i)};i||(i={});var o="click.magnificPopup";i.mainEl=e,i.items?(i.isObj=!0,e.off(o).on(o,n)):(i.isObj=!1,i.delegate?e.off(o).on(o,i.delegate,n):(i.items=e,e.off(o).on(o,n)))},_openClick:function(i,n,o){if((void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick)||2!==i.which&&!i.ctrlKey&&!i.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(p.width()<a)return!0;i.type&&(i.preventDefault(),t.isOpen&&i.stopPropagation()),o.el=e(i.mfpEl),o.delegate&&(o.items=n.find(o.delegate)),t.open(o)}},updateStatus:function(e,n){if(t.preloader){i!==e&&t.container.removeClass("mfp-s-"+i),n||"loading"!==e||(n=t.st.tLoading);var o={status:e,text:n};f("UpdateStatus",o),e=o.status,n=o.text,t.preloader.html(n),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),i=e}},_checkIfClose:function(i){if(!e(i).hasClass("mfp-prevent-close")){var n=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(n&&o)return!0;if(!t.content||e(i).hasClass("mfp-close")||t.preloader&&i===t.preloader[0])return!0;if(i===t.content[0]||e.contains(t.content[0],i)){if(n)return!0}else if(o&&e.contains(document,i))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||p.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(i){if(i.target!==t.wrap[0]&&!e.contains(t.wrap[0],i.target))return t._setFocus(),!1},_parseMarkup:function(t,i,n){var o;n.data&&(i=e.extend(n.data,i)),f("MarkupParse",[t,i,n]),e.each(i,function(e,i){if(void 0===i||i===!1)return!0;if(o=e.split("_"),o.length>1){var n=t.find(".mfp-"+o[0]);if(n.length>0){var a=o[1];"replaceWith"===a?n[0]!==i[0]&&n.replaceWith(i):"img"===a?n.is("img")?n.attr("src",i):n.replaceWith('<img src="'+i+'" class="'+n.attr("class")+'" />'):n.attr(o[1],i)}}else t.find(".mfp-"+e).html(i)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:l.prototype,modules:[],open:function(t,i){return g(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=i||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,i){i.options&&(e.magnificPopup.defaults[t]=i.options),e.extend(this.proto,i.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(i){g();var n=e(this);if("string"==typeof i)if("open"===i){var o,a=c?n.data("magnificPopup"):n[0].magnificPopup,r=parseInt(arguments[1],10)||0;a.items?o=a.items[r]:(o=n,a.delegate&&(o=o.find(a.delegate)),o=o.eq(r)),t._openClick({mfpEl:o},n,a)}else t.isOpen&&t[i].apply(t,Array.prototype.slice.call(arguments,1));else i=e.extend(!0,{},i),c?n.data("magnificPopup",i):n[0].magnificPopup=i,t.addGroup(n,i);return n};var v,C,y,w=function(){y&&(C.after(y.addClass(v)).detach(),y=null)};e.magnificPopup.registerModule("inline",{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push("inline"),u("Close.inline",function(){w()})},getInline:function(i,n){if(w(),i.src){var o=t.st.inline,a=e(i.src);if(a.length){var r=a[0].parentNode;r&&r.tagName&&(C||(v=o.hiddenClass,C=d(v),v="mfp-"+v),y=a.after(C).detach().removeClass(v)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),a=e("<div>");return i.inlineElement=a,a}return t.updateStatus("ready"),t._parseMarkup(n,{},i),n}}});var b,I=function(){b&&n.removeClass(b)},x=function(){I(),t.req&&t.req.abort()};e.magnificPopup.registerModule("ajax",{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push("ajax"),b=t.st.ajax.cursor,u("Close.ajax",x),u("BeforeChange.ajax",x)},getAjax:function(i){b&&n.addClass(b),t.updateStatus("loading");var o=e.extend({url:i.src,success:function(n,o,a){var r={data:n,xhr:a};f("ParseAjax",r),t.appendContent(e(r.data),"ajax"),i.finished=!0,I(),t._setFocus(),setTimeout(function(){t.wrap.addClass("mfp-ready")},16),t.updateStatus("ready"),f("AjaxContentAdded")},error:function(){I(),i.finished=i.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",i.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var k,T=function(i){if(i.data&&void 0!==i.data.title)return i.data.title;var n=t.st.image.titleSrc;if(n){if(e.isFunction(n))return n.call(t,i);if(i.el)return i.el.attr(n)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,i=".image";t.types.push("image"),u("Open"+i,function(){"image"===t.currItem.type&&e.cursor&&n.addClass(e.cursor)}),u("Close"+i,function(){e.cursor&&n.removeClass(e.cursor),p.off("resize.mfp")}),u("Resize"+i,t.resizeImage),t.isLowIE&&u("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var i=0;t.isLowIE&&(i=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-i)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,k&&clearInterval(k),e.isCheckingImgSize=!1,f("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var i=0,n=e.img[0],o=function(a){k&&clearInterval(k),k=setInterval(function(){if(n.naturalWidth>0)return void t._onImageHasSize(e);i>200&&clearInterval(k),i++,3===i?o(10):40===i?o(50):100===i&&o(500)},a)};o(1)},getImage:function(i,n){var o=0,a=function(){i&&(i.img[0].complete?(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("ready")),i.hasSize=!0,i.loaded=!0,f("ImageLoadComplete")):(o++,o<200?setTimeout(a,100):r()))},r=function(){i&&(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("error",s.tError.replace("%url%",i.src))),i.hasSize=!0,i.loaded=!0,i.loadError=!0)},s=t.st.image,l=n.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",i.img=e(c).on("load.mfploader",a).on("error.mfploader",r),c.src=i.src,l.is("img")&&(i.img=i.img.clone()),c=i.img[0],c.naturalWidth>0?i.hasSize=!0:c.width||(i.hasSize=!1)}return t._parseMarkup(n,{title:T(i),img_replaceWith:i.img},i),t.resizeImage(),i.hasSize?(k&&clearInterval(k),i.loadError?(n.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",i.src))):(n.removeClass("mfp-loading"),t.updateStatus("ready")),n):(t.updateStatus("loading"),i.loading=!0,i.hasSize||(i.imgHidden=!0,n.addClass("mfp-loading"),t.findImageSize(i)),n)}}});var E,_=function(){return void 0===E&&(E=void 0!==document.createElement("p").style.MozTransform),E};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,i=t.st.zoom,n=".zoom";if(i.enabled&&t.supportsTransition){var o,a,r=i.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+i.duration/1e3+"s "+i.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},a="transition";return o["-webkit-"+a]=o["-moz-"+a]=o["-o-"+a]=o[a]=n,t.css(o),t},l=function(){t.content.css("visibility","visible")};u("BuildControls"+n,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),!(e=t._getItemToZoom()))return void l();a=s(e),a.css(t._getOffset()),t.wrap.append(a),o=setTimeout(function(){a.css(t._getOffset(!0)),o=setTimeout(function(){l(),setTimeout(function(){a.remove(),e=a=null,f("ZoomAnimationEnded")},16)},r)},16)}}),u("BeforeClose"+n,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=r,!e){if(!(e=t._getItemToZoom()))return;a=s(e)}a.css(t._getOffset(!0)),t.wrap.append(a),t.content.css("visibility","hidden"),setTimeout(function(){a.css(t._getOffset())},16)}}),u("Close"+n,function(){t._allowZoom()&&(l(),a&&a.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(i){var n;n=i?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=n.offset(),a=parseInt(n.css("padding-top"),10),r=parseInt(n.css("padding-bottom"),10);o.top-=e(window).scrollTop()-a;var s={width:n.width(),height:(c?n.innerHeight():n[0].offsetHeight)-r-a};return _()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var P=function(e){if(t.currTemplate.iframe){var i=t.currTemplate.iframe.find("iframe");i.length&&(e||(i[0].src="//about:blank"),t.isIE8&&i.css("display",e?"block":"none"))}};e.magnificPopup.registerModule("iframe",{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push("iframe"),u("BeforeChange",function(e,t,i){t!==i&&("iframe"===t?P():"iframe"===i&&P(!0))}),u("Close.iframe",function(){P()})},getIframe:function(i,n){var o=i.src,a=t.st.iframe;e.each(a.patterns,function(){if(o.indexOf(this.index)>-1)return this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1});var r={};return a.srcAction&&(r[a.srcAction]=o),t._parseMarkup(n,r,i),t.updateStatus("ready"),n}}});var S=function(e){var i=t.items.length;return e>i-1?e-i:e<0?i+e:e},O=function(e,t,i){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,i)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var i=t.st.gallery,n=".mfp-gallery",a=Boolean(e.fn.mfpFastClick);if(t.direction=!0,!i||!i.enabled)return!1;r+=" mfp-gallery",u("Open"+n,function(){i.navigateByImgClick&&t.wrap.on("click"+n,".mfp-img",function(){if(t.items.length>1)return t.next(),!1}),o.on("keydown"+n,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),u("UpdateStatus"+n,function(e,i){i.text&&(i.text=O(i.text,t.currItem.index,t.items.length))}),u("MarkupParse"+n,function(e,n,o,a){var r=t.items.length;o.counter=r>1?O(i.tCounter,a.index,r):""}),u("BuildControls"+n,function(){if(t.items.length>1&&i.arrows&&!t.arrowLeft){var n=i.arrowMarkup,o=t.arrowLeft=e(n.replace(/%title%/gi,i.tPrev).replace(/%dir%/gi,"left")).addClass("mfp-prevent-close"),r=t.arrowRight=e(n.replace(/%title%/gi,i.tNext).replace(/%dir%/gi,"right")).addClass("mfp-prevent-close"),s=a?"mfpFastClick":"click";o[s](function(){t.prev()}),r[s](function(){t.next()}),t.isIE7&&(d("b",o[0],!1,!0),d("a",o[0],!1,!0),d("b",r[0],!1,!0),d("a",r[0],!1,!0)),t.container.append(o.add(r))}}),u("Change"+n,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),u("Close"+n,function(){o.off(n),t.wrap.off("click"+n),t.arrowLeft&&a&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null})},next:function(){t.direction=!0,t.index=S(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=S(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,i=t.st.gallery.preload,n=Math.min(i[0],t.items.length),o=Math.min(i[1],t.items.length);for(e=1;e<=(t.direction?o:n);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?n:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(i){if(i=S(i),!t.items[i].preloaded){var n=t.items[i];n.parsed||(n=t.parseEl(i)),f("LazyLoad",n),"image"===n.type&&(n.img=e('<img class="mfp-img" />').on("load.mfploader",function(){n.hasSize=!0}).on("error.mfploader",function(){n.hasSize=!0,n.loadError=!0,f("LazyLoadError",n)}).attr("src",n.src)),n.preloaded=!0}}}});e.magnificPopup.registerModule("retina",{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,i=e.ratio;i=isNaN(i)?i():i,i>1&&(u("ImageHasSize.retina",function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/i,width:"100%"})}),u("ElementParse.retina",function(t,n){n.src=e.replaceSrc(n,i)}))}}}}),function(){var t="ontouchstart"in window,i=function(){p.off("touchmove"+n+" touchend"+n)},n=".mfpFastClick";e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,r=e(this);if(t){var s,l,c,u,d,f;r.on("touchstart"+n,function(e){u=!1,f=1,d=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],l=d.clientX,c=d.clientY,p.on("touchmove"+n,function(e){d=e.originalEvent?e.originalEvent.touches:e.touches,f=d.length,d=d[0],(Math.abs(d.clientX-l)>10||Math.abs(d.clientY-c)>10)&&(u=!0,i())}).on("touchend"+n,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(s),s=setTimeout(function(){a=!1},1e3),o())})})}r.on("click"+n,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+n+" click"+n),t&&p.off("touchmove"+n+" touchend"+n)}}(),g()}(window.jQuery||window.Zepto);
/* End */
;; /* /local/templates/html_dev/js/libs/jquery.magnific-popup.min.js?149398880420938*/
