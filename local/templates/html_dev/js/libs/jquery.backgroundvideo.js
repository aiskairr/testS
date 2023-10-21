!function (a) {
    a.backgroundVideo = function (b, c) {
        var d = {videoid: "video_background"}, e = this;
        e.settings = {};
        var f = function () {
            e.settings = a.extend({}, d, c), e.el = b, g()
        }, g = function () {
            var b = "";
            b += '<video id="' + e.settings.videoid + '" preload="auto" autoplay="autoplay" muted="muted" loop="loop"', e.settings.poster && (b += ' poster="' + e.settings.poster + '" '), b += 'style="display:none;top:0;left:0;bottom:0;right:0;z-index:-100;width:100%;height:100%;">';
            if (typeof e.settings.path !== 'undefined') {
                e.settings.path.forEach(function(item, i) {
                    b += '<source src="' + item +  '" type="video/' + e.settings.vTypes[i] + '" />';
                });
            }
            b += "bgvideo</video>", e.el.prepend(b), e.videoEl = document.getElementById(e.settings.videoid), e.$videoEl = a(e.videoEl), e.$videoEl.fadeIn(2e3), h()
        }, h = function () {
            var a = i();
            e.$videoEl.width(a * e.settings.width), e.$videoEl.height(a * e.settings.height), "undefined" != typeof e.settings.align && j()
        }, i = function () {
            var b = a(window).width(), c = a(window).height(), d = b / c, f = e.settings.width / e.settings.height,
                g = c / e.settings.height;
            return d >= f && (g = b / e.settings.width), g
        }, j = function () {
            var b = (a(window).width() >> 1) - (e.$videoEl.width() >> 1) | 0,
                c = (a(window).height() >> 1) - (e.$videoEl.height() >> 1) | 0;
            return "centerXY" == e.settings.align ? void e.$videoEl.css({
                left: b,
                top: c
            }) : "centerX" == e.settings.align ? void e.$videoEl.css("left", b) : "centerY" == e.settings.align ? void e.$videoEl.css("top", c) : void 0
        };
        f(), a(window).resize(function () {
            h()
        }), e.$videoEl.bind("ended", function () {
            this.play()
        })
    }
}(jQuery);