! function (n) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = n();
    else if ("function" == typeof define && define.amd) define([], n);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.sentenceGenerator = n()
    }
}(function () {
    return function n(t, e, r) {
        function u(i, f) {
            if (!e[i]) {
                if (!t[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (o) return o(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var l = e[i] = {
                    exports: {}
                };
                t[i][0].call(l.exports, function (n) {
                    var e = t[i][1][n];
                    return u(e ? e : n)
                }, l, l.exports, n, t, e, r)
            }
            return e[i].exports
        }
        for (var o = "function" == typeof require && require, i = 0; i < r.length; i++) u(r[i]);
        return u
    }({
        1: [function (n, t, e) {}, {}],
        2: [function (n, t, e) {
            (function (n) {
                function t(n, t) {
                    for (var e = 0, r = n.length - 1; r >= 0; r--) {
                        var u = n[r];
                        "." === u ? n.splice(r, 1) : ".." === u ? (n.splice(r, 1), e++) : e && (n.splice(r, 1), e--)
                    }
                    if (t)
                        for (; e--; e) n.unshift("..");
                    return n
                }

                function r(n, t) {
                    if (n.filter) return n.filter(t);
                    for (var e = [], r = 0; r < n.length; r++) t(n[r], r, n) && e.push(n[r]);
                    return e
                }
                var u = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                    o = function (n) {
                        return u.exec(n).slice(1)
                    };
                e.resolve = function () {
                    for (var e = "", u = !1, o = arguments.length - 1; o >= -1 && !u; o--) {
                        var i = o >= 0 ? arguments[o] : n.cwd();
                        if ("string" != typeof i) throw new TypeError("Arguments to path.resolve must be strings");
                        i && (e = i + "/" + e, u = "/" === i.charAt(0))
                    }
                    return e = t(r(e.split("/"), function (n) {
                        return !!n
                    }), !u).join("/"), (u ? "/" : "") + e || "."
                }, e.normalize = function (n) {
                    var u = e.isAbsolute(n),
                        o = "/" === i(n, -1);
                    return n = t(r(n.split("/"), function (n) {
                        return !!n
                    }), !u).join("/"), n || u || (n = "."), n && o && (n += "/"), (u ? "/" : "") + n
                }, e.isAbsolute = function (n) {
                    return "/" === n.charAt(0)
                }, e.join = function () {
                    var n = Array.prototype.slice.call(arguments, 0);
                    return e.normalize(r(n, function (n, t) {
                        if ("string" != typeof n) throw new TypeError("Arguments to path.join must be strings");
                        return n
                    }).join("/"))
                }, e.relative = function (n, t) {
                    function r(n) {
                        for (var t = 0; t < n.length && "" === n[t]; t++);
                        for (var e = n.length - 1; e >= 0 && "" === n[e]; e--);
                        return t > e ? [] : n.slice(t, e - t + 1)
                    }
                    n = e.resolve(n).substr(1), t = e.resolve(t).substr(1);
                    for (var u = r(n.split("/")), o = r(t.split("/")), i = Math.min(u.length, o.length), f = i, c = 0; c < i; c++)
                        if (u[c] !== o[c]) {
                            f = c;
                            break
                        }
                    for (var a = [], c = f; c < u.length; c++) a.push("..");
                    return a = a.concat(o.slice(f)), a.join("/")
                }, e.sep = "/", e.delimiter = ":", e.dirname = function (n) {
                    var t = o(n),
                        e = t[0],
                        r = t[1];
                    return e || r ? (r && (r = r.substr(0, r.length - 1)), e + r) : "."
                }, e.basename = function (n, t) {
                    var e = o(n)[2];
                    return t && e.substr(-1 * t.length) === t && (e = e.substr(0, e.length - t.length)), e
                }, e.extname = function (n) {
                    return o(n)[3]
                };
                var i = "b" === "ab".substr(-1) ? function (n, t, e) {
                    return n.substr(t, e)
                } : function (n, t, e) {
                    return t < 0 && (t = n.length + t), n.substr(t, e)
                }
            }).call(this, n("_process"))
        }, {
            _process: 3
        }],
        3: [function (n, t, e) {
            function r() {
                throw new Error("setTimeout has not been defined")
            }

            function u() {
                throw new Error("clearTimeout has not been defined")
            }

            function o(n) {
                if (s === setTimeout) return setTimeout(n, 0);
                if ((s === r || !s) && setTimeout) return s = setTimeout, setTimeout(n, 0);
                try {
                    return s(n, 0)
                } catch (t) {
                    try {
                        return s.call(null, n, 0)
                    } catch (t) {
                        return s.call(this, n, 0)
                    }
                }
            }

            function i(n) {
                if (d === clearTimeout) return clearTimeout(n);
                if ((d === u || !d) && clearTimeout) return d = clearTimeout, clearTimeout(n);
                try {
                    return d(n)
                } catch (t) {
                    try {
                        return d.call(null, n)
                    } catch (t) {
                        return d.call(this, n)
                    }
                }
            }

            function f() {
                m && h && (m = !1, h.length ? v = h.concat(v) : g = -1, v.length && c())
            }

            function c() {
                if (!m) {
                    var n = o(f);
                    m = !0;
                    for (var t = v.length; t;) {
                        for (h = v, v = []; ++g < t;) h && h[g].run();
                        g = -1, t = v.length
                    }
                    h = null, m = !1, i(n)
                }
            }

            function a(n, t) {
                this.fun = n, this.array = t
            }

            function l() {}
            var s, d, p = t.exports = {};
            ! function () {
                try {
                    s = "function" == typeof setTimeout ? setTimeout : r
                } catch (n) {
                    s = r
                }
                try {
                    d = "function" == typeof clearTimeout ? clearTimeout : u
                } catch (n) {
                    d = u
                }
            }();
            var h, v = [],
                m = !1,
                g = -1;
            p.nextTick = function (n) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
                v.push(new a(n, t)), 1 !== v.length || m || o(c)
            }, a.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = l, p.addListener = l, p.once = l, p.off = l, p.removeListener = l, p.removeAllListeners = l, p.emit = l, p.binding = function (n) {
                throw new Error("process.binding is not supported")
            }, p.cwd = function () {
                return "/"
            }, p.chdir = function (n) {
                throw new Error("process.chdir is not supported")
            }, p.umask = function () {
                return 0
            }
        }, {}],
        4: [function (n, t, e) {
            "use strict";

            function r() {
                for (var n = arguments.length, t = Array(n), e = 0; e < n; e++) t[e] = arguments[e];
                var r = t[t.length - 1],
                    u = t.slice(0, -1);
                return function (n) {
                    return u.reduceRight(function (n, t) {
                        return t(n)
                    }, r(n))
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = r, t.exports = e.default
        }, {}],
        5: [function (n, t, e) {
            (function (r) {
                "use strict";

                function u(n) {
                    return n && n.__esModule ? n : {
                        default: n
                    }
                }

                function o(n) {
                    return s.default.resolve(r.cwd(), n)
                }

                function i(n) {
                    return n;
                }

                function f(n) {
                    return n.toString()
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var c = n("fs"),
                    a = u(c),
                    l = n("path"),
                    s = u(l),
                    d = n("./compose"),
                    p = u(d),
                    h = n("./instance"),
                    v = u(h);
                e.default = function (n) {
                    var t = (0, p.default)(v.default, f, i, o);
                    return t(n)
                }, t.exports = e.default
            }).call(this, n("_process"))
        }, {
            "./compose": 4,
            "./instance": 6,
            _process: 3,
            fs: 1,
            path: 2
        }],
        6: [function (n, t, e) {
            "use strict";

            function r(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function u(n) {
                return o((0, f.default)(n))
            }

            function o(n) {
                var t = {
                    value: "",
                    run: function () {
                        return n()
                    },
                    take: function (n) {
                        return t.clear(), Array.from({
                            length: n
                        }, function (n, t) {
                            return t + 1
                        }).map(t.concat), t.unwrap()
                    },
                    generate: function (n) {
                        return t.concat(), t.unwrap()
                    },
                    unwrap: function () {
                        return t.value.trim()
                    },
                    concat: function () {
                        var n = t.run();
                        t.value += /(!|\?|,|;|-|\(|&|:|\.)$/.test(n) ? n + " " : n + ". "
                    },
                    clear: function () {
                        t.value = ""
                    }
                };
                return t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = u;
            var i = n("./output"),
                f = r(i);
            t.exports = e.default
        }, {
            "./output": 7
        }],
        7: [function (n, t, e) {
            "use strict";

            function r(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function u(n) {
                if (Array.isArray(n)) {
                    for (var t = 0, e = Array(n.length); t < n.length; t++) e[t] = n[t];
                    return e
                }
                return Array.from(n)
            }

            function o(n) {
                return n.split(/(?:\. |\n)/gi)
            }

            function i(n) {
                return n.map(function (n) {
                    return n.split(" ")
                })
            }

            function f(n) {
                return n.map(function (n) {
                    return n.map(function (n) {
                        return n.replace(/\.$/gi, "").trim()
                    })
                })
            }

            function c(n) {
                return n.filter(function (n) {
                    return !!n || n.length
                })
            }

            function a(n) {
                return function (t, e) {
                    return {
                        value: t,
                        next: n[e + 1],
                        lead: 0 === e
                    }
                }
            }

            function l(n, t) {
                return t.lead && n.leads.push(t.value), n.bank[t.value] || (n.bank[t.value] = {}), n.bank[t.value][t.next] ? n.bank[t.value][t.next] += 1 : n.bank[t.value][t.next] = 1, n
            }

            function s(n) {
                return n[Math.floor(n.length * Math.random())]
            }

            function d(n) {
                function t(e, r) {
                    if (n.bank[r] && e.length < 16) {
                        var o = p(n.bank[r]);
                        return t([].concat(u(e), [o]), o)
                    }
                    return e.join(" ")
                }
                var e = s(n.leads);
                return t([e], e)
            }

            function p(n) {
                var t = Object.keys(n),
                    e = ~~(Math.random() * t.reduce(function (t, e) {
                        return t + n[e]
                    }, 0)),
                    r = t.reduce(function (t, r) {
                        return t.word || (t.i += n[r], t.i > e && (t.word = r)), t
                    }, {
                        i: 0
                    }),
                    u = r.word;
                return u
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var h = n("./compose"),
                v = r(h);
            e.default = function (n) {
                var t = (0, v.default)(c, f, i, o),
                    e = t(n).reduce(function (n, t) {
                        return t.map(a(t)).filter(function (n) {
                            return n.next
                        }).reduce(l, n), n
                    }, {
                        bank: {},
                        leads: []
                    });
                return function (n) {
                    return d(e)
                }
            }, t.exports = e.default
        }, {
            "./compose": 4
        }]
    }, {}, [5])(5)
});
