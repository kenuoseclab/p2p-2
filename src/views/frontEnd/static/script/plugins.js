$.easing["jswing"] = $.easing["swing"];
$.extend($.easing, {
  def: "easeOutQuad", swing: function (x, t, b, c, d) {
    return $.easing[$.easing.def](x, t, b, c, d)
  }, easeInQuad: function (x, t, b, c, d) {
    return c * (t /= d) * t + b
  }, easeOutQuad: function (x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b
  }, easeInOutQuad: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t + b
    }
    return -c / 2 * ((--t) * (t - 2) - 1) + b
  }, easeInCubic: function (x, t, b, c, d) {
    return c * (t /= d) * t * t + b
  }, easeOutCubic: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b
  }, easeInOutCubic: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t + b
    }
    return c / 2 * ((t -= 2) * t * t + 2) + b
  }, easeInQuart: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b
  }, easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b
  }, easeInOutQuart: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t + b
    }
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b
  }, easeInQuint: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b
  }, easeOutQuint: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b
  }, easeInOutQuint: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t * t + b
    }
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
  }, easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
  }, easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b
  }, easeInOutSine: function (x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
  }, easeInExpo: function (x, t, b, c, d) {
    return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
  }, easeOutExpo: function (x, t, b, c, d) {
    return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
  }, easeInOutExpo: function (x, t, b, c, d) {
    if (t == 0) {
      return b
    }
    if (t == d) {
      return b + c
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b
    }
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
  }, easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
  }, easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
  }, easeInOutCirc: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b
    }
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
  }, easeInElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) {
      return b
    }
    if ((t /= d) == 1) {
      return b + c
    }
    if (!p) {
      p = d * 0.3
    }
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4
    } else {
      var s = p / (2 * Math.PI) * Math.asin(c / a)
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
  }, easeOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) {
      return b
    }
    if ((t /= d) == 1) {
      return b + c
    }
    if (!p) {
      p = d * 0.3
    }
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4
    } else {
      var s = p / (2 * Math.PI) * Math.asin(c / a)
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
  }, easeInOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) {
      return b
    }
    if ((t /= d / 2) == 2) {
      return b + c
    }
    if (!p) {
      p = d * (0.3 * 1.5)
    }
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4
    } else {
      var s = p / (2 * Math.PI) * Math.asin(c / a)
    }
    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
    }
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b
  }, easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) {
      s = 1.70158
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b
  }, easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) {
      s = 1.70158
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
  }, easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) {
      s = 1.70158
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b
    }
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
  }, easeInBounce: function (x, t, b, c, d) {
    return c - $.easing.easeOutBounce(x, d - t, 0, c, d) + b
  }, easeOutBounce: function (x, t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
      return c * (7.5625 * t * t) + b
    } else {
      if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b
      } else {
        if (t < (2.5 / 2.75)) {
          return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b
        } else {
          return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b
        }
      }
    }
  }, easeInOutBounce: function (x, t, b, c, d) {
    if (t < d / 2) {
      return $.easing.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b
    }
    return $.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
  }
});
/*! 对话框组件artDialog v6.0.2 | https://github.com/aui/artDialog */
!function () {
  function a(b) {
    var d = c[b], e = "exports";
    return "object" == typeof d ? d : (d[e] || (d[e] = {}, d[e] = d.call(d[e], a, d[e], d) || d[e]), d[e])
  }

  function b(a, b) {
    c[a] = b
  }

  var c = {};
  b("jquery", function () {
    return jQuery
  }), b("popup", function (a) {
    function b() {
      this.destroyed = !1, this.__popup = c("<div />").attr({tabindex: "-1"}).css({
        display: "none",
        position: "absolute",
        outline: 0
      }).html(this.innerHTML).appendTo("body"), this.__backdrop = c("<div />"), this.node = this.__popup[0], this.backdrop = this.__backdrop[0], d++
    }

    var c = a("jquery"), d = 0, e = !("minWidth" in c("html")[0].style), f = !e;
    return c.extend(b.prototype, {
      node: null,
      backdrop: null,
      fixed: !1,
      destroyed: !0,
      open: !1,
      returnValue: "",
      autofocus: !0,
      align: "bottom left",
      backdropBackground: "#000",
      backdropOpacity: .3,
      innerHTML: "",
      className: "ui-popup",
      show: function (a) {
        if (this.destroyed) return this;
        var b = this, d = this.__popup;
        return this.__activeElement = this.__getActive(), this.open = !0, this.follow = a || this.follow, this.__ready || (d.addClass(this.className), this.modal && this.__lock(), d.html() || d.html(this.innerHTML), e || c(window).on("resize", this.__onresize = function () {
          b.reset()
        }), this.__ready = !0), d.addClass(this.className + "-show").attr("role", this.modal ? "alertdialog" : "dialog").css("position", this.fixed ? "fixed" : "absolute").show(), this.__backdrop.show(), this.reset().focus(), this.__dispatchEvent("show"), this
      },
      showModal: function () {
        return this.modal = !0, this.show.apply(this, arguments)
      },
      close: function (a) {
        return !this.destroyed && this.open && (void 0 !== a && (this.returnValue = a), this.__popup.hide().removeClass(this.className + "-show"), this.__backdrop.hide(), this.open = !1, this.blur(), this.__dispatchEvent("close")), this
      },
      remove: function () {
        if (this.destroyed) return this;
        this.__dispatchEvent("beforeremove"), b.current === this && (b.current = null), this.__unlock(), this.__popup.remove(), this.__backdrop.remove(), e || c(window).off("resize", this.__onresize), this.__dispatchEvent("remove");
        for (var a in this) delete this[a];
        return this
      },
      reset: function () {
        var a = this.follow;
        return a ? this.__follow(a) : this.__center(), this.__dispatchEvent("reset"), this
      },
      focus: function () {
        var a = this.node, d = b.current;
        if (d && d !== this && d.blur(!1), !c.contains(a, this.__getActive())) {
          var e = this.__popup.find("[autofocus]")[0];
          !this._autofocus && e ? this._autofocus = !0 : e = a, this.__focus(e)
        }
        return b.current = this, this.__popup.addClass(this.className + "-focus"), this.__zIndex(), this.__dispatchEvent("focus"), this
      },
      blur: function () {
        var a = this.__activeElement, b = arguments[0];
        return b !== !1 && this.__focus(a), this._autofocus = !1, this.__popup.removeClass(this.className + "-focus"), this.__dispatchEvent("blur"), this
      },
      addEventListener: function (a, b) {
        return this.__getEventListener(a).push(b), this
      },
      removeEventListener: function (a, b) {
        for (var c = this.__getEventListener(a), d = 0; d < c.length; d++) b === c[d] && c.splice(d--, 1);
        return this
      },
      __getEventListener: function (a) {
        var b = this.__listener;
        return b || (b = this.__listener = {}), b[a] || (b[a] = []), b[a]
      },
      __dispatchEvent: function (a) {
        var b = this.__getEventListener(a);
        this["on" + a] && this["on" + a]();
        for (var c = 0; c < b.length; c++) b[c].call(this)
      },
      __focus: function (a) {
        try {
          this.autofocus && !/^iframe$/i.test(a.nodeName) && a.focus()
        } catch (b) {
        }
      },
      __getActive: function () {
        try {
          var a = document.activeElement, b = a.contentDocument, c = b && b.activeElement || a;
          return c
        } catch (d) {
        }
      },
      __zIndex: function () {
        var a = b.zIndex++;
        this.__popup.css("zIndex", a), this.__backdrop.css("zIndex", a - 1), this.zIndex = a
      },
      __center: function () {
        var a = this.__popup, b = c(window), d = c(document), e = this.fixed, f = e ? 0 : d.scrollLeft(),
          g = e ? 0 : d.scrollTop(), h = b.width(), i = b.height(), j = a.width(), k = a.height(), l = (h - j) / 2 + f,
          m = 382 * (i - k) / 1e3 + g, n = a[0].style;
        n.left = Math.max(parseInt(l), f) + "px", n.top = Math.max(parseInt(m), g) + "px"
      },
      __follow: function (a) {
        var b = a.parentNode && c(a), d = this.__popup;
        if (this.__followSkin && d.removeClass(this.__followSkin), b) {
          var e = b.offset();
          if (e.left * e.top < 0) return this.__center()
        }
        var f = this, g = this.fixed, h = c(window), i = c(document), j = h.width(), k = h.height(), l = i.scrollLeft(),
          m = i.scrollTop(), n = d.width(), o = d.height(), p = b ? b.outerWidth() : 0, q = b ? b.outerHeight() : 0,
          r = this.__offset(a), s = r.left, t = r.top, u = g ? s - l : s, v = g ? t - m : t, w = g ? 0 : l,
          x = g ? 0 : m, y = w + j - n, z = x + k - o, A = {}, B = this.align.split(" "), C = this.className + "-",
          D = {top: "bottom", bottom: "top", left: "right", right: "left"},
          E = {top: "top", bottom: "top", left: "left", right: "left"},
          F = [{top: v - o, bottom: v + q, left: u - n, right: u + p}, {
            top: v,
            bottom: v - o + q,
            left: u,
            right: u - n + p
          }], G = {left: u + p / 2 - n / 2, top: v + q / 2 - o / 2}, H = {left: [w, y], top: [x, z]};
        c.each(B, function (a, b) {
          F[a][b] > H[E[b]][1] && (b = B[a] = D[b]), F[a][b] < H[E[b]][0] && (B[a] = D[b])
        }), B[1] || (E[B[1]] = "left" === E[B[0]] ? "top" : "left", F[1][B[1]] = G[E[B[1]]]), C += B.join("-") + " " + this.className + "-follow", f.__followSkin = C, b && d.addClass(C), A[E[B[0]]] = parseInt(F[0][B[0]]), A[E[B[1]]] = parseInt(F[1][B[1]]), d.css(A)
      },
      __offset: function (a) {
        var b = a.parentNode, d = b ? c(a).offset() : {left: a.pageX, top: a.pageY};
        a = b ? a : a.target;
        var e = a.ownerDocument, f = e.defaultView || e.parentWindow;
        if (f == window) return d;
        var g = f.frameElement, h = c(e), i = h.scrollLeft(), j = h.scrollTop(), k = c(g).offset(), l = k.left,
          m = k.top;
        return {left: d.left + l - i, top: d.top + m - j}
      },
      __lock: function () {
        var a = this, d = this.__popup, e = this.__backdrop, g = {
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          userSelect: "none",
          opacity: 0,
          background: this.backdropBackground
        };
        d.addClass(this.className + "-modal"), b.zIndex = b.zIndex + 2, this.__zIndex(), f || c.extend(g, {
          position: "absolute",
          width: c(window).width() + "px",
          height: c(document).height() + "px"
        }), e.css(g).animate({opacity: this.backdropOpacity}, 150).insertAfter(d).attr({tabindex: "0"}).on("focus", function () {
          a.focus()
        })
      },
      __unlock: function () {
        this.modal && (this.__popup.removeClass(this.className + "-modal"), this.__backdrop.remove(), delete this.modal)
      }
    }), b.zIndex = 1024, b.current = null, b
  }), b("dialog-config", {
    content: '<span class="ui-dialog-loading">Loading..</span>',
    title: "",
    statusbar: "",
    button: null,
    ok: null,
    cancel: null,
    okValue: "ok",
    cancelValue: "cancel",
    cancelDisplay: !0,
    width: "",
    height: "",
    padding: "",
    skin: "",
    quickClose: !1,
    cssUri: "../css/ui-dialog.css",
    innerHTML: '<div i="dialog" class="ui-dialog"><div class="ui-dialog-arrow-a"></div><div class="ui-dialog-arrow-b"></div><table class="ui-dialog-grid"><tr><td i="header" class="ui-dialog-header"><button i="close" class="ui-dialog-close">&#215;</button><div i="title" class="ui-dialog-title"></div></td></tr><tr><td i="body" class="ui-dialog-body"><div i="content" class="ui-dialog-content"></div></td></tr><tr><td i="footer" class="ui-dialog-footer"><div i="statusbar" class="ui-dialog-statusbar"></div><div i="button" class="ui-dialog-button"></div></td></tr></table></div>'
  }), b("dialog", function (a) {
    var b = a("jquery"), c = a("popup"), d = a("dialog-config"), e = d.cssUri;
    if (e) {
      var f = a[a.toUrl ? "toUrl" : "resolve"];
      f && (e = f(e), e = '<link rel="stylesheet" href="' + e + '" />', b("base")[0] ? b("base").before(e) : b("head").append(e))
    }
    var g = 0, h = new Date - 0, i = !("minWidth" in b("html")[0].style),
      j = "createTouch" in document && !("onmousemove" in document) || /(iPhone|iPad|iPod)/i.test(navigator.userAgent),
      k = !i && !j, l = function (a, c, d) {
        var e = a = a || {};
        ("string" == typeof a || 1 === a.nodeType) && (a = {
          content: a,
          fixed: !j
        }), a = b.extend(!0, {}, l.defaults, a), a._ = e;
        var f = a.id = a.id || h + g, i = l.get(f);
        return i ? i.focus() : (k || (a.fixed = !1), a.quickClose && (a.modal = !0, e.backdropOpacity || (a.backdropOpacity = 0)), b.isArray(a.button) || (a.button = []), void 0 !== d && (a.cancel = d), a.cancel && a.button.push({
          id: "cancel",
          value: a.cancelValue,
          callback: a.cancel,
          display: a.cancelDisplay
        }), void 0 !== c && (a.ok = c), a.ok && a.button.push({
          id: "ok",
          value: a.okValue,
          callback: a.ok,
          autofocus: !0
        }), l.list[f] = new l.create(a))
      }, m = function () {
      };
    m.prototype = c.prototype;
    var n = l.prototype = new m;
    return l.create = function (a) {
      var d = this;
      b.extend(this, new c);
      var e = b(this.node).html(a.innerHTML);
      return this.options = a, this._popup = e, b.each(a, function (a, b) {
        "function" == typeof d[a] ? d[a](b) : d[a] = b
      }), a.zIndex && (c.zIndex = a.zIndex), e.attr({
        "aria-labelledby": this._$("title").attr("id", "title:" + this.id).attr("id"),
        "aria-describedby": this._$("content").attr("id", "content:" + this.id).attr("id")
      }), this._$("close").css("display", this.cancel === !1 ? "none" : "").attr("title", this.cancelValue).on("click", function (a) {
        d._trigger("cancel"), a.preventDefault()
      }), this._$("dialog").addClass(this.skin), this._$("body").css("padding", this.padding), a.quickClose && b(this.backdrop).on("onmousedown" in document ? "mousedown" : "click", function () {
        return d._trigger("cancel"), !1
      }), this._esc = function (a) {
        var b = a.target, e = b.nodeName, f = /^input|textarea$/i, g = c.current === d, h = a.keyCode;
        !g || f.test(e) && "button" !== b.type || 27 === h && d._trigger("cancel")
      }, b(document).on("keydown", this._esc), this.addEventListener("remove", function () {
        b(document).off("keydown", this._esc), delete l.list[this.id]
      }), g++, l.oncreate(this), this
    }, l.create.prototype = n, b.extend(n, {
      content: function (a) {
        return this._$("content").empty("")["object" == typeof a ? "append" : "html"](a), this.reset()
      }, title: function (a) {
        return this._$("title").text(a), this._$("header")[a ? "show" : "hide"](), this
      }, width: function (a) {
        return this._$("content").css("width", a), this.reset()
      }, height: function (a) {
        return this._$("content").css("height", a), this.reset()
      }, button: function (a) {
        a = a || [];
        var c = this, d = "", e = 0;
        return this.callbacks = {}, "string" == typeof a ? (d = a, e++) : b.each(a, function (a, b) {
          b.id = b.id || b.value, c.callbacks[b.id] = b.callback;
          var f = "";
          b.display === !1 ? f = ' style="display:none"' : e++, d += '<button type="button" data-id="' + b.id + '"' + f + (b.disabled ? " disabled" : "") + (b.autofocus ? ' autofocus class="ui-dialog-autofocus"' : "") + ">" + b.value + "</button>"
        }), this._$("footer")[e ? "show" : "hide"](), this._$("button").html(d).on("click", "[data-id]", function (a) {
          var d = b(this);
          d.attr("disabled") || c._trigger(d.data("id")), a.preventDefault()
        }), this
      }, statusbar: function (a) {
        return this._$("statusbar").html(a)[a ? "show" : "hide"](), this
      }, _$: function (a) {
        return this._popup.find("[i=" + a + "]")
      }, _trigger: function (a) {
        var b = this.callbacks[a];
        return "function" != typeof b || b.call(this) !== !1 ? this.close().remove() : this
      }
    }), l.oncreate = b.noop, l.getCurrent = function () {
      return c.current
    }, l.get = function (a) {
      return void 0 === a ? l.list : l.list[a]
    }, l.list = {}, l.defaults = d, l
  }), b("drag", function (a) {
    var b = a("jquery"), c = b(window), d = b(document), e = "createTouch" in document, f = document.documentElement,
      g = !("minWidth" in f.style), h = !g && "onlosecapture" in f, i = "setCapture" in f,
      j = {start: e ? "touchstart" : "mousedown", over: e ? "touchmove" : "mousemove", end: e ? "touchend" : "mouseup"},
      k = e ? function (a) {
        return a.touches || (a = a.originalEvent.touches.item(0)), a
      } : function (a) {
        return a
      }, l = function () {
        this.start = b.proxy(this.start, this), this.over = b.proxy(this.over, this), this.end = b.proxy(this.end, this), this.onstart = this.onover = this.onend = b.noop
      };
    return l.types = j, l.prototype = {
      start: function (a) {
        return a = this.startFix(a), d.on(j.over, this.over).on(j.end, this.end), this.onstart(a), !1
      }, over: function (a) {
        return a = this.overFix(a), this.onover(a), !1
      }, end: function (a) {
        return a = this.endFix(a), d.off(j.over, this.over).off(j.end, this.end), this.onend(a), !1
      }, startFix: function (a) {
        return a = k(a), this.target = b(a.target), this.selectstart = function () {
          return !1
        }, d.on("selectstart", this.selectstart).on("dblclick", this.end), h ? this.target.on("losecapture", this.end) : c.on("blur", this.end), i && this.target[0].setCapture(), a
      }, overFix: function (a) {
        return a = k(a)
      }, endFix: function (a) {
        return a = k(a), d.off("selectstart", this.selectstart).off("dblclick", this.end), h ? this.target.off("losecapture", this.end) : c.off("blur", this.end), i && this.target[0].releaseCapture(), a
      }
    }, l.create = function (a, e) {
      var f, g, h, i, j = b(a), k = new l, m = l.types.start, n = function () {
      }, o = a.className.replace(/^\s|\s.*/g, "") + "-drag-start", p = {
        onstart: n, onover: n, onend: n, off: function () {
          j.off(m, k.start)
        }
      };
      return k.onstart = function (b) {
        var e = "fixed" === j.css("position"), k = d.scrollLeft(), l = d.scrollTop(), m = j.width(), n = j.height();
        f = 0, g = 0, h = e ? c.width() - m + f : d.width() - m, i = e ? c.height() - n + g : d.height() - n;
        var q = j.offset(), r = this.startLeft = e ? q.left - k : q.left, s = this.startTop = e ? q.top - l : q.top;
        this.clientX = b.clientX, this.clientY = b.clientY, j.addClass(o), p.onstart.call(a, b, r, s)
      }, k.onover = function (b) {
        var c = b.clientX - this.clientX + this.startLeft, d = b.clientY - this.clientY + this.startTop, e = j[0].style;
        c = Math.max(f, Math.min(h, c)), d = Math.max(g, Math.min(i, d)), e.left = c + "px", e.top = d + "px", p.onover.call(a, b, c, d)
      }, k.onend = function (b) {
        var c = j.position(), d = c.left, e = c.top;
        j.removeClass(o), p.onend.call(a, b, d, e)
      }, k.off = function () {
        j.off(m, k.start)
      }, e ? k.start(e) : j.on(m, k.start), p
    }, l
  }), b("dialog-plus", function (a) {
    var b = a("jquery"), c = a("dialog"), d = a("drag");
    return c.oncreate = function (a) {
      var c, e = a.options, f = e._, g = e.url, h = e.oniframeload;
      if (g && (this.padding = e.padding = 0, c = b("<iframe />"), c.attr({
        src: g,
        name: a.id,
        width: "100%",
        height: "100%",
        allowtransparency: "yes",
        frameborder: "no",
        scrolling: "no"
      }).on("load", function () {
        var b;
        try {
          b = c[0].contentWindow.frameElement
        } catch (d) {
        }
        b && (e.width || a.width(c.contents().width()), e.height || a.height(c.contents().height())), h && h.call(a)
      }), a.addEventListener("beforeremove", function () {
        c.attr("src", "about:blank").remove()
      }, !1), a.content(c[0]), a.iframeNode = c[0]), !(f instanceof Object)) for (var i = function () {
        a.close().remove()
      }, j = 0; j < frames.length; j++) try {
        if (f instanceof frames[j].Object) {
          b(frames[j]).one("unload", i);
          break
        }
      } catch (k) {
      }
      b(a.node).on(d.types.start, "[i=title]", function (b) {
        a.follow || (a.focus(), d.create(a.node, b))
      })
    }, c.get = function (a) {
      if (a && a.frameElement) {
        var b, d = a.frameElement, e = c.list;
        for (var f in e) if (b = e[f], b.node.getElementsByTagName("iframe")[0] === d) return b
      } else if (a) return c.list[a]
    }, c
  }), window.dialog = a("dialog-plus")
}();
/*jQueryRotate 旋转*/
(function (k) {
  for (var d, f, l = document.getElementsByTagName("head")[0].style, h = ["transformProperty", "WebkitTransform", "OTransform", "msTransform", "MozTransform"], g = 0; g < h.length; g++) void 0 !== l[h[g]] && (d = h[g]);
  d && (f = d.replace(/[tT]ransform/, "TransformOrigin"), "T" == f[0] && (f[0] = "t"));
  eval('IE = "v"=="\v"');
  jQuery.fn.extend({
    rotate: function (a) {
      if (0 !== this.length && "undefined" != typeof a) {
        "number" == typeof a && (a = {angle: a});
        for (var b = [], c = 0, d = this.length; c < d; c++) {
          var e = this.get(c);
          if (e.Wilq32 && e.Wilq32.PhotoEffect) e.Wilq32.PhotoEffect._handleRotation(a);
          else {
            var f = k.extend(!0, {}, a), e = (new Wilq32.PhotoEffect(e, f))._rootObj;
            b.push(k(e))
          }
        }
        return b
      }
    }, getRotateAngle: function () {
      for (var a = [], b = 0, c = this.length; b < c; b++) {
        var d = this.get(b);
        d.Wilq32 && d.Wilq32.PhotoEffect && (a[b] = d.Wilq32.PhotoEffect._angle)
      }
      return a
    }, stopRotate: function () {
      for (var a = 0, b = this.length; a < b; a++) {
        var c = this.get(a);
        c.Wilq32 && c.Wilq32.PhotoEffect && clearTimeout(c.Wilq32.PhotoEffect._timer)
      }
    }
  });
  Wilq32 = window.Wilq32 || {};
  Wilq32.PhotoEffect = function () {
    return d ? function (a, b) {
      a.Wilq32 = {PhotoEffect: this};
      this._img = this._rootObj = this._eventObj = a;
      this._handleRotation(b)
    } : function (a, b) {
      this._img = a;
      this._onLoadDelegate = [b];
      this._rootObj = document.createElement("span");
      this._rootObj.style.display = "inline-block";
      this._rootObj.Wilq32 = {PhotoEffect: this};
      a.parentNode.insertBefore(this._rootObj, a);
      if (a.complete) this._Loader(); else {
        var c = this;
        jQuery(this._img).bind("load", function () {
          c._Loader()
        })
      }
    }
  }();
  Wilq32.PhotoEffect.prototype = {
    _setupParameters: function (a) {
      this._parameters = this._parameters || {};
      "number" !==
      typeof this._angle && (this._angle = 0);
      "number" === typeof a.angle && (this._angle = a.angle);
      this._parameters.animateTo = "number" === typeof a.animateTo ? a.animateTo : this._angle;
      this._parameters.step = a.step || this._parameters.step || null;
      this._parameters.easing = a.easing || this._parameters.easing || this._defaultEasing;
      this._parameters.duration = a.duration || this._parameters.duration || 1E3;
      this._parameters.callback = a.callback || this._parameters.callback || this._emptyFunction;
      this._parameters.center = a.center || this._parameters.center ||
        ["50%", "50%"];
      this._rotationCenterX = "string" == typeof this._parameters.center[0] ? parseInt(this._parameters.center[0], 10) / 100 * this._imgWidth * this._aspectW : this._parameters.center[0];
      this._rotationCenterY = "string" == typeof this._parameters.center[1] ? parseInt(this._parameters.center[1], 10) / 100 * this._imgHeight * this._aspectH : this._parameters.center[1];
      a.bind && a.bind != this._parameters.bind && this._BindEvents(a.bind)
    }, _emptyFunction: function () {
    }, _defaultEasing: function (a, b, c, d, e) {
      return -d * ((b = b / e - 1) * b * b * b -
        1) + c
    }, _handleRotation: function (a, b) {
      d || this._img.complete || b ? (this._setupParameters(a), this._angle == this._parameters.animateTo ? this._rotate(this._angle) : this._animateStart()) : this._onLoadDelegate.push(a)
    }, _BindEvents: function (a) {
      if (a && this._eventObj) {
        if (this._parameters.bind) {
          var b = this._parameters.bind, c;
          for (c in b) b.hasOwnProperty(c) && jQuery(this._eventObj).unbind(c, b[c])
        }
        this._parameters.bind = a;
        for (c in a) a.hasOwnProperty(c) && jQuery(this._eventObj).bind(c, a[c])
      }
    }, _Loader: function () {
      return IE ? function () {
        var a =
          this._img.width, b = this._img.height;
        this._imgWidth = a;
        this._imgHeight = b;
        this._img.parentNode.removeChild(this._img);
        this._vimage = this.createVMLNode("image");
        this._vimage.src = this._img.src;
        this._vimage.style.height = b + "px";
        this._vimage.style.width = a + "px";
        this._vimage.style.position = "absolute";
        this._vimage.style.top = "0px";
        this._vimage.style.left = "0px";
        this._aspectW = this._aspectH = 1;
        this._container = this.createVMLNode("group");
        this._container.style.width = a;
        this._container.style.height = b;
        this._container.style.position =
          "absolute";
        this._container.style.top = "0px";
        this._container.style.left = "0px";
        this._container.setAttribute("coordsize", a - 1 + "," + (b - 1));
        this._container.appendChild(this._vimage);
        this._rootObj.appendChild(this._container);
        this._rootObj.style.position = "relative";
        this._rootObj.style.width = a + "px";
        this._rootObj.style.height = b + "px";
        this._rootObj.setAttribute("id", this._img.getAttribute("id"));
        this._rootObj.className = this._img.className;
        for (this._eventObj = this._rootObj; a = this._onLoadDelegate.shift();) this._handleRotation(a,
          !0)
      } : function () {
        this._rootObj.setAttribute("id", this._img.getAttribute("id"));
        this._rootObj.className = this._img.className;
        this._imgWidth = this._img.naturalWidth;
        this._imgHeight = this._img.naturalHeight;
        var a = Math.sqrt(this._imgHeight * this._imgHeight + this._imgWidth * this._imgWidth);
        this._width = 3 * a;
        this._height = 3 * a;
        this._aspectW = this._img.offsetWidth / this._img.naturalWidth;
        this._aspectH = this._img.offsetHeight / this._img.naturalHeight;
        this._img.parentNode.removeChild(this._img);
        this._canvas = document.createElement("canvas");
        this._canvas.setAttribute("width", this._width);
        this._canvas.style.position = "relative";
        this._canvas.style.left = -this._img.height * this._aspectW + "px";
        this._canvas.style.top = -this._img.width * this._aspectH + "px";
        this._canvas.Wilq32 = this._rootObj.Wilq32;
        this._rootObj.appendChild(this._canvas);
        this._rootObj.style.width = this._img.width * this._aspectW + "px";
        this._rootObj.style.height = this._img.height * this._aspectH + "px";
        this._eventObj = this._canvas;
        for (this._cnv = this._canvas.getContext("2d"); a = this._onLoadDelegate.shift();) this._handleRotation(a,
          !0)
      }
    }(), _animateStart: function () {
      this._timer && clearTimeout(this._timer);
      this._animateStartTime = +new Date;
      this._animateStartAngle = this._angle;
      this._animate()
    }, _animate: function () {
      var a = +new Date, b = a - this._animateStartTime > this._parameters.duration;
      if (b && !this._parameters.animatedGif) clearTimeout(this._timer); else {
        if (this._canvas || this._vimage || this._img) a = this._parameters.easing(0, a - this._animateStartTime, this._animateStartAngle, this._parameters.animateTo - this._animateStartAngle, this._parameters.duration),
          this._rotate(~~(10 * a) / 10);
        this._parameters.step && this._parameters.step(this._angle);
        var c = this;
        this._timer = setTimeout(function () {
          c._animate.call(c)
        }, 10)
      }
      this._parameters.callback && b && (this._angle = this._parameters.animateTo, this._rotate(this._angle), this._parameters.callback.call(this._rootObj))
    }, _rotate: function () {
      var a = Math.PI / 180;
      return IE ? function (a) {
        this._angle = a;
        this._container.style.rotation = a % 360 + "deg";
        this._vimage.style.top = -(this._rotationCenterY - this._imgHeight / 2) + "px";
        this._vimage.style.left =
          -(this._rotationCenterX - this._imgWidth / 2) + "px";
        this._container.style.top = this._rotationCenterY - this._imgHeight / 2 + "px";
        this._container.style.left = this._rotationCenterX - this._imgWidth / 2 + "px"
      } : d ? function (a) {
        this._angle = a;
        this._img.style[d] = "rotate(" + a % 360 + "deg)";
        this._img.style[f] = this._parameters.center.join(" ")
      } : function (b) {
        this._angle = b;
        b = b % 360 * a;
        this._canvas.width = this._width;
        this._canvas.height = this._height;
        this._cnv.translate(this._imgWidth * this._aspectW, this._imgHeight * this._aspectH);
        this._cnv.translate(this._rotationCenterX,
          this._rotationCenterY);
        this._cnv.rotate(b);
        this._cnv.translate(-this._rotationCenterX, -this._rotationCenterY);
        this._cnv.scale(this._aspectW, this._aspectH);
        this._cnv.drawImage(this._img, 0, 0)
      }
    }()
  };
  IE && (Wilq32.PhotoEffect.prototype.createVMLNode = function () {
    document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
    try {
      return !document.namespaces.rvml && document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), function (a) {
        return document.createElement("<rvml:" + a + ' class="rvml">')
      }
    } catch (a) {
      return function (a) {
        return document.createElement("<" +
          a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
      }
    }
  }())
})(jQuery);
/*jcarousellite*/
;(function ($) {
  $.fn.jCarouselLite = function (o) {
    o = $.extend({
      btnPrev: null,
      btnNext: null,
      btnGo: null,
      mouseWheel: false,
      auto: null,
      speed: 200,
      easing: null,
      vertical: false,
      circular: true,
      visible: 3,
      start: 0,
      scroll: 1,
      beforeStart: null,
      afterEnd: null
    }, o || {});
    return this.each(function () {
      var b = false, animCss = o.vertical ? "top" : "left", sizeCss = o.vertical ? "height" : "width";
      var c = $(this), ul = $("ul", c), tLi = $("li", ul), tl = tLi.size(), v = o.visible;
      if (o.circular) {
        ul.prepend(tLi.slice(tl - v - 1 + 1).clone()).append(tLi.slice(0, v).clone());
        o.start += v
      }
      var f = $("li", ul), itemLength = f.size(), curr = o.start;
      c.css("visibility", "visible");
      f.css({overflow: "hidden", float: o.vertical ? "none" : "left"});
      ul.css({margin: "0", padding: "0", position: "relative", "list-style-type": "none", "z-index": "1"});
      c.css({overflow: "hidden", position: "relative", "z-index": "2", left: "0px"});
      var g = o.vertical ? height(f) : width(f);
      var h = g * itemLength;
      var j = g * v;
      f.css({width: f.width(), height: f.height()});
      ul.css(sizeCss, h + "px").css(animCss, -(curr * g));
      c.css(sizeCss, j + "px");
      if (o.btnPrev) $(o.btnPrev).click(function () {
        return go(curr - o.scroll)
      });
      if (o.btnNext) $(o.btnNext).click(function () {
        return go(curr + o.scroll)
      });
      if (o.btnGo) $.each(o.btnGo, function (i, a) {
        $(a).click(function () {
          return go(o.circular ? o.visible + i : i)
        })
      });
      if (o.mouseWheel && c.mousewheel) c.mousewheel(function (e, d) {
        return d > 0 ? go(curr - o.scroll) : go(curr + o.scroll)
      });
      if (o.auto) setInterval(function () {
        go(curr + o.scroll)
      }, o.auto + o.speed);

      function vis() {
        return f.slice(curr).slice(0, v)
      };

      function go(a) {
        if (!b) {
          if (o.beforeStart) o.beforeStart.call(this, vis());
          if (o.circular) {
            if (a <= o.start - v - 1) {
              ul.css(animCss, -((itemLength - (v * 2)) * g) + "px");
              curr = a == o.start - v - 1 ? itemLength - (v * 2) - 1 : itemLength - (v * 2) - o.scroll
            } else if (a >= itemLength - v + 1) {
              ul.css(animCss, -((v) * g) + "px");
              curr = a == itemLength - v + 1 ? v + 1 : v + o.scroll
            } else curr = a
          } else {
            if (a < 0 || a > itemLength - v) return; else curr = a
          }
          b = true;
          ul.animate(animCss == "left" ? {left: -(curr * g)} : {top: -(curr * g)}, o.speed, o.easing, function () {
            if (o.afterEnd) o.afterEnd.call(this, vis());
            b = false
          });
          if (!o.circular) {
            $(o.btnPrev + "," + o.btnNext).removeClass("disabled");
            $((curr - o.scroll < 0 && o.btnPrev) || (curr + o.scroll > itemLength - v && o.btnNext) || []).addClass("disabled")
          }
        }
        return false
      }
    })
  };

  function css(a, b) {
    return parseInt($.css(a[0], b)) || 0
  };

  function width(a) {
    return a[0].offsetWidth + css(a, 'marginLeft') + css(a, 'marginRight')
  };

  function height(a) {
    return a[0].offsetHeight + css(a, 'marginTop') + css(a, 'marginBottom')
  }
})(jQuery);
/*cookie*/
;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory)
  } else if (typeof exports === 'object') {
    factory(require('jquery'))
  } else {
    factory(jQuery)
  }
}(function ($) {
  var pluses = /\+/g;

  function encode(s) {
    return config.raw ? s : encodeURIComponent(s)
  }

  function decode(s) {
    return config.raw ? s : decodeURIComponent(s)
  }

  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value))
  }

  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\')
    }
    try {
      s = decodeURIComponent(s.replace(pluses, ' '));
      return config.json ? JSON.parse(s) : s
    } catch (e) {
    }
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value
  }

  var config = $.cookie = function (key, value, options) {
    if (value !== undefined && !$.isFunction(value)) {
      options = $.extend({}, config.defaults, options);
      if (typeof options.expires === 'number') {
        var days = options.expires, t = options.expires = new Date();
        t.setTime(+t + days * 864e+5)
      }
      return (document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''))
    }
    var result = key ? undefined : {};
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split('=');
      var name = decode(parts.shift());
      var cookie = parts.join('=');
      if (key && key === name) {
        result = read(cookie, value);
        break
      }
      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie
      }
    }
    return result
  };
  config.defaults = {};
  $.removeCookie = function (key, options) {
    if ($.cookie(key) === undefined) {
      return false
    }
    $.cookie(key, '', $.extend({}, options, {expires: -1}));
    return !$.cookie(key)
  }
}));
