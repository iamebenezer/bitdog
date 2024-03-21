! function(i) {
    "use strict";
    var n = ["jpg", "jpeg", "png", "gif", "mov", "avi", "mpg", "3gp", "3g2", "midi", "mid", "pdf", "doc", "ppt", "odt", "pptx", "docx", "pps", "ppsx", "xls", "xlsx", "key", "mp3", "ogg", "wma", "m4a", "wav", "mp4", "m4v", "webm", "ogv", "wmv", "flv", "svg", "svgz"],
        a = i("body"),
        l = "undefined" !== loftloaderPro.insiteTransitionShowAll && loftloaderPro.insiteTransitionShowAll,
        s = "undefined" === loftloaderPro.leavingProgressMax ? .6 : loftloaderPro.leavingProgressMax,
        p = i(),
        e = "",
        o = "",
        d = parseInt(90 * s, 10),
        f = {
            getItem: function(t) {
                try {
                    return sessionStorage.getItem(t)
                } catch (t) {
                    return !1
                }
            },
            setItem: function(t, e) {
                try {
                    sessionStorage.setItem(t, e)
                } catch (t) {}
            }
        };

    function r(t) {
        if (t && t.length) {
            var e = t.attr("target"),
                r = t.attr("href");
            return (void 0 === e || "_blank" !== e.toLowerCase()) && function(t) {
                i("#loftloader-wrapper");
                var e = t.attr("class"),
                    r = e && -1 !== e.indexOf("ajax"),
                    o = t.parent(".site-header-cart").length,
                    e = loftloaderPro.insiteTransitionCustomExcluded || !1;
                return e = !(!e || !i(e).length) && i(e), !t.parent(".product-remove").length && (!p.length || t.not(p).length) && (e && t.not(e).length || !e) && void 0 === t.attr("onclick") && !r && !o
            }(t) && r && function(t) {
                if (t) {
                    var e = !1,
                        r = document.createElement("a"),
                        o = document.createElement("a"),
                        a = document.createElement("a");
                    return a.href = t, o.href = window.location.href, r.href = loftloaderPro.siteRootURL, e = a.pathname.split(".").pop(), 0 === a.href.replace(/https?:\/\//i, "").indexOf(r.href.replace(/https?:\/\//i, "")) && "#" !== t.substr(0, 1) && (o.pathname != a.pathname || !a.hash && -1 === t.indexOf("#")) && -1 === n.indexOf(e)
                }
                return
            }(r)
        }
    }

    function c(t) {
        var o = t.attr("href");
        t.data("loftloader-pro-checked") || (o && r(t) && t.off("click").on("click", function(t) {
            t.preventDefault();
            var e, r = i("#loftloader-wrapper");
            e = i("#loftloader-wrapper .loader-message"), t = m(), e.length && t && (e.html(t), f.setItem("loftloader-pro-next-random-message", t)), i(document).trigger("loftloaderpro.spt.start"), i("html").removeClass("loftloader-pro-spt-hide"), r.length && !loftloaderPro.insiteTransitionDisplayOption && r.css("transition-delay", ""), a.addClass("leaves"), l && (a.addClass("spt-show-all"), i(document).trigger("loftloaderpro.image.check"), y.initValue = 0, y.reset(), y.render(d, 600), setTimeout(function() {
                y.render(100 * (loftloaderPro.insiteTransitionDisplayOnCurrent ? 1 : s), 300)
            }, 600), f.setItem("loftloader-pro-smooth-transition", "on")), setTimeout(function() {
                window.location.href = o
            }, 900)
        }), t.data("loftloader-pro-checked", !0))
    }

    function x(t) {
        u("loftloader-pro-progress-percentage-style", '#loftloader-wrapper span.percentage:after, #loftloader-wrapper .load-count:after { content: "' + t + '%"; };')
    }

    function h(t, e) {
        var r;
        e && e.length && (r = e.next(".load-count"), t = (t = e.width() * t / 100) > r.width() ? t - r.width() : 0, e = e.parent().hasClass("bottom") ? "-100%" : "100%", r.css("transform", "translate(" + t + "px, " + e + ")"))
    }

    function u(t, e) {
        var r = i("head").find("#" + t);
        r.length || (r = i("<style>").attr("id", t).html("").appendTo(i("head"))), r.html(e)
    }

    function g(t, e) {
        var r, o;
        t.length && e.length && (r = (o = function(t) {
            if (t.length) {
                t = t[0].getBoundingClientRect();
                return {
                    width: t.width || t.right - t.left,
                    height: t.height || t.bottom - t.top
                }
            }
            return !1
        }(e)) && o.width ? parseInt(1e4 * o.width) / 1e4 : "100%", o = o && o.height ? parseInt(1e4 * o.height) / 1e4 : "100%", t.css({
            width: r,
            height: o,
            display: ""
        }), e.length && e.attr("width", r).attr("height", o))
    }

    function m() {
        var t = void 0 !== loftloaderPro.randomMessage && loftloaderPro.randomMessage;
        if (i.isArray(t) && 0 < t.length) {
            var e = t.length,
                e = Math.random() * (e - 1);
            return t[Math.round(e)]
        }
        return !1
    }
    i(window).bind("pageshow", function(t) {
        var e;
        t.originalEvent.persisted && (e = i("body"), (t = i("#loftloader-wrapper")).length && t.css("transition-delay", "0s"), e.length && e.hasClass("leaves") && e.removeClass("leaves"), e.length && !e.hasClass("loftloader-loaded") && e.addClass("loaded loftloader-loaded"))
    }), i.fn.llpHasAnyClass = function(t) {
        var r = i(i(this)[0]),
            o = !1;
        return i.each(t, function(t, e) {
            if (r.hasClass(e)) return !(o = !0)
        }), o
    };
    var t, w, C, v, b, y, P = i("#loftloader-wrapper"),
        T = loftloaderPro && loftloaderPro.isLoaderPreview && "on" == loftloaderPro.isLoaderPreview,
        _ = T && void 0 !== parent.wp.customize.settings.settings.loftloader_pro_main_switch,
        L = T && void 0 === parent.wp.customize.settings.settings.loftloader_pro_main_switch,
        k = !!loftloaderPro.minimalLoadTime && parseFloat(loftloaderPro.minimalLoadTime),
        I = !!k,
        M = !0;
    L && i("#loftloader-preview-style-css").remove(), t = i("#loftloader-wrapper .loader-message"), w = m(), C = f.getItem("loftloader-pro-next-random-message"), t.length && w && t.html(C || w), i(document).on("loftloaderpro.image.check", function() {
        var e, r = i("#loftloader-wrapper .imgloading-container span");
        r.length && (e = i("#loftloader-wrapper #loader img"), g(r, e), e.on("load", function(t) {
            g(r, e)
        }), i(window).on("resize", function(t) {
            g(r, e)
        }))
    }).ready(function() {
        i(this).trigger("loftloaderpro.image.check")
    }), _ && (i("html").hasClass("loftloader-smooth-transition") && ((v = i("html")).attr("data-original-styles") ? v.attr("style", v.attr("data-original-styles")) : v.removeAttr("style"), v.removeAttr("data-original-styles").removeClass("loftloader-smooth-transition")), (i("#loftloader-wrapper .percentage").length || i("#loftloader-wrapper .bar .load-count").length) && (P = i("#loftloader-wrapper .percentage").length ? i("#loftloader-wrapper .percentage") : i("#loftloader-wrapper .bar .load-count"), (v = i("#loftloader-wrapper .bar")).children(".load-count").length && h(100, v.children(".load")), P.prop("percentage", 0), i("body").hover(function() {
        P.prop("percentage", 0).animate({
            percentage: 100
        }, {
            duration: 2850,
            easing: "linear",
            step: function(t) {
                i(this).text(Math.ceil(t) + "%"), i(this).hasClass("load-count") && h(t, i(this).prev(".load"))
            }
        })
    }, function() {
        P.stop(!0, !0).text("100%").prop("percentage", 0), P.hasClass("load-count") && h(100, P.prev(".load"))
    }))), T && !L || (b = i("#loftloader-wrapper .percentage"), T = P.hasClass("loftloader-once") && P.llpHasAnyClass(["loftloader-imgloading", "loftloader-rainbow", "loftloader-circlefilling", "loftloader-waterfilling", "loftloader-petals"]), L = b.hasClass("percentage") ? "percentage" : "bar", b = b.length ? b : P.find(".bar .load"), y = {
        finishPause: 800,
        $el: P,
        runDuration: 700,
        initValue: 0,
        startPercentage: 0,
        progress: b,
        type: L,
        once: T,
        max_timeup: !1,
        start: function() {
            f.getItem("loftloader-pro-smooth-transition") && "on" === f.getItem("loftloader-pro-smooth-transition") && (this.initValue = s, f.setItem("loftloader-pro-smooth-transition", 0)), i("body").removeClass("loaded loftloader-loaded"), this.reset()
        },
        reset: function() {
            "percentage" == this.type ? x(100 * this.initValue) : b.css("transform", "scaleX(" + this.initValue + ")"), this.current = 100 * this.initValue, this.startPercentage = 100 * this.initValue, this.$el.prop("percentage", this.startPercentage), this.render(this.startPercentage, 1)
        },
        stop: function(t) {
            var e = this.finish;
            this.render(100, this.finishPause), t && (this.timeup = !0), setTimeout(function() {
                e()
            }, this.finishPause + 100)
        },
        update: function(t) {
            this.render(t)
        },
        render: function(t, e) {
            if (this.timeup || !this.$el || !this.$el.animate) return "";
            var r = this;
            e = void 0 === e ? this.runDuration : e, 100 === t ? this.$el.stop(!0, !1).animate({
                percentage: 100
            }, {
                duration: e,
                easing: "swing",
                step: function(t) {
                    r.renderProgress(r, t)
                }
            }) : this.$el.animate({
                percentage: t
            }, {
                duration: e,
                easing: "linear",
                step: function(t) {
                    r.renderProgress(r, t)
                }
            })
        },
        renderProgress: function(t, r) {
            var e, o, a, n, l, s = t.once,
                p = t.type,
                t = t.progress;
            "percentage" == p ? x(Math.ceil(r)) : (t.css("transform", "scaleX(" + r / 100 + ")"), t.next(".load-count").length && (x(Math.ceil(r)), h(r, t))), s && (P.hasClass("loftloader-imgloading") ? (e = P.find(".imgloading-container"), P.hasClass("imgloading-horizontal") ? e.css("width", r + "%") : e.css("height", r + "%")) : P.hasClass("loftloader-rainbow") ? u("loftloader_pro_once_rainbow", "#loftloader-wrapper.loftloader-rainbow #loader span { -webkit-transform: rotate(" + (e = 1.8 * r - 180) + "deg); transform: rotate(" + e + "deg); }") : P.hasClass("loftloader-circlefilling") ? u("loftloader_pro_once_circlefilling", "#loftloader-wrapper.loftloader-circlefilling #loader span { -webkit-transform: scaleY(" + (o = r / 100) + "); transform: scaleY(" + o + "); }") : P.hasClass("loftloader-waterfilling") ? u("loftloader_pro_once_waterfilling", "#loftloader-wrapper.loftloader-waterfilling #loader:before { transform: scaleY(" + (o = r / 100) + "); } #loftloader-wrapper.loftloader-waterfilling #loader span {-webkit-transform: translateY(" + (o = r - 100) + "%); transform: translateY(" + o + "%); }") : P.hasClass("loftloader-petals") && (a = {
                petal0: "{box-shadow: 0 -15px 0 -15px transparent, 10.5px -10.5px 0 -15px transparent, 15px 0 0 -15px transparent, 10.5px 10.5px 0 -15px transparent, 0 15px 0 -15px transparent, -10.5px 10.5px 0 -15px transparent, -15px 0 0 -15px transparent, -10.5px -10.5px 0 -15px transparent;}",
                petal1: "{box-shadow: 0 -25px 0 -15px currentColor, 10.5px -10.5px 0 -15px transparent, 15px 0 0 -15px transparent, 10.5px 10.5px 0 -15px transparent, 0 15px 0 -15px transparent, -10.5px 10.5px 0 -15px transparent, -15px 0 0 -15px transparent, -10.5px -10.5px 0 -15px transparent;}",
                petal2: "{box-shadow: 0 -25px 0 -15px currentColor, 17.5px -17.5px 0 -15px currentColor, 15px 0 0 -15px transparent, 10.5px 10.5px 0 -15px transparent, 0 15px 0 -15px transparent, -10.5px 10.5px 0 -15px transparent, -15px 0 0 -15px transparent, -10.5px -10.5px 0 -15px transparent;}",
                petal3: "{box-shadow: 0 -25px 0 -15px currentColor, 17.5px -17.5px 0 -15px currentColor, 25px 0 0 -15px currentColor, 10.5px 10.5px 0 -15px transparent, 0 15px 0 -15px transparent, -10.5px 10.5px 0 -15px transparent, -15px 0 0 -15px transparent, -10.5px -10.5px 0 -15px transparent;}",
                petal4: "{box-shadow: 0 -25px 0 -15px currentColor, 17.5px -17.5px 0 -15px currentColor, 25px 0 0 -15px currentColor, 17.5px 17.5px 0 -15px currentColor, 0 15px 0 -15px transparent, -10.5px 10.5px 0 -15px transparent, -15px 0 0 -15px transparent, -10.5px -10.5px 0 -15px transparent;}",
                petal5: "{box-shadow: 0 -25px 0 -15px currentColor, 17.5px -17.5px 0 -15px currentColor, 25px 0 0 -15px currentColor, 17.5px 17.5px 0 -15px currentColor, 0 25px 0 -15px currentColor, -10.5px 10.5px 0 -15px transparent, -15px 0 0 -15px transparent, -10.5px -10.5px 0 -15px transparent;}",
                petal6: "{box-shadow: 0 -25px 0 -15px currentColor, 17.5px -17.5px 0 -15px currentColor, 25px 0 0 -15px currentColor, 17.5px 17.5px 0 -15px currentColor, 0 25px 0 -15px currentColor, -17.5px 17.5px 0 -15px currentColor, -15px 0 0 -15px transparent, -10.5px -10.5px 0 -15px transparent;}",
                petal7: "{box-shadow: 0 -25px 0 -15px currentColor, 17.5px -17.5px 0 -15px currentColor, 25px 0 0 -15px currentColor, 17.5px 17.5px 0 -15px currentColor, 0 25px 0 -15px currentColor, -17.5px 17.5px 0 -15px currentColor, -25px 0 0 -15px currentColor, -10.5px -10.5px 0 -15px transparent;}",
                petal8: "{box-shadow: 0 -25px 0 -15px currentColor, 17.5px -17.5px 0 -15px currentColor, 25px 0 0 -15px currentColor, 17.5px 17.5px 0 -15px currentColor, 0 25px 0 -15px currentColor, -17.5px 17.5px 0 -15px currentColor, -25px 0 0 -15px currentColor, -17.5px -17.5px 0 -15px currentColor;}"
            }, n = "", l = {
                88: "petal7",
                75: "petal6",
                63: "petal5",
                50: "petal4",
                38: "petal3",
                25: "petal2",
                13: "petal1"
            }, i.each([88, 75, 63, 50, 38, 25, 13], function(t, e) {
                if (e <= r) return n = a[l[e]], !1
            }), u("loftloader_pro_once_petals", "#loftloader-wrapper.loftloader-petals #loader span" + (n = 0 === r ? a.petal0 : 98 < r ? a.petal8 : n))))
        },
        finish: function() {
            i("body").addClass("loaded loftloader-loaded"), setTimeout(function() {
                i("body").removeClass("loftloader-disable-scrolling"), i("#loftloader-pro-always-show-scrollbar").length && i("#loftloader-pro-always-show-scrollbar").remove()
            }, 1e3), i("html").hasClass("loftloader-smooth-transition") && ((t = i("html")).attr("data-original-styles") ? t.attr("style", t.attr("data-original-styles")) : t.removeAttr("style"), t.removeAttr("data-original-styles").removeClass("loftloader-smooth-transition"));
            var t = i("#loftloader-wrapper");
            t.hasClass("split-diagonally") && t.find(".loader-bg").css("background", "none"), setTimeout(function() {
                y.timeup = !1, i(document).trigger("loftloaderprodone")
            }, 1100), o && clearTimeout(o), e && clearTimeout(e)
        }
    }, i("html").hasClass("loftloader-pro-spt-hide") ? (i("body").addClass("loaded loftloader-loaded"), i("html").removeClass("loftloader-pro-spt-hide")) : (y.start(), b.length || T ? (k && (e = setTimeout(function() {
        M || y.stop(), I = !1
    }, k)), i("body").loftloaderProWaitForMedia({
        waitForAll: !0,
        each: function(t) {
            t > y.startPercentage && y.update(t)
        },
        finished: function(t) {
            I ? y.render(Math.max(95, t), k) : y.stop(), M = !1
        }
    })) : (k && (e = setTimeout(function() {
        M || y.finish(), I = !1
    }, k)), i("body").loftloaderProWaitForMedia({
        waitForAll: !0,
        each: function(t) {},
        finished: function(t) {
            I ? y.render(Math.max(95, t), k) : y.finish(), M = !1
        }
    })), document.addEventListener("DOMContentLoaded", function() {
        i("#loftloader-wrapper");
        var t, e, r = i("#loftloader-wrapper .loader-close-button");
        r.length && loftloaderPro.showCloseBtnTime && (t = parseInt(loftloaderPro.showCloseBtnTime, 10)) && (setTimeout(function() {
            r.css("display", "")
        }, t), r.on("click", function() {
            y.finish()
        })), loftloaderPro.maximalLoadTime && (e = parseInt(loftloaderPro.maximalLoadTime, 10)) && (o = setTimeout(function() {
            y.stop(!0)
        }, e))
    })), i(window).one("load", function(t) {
        var e;
        loftloaderPro && loftloaderPro.insiteTransition && "on" == loftloaderPro.insiteTransition && loftloaderPro.siteRootURL && (loftloaderPro.insiteTransitionURLExcluded && Array.isArray(loftloaderPro.insiteTransitionURLExcluded) && loftloaderPro.insiteTransitionURLExcluded.length && loftloaderPro.insiteTransitionURLExcluded.forEach(function(t) {
            i('a[href^="' + t + '"]').length && (p = p.add(i('a[href^="' + t + '"]')))
        }), i("body a").each(function() {
            c(i(this))
        }), e = a.get(0), new MutationObserver(function(t, e) {
            t.forEach(function(t) {
                "childList" !== t.type || (t = "A" === t.target.tagName ? i(t.target) : i(t.target).find("a")).length && t.each(function() {
                    c(i(this))
                })
            })
        }).observe(e, {
            attributes: !1,
            childList: !0,
            subtree: !0
        }))
    }))
}(jQuery);