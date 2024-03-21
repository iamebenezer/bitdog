! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(F) {
    var O = "all",
        W = !1,
        j = !1,
        S = loftloaderProWaitForMediaSettings && loftloaderProWaitForMediaSettings.detectAutoplayVideo;
    loftloaderProWaitForMediaSettings && void 0 !== loftloaderProWaitForMediaSettings.detectElement && (O = loftloaderProWaitForMediaSettings.detectElement), F.loftloaderProWaitForMedia = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"],
        hasImageAttributes: ["srcset"],
        hasIframeVideos: [/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?'"]*).*/, /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)/]
    }, F.expr[":"]["has-src"] = function(e) {
        return F(e).is('img[src][src!=""]')
    }, F.expr[":"].uncached = function(e) {
        return !!F(e).is(":has-src") && !e.complete
    }, F.fn.loftloaderProWaitForMedia = function() {
        var e, t, r, a, i = F(this).first(),
            o = !1,
            n = "all" === O,
            s = !1,
            c = !1,
            d = (F.Deferred(), 5),
            l = 5;

        function f() {
            s || (s = !0, e.call(i, d)), c && (clearInterval(c), c = !1)
        }

        function u(e) {
            e.done || (b(e.src), e.done = !0)
        }

        function m(e) {
            var t;
            e.done || (b(e.src), (t = e).timer && (clearTimeout(t.timer), t.timer = !1), e.done = !0)
        }
        if (F.isPlainObject(arguments[0]) && (r = arguments[0].waitForAll, t = arguments[0].each, e = arguments[0].finished), e = e || F.noop, r = !!r, (t = t || F.noop).call(i, l), c = setInterval(function() {
                l < 95 ? n ? (d = l += 5, t.call(i, l)) : 5 <= parseInt(l, 10) - parseInt(d, 10) && (d = l, t.call(i, l)) : (clearInterval(c), c = !1)
            }, 700), F(window).on("load", function(e) {
                o || f()
            }), !n) {
            var p = 0,
                h = 0,
                v = [],
                y = [],
                g = [],
                w = -1 !== ["video", "media"].indexOf(O),
                M = -1 !== ["image", "media"].indexOf(O),
                x = F.loftloaderProWaitForMedia.hasImageProperties || [],
                P = F.loftloaderProWaitForMedia.hasImageAttributes || [],
                I = /url\(\s*(['"]?)(.*?)\1\s*\)/g;

            function b() {
                h++, l = Math.floor(h / p * 100), h === p && f()
            }
            r && (i = i.find("*").addBack()).not(F("#loftloader-wrapper").find("*").addBack()).each(function() {
                var i = F(this);
                if (M && (i.is("img:has-src") && !i.is("[srcset]") && -1 === g.indexOf(i.attr("src")) && (y.push({
                        src: i.attr("src"),
                        element: i[0]
                    }), g.push(i.attr("src"))), F.each(x, function(e, t) {
                        var r, a = i.css(t);
                        if (!a) return !0;
                        for (; r = I.exec(a);) - 1 === g.indexOf(r[2]) && (y.push({
                            src: r[2],
                            element: i[0]
                        }), g.push(r[2]))
                    }), F.each(P, function(e, t) {
                        if (!i.attr(t)) return !0; - 1 === g.indexOf(i.attr("src")) && (y.push({
                            src: i.attr("src"),
                            srcset: i.attr("srcset"),
                            element: i[0]
                        }), g.push(i.attr("src")))
                    })), w)
                    if (i.is("iframe")) {
                        var r = i.attr("src"),
                            e = F.loftloaderProWaitForMedia.hasIframeVideos || [],
                            a = !1; - 1 === g.indexOf(r) && F.each(e, function(e, t) {
                            if (t.exec(r)) return v.push(r), a = function(e) {
                                if (e && F(e).length) {
                                    var t = F(e),
                                        r = t.attr("allow"),
                                        a = t.attr("src");
                                    return a && -1 !== a.indexOf("autoplay=1") && (!r || -1 !== r.indexOf("autoplay;"))
                                }
                                return !1
                            }(i[0]), y.push({
                                src: r,
                                isMedia: !0,
                                type: "iframe",
                                element: i[0],
                                autoplay: a,
                                from: 1 === e ? "vimeo" : "youtube"
                            }), g.push(r), S && a && (o = !0, 0 === e ? (function(e) {
                                if (!e.id) {
                                    for (var t = "lofltoader-pro-iframe-" + Math.round(1e5 * Math.random()); F("#" + t).length;) t = "lofltoader-pro-iframe-" + Math.round(1e5 * Math.random());
                                    F(e).attr("id", t)
                                }
                            }(i[0]), W = !0) : j = !0), !1
                        })
                    } else if (i.is("video") && (i.attr("src") || i.find('[src!=""]').length)) {
                    var t = i.attr("src") ? i.attr("src") : i.find('[src!=""]').attr("src"); - 1 === g.indexOf(t) && (v.push(t), y.push({
                        src: t,
                        isMedia: !0,
                        type: "video",
                        element: i[0]
                    }), g.push(t))
                }
            }), y && y.length && (y = y.filter(function(e) {
                return e.src && void 0 !== e.src
            })), 0 === (p = y.length) && f(), a = F("<div>"), !W || "YT" in window || a.append(F("<script>", {
                src: "//www.youtube.com/iframe_api",
                type: "text/javascript"
            })), !j || "Vimeo" in window || a.append(F("<script>", {
                src: "//player.vimeo.com/api/player.js",
                type: "text/javascript"
            })), a.children().length && F("head").append(a.children()), F.each(y, function(e, t) {
                if (t.isMedia)
                    if ("video" == t.type) {
                        var r = document.createElement("video");
                        F(r).one("loadeddata error", function(e) {
                            b(t.src)
                        }), r.src = t.src
                    } else F(t.element).one("load", function(e) {
                        "youtube" == t.from && t.autoplay && S && "YT" in window && YT.Player ? (new YT.Player(F(t.element).attr("id"), {
                            events: {
                                onStateChange: function(e) {
                                    m(t)
                                }
                            }
                        }), t.timer = setTimeout(function() {
                            u(t)
                        }, 2e4)) : "vimeo" == t.from && t.autoplay && S && "Vimeo" in window && Vimeo.Player ? (new Vimeo.Player(t.element).play().then(function() {
                            m(t)
                        }, function() {
                            m(t)
                        }), t.timer = setTimeout(function() {
                            u(t)
                        }, 2e4)) : b(t.src)
                    }).one("error", function(e) {
                        b(t.src)
                    });
                else {
                    var a = new Image;
                    F(a).one("load  error", function(e) {
                        b(t.src)
                    }), t.srcset && (a.srcset = t.srcset), a.src = t.src
                }
            })
        }
    }
});