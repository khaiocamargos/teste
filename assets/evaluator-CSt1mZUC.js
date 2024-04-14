import {A as defineComponent, r as ref, z as watchEffect, f as computed, w as watch, B as openBlock, K as createElementBlock, L as normalizeStyle, p as propsFactory, b as makeThemeProps, M as omit, g as genericComponent, n as useProxiedModel, d as provideTheme, s as shallowRef, o as onMounted, N as refElement, u as useRender, c as createVNode, y as mergeProps, O as onScopeDispose, P as nextTick, Q as useRoute, I as useRouter, D as withCtx, E as createBaseVNode, J as createTextVNode, F as toDisplayString, R as unref, C as createBlock, S as Fragment, T as pushScopeId, U as popScopeId, W as createCommentVNode} from "./index-DuJTDyAq.js";
import {u as useBalanceStore, V as VSheet} from "./VSheet-axggTibZ.js";
import {a as VCardTitle, c as VAvatar, b as VCardText, V as VCard} from "./VCard-D3MqCLzj.js";
import {m as makeVariantProps, u as useVariant, g as genOverlays, a as VProgressLinear, b as VIcon, V as VBtn} from "./VGrid-CmoWF2CG.js";
import {m as makeVOverlayProps, u as useScopeId, V as VOverlay, f as forwardRefs, a as VRow, b as VCol, c as VDialog, _ as _export_sfc$1} from "./_plugin-vue_export-helper-BWjWNxsp.js";
import {g as makeLocationProps, h as makePositionProps, b as makeRoundedProps, i as useLocation, j as usePosition, e as useRounded, f as VDefaultsProvider, V as VImg} from "./VImg-Dy7h4JrB.js";
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var lottie = {
    exports: {}
};
(function(module, exports) {
    typeof navigator < "u" && function(t, e) {
        module.exports = e()
    }(commonjsGlobal, function() {
        var svgNS = "http://www.w3.org/2000/svg"
          , locationHref = ""
          , _useWebWorker = !1
          , initialDefaultFrame = -999999
          , setWebWorker = function(e) {
            _useWebWorker = !!e
        }
          , getWebWorker = function() {
            return _useWebWorker
        }
          , setLocationHref = function(e) {
            locationHref = e
        }
          , getLocationHref = function() {
            return locationHref
        };
        function createTag(t) {
            return document.createElement(t)
        }
        function extendPrototype(t, e) {
            var r, i = t.length, s;
            for (r = 0; r < i; r += 1) {
                s = t[r].prototype;
                for (var a in s)
                    Object.prototype.hasOwnProperty.call(s, a) && (e.prototype[a] = s[a])
            }
        }
        function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e)
        }
        function createProxyFunction(t) {
            function e() {}
            return e.prototype = t,
            e
        }
        var audioControllerFactory = function() {
            function t(e) {
                this.audios = [],
                this.audioFactory = e,
                this._volume = 1,
                this._isMuted = !1
            }
            return t.prototype = {
                addAudio: function(r) {
                    this.audios.push(r)
                },
                pause: function() {
                    var r, i = this.audios.length;
                    for (r = 0; r < i; r += 1)
                        this.audios[r].pause()
                },
                resume: function() {
                    var r, i = this.audios.length;
                    for (r = 0; r < i; r += 1)
                        this.audios[r].resume()
                },
                setRate: function(r) {
                    var i, s = this.audios.length;
                    for (i = 0; i < s; i += 1)
                        this.audios[i].setRate(r)
                },
                createAudio: function(r) {
                    return this.audioFactory ? this.audioFactory(r) : window.Howl ? new window.Howl({
                        src: [r]
                    }) : {
                        isPlaying: !1,
                        play: function() {
                            this.isPlaying = !0
                        },
                        seek: function() {
                            this.isPlaying = !1
                        },
                        playing: function() {},
                        rate: function() {},
                        setVolume: function() {}
                    }
                },
                setAudioFactory: function(r) {
                    this.audioFactory = r
                },
                setVolume: function(r) {
                    this._volume = r,
                    this._updateVolume()
                },
                mute: function() {
                    this._isMuted = !0,
                    this._updateVolume()
                },
                unmute: function() {
                    this._isMuted = !1,
                    this._updateVolume()
                },
                getVolume: function() {
                    return this._volume
                },
                _updateVolume: function() {
                    var r, i = this.audios.length;
                    for (r = 0; r < i; r += 1)
                        this.audios[r].volume(this._volume * (this._isMuted ? 0 : 1))
                }
            },
            function() {
                return new t
            }
        }()
          , createTypedArray = function() {
            function t(r, i) {
                var s = 0, a = [], n;
                switch (r) {
                case "int16":
                case "uint8c":
                    n = 1;
                    break;
                default:
                    n = 1.1;
                    break
                }
                for (s = 0; s < i; s += 1)
                    a.push(n);
                return a
            }
            function e(r, i) {
                return r === "float32" ? new Float32Array(i) : r === "int16" ? new Int16Array(i) : r === "uint8c" ? new Uint8ClampedArray(i) : t(r, i)
            }
            return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t
        }();
        function createSizedArray(t) {
            return Array.apply(null, {
                length: t
            })
        }
        function _typeof$6(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$6 = function(r) {
                return typeof r
            }
            : _typeof$6 = function(r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }
            ,
            _typeof$6(t)
        }
        var subframeEnabled = !0
          , expressionsPlugin = null
          , expressionsInterfaces = null
          , idPrefix$1 = ""
          , isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
          , bmPow = Math.pow
          , bmSqrt = Math.sqrt
          , bmFloor = Math.floor
          , bmMax = Math.max
          , bmMin = Math.min
          , BMMath = {};
        (function() {
            var t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], e, r = t.length;
            for (e = 0; e < r; e += 1)
                BMMath[t[e]] = Math[t[e]]
        }
        )(),
        BMMath.random = Math.random,
        BMMath.abs = function(t) {
            var e = _typeof$6(t);
            if (e === "object" && t.length) {
                var r = createSizedArray(t.length), i, s = t.length;
                for (i = 0; i < s; i += 1)
                    r[i] = Math.abs(t[i]);
                return r
            }
            return Math.abs(t)
        }
        ;
        var defaultCurveSegments = 150
          , degToRads = Math.PI / 180
          , roundCorner = .5519;
        function styleDiv(t) {
            t.style.position = "absolute",
            t.style.top = 0,
            t.style.left = 0,
            t.style.display = "block",
            t.style.transformOrigin = "0 0",
            t.style.webkitTransformOrigin = "0 0",
            t.style.backfaceVisibility = "visible",
            t.style.webkitBackfaceVisibility = "visible",
            t.style.transformStyle = "preserve-3d",
            t.style.webkitTransformStyle = "preserve-3d",
            t.style.mozTransformStyle = "preserve-3d"
        }
        function BMEnterFrameEvent(t, e, r, i) {
            this.type = t,
            this.currentTime = e,
            this.totalTime = r,
            this.direction = i < 0 ? -1 : 1
        }
        function BMCompleteEvent(t, e) {
            this.type = t,
            this.direction = e < 0 ? -1 : 1
        }
        function BMCompleteLoopEvent(t, e, r, i) {
            this.type = t,
            this.currentLoop = r,
            this.totalLoops = e,
            this.direction = i < 0 ? -1 : 1
        }
        function BMSegmentStartEvent(t, e, r) {
            this.type = t,
            this.firstFrame = e,
            this.totalFrames = r
        }
        function BMDestroyEvent(t, e) {
            this.type = t,
            this.target = e
        }
        function BMRenderFrameErrorEvent(t, e) {
            this.type = "renderFrameError",
            this.nativeError = t,
            this.currentTime = e
        }
        function BMConfigErrorEvent(t) {
            this.type = "configError",
            this.nativeError = t
        }
        var createElementID = function() {
            var t = 0;
            return function() {
                return t += 1,
                idPrefix$1 + "__lottie_element_" + t
            }
        }();
        function HSVtoRGB(t, e, r) {
            var i, s, a, n, l, o, f, y;
            switch (n = Math.floor(t * 6),
            l = t * 6 - n,
            o = r * (1 - e),
            f = r * (1 - l * e),
            y = r * (1 - (1 - l) * e),
            n % 6) {
            case 0:
                i = r,
                s = y,
                a = o;
                break;
            case 1:
                i = f,
                s = r,
                a = o;
                break;
            case 2:
                i = o,
                s = r,
                a = y;
                break;
            case 3:
                i = o,
                s = f,
                a = r;
                break;
            case 4:
                i = y,
                s = o,
                a = r;
                break;
            case 5:
                i = r,
                s = o,
                a = f;
                break
            }
            return [i, s, a]
        }
        function RGBtoHSV(t, e, r) {
            var i = Math.max(t, e, r), s = Math.min(t, e, r), a = i - s, n, l = i === 0 ? 0 : a / i, o = i / 255;
            switch (i) {
            case s:
                n = 0;
                break;
            case t:
                n = e - r + a * (e < r ? 6 : 0),
                n /= 6 * a;
                break;
            case e:
                n = r - t + a * 2,
                n /= 6 * a;
                break;
            case r:
                n = t - e + a * 4,
                n /= 6 * a;
                break
            }
            return [n, l, o]
        }
        function addSaturationToRGB(t, e) {
            var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
            return r[1] += e,
            r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0),
            HSVtoRGB(r[0], r[1], r[2])
        }
        function addBrightnessToRGB(t, e) {
            var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
            return r[2] += e,
            r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0),
            HSVtoRGB(r[0], r[1], r[2])
        }
        function addHueToRGB(t, e) {
            var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
            return r[0] += e / 360,
            r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1),
            HSVtoRGB(r[0], r[1], r[2])
        }
        var rgbToHex = function() {
            var t = [], e, r;
            for (e = 0; e < 256; e += 1)
                r = e.toString(16),
                t[e] = r.length === 1 ? "0" + r : r;
            return function(i, s, a) {
                return i < 0 && (i = 0),
                s < 0 && (s = 0),
                a < 0 && (a = 0),
                "#" + t[i] + t[s] + t[a]
            }
        }()
          , setSubframeEnabled = function(e) {
            subframeEnabled = !!e
        }
          , getSubframeEnabled = function() {
            return subframeEnabled
        }
          , setExpressionsPlugin = function(e) {
            expressionsPlugin = e
        }
          , getExpressionsPlugin = function() {
            return expressionsPlugin
        }
          , setExpressionInterfaces = function(e) {
            expressionsInterfaces = e
        }
          , getExpressionInterfaces = function() {
            return expressionsInterfaces
        }
          , setDefaultCurveSegments = function(e) {
            defaultCurveSegments = e
        }
          , getDefaultCurveSegments = function() {
            return defaultCurveSegments
        }
          , setIdPrefix = function(e) {
            idPrefix$1 = e
        };
        function createNS(t) {
            return document.createElementNS(svgNS, t)
        }
        function _typeof$5(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$5 = function(r) {
                return typeof r
            }
            : _typeof$5 = function(r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }
            ,
            _typeof$5(t)
        }
        var dataManager = function() {
            var t = 1, e = [], r, i, s = {
                onmessage: function() {},
                postMessage: function(b) {
                    r({
                        data: b
                    })
                }
            }, a = {
                postMessage: function(b) {
                    s.onmessage({
                        data: b
                    })
                }
            };
            function n(u) {
                if (window.Worker && window.Blob && getWebWorker()) {
                    var b = new Blob(["var _workerSelf = self; self.onmessage = ", u.toString()],{
                        type: "text/javascript"
                    })
                      , x = URL.createObjectURL(b);
                    return new Worker(x)
                }
                return r = u,
                s
            }
            function l() {
                i || (i = n(function(b) {
                    function x() {
                        function C(D, A) {
                            var F, k, S = D.length, I, V, G, j;
                            for (k = 0; k < S; k += 1)
                                if (F = D[k],
                                "ks"in F && !F.completed) {
                                    if (F.completed = !0,
                                    F.hasMask) {
                                        var $ = F.masksProperties;
                                        for (V = $.length,
                                        I = 0; I < V; I += 1)
                                            if ($[I].pt.k.i)
                                                E($[I].pt.k);
                                            else
                                                for (j = $[I].pt.k.length,
                                                G = 0; G < j; G += 1)
                                                    $[I].pt.k[G].s && E($[I].pt.k[G].s[0]),
                                                    $[I].pt.k[G].e && E($[I].pt.k[G].e[0])
                                    }
                                    F.ty === 0 ? (F.layers = p(F.refId, A),
                                    C(F.layers, A)) : F.ty === 4 ? g(F.shapes) : F.ty === 5 && O(F)
                                }
                        }
                        function c(D, A) {
                            if (D) {
                                var F = 0
                                  , k = D.length;
                                for (F = 0; F < k; F += 1)
                                    D[F].t === 1 && (D[F].data.layers = p(D[F].data.refId, A),
                                    C(D[F].data.layers, A))
                            }
                        }
                        function m(D, A) {
                            for (var F = 0, k = A.length; F < k; ) {
                                if (A[F].id === D)
                                    return A[F];
                                F += 1
                            }
                            return null
                        }
                        function p(D, A) {
                            var F = m(D, A);
                            return F ? F.layers.__used ? JSON.parse(JSON.stringify(F.layers)) : (F.layers.__used = !0,
                            F.layers) : null
                        }
                        function g(D) {
                            var A, F = D.length, k, S;
                            for (A = F - 1; A >= 0; A -= 1)
                                if (D[A].ty === "sh")
                                    if (D[A].ks.k.i)
                                        E(D[A].ks.k);
                                    else
                                        for (S = D[A].ks.k.length,
                                        k = 0; k < S; k += 1)
                                            D[A].ks.k[k].s && E(D[A].ks.k[k].s[0]),
                                            D[A].ks.k[k].e && E(D[A].ks.k[k].e[0]);
                                else
                                    D[A].ty === "gr" && g(D[A].it)
                        }
                        function E(D) {
                            var A, F = D.i.length;
                            for (A = 0; A < F; A += 1)
                                D.i[A][0] += D.v[A][0],
                                D.i[A][1] += D.v[A][1],
                                D.o[A][0] += D.v[A][0],
                                D.o[A][1] += D.v[A][1]
                        }
                        function _(D, A) {
                            var F = A ? A.split(".") : [100, 100, 100];
                            return D[0] > F[0] ? !0 : F[0] > D[0] ? !1 : D[1] > F[1] ? !0 : F[1] > D[1] ? !1 : D[2] > F[2] ? !0 : F[2] > D[2] ? !1 : null
                        }
                        var T = function() {
                            var D = [4, 4, 14];
                            function A(k) {
                                var S = k.t.d;
                                k.t.d = {
                                    k: [{
                                        s: S,
                                        t: 0
                                    }]
                                }
                            }
                            function F(k) {
                                var S, I = k.length;
                                for (S = 0; S < I; S += 1)
                                    k[S].ty === 5 && A(k[S])
                            }
                            return function(k) {
                                if (_(D, k.v) && (F(k.layers),
                                k.assets)) {
                                    var S, I = k.assets.length;
                                    for (S = 0; S < I; S += 1)
                                        k.assets[S].layers && F(k.assets[S].layers)
                                }
                            }
                        }()
                          , M = function() {
                            var D = [4, 7, 99];
                            return function(A) {
                                if (A.chars && !_(D, A.v)) {
                                    var F, k = A.chars.length;
                                    for (F = 0; F < k; F += 1) {
                                        var S = A.chars[F];
                                        S.data && S.data.shapes && (g(S.data.shapes),
                                        S.data.ip = 0,
                                        S.data.op = 99999,
                                        S.data.st = 0,
                                        S.data.sr = 1,
                                        S.data.ks = {
                                            p: {
                                                k: [0, 0],
                                                a: 0
                                            },
                                            s: {
                                                k: [100, 100],
                                                a: 0
                                            },
                                            a: {
                                                k: [0, 0],
                                                a: 0
                                            },
                                            r: {
                                                k: 0,
                                                a: 0
                                            },
                                            o: {
                                                k: 100,
                                                a: 0
                                            }
                                        },
                                        A.chars[F].t || (S.data.shapes.push({
                                            ty: "no"
                                        }),
                                        S.data.shapes[0].it.push({
                                            p: {
                                                k: [0, 0],
                                                a: 0
                                            },
                                            s: {
                                                k: [100, 100],
                                                a: 0
                                            },
                                            a: {
                                                k: [0, 0],
                                                a: 0
                                            },
                                            r: {
                                                k: 0,
                                                a: 0
                                            },
                                            o: {
                                                k: 100,
                                                a: 0
                                            },
                                            sk: {
                                                k: 0,
                                                a: 0
                                            },
                                            sa: {
                                                k: 0,
                                                a: 0
                                            },
                                            ty: "tr"
                                        })))
                                    }
                                }
                            }
                        }()
                          , B = function() {
                            var D = [5, 7, 15];
                            function A(k) {
                                var S = k.t.p;
                                typeof S.a == "number" && (S.a = {
                                    a: 0,
                                    k: S.a
                                }),
                                typeof S.p == "number" && (S.p = {
                                    a: 0,
                                    k: S.p
                                }),
                                typeof S.r == "number" && (S.r = {
                                    a: 0,
                                    k: S.r
                                })
                            }
                            function F(k) {
                                var S, I = k.length;
                                for (S = 0; S < I; S += 1)
                                    k[S].ty === 5 && A(k[S])
                            }
                            return function(k) {
                                if (_(D, k.v) && (F(k.layers),
                                k.assets)) {
                                    var S, I = k.assets.length;
                                    for (S = 0; S < I; S += 1)
                                        k.assets[S].layers && F(k.assets[S].layers)
                                }
                            }
                        }()
                          , z = function() {
                            var D = [4, 1, 9];
                            function A(k) {
                                var S, I = k.length, V, G;
                                for (S = 0; S < I; S += 1)
                                    if (k[S].ty === "gr")
                                        A(k[S].it);
                                    else if (k[S].ty === "fl" || k[S].ty === "st")
                                        if (k[S].c.k && k[S].c.k[0].i)
                                            for (G = k[S].c.k.length,
                                            V = 0; V < G; V += 1)
                                                k[S].c.k[V].s && (k[S].c.k[V].s[0] /= 255,
                                                k[S].c.k[V].s[1] /= 255,
                                                k[S].c.k[V].s[2] /= 255,
                                                k[S].c.k[V].s[3] /= 255),
                                                k[S].c.k[V].e && (k[S].c.k[V].e[0] /= 255,
                                                k[S].c.k[V].e[1] /= 255,
                                                k[S].c.k[V].e[2] /= 255,
                                                k[S].c.k[V].e[3] /= 255);
                                        else
                                            k[S].c.k[0] /= 255,
                                            k[S].c.k[1] /= 255,
                                            k[S].c.k[2] /= 255,
                                            k[S].c.k[3] /= 255
                            }
                            function F(k) {
                                var S, I = k.length;
                                for (S = 0; S < I; S += 1)
                                    k[S].ty === 4 && A(k[S].shapes)
                            }
                            return function(k) {
                                if (_(D, k.v) && (F(k.layers),
                                k.assets)) {
                                    var S, I = k.assets.length;
                                    for (S = 0; S < I; S += 1)
                                        k.assets[S].layers && F(k.assets[S].layers)
                                }
                            }
                        }()
                          , R = function() {
                            var D = [4, 4, 18];
                            function A(k) {
                                var S, I = k.length, V, G;
                                for (S = I - 1; S >= 0; S -= 1)
                                    if (k[S].ty === "sh")
                                        if (k[S].ks.k.i)
                                            k[S].ks.k.c = k[S].closed;
                                        else
                                            for (G = k[S].ks.k.length,
                                            V = 0; V < G; V += 1)
                                                k[S].ks.k[V].s && (k[S].ks.k[V].s[0].c = k[S].closed),
                                                k[S].ks.k[V].e && (k[S].ks.k[V].e[0].c = k[S].closed);
                                    else
                                        k[S].ty === "gr" && A(k[S].it)
                            }
                            function F(k) {
                                var S, I, V = k.length, G, j, $, W;
                                for (I = 0; I < V; I += 1) {
                                    if (S = k[I],
                                    S.hasMask) {
                                        var q = S.masksProperties;
                                        for (j = q.length,
                                        G = 0; G < j; G += 1)
                                            if (q[G].pt.k.i)
                                                q[G].pt.k.c = q[G].cl;
                                            else
                                                for (W = q[G].pt.k.length,
                                                $ = 0; $ < W; $ += 1)
                                                    q[G].pt.k[$].s && (q[G].pt.k[$].s[0].c = q[G].cl),
                                                    q[G].pt.k[$].e && (q[G].pt.k[$].e[0].c = q[G].cl)
                                    }
                                    S.ty === 4 && A(S.shapes)
                                }
                            }
                            return function(k) {
                                if (_(D, k.v) && (F(k.layers),
                                k.assets)) {
                                    var S, I = k.assets.length;
                                    for (S = 0; S < I; S += 1)
                                        k.assets[S].layers && F(k.assets[S].layers)
                                }
                            }
                        }();
                        function L(D) {
                            D.__complete || (z(D),
                            T(D),
                            M(D),
                            B(D),
                            R(D),
                            C(D.layers, D.assets),
                            c(D.chars, D.assets),
                            D.__complete = !0)
                        }
                        function O(D) {
                            D.t.a.length === 0 && "m"in D.t.p
                        }
                        var N = {};
                        return N.completeData = L,
                        N.checkColors = z,
                        N.checkChars = M,
                        N.checkPathProperties = B,
                        N.checkShapes = R,
                        N.completeLayers = C,
                        N
                    }
                    if (a.dataManager || (a.dataManager = x()),
                    a.assetLoader || (a.assetLoader = function() {
                        function C(m) {
                            var p = m.getResponseHeader("content-type");
                            return p && m.responseType === "json" && p.indexOf("json") !== -1 || m.response && _typeof$5(m.response) === "object" ? m.response : m.response && typeof m.response == "string" ? JSON.parse(m.response) : m.responseText ? JSON.parse(m.responseText) : null
                        }
                        function c(m, p, g, E) {
                            var _, T = new XMLHttpRequest;
                            try {
                                T.responseType = "json"
                            } catch {}
                            T.onreadystatechange = function() {
                                if (T.readyState === 4)
                                    if (T.status === 200)
                                        _ = C(T),
                                        g(_);
                                    else
                                        try {
                                            _ = C(T),
                                            g(_)
                                        } catch (M) {
                                            E && E(M)
                                        }
                            }
                            ;
                            try {
                                T.open(["G", "E", "T"].join(""), m, !0)
                            } catch {
                                T.open(["G", "E", "T"].join(""), p + "/" + m, !0)
                            }
                            T.send()
                        }
                        return {
                            load: c
                        }
                    }()),
                    b.data.type === "loadAnimation")
                        a.assetLoader.load(b.data.path, b.data.fullPath, function(C) {
                            a.dataManager.completeData(C),
                            a.postMessage({
                                id: b.data.id,
                                payload: C,
                                status: "success"
                            })
                        }, function() {
                            a.postMessage({
                                id: b.data.id,
                                status: "error"
                            })
                        });
                    else if (b.data.type === "complete") {
                        var d = b.data.animation;
                        a.dataManager.completeData(d),
                        a.postMessage({
                            id: b.data.id,
                            payload: d,
                            status: "success"
                        })
                    } else
                        b.data.type === "loadData" && a.assetLoader.load(b.data.path, b.data.fullPath, function(C) {
                            a.postMessage({
                                id: b.data.id,
                                payload: C,
                                status: "success"
                            })
                        }, function() {
                            a.postMessage({
                                id: b.data.id,
                                status: "error"
                            })
                        })
                }),
                i.onmessage = function(u) {
                    var b = u.data
                      , x = b.id
                      , d = e[x];
                    e[x] = null,
                    b.status === "success" ? d.onComplete(b.payload) : d.onError && d.onError()
                }
                )
            }
            function o(u, b) {
                t += 1;
                var x = "processId_" + t;
                return e[x] = {
                    onComplete: u,
                    onError: b
                },
                x
            }
            function f(u, b, x) {
                l();
                var d = o(b, x);
                i.postMessage({
                    type: "loadAnimation",
                    path: u,
                    fullPath: window.location.origin + window.location.pathname,
                    id: d
                })
            }
            function y(u, b, x) {
                l();
                var d = o(b, x);
                i.postMessage({
                    type: "loadData",
                    path: u,
                    fullPath: window.location.origin + window.location.pathname,
                    id: d
                })
            }
            function P(u, b, x) {
                l();
                var d = o(b, x);
                i.postMessage({
                    type: "complete",
                    animation: u,
                    id: d
                })
            }
            return {
                loadAnimation: f,
                loadData: y,
                completeAnimation: P
            }
        }()
          , ImagePreloader = function() {
            var t = function() {
                var c = createTag("canvas");
                c.width = 1,
                c.height = 1;
                var m = c.getContext("2d");
                return m.fillStyle = "rgba(0,0,0,0)",
                m.fillRect(0, 0, 1, 1),
                c
            }();
            function e() {
                this.loadedAssets += 1,
                this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }
            function r() {
                this.loadedFootagesCount += 1,
                this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }
            function i(c, m, p) {
                var g = "";
                if (c.e)
                    g = c.p;
                else if (m) {
                    var E = c.p;
                    E.indexOf("images/") !== -1 && (E = E.split("/")[1]),
                    g = m + E
                } else
                    g = p,
                    g += c.u ? c.u : "",
                    g += c.p;
                return g
            }
            function s(c) {
                var m = 0
                  , p = setInterval((function() {
                    var g = c.getBBox();
                    (g.width || m > 500) && (this._imageLoaded(),
                    clearInterval(p)),
                    m += 1
                }
                ).bind(this), 50)
            }
            function a(c) {
                var m = i(c, this.assetsPath, this.path)
                  , p = createNS("image");
                isSafari ? this.testImageLoaded(p) : p.addEventListener("load", this._imageLoaded, !1),
                p.addEventListener("error", (function() {
                    g.img = t,
                    this._imageLoaded()
                }
                ).bind(this), !1),
                p.setAttributeNS("http://www.w3.org/1999/xlink", "href", m),
                this._elementHelper.append ? this._elementHelper.append(p) : this._elementHelper.appendChild(p);
                var g = {
                    img: p,
                    assetData: c
                };
                return g
            }
            function n(c) {
                var m = i(c, this.assetsPath, this.path)
                  , p = createTag("img");
                p.crossOrigin = "anonymous",
                p.addEventListener("load", this._imageLoaded, !1),
                p.addEventListener("error", (function() {
                    g.img = t,
                    this._imageLoaded()
                }
                ).bind(this), !1),
                p.src = m;
                var g = {
                    img: p,
                    assetData: c
                };
                return g
            }
            function l(c) {
                var m = {
                    assetData: c
                }
                  , p = i(c, this.assetsPath, this.path);
                return dataManager.loadData(p, (function(g) {
                    m.img = g,
                    this._footageLoaded()
                }
                ).bind(this), (function() {
                    m.img = {},
                    this._footageLoaded()
                }
                ).bind(this)),
                m
            }
            function o(c, m) {
                this.imagesLoadedCb = m;
                var p, g = c.length;
                for (p = 0; p < g; p += 1)
                    c[p].layers || (!c[p].t || c[p].t === "seq" ? (this.totalImages += 1,
                    this.images.push(this._createImageData(c[p]))) : c[p].t === 3 && (this.totalFootages += 1,
                    this.images.push(this.createFootageData(c[p]))))
            }
            function f(c) {
                this.path = c || ""
            }
            function y(c) {
                this.assetsPath = c || ""
            }
            function P(c) {
                for (var m = 0, p = this.images.length; m < p; ) {
                    if (this.images[m].assetData === c)
                        return this.images[m].img;
                    m += 1
                }
                return null
            }
            function u() {
                this.imagesLoadedCb = null,
                this.images.length = 0
            }
            function b() {
                return this.totalImages === this.loadedAssets
            }
            function x() {
                return this.totalFootages === this.loadedFootagesCount
            }
            function d(c, m) {
                c === "svg" ? (this._elementHelper = m,
                this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
            }
            function C() {
                this._imageLoaded = e.bind(this),
                this._footageLoaded = r.bind(this),
                this.testImageLoaded = s.bind(this),
                this.createFootageData = l.bind(this),
                this.assetsPath = "",
                this.path = "",
                this.totalImages = 0,
                this.totalFootages = 0,
                this.loadedAssets = 0,
                this.loadedFootagesCount = 0,
                this.imagesLoadedCb = null,
                this.images = []
            }
            return C.prototype = {
                loadAssets: o,
                setAssetsPath: y,
                setPath: f,
                loadedImages: b,
                loadedFootages: x,
                destroy: u,
                getAsset: P,
                createImgData: n,
                createImageData: a,
                imageLoaded: e,
                footageLoaded: r,
                setCacheType: d
            },
            C
        }();
        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function(e, r) {
                if (this._cbs[e])
                    for (var i = this._cbs[e], s = 0; s < i.length; s += 1)
                        i[s](r)
            },
            addEventListener: function(e, r) {
                return this._cbs[e] || (this._cbs[e] = []),
                this._cbs[e].push(r),
                (function() {
                    this.removeEventListener(e, r)
                }
                ).bind(this)
            },
            removeEventListener: function(e, r) {
                if (!r)
                    this._cbs[e] = null;
                else if (this._cbs[e]) {
                    for (var i = 0, s = this._cbs[e].length; i < s; )
                        this._cbs[e][i] === r && (this._cbs[e].splice(i, 1),
                        i -= 1,
                        s -= 1),
                        i += 1;
                    this._cbs[e].length || (this._cbs[e] = null)
                }
            }
        };
        var markerParser = function() {
            function t(e) {
                for (var r = e.split(`\r
`), i = {}, s, a = 0, n = 0; n < r.length; n += 1)
                    s = r[n].split(":"),
                    s.length === 2 && (i[s[0]] = s[1].trim(),
                    a += 1);
                if (a === 0)
                    throw new Error;
                return i
            }
            return function(e) {
                for (var r = [], i = 0; i < e.length; i += 1) {
                    var s = e[i]
                      , a = {
                        time: s.tm,
                        duration: s.dr
                    };
                    try {
                        a.payload = JSON.parse(e[i].cm)
                    } catch {
                        try {
                            a.payload = t(e[i].cm)
                        } catch {
                            a.payload = {
                                name: e[i].cm
                            }
                        }
                    }
                    r.push(a)
                }
                return r
            }
        }()
          , ProjectInterface = function() {
            function t(e) {
                this.compositions.push(e)
            }
            return function() {
                function e(r) {
                    for (var i = 0, s = this.compositions.length; i < s; ) {
                        if (this.compositions[i].data && this.compositions[i].data.nm === r)
                            return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame),
                            this.compositions[i].compInterface;
                        i += 1
                    }
                    return null
                }
                return e.compositions = [],
                e.currentFrame = 0,
                e.registerComposition = t,
                e
            }
        }()
          , renderers = {}
          , registerRenderer = function(e, r) {
            renderers[e] = r
        };
        function getRenderer(t) {
            return renderers[t]
        }
        function getRegisteredRenderer() {
            if (renderers.canvas)
                return "canvas";
            for (var t in renderers)
                if (renderers[t])
                    return t;
            return ""
        }
        function _typeof$4(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$4 = function(r) {
                return typeof r
            }
            : _typeof$4 = function(r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }
            ,
            _typeof$4(t)
        }
        var AnimationItem = function() {
            this._cbs = [],
            this.name = "",
            this.path = "",
            this.isLoaded = !1,
            this.currentFrame = 0,
            this.currentRawFrame = 0,
            this.firstFrame = 0,
            this.totalFrames = 0,
            this.frameRate = 0,
            this.frameMult = 0,
            this.playSpeed = 1,
            this.playDirection = 1,
            this.playCount = 0,
            this.animationData = {},
            this.assets = [],
            this.isPaused = !0,
            this.autoplay = !1,
            this.loop = !0,
            this.renderer = null,
            this.animationID = createElementID(),
            this.assetsPath = "",
            this.timeCompleted = 0,
            this.segmentPos = 0,
            this.isSubframeEnabled = getSubframeEnabled(),
            this.segments = [],
            this._idle = !0,
            this._completedLoop = !1,
            this.projectInterface = ProjectInterface(),
            this.imagePreloader = new ImagePreloader,
            this.audioController = audioControllerFactory(),
            this.markers = [],
            this.configAnimation = this.configAnimation.bind(this),
            this.onSetupError = this.onSetupError.bind(this),
            this.onSegmentComplete = this.onSegmentComplete.bind(this),
            this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame",0,0,0),
            this.expressionsPlugin = getExpressionsPlugin()
        };
        extendPrototype([BaseEvent], AnimationItem),
        AnimationItem.prototype.setParams = function(t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            t.animType ? e = t.animType : t.renderer && (e = t.renderer);
            var r = getRenderer(e);
            this.renderer = new r(this,t.rendererSettings),
            this.imagePreloader.setCacheType(e, this.renderer.globalData.defs),
            this.renderer.setProjectInterface(this.projectInterface),
            this.animType = e,
            t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === !0 ? this.loop = !0 : t.loop === !1 ? this.loop = !1 : this.loop = parseInt(t.loop, 10),
            this.autoplay = "autoplay"in t ? t.autoplay : !0,
            this.name = t.name ? t.name : "",
            this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : !0,
            this.assetsPath = t.assetsPath,
            this.initialSegment = t.initialSegment,
            t.audioFactory && this.audioController.setAudioFactory(t.audioFactory),
            t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1),
            this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1),
            this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")),
            dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
        }
        ,
        AnimationItem.prototype.onSetupError = function() {
            this.trigger("data_failed")
        }
        ,
        AnimationItem.prototype.setupAnimation = function(t) {
            dataManager.completeAnimation(t, this.configAnimation)
        }
        ,
        AnimationItem.prototype.setData = function(t, e) {
            e && _typeof$4(e) !== "object" && (e = JSON.parse(e));
            var r = {
                wrapper: t,
                animationData: e
            }
              , i = t.attributes;
            r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "",
            r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
            var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
            s === "false" ? r.loop = !1 : s === "true" ? r.loop = !0 : s !== "" && (r.loop = parseInt(s, 10));
            var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : i.getNamedItem("bm-autoplay") ? i.getNamedItem("bm-autoplay").value : !0;
            r.autoplay = a !== "false",
            r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "";
            var n = i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "";
            n === "false" && (r.prerender = !1),
            r.path ? this.setParams(r) : this.trigger("destroy")
        }
        ,
        AnimationItem.prototype.includeLayers = function(t) {
            t.op > this.animationData.op && (this.animationData.op = t.op,
            this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e = this.animationData.layers, r, i = e.length, s = t.layers, a, n = s.length;
            for (a = 0; a < n; a += 1)
                for (r = 0; r < i; ) {
                    if (e[r].id === s[a].id) {
                        e[r] = s[a];
                        break
                    }
                    r += 1
                }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars),
            this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)),
            t.assets)
                for (i = t.assets.length,
                r = 0; r < i; r += 1)
                    this.animationData.assets.push(t.assets[r]);
            this.animationData.__complete = !1,
            dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }
        ,
        AnimationItem.prototype.onSegmentComplete = function(t) {
            this.animationData = t;
            var e = getExpressionsPlugin();
            e && e.initExpressions(this),
            this.loadNextSegment()
        }
        ,
        AnimationItem.prototype.loadNextSegment = function() {
            var t = this.animationData.segments;
            if (!t || t.length === 0 || !this.autoloadSegments) {
                this.trigger("data_ready"),
                this.timeCompleted = this.totalFrames;
                return
            }
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1,
            dataManager.loadData(r, this.includeLayers.bind(this), (function() {
                this.trigger("data_failed")
            }
            ).bind(this))
        }
        ,
        AnimationItem.prototype.loadSegments = function() {
            var t = this.animationData.segments;
            t || (this.timeCompleted = this.totalFrames),
            this.loadNextSegment()
        }
        ,
        AnimationItem.prototype.imagesLoaded = function() {
            this.trigger("loaded_images"),
            this.checkLoaded()
        }
        ,
        AnimationItem.prototype.preloadImages = function() {
            this.imagePreloader.setAssetsPath(this.assetsPath),
            this.imagePreloader.setPath(this.path),
            this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }
        ,
        AnimationItem.prototype.configAnimation = function(t) {
            if (this.renderer)
                try {
                    this.animationData = t,
                    this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]),
                    this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip),
                    this.firstFrame = Math.round(this.animationData.ip)),
                    this.renderer.configAnimation(t),
                    t.assets || (t.assets = []),
                    this.assets = this.animationData.assets,
                    this.frameRate = this.animationData.fr,
                    this.frameMult = this.animationData.fr / 1e3,
                    this.renderer.searchExtraCompositions(t.assets),
                    this.markers = markerParser(t.markers || []),
                    this.trigger("config_ready"),
                    this.preloadImages(),
                    this.loadSegments(),
                    this.updaFrameModifier(),
                    this.waitForFontsLoaded(),
                    this.isPaused && this.audioController.pause()
                } catch (e) {
                    this.triggerConfigError(e)
                }
        }
        ,
        AnimationItem.prototype.waitForFontsLoaded = function() {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }
        ,
        AnimationItem.prototype.checkLoaded = function() {
            if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
                this.isLoaded = !0;
                var t = getExpressionsPlugin();
                t && t.initExpressions(this),
                this.renderer.initItems(),
                setTimeout((function() {
                    this.trigger("DOMLoaded")
                }
                ).bind(this), 0),
                this.gotoFrame(),
                this.autoplay && this.play()
            }
        }
        ,
        AnimationItem.prototype.resize = function(t, e) {
            var r = typeof t == "number" ? t : void 0
              , i = typeof e == "number" ? e : void 0;
            this.renderer.updateContainerSize(r, i)
        }
        ,
        AnimationItem.prototype.setSubframe = function(t) {
            this.isSubframeEnabled = !!t
        }
        ,
        AnimationItem.prototype.gotoFrame = function() {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame,
            this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted),
            this.trigger("enterFrame"),
            this.renderFrame(),
            this.trigger("drawnFrame")
        }
        ,
        AnimationItem.prototype.renderFrame = function() {
            if (!(this.isLoaded === !1 || !this.renderer))
                try {
                    this.expressionsPlugin && this.expressionsPlugin.resetFrame(),
                    this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                } catch (t) {
                    this.triggerRenderFrameError(t)
                }
        }
        ,
        AnimationItem.prototype.play = function(t) {
            t && this.name !== t || this.isPaused === !0 && (this.isPaused = !1,
            this.trigger("_play"),
            this.audioController.resume(),
            this._idle && (this._idle = !1,
            this.trigger("_active")))
        }
        ,
        AnimationItem.prototype.pause = function(t) {
            t && this.name !== t || this.isPaused === !1 && (this.isPaused = !0,
            this.trigger("_pause"),
            this._idle = !0,
            this.trigger("_idle"),
            this.audioController.pause())
        }
        ,
        AnimationItem.prototype.togglePause = function(t) {
            t && this.name !== t || (this.isPaused === !0 ? this.play() : this.pause())
        }
        ,
        AnimationItem.prototype.stop = function(t) {
            t && this.name !== t || (this.pause(),
            this.playCount = 0,
            this._completedLoop = !1,
            this.setCurrentRawFrameValue(0))
        }
        ,
        AnimationItem.prototype.getMarkerData = function(t) {
            for (var e, r = 0; r < this.markers.length; r += 1)
                if (e = this.markers[r],
                e.payload && e.payload.name === t)
                    return e;
            return null
        }
        ,
        AnimationItem.prototype.goToAndStop = function(t, e, r) {
            if (!(r && this.name !== r)) {
                var i = Number(t);
                if (isNaN(i)) {
                    var s = this.getMarkerData(t);
                    s && this.goToAndStop(s.time, !0)
                } else
                    e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                this.pause()
            }
        }
        ,
        AnimationItem.prototype.goToAndPlay = function(t, e, r) {
            if (!(r && this.name !== r)) {
                var i = Number(t);
                if (isNaN(i)) {
                    var s = this.getMarkerData(t);
                    s && (s.duration ? this.playSegments([s.time, s.time + s.duration], !0) : this.goToAndStop(s.time, !0))
                } else
                    this.goToAndStop(i, e, r);
                this.play()
            }
        }
        ,
        AnimationItem.prototype.advanceTime = function(t) {
            if (!(this.isPaused === !0 || this.isLoaded === !1)) {
                var e = this.currentRawFrame + t * this.frameModifier
                  , r = !1;
                e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0,
                e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1,
                this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames),
                this._completedLoop = !0,
                this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames),
                this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (r = !0,
                e = 0)) : this.setCurrentRawFrameValue(e),
                r && (this.setCurrentRawFrameValue(e),
                this.pause(),
                this.trigger("complete"))
            }
        }
        ,
        AnimationItem.prototype.adjustSegment = function(t, e) {
            this.playCount = 0,
            t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)),
            this.totalFrames = t[0] - t[1],
            this.timeCompleted = this.totalFrames,
            this.firstFrame = t[1],
            this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)),
            this.totalFrames = t[1] - t[0],
            this.timeCompleted = this.totalFrames,
            this.firstFrame = t[0],
            this.setCurrentRawFrameValue(.001 + e)),
            this.trigger("segmentStart")
        }
        ,
        AnimationItem.prototype.setSegment = function(t, e) {
            var r = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)),
            this.firstFrame = t,
            this.totalFrames = e - t,
            this.timeCompleted = this.totalFrames,
            r !== -1 && this.goToAndStop(r, !0)
        }
        ,
        AnimationItem.prototype.playSegments = function(t, e) {
            if (e && (this.segments.length = 0),
            _typeof$4(t[0]) === "object") {
                var r, i = t.length;
                for (r = 0; r < i; r += 1)
                    this.segments.push(t[r])
            } else
                this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0),
            this.isPaused && this.play()
        }
        ,
        AnimationItem.prototype.resetSegments = function(t) {
            this.segments.length = 0,
            this.segments.push([this.animationData.ip, this.animationData.op]),
            t && this.checkSegments(0)
        }
        ,
        AnimationItem.prototype.checkSegments = function(t) {
            return this.segments.length ? (this.adjustSegment(this.segments.shift(), t),
            !0) : !1
        }
        ,
        AnimationItem.prototype.destroy = function(t) {
            t && this.name !== t || !this.renderer || (this.renderer.destroy(),
            this.imagePreloader.destroy(),
            this.trigger("destroy"),
            this._cbs = null,
            this.onEnterFrame = null,
            this.onLoopComplete = null,
            this.onComplete = null,
            this.onSegmentStart = null,
            this.onDestroy = null,
            this.renderer = null,
            this.expressionsPlugin = null,
            this.imagePreloader = null,
            this.projectInterface = null)
        }
        ,
        AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
            this.currentRawFrame = t,
            this.gotoFrame()
        }
        ,
        AnimationItem.prototype.setSpeed = function(t) {
            this.playSpeed = t,
            this.updaFrameModifier()
        }
        ,
        AnimationItem.prototype.setDirection = function(t) {
            this.playDirection = t < 0 ? -1 : 1,
            this.updaFrameModifier()
        }
        ,
        AnimationItem.prototype.setLoop = function(t) {
            this.loop = t
        }
        ,
        AnimationItem.prototype.setVolume = function(t, e) {
            e && this.name !== e || this.audioController.setVolume(t)
        }
        ,
        AnimationItem.prototype.getVolume = function() {
            return this.audioController.getVolume()
        }
        ,
        AnimationItem.prototype.mute = function(t) {
            t && this.name !== t || this.audioController.mute()
        }
        ,
        AnimationItem.prototype.unmute = function(t) {
            t && this.name !== t || this.audioController.unmute()
        }
        ,
        AnimationItem.prototype.updaFrameModifier = function() {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection,
            this.audioController.setRate(this.playSpeed * this.playDirection)
        }
        ,
        AnimationItem.prototype.getPath = function() {
            return this.path
        }
        ,
        AnimationItem.prototype.getAssetsPath = function(t) {
            var e = "";
            if (t.e)
                e = t.p;
            else if (this.assetsPath) {
                var r = t.p;
                r.indexOf("images/") !== -1 && (r = r.split("/")[1]),
                e = this.assetsPath + r
            } else
                e = this.path,
                e += t.u ? t.u : "",
                e += t.p;
            return e
        }
        ,
        AnimationItem.prototype.getAssetData = function(t) {
            for (var e = 0, r = this.assets.length; e < r; ) {
                if (t === this.assets[e].id)
                    return this.assets[e];
                e += 1
            }
            return null
        }
        ,
        AnimationItem.prototype.hide = function() {
            this.renderer.hide()
        }
        ,
        AnimationItem.prototype.show = function() {
            this.renderer.show()
        }
        ,
        AnimationItem.prototype.getDuration = function(t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate
        }
        ,
        AnimationItem.prototype.updateDocumentData = function(t, e, r) {
            try {
                var i = this.renderer.getElementByPath(t);
                i.updateDocumentData(e, r)
            } catch {}
        }
        ,
        AnimationItem.prototype.trigger = function(t) {
            if (this._cbs && this._cbs[t])
                switch (t) {
                case "enterFrame":
                    this.triggerEvent(t, new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameModifier));
                    break;
                case "drawnFrame":
                    this.drawnFrameEvent.currentTime = this.currentFrame,
                    this.drawnFrameEvent.totalTime = this.totalFrames,
                    this.drawnFrameEvent.direction = this.frameModifier,
                    this.triggerEvent(t, this.drawnFrameEvent);
                    break;
                case "loopComplete":
                    this.triggerEvent(t, new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(t, new BMCompleteEvent(t,this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(t, new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t,this));
                    break;
                default:
                    this.triggerEvent(t)
                }
            t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),
            t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),
            t === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t,this.frameMult)),
            t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),
            t === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t,this))
        }
        ,
        AnimationItem.prototype.triggerRenderFrameError = function(t) {
            var e = new BMRenderFrameErrorEvent(t,this.currentFrame);
            this.triggerEvent("error", e),
            this.onError && this.onError.call(this, e)
        }
        ,
        AnimationItem.prototype.triggerConfigError = function(t) {
            var e = new BMConfigErrorEvent(t,this.currentFrame);
            this.triggerEvent("error", e),
            this.onError && this.onError.call(this, e)
        }
        ;
        var animationManager = function() {
            var t = {}
              , e = []
              , r = 0
              , i = 0
              , s = 0
              , a = !0
              , n = !1;
            function l(A) {
                for (var F = 0, k = A.target; F < i; )
                    e[F].animation === k && (e.splice(F, 1),
                    F -= 1,
                    i -= 1,
                    k.isPaused || P()),
                    F += 1
            }
            function o(A, F) {
                if (!A)
                    return null;
                for (var k = 0; k < i; ) {
                    if (e[k].elem === A && e[k].elem !== null)
                        return e[k].animation;
                    k += 1
                }
                var S = new AnimationItem;
                return u(S, A),
                S.setData(A, F),
                S
            }
            function f() {
                var A, F = e.length, k = [];
                for (A = 0; A < F; A += 1)
                    k.push(e[A].animation);
                return k
            }
            function y() {
                s += 1,
                z()
            }
            function P() {
                s -= 1
            }
            function u(A, F) {
                A.addEventListener("destroy", l),
                A.addEventListener("_active", y),
                A.addEventListener("_idle", P),
                e.push({
                    elem: F,
                    animation: A
                }),
                i += 1
            }
            function b(A) {
                var F = new AnimationItem;
                return u(F, null),
                F.setParams(A),
                F
            }
            function x(A, F) {
                var k;
                for (k = 0; k < i; k += 1)
                    e[k].animation.setSpeed(A, F)
            }
            function d(A, F) {
                var k;
                for (k = 0; k < i; k += 1)
                    e[k].animation.setDirection(A, F)
            }
            function C(A) {
                var F;
                for (F = 0; F < i; F += 1)
                    e[F].animation.play(A)
            }
            function c(A) {
                var F = A - r, k;
                for (k = 0; k < i; k += 1)
                    e[k].animation.advanceTime(F);
                r = A,
                s && !n ? window.requestAnimationFrame(c) : a = !0
            }
            function m(A) {
                r = A,
                window.requestAnimationFrame(c)
            }
            function p(A) {
                var F;
                for (F = 0; F < i; F += 1)
                    e[F].animation.pause(A)
            }
            function g(A, F, k) {
                var S;
                for (S = 0; S < i; S += 1)
                    e[S].animation.goToAndStop(A, F, k)
            }
            function E(A) {
                var F;
                for (F = 0; F < i; F += 1)
                    e[F].animation.stop(A)
            }
            function _(A) {
                var F;
                for (F = 0; F < i; F += 1)
                    e[F].animation.togglePause(A)
            }
            function T(A) {
                var F;
                for (F = i - 1; F >= 0; F -= 1)
                    e[F].animation.destroy(A)
            }
            function M(A, F, k) {
                var S = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), I, V = S.length;
                for (I = 0; I < V; I += 1)
                    k && S[I].setAttribute("data-bm-type", k),
                    o(S[I], A);
                if (F && V === 0) {
                    k || (k = "svg");
                    var G = document.getElementsByTagName("body")[0];
                    G.innerText = "";
                    var j = createTag("div");
                    j.style.width = "100%",
                    j.style.height = "100%",
                    j.setAttribute("data-bm-type", k),
                    G.appendChild(j),
                    o(j, A)
                }
            }
            function B() {
                var A;
                for (A = 0; A < i; A += 1)
                    e[A].animation.resize()
            }
            function z() {
                !n && s && a && (window.requestAnimationFrame(m),
                a = !1)
            }
            function R() {
                n = !0
            }
            function L() {
                n = !1,
                z()
            }
            function O(A, F) {
                var k;
                for (k = 0; k < i; k += 1)
                    e[k].animation.setVolume(A, F)
            }
            function N(A) {
                var F;
                for (F = 0; F < i; F += 1)
                    e[F].animation.mute(A)
            }
            function D(A) {
                var F;
                for (F = 0; F < i; F += 1)
                    e[F].animation.unmute(A)
            }
            return t.registerAnimation = o,
            t.loadAnimation = b,
            t.setSpeed = x,
            t.setDirection = d,
            t.play = C,
            t.pause = p,
            t.stop = E,
            t.togglePause = _,
            t.searchAnimations = M,
            t.resize = B,
            t.goToAndStop = g,
            t.destroy = T,
            t.freeze = R,
            t.unfreeze = L,
            t.setVolume = O,
            t.mute = N,
            t.unmute = D,
            t.getRegisteredAnimations = f,
            t
        }()
          , BezierFactory = function() {
            var t = {};
            t.getBezierEasing = r;
            var e = {};
            function r(m, p, g, E, _) {
                var T = _ || ("bez_" + m + "_" + p + "_" + g + "_" + E).replace(/\./g, "p");
                if (e[T])
                    return e[T];
                var M = new c([m, p, g, E]);
                return e[T] = M,
                M
            }
            var i = 4
              , s = .001
              , a = 1e-7
              , n = 10
              , l = 11
              , o = 1 / (l - 1)
              , f = typeof Float32Array == "function";
            function y(m, p) {
                return 1 - 3 * p + 3 * m
            }
            function P(m, p) {
                return 3 * p - 6 * m
            }
            function u(m) {
                return 3 * m
            }
            function b(m, p, g) {
                return ((y(p, g) * m + P(p, g)) * m + u(p)) * m
            }
            function x(m, p, g) {
                return 3 * y(p, g) * m * m + 2 * P(p, g) * m + u(p)
            }
            function d(m, p, g, E, _) {
                var T, M, B = 0;
                do
                    M = p + (g - p) / 2,
                    T = b(M, E, _) - m,
                    T > 0 ? g = M : p = M;
                while (Math.abs(T) > a && ++B < n);
                return M
            }
            function C(m, p, g, E) {
                for (var _ = 0; _ < i; ++_) {
                    var T = x(p, g, E);
                    if (T === 0)
                        return p;
                    var M = b(p, g, E) - m;
                    p -= M / T
                }
                return p
            }
            function c(m) {
                this._p = m,
                this._mSampleValues = f ? new Float32Array(l) : new Array(l),
                this._precomputed = !1,
                this.get = this.get.bind(this)
            }
            return c.prototype = {
                get: function(p) {
                    var g = this._p[0]
                      , E = this._p[1]
                      , _ = this._p[2]
                      , T = this._p[3];
                    return this._precomputed || this._precompute(),
                    g === E && _ === T ? p : p === 0 ? 0 : p === 1 ? 1 : b(this._getTForX(p), E, T)
                },
                _precompute: function() {
                    var p = this._p[0]
                      , g = this._p[1]
                      , E = this._p[2]
                      , _ = this._p[3];
                    this._precomputed = !0,
                    (p !== g || E !== _) && this._calcSampleValues()
                },
                _calcSampleValues: function() {
                    for (var p = this._p[0], g = this._p[2], E = 0; E < l; ++E)
                        this._mSampleValues[E] = b(E * o, p, g)
                },
                _getTForX: function(p) {
                    for (var g = this._p[0], E = this._p[2], _ = this._mSampleValues, T = 0, M = 1, B = l - 1; M !== B && _[M] <= p; ++M)
                        T += o;
                    --M;
                    var z = (p - _[M]) / (_[M + 1] - _[M])
                      , R = T + z * o
                      , L = x(R, g, E);
                    return L >= s ? C(p, R, g, E) : L === 0 ? R : d(p, T, T + o, g, E)
                }
            },
            t
        }()
          , pooling = function() {
            function t(e) {
                return e.concat(createSizedArray(e.length))
            }
            return {
                double: t
            }
        }()
          , poolFactory = function() {
            return function(t, e, r) {
                var i = 0
                  , s = t
                  , a = createSizedArray(s)
                  , n = {
                    newElement: l,
                    release: o
                };
                function l() {
                    var f;
                    return i ? (i -= 1,
                    f = a[i]) : f = e(),
                    f
                }
                function o(f) {
                    i === s && (a = pooling.double(a),
                    s *= 2),
                    r && r(f),
                    a[i] = f,
                    i += 1
                }
                return n
            }
        }()
          , bezierLengthPool = function() {
            function t() {
                return {
                    addedLength: 0,
                    percents: createTypedArray("float32", getDefaultCurveSegments()),
                    lengths: createTypedArray("float32", getDefaultCurveSegments())
                }
            }
            return poolFactory(8, t)
        }()
          , segmentsLengthPool = function() {
            function t() {
                return {
                    lengths: [],
                    totalLength: 0
                }
            }
            function e(r) {
                var i, s = r.lengths.length;
                for (i = 0; i < s; i += 1)
                    bezierLengthPool.release(r.lengths[i]);
                r.lengths.length = 0
            }
            return poolFactory(8, t, e)
        }();
        function bezFunction() {
            var t = Math;
            function e(u, b, x, d, C, c) {
                var m = u * d + b * C + x * c - C * d - c * u - x * b;
                return m > -.001 && m < .001
            }
            function r(u, b, x, d, C, c, m, p, g) {
                if (x === 0 && c === 0 && g === 0)
                    return e(u, b, d, C, m, p);
                var E = t.sqrt(t.pow(d - u, 2) + t.pow(C - b, 2) + t.pow(c - x, 2)), _ = t.sqrt(t.pow(m - u, 2) + t.pow(p - b, 2) + t.pow(g - x, 2)), T = t.sqrt(t.pow(m - d, 2) + t.pow(p - C, 2) + t.pow(g - c, 2)), M;
                return E > _ ? E > T ? M = E - _ - T : M = T - _ - E : T > _ ? M = T - _ - E : M = _ - E - T,
                M > -1e-4 && M < 1e-4
            }
            var i = function() {
                return function(u, b, x, d) {
                    var C = getDefaultCurveSegments(), c, m, p, g, E, _ = 0, T, M = [], B = [], z = bezierLengthPool.newElement();
                    for (p = x.length,
                    c = 0; c < C; c += 1) {
                        for (E = c / (C - 1),
                        T = 0,
                        m = 0; m < p; m += 1)
                            g = bmPow(1 - E, 3) * u[m] + 3 * bmPow(1 - E, 2) * E * x[m] + 3 * (1 - E) * bmPow(E, 2) * d[m] + bmPow(E, 3) * b[m],
                            M[m] = g,
                            B[m] !== null && (T += bmPow(M[m] - B[m], 2)),
                            B[m] = M[m];
                        T && (T = bmSqrt(T),
                        _ += T),
                        z.percents[c] = E,
                        z.lengths[c] = _
                    }
                    return z.addedLength = _,
                    z
                }
            }();
            function s(u) {
                var b = segmentsLengthPool.newElement(), x = u.c, d = u.v, C = u.o, c = u.i, m, p = u._length, g = b.lengths, E = 0;
                for (m = 0; m < p - 1; m += 1)
                    g[m] = i(d[m], d[m + 1], C[m], c[m + 1]),
                    E += g[m].addedLength;
                return x && p && (g[m] = i(d[m], d[0], C[m], c[0]),
                E += g[m].addedLength),
                b.totalLength = E,
                b
            }
            function a(u) {
                this.segmentLength = 0,
                this.points = new Array(u)
            }
            function n(u, b) {
                this.partialLength = u,
                this.point = b
            }
            var l = function() {
                var u = {};
                return function(b, x, d, C) {
                    var c = (b[0] + "_" + b[1] + "_" + x[0] + "_" + x[1] + "_" + d[0] + "_" + d[1] + "_" + C[0] + "_" + C[1]).replace(/\./g, "p");
                    if (!u[c]) {
                        var m = getDefaultCurveSegments(), p, g, E, _, T, M = 0, B, z, R = null;
                        b.length === 2 && (b[0] !== x[0] || b[1] !== x[1]) && e(b[0], b[1], x[0], x[1], b[0] + d[0], b[1] + d[1]) && e(b[0], b[1], x[0], x[1], x[0] + C[0], x[1] + C[1]) && (m = 2);
                        var L = new a(m);
                        for (E = d.length,
                        p = 0; p < m; p += 1) {
                            for (z = createSizedArray(E),
                            T = p / (m - 1),
                            B = 0,
                            g = 0; g < E; g += 1)
                                _ = bmPow(1 - T, 3) * b[g] + 3 * bmPow(1 - T, 2) * T * (b[g] + d[g]) + 3 * (1 - T) * bmPow(T, 2) * (x[g] + C[g]) + bmPow(T, 3) * x[g],
                                z[g] = _,
                                R !== null && (B += bmPow(z[g] - R[g], 2));
                            B = bmSqrt(B),
                            M += B,
                            L.points[p] = new n(B,z),
                            R = z
                        }
                        L.segmentLength = M,
                        u[c] = L
                    }
                    return u[c]
                }
            }();
            function o(u, b) {
                var x = b.percents
                  , d = b.lengths
                  , C = x.length
                  , c = bmFloor((C - 1) * u)
                  , m = u * b.addedLength
                  , p = 0;
                if (c === C - 1 || c === 0 || m === d[c])
                    return x[c];
                for (var g = d[c] > m ? -1 : 1, E = !0; E; )
                    if (d[c] <= m && d[c + 1] > m ? (p = (m - d[c]) / (d[c + 1] - d[c]),
                    E = !1) : c += g,
                    c < 0 || c >= C - 1) {
                        if (c === C - 1)
                            return x[c];
                        E = !1
                    }
                return x[c] + (x[c + 1] - x[c]) * p
            }
            function f(u, b, x, d, C, c) {
                var m = o(C, c)
                  , p = 1 - m
                  , g = t.round((p * p * p * u[0] + (m * p * p + p * m * p + p * p * m) * x[0] + (m * m * p + p * m * m + m * p * m) * d[0] + m * m * m * b[0]) * 1e3) / 1e3
                  , E = t.round((p * p * p * u[1] + (m * p * p + p * m * p + p * p * m) * x[1] + (m * m * p + p * m * m + m * p * m) * d[1] + m * m * m * b[1]) * 1e3) / 1e3;
                return [g, E]
            }
            var y = createTypedArray("float32", 8);
            function P(u, b, x, d, C, c, m) {
                C < 0 ? C = 0 : C > 1 && (C = 1);
                var p = o(C, m);
                c = c > 1 ? 1 : c;
                var g = o(c, m), E, _ = u.length, T = 1 - p, M = 1 - g, B = T * T * T, z = p * T * T * 3, R = p * p * T * 3, L = p * p * p, O = T * T * M, N = p * T * M + T * p * M + T * T * g, D = p * p * M + T * p * g + p * T * g, A = p * p * g, F = T * M * M, k = p * M * M + T * g * M + T * M * g, S = p * g * M + T * g * g + p * M * g, I = p * g * g, V = M * M * M, G = g * M * M + M * g * M + M * M * g, j = g * g * M + M * g * g + g * M * g, $ = g * g * g;
                for (E = 0; E < _; E += 1)
                    y[E * 4] = t.round((B * u[E] + z * x[E] + R * d[E] + L * b[E]) * 1e3) / 1e3,
                    y[E * 4 + 1] = t.round((O * u[E] + N * x[E] + D * d[E] + A * b[E]) * 1e3) / 1e3,
                    y[E * 4 + 2] = t.round((F * u[E] + k * x[E] + S * d[E] + I * b[E]) * 1e3) / 1e3,
                    y[E * 4 + 3] = t.round((V * u[E] + G * x[E] + j * d[E] + $ * b[E]) * 1e3) / 1e3;
                return y
            }
            return {
                getSegmentsLength: s,
                getNewSegment: P,
                getPointInSegment: f,
                buildBezierData: l,
                pointOnLine2D: e,
                pointOnLine3D: r
            }
        }
        var bez = bezFunction()
          , initFrame = initialDefaultFrame
          , mathAbs = Math.abs;
        function interpolateValue(t, e) {
            var r = this.offsetTime, i;
            this.propType === "multidimensional" && (i = createTypedArray("float32", this.pv.length));
            for (var s = e.lastIndex, a = s, n = this.keyframes.length - 1, l = !0, o, f, y; l; ) {
                if (o = this.keyframes[a],
                f = this.keyframes[a + 1],
                a === n - 1 && t >= f.t - r) {
                    o.h && (o = f),
                    s = 0;
                    break
                }
                if (f.t - r > t) {
                    s = a;
                    break
                }
                a < n - 1 ? a += 1 : (s = 0,
                l = !1)
            }
            y = this.keyframesMetadata[a] || {};
            var P, u, b, x, d, C, c = f.t - r, m = o.t - r, p;
            if (o.to) {
                y.bezierData || (y.bezierData = bez.buildBezierData(o.s, f.s || o.e, o.to, o.ti));
                var g = y.bezierData;
                if (t >= c || t < m) {
                    var E = t >= c ? g.points.length - 1 : 0;
                    for (u = g.points[E].point.length,
                    P = 0; P < u; P += 1)
                        i[P] = g.points[E].point[P]
                } else {
                    y.__fnct ? C = y.__fnct : (C = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get,
                    y.__fnct = C),
                    b = C((t - m) / (c - m));
                    var _ = g.segmentLength * b, T, M = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastAddedLength : 0;
                    for (d = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastPoint : 0,
                    l = !0,
                    x = g.points.length; l; ) {
                        if (M += g.points[d].partialLength,
                        _ === 0 || b === 0 || d === g.points.length - 1) {
                            for (u = g.points[d].point.length,
                            P = 0; P < u; P += 1)
                                i[P] = g.points[d].point[P];
                            break
                        } else if (_ >= M && _ < M + g.points[d + 1].partialLength) {
                            for (T = (_ - M) / g.points[d + 1].partialLength,
                            u = g.points[d].point.length,
                            P = 0; P < u; P += 1)
                                i[P] = g.points[d].point[P] + (g.points[d + 1].point[P] - g.points[d].point[P]) * T;
                            break
                        }
                        d < x - 1 ? d += 1 : l = !1
                    }
                    e._lastPoint = d,
                    e._lastAddedLength = M - g.points[d].partialLength,
                    e._lastKeyframeIndex = a
                }
            } else {
                var B, z, R, L, O;
                if (n = o.s.length,
                p = f.s || o.e,
                this.sh && o.h !== 1)
                    if (t >= c)
                        i[0] = p[0],
                        i[1] = p[1],
                        i[2] = p[2];
                    else if (t <= m)
                        i[0] = o.s[0],
                        i[1] = o.s[1],
                        i[2] = o.s[2];
                    else {
                        var N = createQuaternion(o.s)
                          , D = createQuaternion(p)
                          , A = (t - m) / (c - m);
                        quaternionToEuler(i, slerp(N, D, A))
                    }
                else
                    for (a = 0; a < n; a += 1)
                        o.h !== 1 && (t >= c ? b = 1 : t < m ? b = 0 : (o.o.x.constructor === Array ? (y.__fnct || (y.__fnct = []),
                        y.__fnct[a] ? C = y.__fnct[a] : (B = o.o.x[a] === void 0 ? o.o.x[0] : o.o.x[a],
                        z = o.o.y[a] === void 0 ? o.o.y[0] : o.o.y[a],
                        R = o.i.x[a] === void 0 ? o.i.x[0] : o.i.x[a],
                        L = o.i.y[a] === void 0 ? o.i.y[0] : o.i.y[a],
                        C = BezierFactory.getBezierEasing(B, z, R, L).get,
                        y.__fnct[a] = C)) : y.__fnct ? C = y.__fnct : (B = o.o.x,
                        z = o.o.y,
                        R = o.i.x,
                        L = o.i.y,
                        C = BezierFactory.getBezierEasing(B, z, R, L).get,
                        o.keyframeMetadata = C),
                        b = C((t - m) / (c - m)))),
                        p = f.s || o.e,
                        O = o.h === 1 ? o.s[a] : o.s[a] + (p[a] - o.s[a]) * b,
                        this.propType === "multidimensional" ? i[a] = O : i = O
            }
            return e.lastIndex = s,
            i
        }
        function slerp(t, e, r) {
            var i = [], s = t[0], a = t[1], n = t[2], l = t[3], o = e[0], f = e[1], y = e[2], P = e[3], u, b, x, d, C;
            return b = s * o + a * f + n * y + l * P,
            b < 0 && (b = -b,
            o = -o,
            f = -f,
            y = -y,
            P = -P),
            1 - b > 1e-6 ? (u = Math.acos(b),
            x = Math.sin(u),
            d = Math.sin((1 - r) * u) / x,
            C = Math.sin(r * u) / x) : (d = 1 - r,
            C = r),
            i[0] = d * s + C * o,
            i[1] = d * a + C * f,
            i[2] = d * n + C * y,
            i[3] = d * l + C * P,
            i
        }
        function quaternionToEuler(t, e) {
            var r = e[0]
              , i = e[1]
              , s = e[2]
              , a = e[3]
              , n = Math.atan2(2 * i * a - 2 * r * s, 1 - 2 * i * i - 2 * s * s)
              , l = Math.asin(2 * r * i + 2 * s * a)
              , o = Math.atan2(2 * r * a - 2 * i * s, 1 - 2 * r * r - 2 * s * s);
            t[0] = n / degToRads,
            t[1] = l / degToRads,
            t[2] = o / degToRads
        }
        function createQuaternion(t) {
            var e = t[0] * degToRads
              , r = t[1] * degToRads
              , i = t[2] * degToRads
              , s = Math.cos(e / 2)
              , a = Math.cos(r / 2)
              , n = Math.cos(i / 2)
              , l = Math.sin(e / 2)
              , o = Math.sin(r / 2)
              , f = Math.sin(i / 2)
              , y = s * a * n - l * o * f
              , P = l * o * n + s * a * f
              , u = l * a * n + s * o * f
              , b = s * o * n - l * a * f;
            return [P, u, b, y]
        }
        function getValueAtCurrentTime() {
            var t = this.comp.renderedFrame - this.offsetTime
              , e = this.keyframes[0].t - this.offsetTime
              , r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && t >= r || this._caching.lastFrame < e && t < e))) {
                this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1,
                this._caching.lastIndex = 0);
                var i = this.interpolateValue(t, this._caching);
                this.pv = i
            }
            return this._caching.lastFrame = t,
            this.pv
        }
        function setVValue(t) {
            var e;
            if (this.propType === "unidimensional")
                e = t * this.mult,
                mathAbs(this.v - e) > 1e-5 && (this.v = e,
                this._mdf = !0);
            else
                for (var r = 0, i = this.v.length; r < i; )
                    e = t[r] * this.mult,
                    mathAbs(this.v[r] - e) > 1e-5 && (this.v[r] = e,
                    this._mdf = !0),
                    r += 1
        }
        function processEffectsSequence() {
            if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
                if (this.lock) {
                    this.setVValue(this.pv);
                    return
                }
                this.lock = !0,
                this._mdf = this._isFirstFrame;
                var t, e = this.effectsSequence.length, r = this.kf ? this.pv : this.data.k;
                for (t = 0; t < e; t += 1)
                    r = this.effectsSequence[t](r);
                this.setVValue(r),
                this._isFirstFrame = !1,
                this.lock = !1,
                this.frameId = this.elem.globalData.frameId
            }
        }
        function addEffect(t) {
            this.effectsSequence.push(t),
            this.container.addDynamicProperty(this)
        }
        function ValueProperty(t, e, r, i) {
            this.propType = "unidimensional",
            this.mult = r || 1,
            this.data = e,
            this.v = r ? e.k * r : e.k,
            this.pv = e.k,
            this._mdf = !1,
            this.elem = t,
            this.container = i,
            this.comp = t.comp,
            this.k = !1,
            this.kf = !1,
            this.vel = 0,
            this.effectsSequence = [],
            this._isFirstFrame = !0,
            this.getValue = processEffectsSequence,
            this.setVValue = setVValue,
            this.addEffect = addEffect
        }
        function MultiDimensionalProperty(t, e, r, i) {
            this.propType = "multidimensional",
            this.mult = r || 1,
            this.data = e,
            this._mdf = !1,
            this.elem = t,
            this.container = i,
            this.comp = t.comp,
            this.k = !1,
            this.kf = !1,
            this.frameId = -1;
            var s, a = e.k.length;
            for (this.v = createTypedArray("float32", a),
            this.pv = createTypedArray("float32", a),
            this.vel = createTypedArray("float32", a),
            s = 0; s < a; s += 1)
                this.v[s] = e.k[s] * this.mult,
                this.pv[s] = e.k[s];
            this._isFirstFrame = !0,
            this.effectsSequence = [],
            this.getValue = processEffectsSequence,
            this.setVValue = setVValue,
            this.addEffect = addEffect
        }
        function KeyframedValueProperty(t, e, r, i) {
            this.propType = "unidimensional",
            this.keyframes = e.k,
            this.keyframesMetadata = [],
            this.offsetTime = t.data.st,
            this.frameId = -1,
            this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1
            },
            this.k = !0,
            this.kf = !0,
            this.data = e,
            this.mult = r || 1,
            this.elem = t,
            this.container = i,
            this.comp = t.comp,
            this.v = initFrame,
            this.pv = initFrame,
            this._isFirstFrame = !0,
            this.getValue = processEffectsSequence,
            this.setVValue = setVValue,
            this.interpolateValue = interpolateValue,
            this.effectsSequence = [getValueAtCurrentTime.bind(this)],
            this.addEffect = addEffect
        }
        function KeyframedMultidimensionalProperty(t, e, r, i) {
            this.propType = "multidimensional";
            var s, a = e.k.length, n, l, o, f;
            for (s = 0; s < a - 1; s += 1)
                e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (n = e.k[s].s,
                l = e.k[s + 1].s,
                o = e.k[s].to,
                f = e.k[s].ti,
                (n.length === 2 && !(n[0] === l[0] && n[1] === l[1]) && bez.pointOnLine2D(n[0], n[1], l[0], l[1], n[0] + o[0], n[1] + o[1]) && bez.pointOnLine2D(n[0], n[1], l[0], l[1], l[0] + f[0], l[1] + f[1]) || n.length === 3 && !(n[0] === l[0] && n[1] === l[1] && n[2] === l[2]) && bez.pointOnLine3D(n[0], n[1], n[2], l[0], l[1], l[2], n[0] + o[0], n[1] + o[1], n[2] + o[2]) && bez.pointOnLine3D(n[0], n[1], n[2], l[0], l[1], l[2], l[0] + f[0], l[1] + f[1], l[2] + f[2])) && (e.k[s].to = null,
                e.k[s].ti = null),
                n[0] === l[0] && n[1] === l[1] && o[0] === 0 && o[1] === 0 && f[0] === 0 && f[1] === 0 && (n.length === 2 || n[2] === l[2] && o[2] === 0 && f[2] === 0) && (e.k[s].to = null,
                e.k[s].ti = null));
            this.effectsSequence = [getValueAtCurrentTime.bind(this)],
            this.data = e,
            this.keyframes = e.k,
            this.keyframesMetadata = [],
            this.offsetTime = t.data.st,
            this.k = !0,
            this.kf = !0,
            this._isFirstFrame = !0,
            this.mult = r || 1,
            this.elem = t,
            this.container = i,
            this.comp = t.comp,
            this.getValue = processEffectsSequence,
            this.setVValue = setVValue,
            this.interpolateValue = interpolateValue,
            this.frameId = -1;
            var y = e.k[0].s.length;
            for (this.v = createTypedArray("float32", y),
            this.pv = createTypedArray("float32", y),
            s = 0; s < y; s += 1)
                this.v[s] = initFrame,
                this.pv[s] = initFrame;
            this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: createTypedArray("float32", y)
            },
            this.addEffect = addEffect
        }
        var PropertyFactory = function() {
            function t(r, i, s, a, n) {
                i.sid && (i = r.globalData.slotManager.getProp(i));
                var l;
                if (!i.k.length)
                    l = new ValueProperty(r,i,a,n);
                else if (typeof i.k[0] == "number")
                    l = new MultiDimensionalProperty(r,i,a,n);
                else
                    switch (s) {
                    case 0:
                        l = new KeyframedValueProperty(r,i,a,n);
                        break;
                    case 1:
                        l = new KeyframedMultidimensionalProperty(r,i,a,n);
                        break
                    }
                return l.effectsSequence.length && n.addDynamicProperty(l),
                l
            }
            var e = {
                getProp: t
            };
            return e
        }();
        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
            addDynamicProperty: function(e) {
                this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e),
                this.container.addDynamicProperty(this),
                this._isAnimated = !0)
            },
            iterateDynamicProperties: function() {
                this._mdf = !1;
                var e, r = this.dynamicProperties.length;
                for (e = 0; e < r; e += 1)
                    this.dynamicProperties[e].getValue(),
                    this.dynamicProperties[e]._mdf && (this._mdf = !0)
            },
            initDynamicPropertyContainer: function(e) {
                this.container = e,
                this.dynamicProperties = [],
                this._mdf = !1,
                this._isAnimated = !1
            }
        };
        var pointPool = function() {
            function t() {
                return createTypedArray("float32", 2)
            }
            return poolFactory(8, t)
        }();
        function ShapePath() {
            this.c = !1,
            this._length = 0,
            this._maxLength = 8,
            this.v = createSizedArray(this._maxLength),
            this.o = createSizedArray(this._maxLength),
            this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(t, e) {
            this.c = t,
            this.setLength(e);
            for (var r = 0; r < e; )
                this.v[r] = pointPool.newElement(),
                this.o[r] = pointPool.newElement(),
                this.i[r] = pointPool.newElement(),
                r += 1
        }
        ,
        ShapePath.prototype.setLength = function(t) {
            for (; this._maxLength < t; )
                this.doubleArrayLength();
            this._length = t
        }
        ,
        ShapePath.prototype.doubleArrayLength = function() {
            this.v = this.v.concat(createSizedArray(this._maxLength)),
            this.i = this.i.concat(createSizedArray(this._maxLength)),
            this.o = this.o.concat(createSizedArray(this._maxLength)),
            this._maxLength *= 2
        }
        ,
        ShapePath.prototype.setXYAt = function(t, e, r, i, s) {
            var a;
            switch (this._length = Math.max(this._length, i + 1),
            this._length >= this._maxLength && this.doubleArrayLength(),
            r) {
            case "v":
                a = this.v;
                break;
            case "i":
                a = this.i;
                break;
            case "o":
                a = this.o;
                break;
            default:
                a = [];
                break
            }
            (!a[i] || a[i] && !s) && (a[i] = pointPool.newElement()),
            a[i][0] = t,
            a[i][1] = e
        }
        ,
        ShapePath.prototype.setTripleAt = function(t, e, r, i, s, a, n, l) {
            this.setXYAt(t, e, "v", n, l),
            this.setXYAt(r, i, "o", n, l),
            this.setXYAt(s, a, "i", n, l)
        }
        ,
        ShapePath.prototype.reverse = function() {
            var t = new ShapePath;
            t.setPathData(this.c, this._length);
            var e = this.v
              , r = this.o
              , i = this.i
              , s = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1),
            s = 1);
            var a = this._length - 1, n = this._length, l;
            for (l = s; l < n; l += 1)
                t.setTripleAt(e[a][0], e[a][1], i[a][0], i[a][1], r[a][0], r[a][1], l, !1),
                a -= 1;
            return t
        }
        ,
        ShapePath.prototype.length = function() {
            return this._length
        }
        ;
        var shapePool = function() {
            function t() {
                return new ShapePath
            }
            function e(s) {
                var a = s._length, n;
                for (n = 0; n < a; n += 1)
                    pointPool.release(s.v[n]),
                    pointPool.release(s.i[n]),
                    pointPool.release(s.o[n]),
                    s.v[n] = null,
                    s.i[n] = null,
                    s.o[n] = null;
                s._length = 0,
                s.c = !1
            }
            function r(s) {
                var a = i.newElement(), n, l = s._length === void 0 ? s.v.length : s._length;
                for (a.setLength(l),
                a.c = s.c,
                n = 0; n < l; n += 1)
                    a.setTripleAt(s.v[n][0], s.v[n][1], s.o[n][0], s.o[n][1], s.i[n][0], s.i[n][1], n);
                return a
            }
            var i = poolFactory(4, t, e);
            return i.clone = r,
            i
        }();
        function ShapeCollection() {
            this._length = 0,
            this._maxLength = 4,
            this.shapes = createSizedArray(this._maxLength)
        }
        ShapeCollection.prototype.addShape = function(t) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)),
            this._maxLength *= 2),
            this.shapes[this._length] = t,
            this._length += 1
        }
        ,
        ShapeCollection.prototype.releaseShapes = function() {
            var t;
            for (t = 0; t < this._length; t += 1)
                shapePool.release(this.shapes[t]);
            this._length = 0
        }
        ;
        var shapeCollectionPool = function() {
            var t = {
                newShapeCollection: s,
                release: a
            }
              , e = 0
              , r = 4
              , i = createSizedArray(r);
            function s() {
                var n;
                return e ? (e -= 1,
                n = i[e]) : n = new ShapeCollection,
                n
            }
            function a(n) {
                var l, o = n._length;
                for (l = 0; l < o; l += 1)
                    shapePool.release(n.shapes[l]);
                n._length = 0,
                e === r && (i = pooling.double(i),
                r *= 2),
                i[e] = n,
                e += 1
            }
            return t
        }()
          , ShapePropertyFactory = function() {
            var t = -999999;
            function e(c, m, p) {
                var g = p.lastIndex, E, _, T, M, B, z, R, L, O, N = this.keyframes;
                if (c < N[0].t - this.offsetTime)
                    E = N[0].s[0],
                    T = !0,
                    g = 0;
                else if (c >= N[N.length - 1].t - this.offsetTime)
                    E = N[N.length - 1].s ? N[N.length - 1].s[0] : N[N.length - 2].e[0],
                    T = !0;
                else {
                    for (var D = g, A = N.length - 1, F = !0, k, S, I; F && (k = N[D],
                    S = N[D + 1],
                    !(S.t - this.offsetTime > c)); )
                        D < A - 1 ? D += 1 : F = !1;
                    if (I = this.keyframesMetadata[D] || {},
                    T = k.h === 1,
                    g = D,
                    !T) {
                        if (c >= S.t - this.offsetTime)
                            L = 1;
                        else if (c < k.t - this.offsetTime)
                            L = 0;
                        else {
                            var V;
                            I.__fnct ? V = I.__fnct : (V = BezierFactory.getBezierEasing(k.o.x, k.o.y, k.i.x, k.i.y).get,
                            I.__fnct = V),
                            L = V((c - (k.t - this.offsetTime)) / (S.t - this.offsetTime - (k.t - this.offsetTime)))
                        }
                        _ = S.s ? S.s[0] : k.e[0]
                    }
                    E = k.s[0]
                }
                for (z = m._length,
                R = E.i[0].length,
                p.lastIndex = g,
                M = 0; M < z; M += 1)
                    for (B = 0; B < R; B += 1)
                        O = T ? E.i[M][B] : E.i[M][B] + (_.i[M][B] - E.i[M][B]) * L,
                        m.i[M][B] = O,
                        O = T ? E.o[M][B] : E.o[M][B] + (_.o[M][B] - E.o[M][B]) * L,
                        m.o[M][B] = O,
                        O = T ? E.v[M][B] : E.v[M][B] + (_.v[M][B] - E.v[M][B]) * L,
                        m.v[M][B] = O
            }
            function r() {
                var c = this.comp.renderedFrame - this.offsetTime
                  , m = this.keyframes[0].t - this.offsetTime
                  , p = this.keyframes[this.keyframes.length - 1].t - this.offsetTime
                  , g = this._caching.lastFrame;
                return g !== t && (g < m && c < m || g > p && c > p) || (this._caching.lastIndex = g < c ? this._caching.lastIndex : 0,
                this.interpolateShape(c, this.pv, this._caching)),
                this._caching.lastFrame = c,
                this.pv
            }
            function i() {
                this.paths = this.localShapeCollection
            }
            function s(c, m) {
                if (c._length !== m._length || c.c !== m.c)
                    return !1;
                var p, g = c._length;
                for (p = 0; p < g; p += 1)
                    if (c.v[p][0] !== m.v[p][0] || c.v[p][1] !== m.v[p][1] || c.o[p][0] !== m.o[p][0] || c.o[p][1] !== m.o[p][1] || c.i[p][0] !== m.i[p][0] || c.i[p][1] !== m.i[p][1])
                        return !1;
                return !0
            }
            function a(c) {
                s(this.v, c) || (this.v = shapePool.clone(c),
                this.localShapeCollection.releaseShapes(),
                this.localShapeCollection.addShape(this.v),
                this._mdf = !0,
                this.paths = this.localShapeCollection)
            }
            function n() {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (!this.effectsSequence.length) {
                        this._mdf = !1;
                        return
                    }
                    if (this.lock) {
                        this.setVValue(this.pv);
                        return
                    }
                    this.lock = !0,
                    this._mdf = !1;
                    var c;
                    this.kf ? c = this.pv : this.data.ks ? c = this.data.ks.k : c = this.data.pt.k;
                    var m, p = this.effectsSequence.length;
                    for (m = 0; m < p; m += 1)
                        c = this.effectsSequence[m](c);
                    this.setVValue(c),
                    this.lock = !1,
                    this.frameId = this.elem.globalData.frameId
                }
            }
            function l(c, m, p) {
                this.propType = "shape",
                this.comp = c.comp,
                this.container = c,
                this.elem = c,
                this.data = m,
                this.k = !1,
                this.kf = !1,
                this._mdf = !1;
                var g = p === 3 ? m.pt.k : m.ks.k;
                this.v = shapePool.clone(g),
                this.pv = shapePool.clone(this.v),
                this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                this.paths = this.localShapeCollection,
                this.paths.addShape(this.v),
                this.reset = i,
                this.effectsSequence = []
            }
            function o(c) {
                this.effectsSequence.push(c),
                this.container.addDynamicProperty(this)
            }
            l.prototype.interpolateShape = e,
            l.prototype.getValue = n,
            l.prototype.setVValue = a,
            l.prototype.addEffect = o;
            function f(c, m, p) {
                this.propType = "shape",
                this.comp = c.comp,
                this.elem = c,
                this.container = c,
                this.offsetTime = c.data.st,
                this.keyframes = p === 3 ? m.pt.k : m.ks.k,
                this.keyframesMetadata = [],
                this.k = !0,
                this.kf = !0;
                var g = this.keyframes[0].s[0].i.length;
                this.v = shapePool.newElement(),
                this.v.setPathData(this.keyframes[0].s[0].c, g),
                this.pv = shapePool.clone(this.v),
                this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                this.paths = this.localShapeCollection,
                this.paths.addShape(this.v),
                this.lastFrame = t,
                this.reset = i,
                this._caching = {
                    lastFrame: t,
                    lastIndex: 0
                },
                this.effectsSequence = [r.bind(this)]
            }
            f.prototype.getValue = n,
            f.prototype.interpolateShape = e,
            f.prototype.setVValue = a,
            f.prototype.addEffect = o;
            var y = function() {
                var c = roundCorner;
                function m(p, g) {
                    this.v = shapePool.newElement(),
                    this.v.setPathData(!0, 4),
                    this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                    this.paths = this.localShapeCollection,
                    this.localShapeCollection.addShape(this.v),
                    this.d = g.d,
                    this.elem = p,
                    this.comp = p.comp,
                    this.frameId = -1,
                    this.initDynamicPropertyContainer(p),
                    this.p = PropertyFactory.getProp(p, g.p, 1, 0, this),
                    this.s = PropertyFactory.getProp(p, g.s, 1, 0, this),
                    this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                    this.convertEllToPath())
                }
                return m.prototype = {
                    reset: i,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertEllToPath())
                    },
                    convertEllToPath: function() {
                        var g = this.p.v[0]
                          , E = this.p.v[1]
                          , _ = this.s.v[0] / 2
                          , T = this.s.v[1] / 2
                          , M = this.d !== 3
                          , B = this.v;
                        B.v[0][0] = g,
                        B.v[0][1] = E - T,
                        B.v[1][0] = M ? g + _ : g - _,
                        B.v[1][1] = E,
                        B.v[2][0] = g,
                        B.v[2][1] = E + T,
                        B.v[3][0] = M ? g - _ : g + _,
                        B.v[3][1] = E,
                        B.i[0][0] = M ? g - _ * c : g + _ * c,
                        B.i[0][1] = E - T,
                        B.i[1][0] = M ? g + _ : g - _,
                        B.i[1][1] = E - T * c,
                        B.i[2][0] = M ? g + _ * c : g - _ * c,
                        B.i[2][1] = E + T,
                        B.i[3][0] = M ? g - _ : g + _,
                        B.i[3][1] = E + T * c,
                        B.o[0][0] = M ? g + _ * c : g - _ * c,
                        B.o[0][1] = E - T,
                        B.o[1][0] = M ? g + _ : g - _,
                        B.o[1][1] = E + T * c,
                        B.o[2][0] = M ? g - _ * c : g + _ * c,
                        B.o[2][1] = E + T,
                        B.o[3][0] = M ? g - _ : g + _,
                        B.o[3][1] = E - T * c
                    }
                },
                extendPrototype([DynamicPropertyContainer], m),
                m
            }()
              , P = function() {
                function c(m, p) {
                    this.v = shapePool.newElement(),
                    this.v.setPathData(!0, 0),
                    this.elem = m,
                    this.comp = m.comp,
                    this.data = p,
                    this.frameId = -1,
                    this.d = p.d,
                    this.initDynamicPropertyContainer(m),
                    p.sy === 1 ? (this.ir = PropertyFactory.getProp(m, p.ir, 0, 0, this),
                    this.is = PropertyFactory.getProp(m, p.is, 0, .01, this),
                    this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath,
                    this.pt = PropertyFactory.getProp(m, p.pt, 0, 0, this),
                    this.p = PropertyFactory.getProp(m, p.p, 1, 0, this),
                    this.r = PropertyFactory.getProp(m, p.r, 0, degToRads, this),
                    this.or = PropertyFactory.getProp(m, p.or, 0, 0, this),
                    this.os = PropertyFactory.getProp(m, p.os, 0, .01, this),
                    this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                    this.localShapeCollection.addShape(this.v),
                    this.paths = this.localShapeCollection,
                    this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                    this.convertToPath())
                }
                return c.prototype = {
                    reset: i,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertToPath())
                    },
                    convertStarToPath: function() {
                        var p = Math.floor(this.pt.v) * 2, g = Math.PI * 2 / p, E = !0, _ = this.or.v, T = this.ir.v, M = this.os.v, B = this.is.v, z = 2 * Math.PI * _ / (p * 2), R = 2 * Math.PI * T / (p * 2), L, O, N, D, A = -Math.PI / 2;
                        A += this.r.v;
                        var F = this.data.d === 3 ? -1 : 1;
                        for (this.v._length = 0,
                        L = 0; L < p; L += 1) {
                            O = E ? _ : T,
                            N = E ? M : B,
                            D = E ? z : R;
                            var k = O * Math.cos(A)
                              , S = O * Math.sin(A)
                              , I = k === 0 && S === 0 ? 0 : S / Math.sqrt(k * k + S * S)
                              , V = k === 0 && S === 0 ? 0 : -k / Math.sqrt(k * k + S * S);
                            k += +this.p.v[0],
                            S += +this.p.v[1],
                            this.v.setTripleAt(k, S, k - I * D * N * F, S - V * D * N * F, k + I * D * N * F, S + V * D * N * F, L, !0),
                            E = !E,
                            A += g * F
                        }
                    },
                    convertPolygonToPath: function() {
                        var p = Math.floor(this.pt.v), g = Math.PI * 2 / p, E = this.or.v, _ = this.os.v, T = 2 * Math.PI * E / (p * 4), M, B = -Math.PI * .5, z = this.data.d === 3 ? -1 : 1;
                        for (B += this.r.v,
                        this.v._length = 0,
                        M = 0; M < p; M += 1) {
                            var R = E * Math.cos(B)
                              , L = E * Math.sin(B)
                              , O = R === 0 && L === 0 ? 0 : L / Math.sqrt(R * R + L * L)
                              , N = R === 0 && L === 0 ? 0 : -R / Math.sqrt(R * R + L * L);
                            R += +this.p.v[0],
                            L += +this.p.v[1],
                            this.v.setTripleAt(R, L, R - O * T * _ * z, L - N * T * _ * z, R + O * T * _ * z, L + N * T * _ * z, M, !0),
                            B += g * z
                        }
                        this.paths.length = 0,
                        this.paths[0] = this.v
                    }
                },
                extendPrototype([DynamicPropertyContainer], c),
                c
            }()
              , u = function() {
                function c(m, p) {
                    this.v = shapePool.newElement(),
                    this.v.c = !0,
                    this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                    this.localShapeCollection.addShape(this.v),
                    this.paths = this.localShapeCollection,
                    this.elem = m,
                    this.comp = m.comp,
                    this.frameId = -1,
                    this.d = p.d,
                    this.initDynamicPropertyContainer(m),
                    this.p = PropertyFactory.getProp(m, p.p, 1, 0, this),
                    this.s = PropertyFactory.getProp(m, p.s, 1, 0, this),
                    this.r = PropertyFactory.getProp(m, p.r, 0, 0, this),
                    this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                    this.convertRectToPath())
                }
                return c.prototype = {
                    convertRectToPath: function() {
                        var p = this.p.v[0]
                          , g = this.p.v[1]
                          , E = this.s.v[0] / 2
                          , _ = this.s.v[1] / 2
                          , T = bmMin(E, _, this.r.v)
                          , M = T * (1 - roundCorner);
                        this.v._length = 0,
                        this.d === 2 || this.d === 1 ? (this.v.setTripleAt(p + E, g - _ + T, p + E, g - _ + T, p + E, g - _ + M, 0, !0),
                        this.v.setTripleAt(p + E, g + _ - T, p + E, g + _ - M, p + E, g + _ - T, 1, !0),
                        T !== 0 ? (this.v.setTripleAt(p + E - T, g + _, p + E - T, g + _, p + E - M, g + _, 2, !0),
                        this.v.setTripleAt(p - E + T, g + _, p - E + M, g + _, p - E + T, g + _, 3, !0),
                        this.v.setTripleAt(p - E, g + _ - T, p - E, g + _ - T, p - E, g + _ - M, 4, !0),
                        this.v.setTripleAt(p - E, g - _ + T, p - E, g - _ + M, p - E, g - _ + T, 5, !0),
                        this.v.setTripleAt(p - E + T, g - _, p - E + T, g - _, p - E + M, g - _, 6, !0),
                        this.v.setTripleAt(p + E - T, g - _, p + E - M, g - _, p + E - T, g - _, 7, !0)) : (this.v.setTripleAt(p - E, g + _, p - E + M, g + _, p - E, g + _, 2),
                        this.v.setTripleAt(p - E, g - _, p - E, g - _ + M, p - E, g - _, 3))) : (this.v.setTripleAt(p + E, g - _ + T, p + E, g - _ + M, p + E, g - _ + T, 0, !0),
                        T !== 0 ? (this.v.setTripleAt(p + E - T, g - _, p + E - T, g - _, p + E - M, g - _, 1, !0),
                        this.v.setTripleAt(p - E + T, g - _, p - E + M, g - _, p - E + T, g - _, 2, !0),
                        this.v.setTripleAt(p - E, g - _ + T, p - E, g - _ + T, p - E, g - _ + M, 3, !0),
                        this.v.setTripleAt(p - E, g + _ - T, p - E, g + _ - M, p - E, g + _ - T, 4, !0),
                        this.v.setTripleAt(p - E + T, g + _, p - E + T, g + _, p - E + M, g + _, 5, !0),
                        this.v.setTripleAt(p + E - T, g + _, p + E - M, g + _, p + E - T, g + _, 6, !0),
                        this.v.setTripleAt(p + E, g + _ - T, p + E, g + _ - T, p + E, g + _ - M, 7, !0)) : (this.v.setTripleAt(p - E, g - _, p - E + M, g - _, p - E, g - _, 1, !0),
                        this.v.setTripleAt(p - E, g + _, p - E, g + _ - M, p - E, g + _, 2, !0),
                        this.v.setTripleAt(p + E, g + _, p + E - M, g + _, p + E, g + _, 3, !0)))
                    },
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertRectToPath())
                    },
                    reset: i
                },
                extendPrototype([DynamicPropertyContainer], c),
                c
            }();
            function b(c, m, p) {
                var g;
                if (p === 3 || p === 4) {
                    var E = p === 3 ? m.pt : m.ks
                      , _ = E.k;
                    _.length ? g = new f(c,m,p) : g = new l(c,m,p)
                } else
                    p === 5 ? g = new u(c,m) : p === 6 ? g = new y(c,m) : p === 7 && (g = new P(c,m));
                return g.k && c.addDynamicProperty(g),
                g
            }
            function x() {
                return l
            }
            function d() {
                return f
            }
            var C = {};
            return C.getShapeProp = b,
            C.getConstructorFunction = x,
            C.getKeyframedConstructorFunction = d,
            C
        }();
        /*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */
        var Matrix = function() {
            var t = Math.cos
              , e = Math.sin
              , r = Math.tan
              , i = Math.round;
            function s() {
                return this.props[0] = 1,
                this.props[1] = 0,
                this.props[2] = 0,
                this.props[3] = 0,
                this.props[4] = 0,
                this.props[5] = 1,
                this.props[6] = 0,
                this.props[7] = 0,
                this.props[8] = 0,
                this.props[9] = 0,
                this.props[10] = 1,
                this.props[11] = 0,
                this.props[12] = 0,
                this.props[13] = 0,
                this.props[14] = 0,
                this.props[15] = 1,
                this
            }
            function a(k) {
                if (k === 0)
                    return this;
                var S = t(k)
                  , I = e(k);
                return this._t(S, -I, 0, 0, I, S, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }
            function n(k) {
                if (k === 0)
                    return this;
                var S = t(k)
                  , I = e(k);
                return this._t(1, 0, 0, 0, 0, S, -I, 0, 0, I, S, 0, 0, 0, 0, 1)
            }
            function l(k) {
                if (k === 0)
                    return this;
                var S = t(k)
                  , I = e(k);
                return this._t(S, 0, I, 0, 0, 1, 0, 0, -I, 0, S, 0, 0, 0, 0, 1)
            }
            function o(k) {
                if (k === 0)
                    return this;
                var S = t(k)
                  , I = e(k);
                return this._t(S, -I, 0, 0, I, S, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }
            function f(k, S) {
                return this._t(1, S, k, 1, 0, 0)
            }
            function y(k, S) {
                return this.shear(r(k), r(S))
            }
            function P(k, S) {
                var I = t(S)
                  , V = e(S);
                return this._t(I, V, 0, 0, -V, I, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(k), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(I, -V, 0, 0, V, I, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }
            function u(k, S, I) {
                return !I && I !== 0 && (I = 1),
                k === 1 && S === 1 && I === 1 ? this : this._t(k, 0, 0, 0, 0, S, 0, 0, 0, 0, I, 0, 0, 0, 0, 1)
            }
            function b(k, S, I, V, G, j, $, W, q, X, Z, rt, K, J, Q, Y) {
                return this.props[0] = k,
                this.props[1] = S,
                this.props[2] = I,
                this.props[3] = V,
                this.props[4] = G,
                this.props[5] = j,
                this.props[6] = $,
                this.props[7] = W,
                this.props[8] = q,
                this.props[9] = X,
                this.props[10] = Z,
                this.props[11] = rt,
                this.props[12] = K,
                this.props[13] = J,
                this.props[14] = Q,
                this.props[15] = Y,
                this
            }
            function x(k, S, I) {
                return I = I || 0,
                k !== 0 || S !== 0 || I !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, k, S, I, 1) : this
            }
            function d(k, S, I, V, G, j, $, W, q, X, Z, rt, K, J, Q, Y) {
                var H = this.props;
                if (k === 1 && S === 0 && I === 0 && V === 0 && G === 0 && j === 1 && $ === 0 && W === 0 && q === 0 && X === 0 && Z === 1 && rt === 0)
                    return H[12] = H[12] * k + H[15] * K,
                    H[13] = H[13] * j + H[15] * J,
                    H[14] = H[14] * Z + H[15] * Q,
                    H[15] *= Y,
                    this._identityCalculated = !1,
                    this;
                var st = H[0]
                  , lt = H[1]
                  , at = H[2]
                  , it = H[3]
                  , nt = H[4]
                  , ot = H[5]
                  , U = H[6]
                  , ht = H[7]
                  , ft = H[8]
                  , tt = H[9]
                  , pt = H[10]
                  , et = H[11]
                  , ct = H[12]
                  , ut = H[13]
                  , mt = H[14]
                  , dt = H[15];
                return H[0] = st * k + lt * G + at * q + it * K,
                H[1] = st * S + lt * j + at * X + it * J,
                H[2] = st * I + lt * $ + at * Z + it * Q,
                H[3] = st * V + lt * W + at * rt + it * Y,
                H[4] = nt * k + ot * G + U * q + ht * K,
                H[5] = nt * S + ot * j + U * X + ht * J,
                H[6] = nt * I + ot * $ + U * Z + ht * Q,
                H[7] = nt * V + ot * W + U * rt + ht * Y,
                H[8] = ft * k + tt * G + pt * q + et * K,
                H[9] = ft * S + tt * j + pt * X + et * J,
                H[10] = ft * I + tt * $ + pt * Z + et * Q,
                H[11] = ft * V + tt * W + pt * rt + et * Y,
                H[12] = ct * k + ut * G + mt * q + dt * K,
                H[13] = ct * S + ut * j + mt * X + dt * J,
                H[14] = ct * I + ut * $ + mt * Z + dt * Q,
                H[15] = ct * V + ut * W + mt * rt + dt * Y,
                this._identityCalculated = !1,
                this
            }
            function C(k) {
                var S = k.props;
                return this.transform(S[0], S[1], S[2], S[3], S[4], S[5], S[6], S[7], S[8], S[9], S[10], S[11], S[12], S[13], S[14], S[15])
            }
            function c() {
                return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1),
                this._identityCalculated = !0),
                this._identity
            }
            function m(k) {
                for (var S = 0; S < 16; ) {
                    if (k.props[S] !== this.props[S])
                        return !1;
                    S += 1
                }
                return !0
            }
            function p(k) {
                var S;
                for (S = 0; S < 16; S += 1)
                    k.props[S] = this.props[S];
                return k
            }
            function g(k) {
                var S;
                for (S = 0; S < 16; S += 1)
                    this.props[S] = k[S]
            }
            function E(k, S, I) {
                return {
                    x: k * this.props[0] + S * this.props[4] + I * this.props[8] + this.props[12],
                    y: k * this.props[1] + S * this.props[5] + I * this.props[9] + this.props[13],
                    z: k * this.props[2] + S * this.props[6] + I * this.props[10] + this.props[14]
                }
            }
            function _(k, S, I) {
                return k * this.props[0] + S * this.props[4] + I * this.props[8] + this.props[12]
            }
            function T(k, S, I) {
                return k * this.props[1] + S * this.props[5] + I * this.props[9] + this.props[13]
            }
            function M(k, S, I) {
                return k * this.props[2] + S * this.props[6] + I * this.props[10] + this.props[14]
            }
            function B() {
                var k = this.props[0] * this.props[5] - this.props[1] * this.props[4]
                  , S = this.props[5] / k
                  , I = -this.props[1] / k
                  , V = -this.props[4] / k
                  , G = this.props[0] / k
                  , j = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / k
                  , $ = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / k
                  , W = new Matrix;
                return W.props[0] = S,
                W.props[1] = I,
                W.props[4] = V,
                W.props[5] = G,
                W.props[12] = j,
                W.props[13] = $,
                W
            }
            function z(k) {
                var S = this.getInverseMatrix();
                return S.applyToPointArray(k[0], k[1], k[2] || 0)
            }
            function R(k) {
                var S, I = k.length, V = [];
                for (S = 0; S < I; S += 1)
                    V[S] = z(k[S]);
                return V
            }
            function L(k, S, I) {
                var V = createTypedArray("float32", 6);
                if (this.isIdentity())
                    V[0] = k[0],
                    V[1] = k[1],
                    V[2] = S[0],
                    V[3] = S[1],
                    V[4] = I[0],
                    V[5] = I[1];
                else {
                    var G = this.props[0]
                      , j = this.props[1]
                      , $ = this.props[4]
                      , W = this.props[5]
                      , q = this.props[12]
                      , X = this.props[13];
                    V[0] = k[0] * G + k[1] * $ + q,
                    V[1] = k[0] * j + k[1] * W + X,
                    V[2] = S[0] * G + S[1] * $ + q,
                    V[3] = S[0] * j + S[1] * W + X,
                    V[4] = I[0] * G + I[1] * $ + q,
                    V[5] = I[0] * j + I[1] * W + X
                }
                return V
            }
            function O(k, S, I) {
                var V;
                return this.isIdentity() ? V = [k, S, I] : V = [k * this.props[0] + S * this.props[4] + I * this.props[8] + this.props[12], k * this.props[1] + S * this.props[5] + I * this.props[9] + this.props[13], k * this.props[2] + S * this.props[6] + I * this.props[10] + this.props[14]],
                V
            }
            function N(k, S) {
                if (this.isIdentity())
                    return k + "," + S;
                var I = this.props;
                return Math.round((k * I[0] + S * I[4] + I[12]) * 100) / 100 + "," + Math.round((k * I[1] + S * I[5] + I[13]) * 100) / 100
            }
            function D() {
                for (var k = 0, S = this.props, I = "matrix3d(", V = 1e4; k < 16; )
                    I += i(S[k] * V) / V,
                    I += k === 15 ? ")" : ",",
                    k += 1;
                return I
            }
            function A(k) {
                var S = 1e4;
                return k < 1e-6 && k > 0 || k > -1e-6 && k < 0 ? i(k * S) / S : k
            }
            function F() {
                var k = this.props
                  , S = A(k[0])
                  , I = A(k[1])
                  , V = A(k[4])
                  , G = A(k[5])
                  , j = A(k[12])
                  , $ = A(k[13]);
                return "matrix(" + S + "," + I + "," + V + "," + G + "," + j + "," + $ + ")"
            }
            return function() {
                this.reset = s,
                this.rotate = a,
                this.rotateX = n,
                this.rotateY = l,
                this.rotateZ = o,
                this.skew = y,
                this.skewFromAxis = P,
                this.shear = f,
                this.scale = u,
                this.setTransform = b,
                this.translate = x,
                this.transform = d,
                this.multiply = C,
                this.applyToPoint = E,
                this.applyToX = _,
                this.applyToY = T,
                this.applyToZ = M,
                this.applyToPointArray = O,
                this.applyToTriplePoints = L,
                this.applyToPointStringified = N,
                this.toCSS = D,
                this.to2dCSS = F,
                this.clone = p,
                this.cloneFromProps = g,
                this.equals = m,
                this.inversePoints = R,
                this.inversePoint = z,
                this.getInverseMatrix = B,
                this._t = this.transform,
                this.isIdentity = c,
                this._identity = !0,
                this._identityCalculated = !1,
                this.props = createTypedArray("float32", 16),
                this.reset()
            }
        }();
        function _typeof$3(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$3 = function(r) {
                return typeof r
            }
            : _typeof$3 = function(r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }
            ,
            _typeof$3(t)
        }
        var lottie = {};
        function setLocation(t) {
            setLocationHref(t)
        }
        function searchAnimations() {
            animationManager.searchAnimations()
        }
        function setSubframeRendering(t) {
            setSubframeEnabled(t)
        }
        function setPrefix(t) {
            setIdPrefix(t)
        }
        function loadAnimation(t) {
            return animationManager.loadAnimation(t)
        }
        function setQuality(t) {
            if (typeof t == "string")
                switch (t) {
                case "high":
                    setDefaultCurveSegments(200);
                    break;
                default:
                case "medium":
                    setDefaultCurveSegments(50);
                    break;
                case "low":
                    setDefaultCurveSegments(10);
                    break
                }
            else
                !isNaN(t) && t > 1 && setDefaultCurveSegments(t)
        }
        function inBrowser() {
            return typeof navigator < "u"
        }
        function installPlugin(t, e) {
            t === "expressions" && setExpressionsPlugin(e)
        }
        function getFactory(t) {
            switch (t) {
            case "propertyFactory":
                return PropertyFactory;
            case "shapePropertyFactory":
                return ShapePropertyFactory;
            case "matrix":
                return Matrix;
            default:
                return null
            }
        }
        lottie.play = animationManager.play,
        lottie.pause = animationManager.pause,
        lottie.setLocationHref = setLocation,
        lottie.togglePause = animationManager.togglePause,
        lottie.setSpeed = animationManager.setSpeed,
        lottie.setDirection = animationManager.setDirection,
        lottie.stop = animationManager.stop,
        lottie.searchAnimations = searchAnimations,
        lottie.registerAnimation = animationManager.registerAnimation,
        lottie.loadAnimation = loadAnimation,
        lottie.setSubframeRendering = setSubframeRendering,
        lottie.resize = animationManager.resize,
        lottie.goToAndStop = animationManager.goToAndStop,
        lottie.destroy = animationManager.destroy,
        lottie.setQuality = setQuality,
        lottie.inBrowser = inBrowser,
        lottie.installPlugin = installPlugin,
        lottie.freeze = animationManager.freeze,
        lottie.unfreeze = animationManager.unfreeze,
        lottie.setVolume = animationManager.setVolume,
        lottie.mute = animationManager.mute,
        lottie.unmute = animationManager.unmute,
        lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations,
        lottie.useWebWorker = setWebWorker,
        lottie.setIDPrefix = setPrefix,
        lottie.__getFactory = getFactory,
        lottie.version = "5.12.2";
        function checkReady() {
            document.readyState === "complete" && (clearInterval(readyStateCheckInterval),
            searchAnimations())
        }
        function getQueryVariable(t) {
            for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
                var i = e[r].split("=");
                if (decodeURIComponent(i[0]) == t)
                    return decodeURIComponent(i[1])
            }
            return null
        }
        var queryString = "";
        {
            var scripts = document.getElementsByTagName("script")
              , index = scripts.length - 1
              , myScript = scripts[index] || {
                src: ""
            };
            queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "",
            getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
            _typeof$3(exports) !== "object" && (window.bodymovin = lottie)
        } catch (t) {}
        var ShapeModifiers = function() {
            var t = {}
              , e = {};
            t.registerModifier = r,
            t.getModifier = i;
            function r(s, a) {
                e[s] || (e[s] = a)
            }
            function i(s, a, n) {
                return new e[s](a,n)
            }
            return t
        }();
        function ShapeModifier() {}
        ShapeModifier.prototype.initModifierProperties = function() {}
        ,
        ShapeModifier.prototype.addShapeToModifier = function() {}
        ,
        ShapeModifier.prototype.addShape = function(t) {
            if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = {
                    shape: t.sh,
                    data: t,
                    localShapeCollection: shapeCollectionPool.newShapeCollection()
                };
                this.shapes.push(e),
                this.addShapeToModifier(e),
                this._isAnimated && t.setAsAnimated()
            }
        }
        ,
        ShapeModifier.prototype.init = function(t, e) {
            this.shapes = [],
            this.elem = t,
            this.initDynamicPropertyContainer(t),
            this.initModifierProperties(t, e),
            this.frameId = initialDefaultFrame,
            this.closed = !1,
            this.k = !1,
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }
        ,
        ShapeModifier.prototype.processKeys = function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
            this.iterateDynamicProperties())
        }
        ,
        extendPrototype([DynamicPropertyContainer], ShapeModifier);
        function TrimModifier() {}
        extendPrototype([ShapeModifier], TrimModifier),
        TrimModifier.prototype.initModifierProperties = function(t, e) {
            this.s = PropertyFactory.getProp(t, e.s, 0, .01, this),
            this.e = PropertyFactory.getProp(t, e.e, 0, .01, this),
            this.o = PropertyFactory.getProp(t, e.o, 0, 0, this),
            this.sValue = 0,
            this.eValue = 0,
            this.getValue = this.processKeys,
            this.m = e.m,
            this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }
        ,
        TrimModifier.prototype.addShapeToModifier = function(t) {
            t.pathsData = []
        }
        ,
        TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, s) {
            var a = [];
            e <= 1 ? a.push({
                s: t,
                e
            }) : t >= 1 ? a.push({
                s: t - 1,
                e: e - 1
            }) : (a.push({
                s: t,
                e: 1
            }),
            a.push({
                s: 0,
                e: e - 1
            }));
            var n = [], l, o = a.length, f;
            for (l = 0; l < o; l += 1)
                if (f = a[l],
                !(f.e * s < i || f.s * s > i + r)) {
                    var y, P;
                    f.s * s <= i ? y = 0 : y = (f.s * s - i) / r,
                    f.e * s >= i + r ? P = 1 : P = (f.e * s - i) / r,
                    n.push([y, P])
                }
            return n.length || n.push([0, 0]),
            n
        }
        ,
        TrimModifier.prototype.releasePathsData = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1)
                segmentsLengthPool.release(t[e]);
            return t.length = 0,
            t
        }
        ,
        TrimModifier.prototype.processShapes = function(t) {
            var e, r;
            if (this._mdf || t) {
                var i = this.o.v % 360 / 360;
                if (i < 0 && (i += 1),
                this.s.v > 1 ? e = 1 + i : this.s.v < 0 ? e = 0 + i : e = this.s.v + i,
                this.e.v > 1 ? r = 1 + i : this.e.v < 0 ? r = 0 + i : r = this.e.v + i,
                e > r) {
                    var s = e;
                    e = r,
                    r = s
                }
                e = Math.round(e * 1e4) * 1e-4,
                r = Math.round(r * 1e4) * 1e-4,
                this.sValue = e,
                this.eValue = r
            } else
                e = this.sValue,
                r = this.eValue;
            var a, n, l = this.shapes.length, o, f, y, P, u, b = 0;
            if (r === e)
                for (n = 0; n < l; n += 1)
                    this.shapes[n].localShapeCollection.releaseShapes(),
                    this.shapes[n].shape._mdf = !0,
                    this.shapes[n].shape.paths = this.shapes[n].localShapeCollection,
                    this._mdf && (this.shapes[n].pathsData.length = 0);
            else if (r === 1 && e === 0 || r === 0 && e === 1) {
                if (this._mdf)
                    for (n = 0; n < l; n += 1)
                        this.shapes[n].pathsData.length = 0,
                        this.shapes[n].shape._mdf = !0
            } else {
                var x = [], d, C;
                for (n = 0; n < l; n += 1)
                    if (d = this.shapes[n],
                    !d.shape._mdf && !this._mdf && !t && this.m !== 2)
                        d.shape.paths = d.localShapeCollection;
                    else {
                        if (a = d.shape.paths,
                        f = a._length,
                        u = 0,
                        !d.shape._mdf && d.pathsData.length)
                            u = d.totalShapeLength;
                        else {
                            for (y = this.releasePathsData(d.pathsData),
                            o = 0; o < f; o += 1)
                                P = bez.getSegmentsLength(a.shapes[o]),
                                y.push(P),
                                u += P.totalLength;
                            d.totalShapeLength = u,
                            d.pathsData = y
                        }
                        b += u,
                        d.shape._mdf = !0
                    }
                var c = e, m = r, p = 0, g;
                for (n = l - 1; n >= 0; n -= 1)
                    if (d = this.shapes[n],
                    d.shape._mdf) {
                        for (C = d.localShapeCollection,
                        C.releaseShapes(),
                        this.m === 2 && l > 1 ? (g = this.calculateShapeEdges(e, r, d.totalShapeLength, p, b),
                        p += d.totalShapeLength) : g = [[c, m]],
                        f = g.length,
                        o = 0; o < f; o += 1) {
                            c = g[o][0],
                            m = g[o][1],
                            x.length = 0,
                            m <= 1 ? x.push({
                                s: d.totalShapeLength * c,
                                e: d.totalShapeLength * m
                            }) : c >= 1 ? x.push({
                                s: d.totalShapeLength * (c - 1),
                                e: d.totalShapeLength * (m - 1)
                            }) : (x.push({
                                s: d.totalShapeLength * c,
                                e: d.totalShapeLength
                            }),
                            x.push({
                                s: 0,
                                e: d.totalShapeLength * (m - 1)
                            }));
                            var E = this.addShapes(d, x[0]);
                            if (x[0].s !== x[0].e) {
                                if (x.length > 1) {
                                    var _ = d.shape.paths.shapes[d.shape.paths._length - 1];
                                    if (_.c) {
                                        var T = E.pop();
                                        this.addPaths(E, C),
                                        E = this.addShapes(d, x[1], T)
                                    } else
                                        this.addPaths(E, C),
                                        E = this.addShapes(d, x[1])
                                }
                                this.addPaths(E, C)
                            }
                        }
                        d.shape.paths = C
                    }
            }
        }
        ,
        TrimModifier.prototype.addPaths = function(t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1)
                e.addShape(t[r])
        }
        ,
        TrimModifier.prototype.addSegment = function(t, e, r, i, s, a, n) {
            s.setXYAt(e[0], e[1], "o", a),
            s.setXYAt(r[0], r[1], "i", a + 1),
            n && s.setXYAt(t[0], t[1], "v", a),
            s.setXYAt(i[0], i[1], "v", a + 1)
        }
        ,
        TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
            e.setXYAt(t[1], t[5], "o", r),
            e.setXYAt(t[2], t[6], "i", r + 1),
            i && e.setXYAt(t[0], t[4], "v", r),
            e.setXYAt(t[3], t[7], "v", r + 1)
        }
        ,
        TrimModifier.prototype.addShapes = function(t, e, r) {
            var i = t.pathsData, s = t.shape.paths.shapes, a, n = t.shape.paths._length, l, o, f = 0, y, P, u, b, x = [], d, C = !0;
            for (r ? (P = r._length,
            d = r._length) : (r = shapePool.newElement(),
            P = 0,
            d = 0),
            x.push(r),
            a = 0; a < n; a += 1) {
                for (u = i[a].lengths,
                r.c = s[a].c,
                o = s[a].c ? u.length : u.length + 1,
                l = 1; l < o; l += 1)
                    if (y = u[l - 1],
                    f + y.addedLength < e.s)
                        f += y.addedLength,
                        r.c = !1;
                    else if (f > e.e) {
                        r.c = !1;
                        break
                    } else
                        e.s <= f && e.e >= f + y.addedLength ? (this.addSegment(s[a].v[l - 1], s[a].o[l - 1], s[a].i[l], s[a].v[l], r, P, C),
                        C = !1) : (b = bez.getNewSegment(s[a].v[l - 1], s[a].v[l], s[a].o[l - 1], s[a].i[l], (e.s - f) / y.addedLength, (e.e - f) / y.addedLength, u[l - 1]),
                        this.addSegmentFromArray(b, r, P, C),
                        C = !1,
                        r.c = !1),
                        f += y.addedLength,
                        P += 1;
                if (s[a].c && u.length) {
                    if (y = u[l - 1],
                    f <= e.e) {
                        var c = u[l - 1].addedLength;
                        e.s <= f && e.e >= f + c ? (this.addSegment(s[a].v[l - 1], s[a].o[l - 1], s[a].i[0], s[a].v[0], r, P, C),
                        C = !1) : (b = bez.getNewSegment(s[a].v[l - 1], s[a].v[0], s[a].o[l - 1], s[a].i[0], (e.s - f) / c, (e.e - f) / c, u[l - 1]),
                        this.addSegmentFromArray(b, r, P, C),
                        C = !1,
                        r.c = !1)
                    } else
                        r.c = !1;
                    f += y.addedLength,
                    P += 1
                }
                if (r._length && (r.setXYAt(r.v[d][0], r.v[d][1], "i", d),
                r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)),
                f > e.e)
                    break;
                a < n - 1 && (r = shapePool.newElement(),
                C = !0,
                x.push(r),
                P = 0)
            }
            return x
        }
        ;
        function PuckerAndBloatModifier() {}
        extendPrototype([ShapeModifier], PuckerAndBloatModifier),
        PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys,
            this.amount = PropertyFactory.getProp(t, e.a, 0, null, this),
            this._isAnimated = !!this.amount.effectsSequence.length
        }
        ,
        PuckerAndBloatModifier.prototype.processPath = function(t, e) {
            var r = e / 100
              , i = [0, 0]
              , s = t._length
              , a = 0;
            for (a = 0; a < s; a += 1)
                i[0] += t.v[a][0],
                i[1] += t.v[a][1];
            i[0] /= s,
            i[1] /= s;
            var n = shapePool.newElement();
            n.c = t.c;
            var l, o, f, y, P, u;
            for (a = 0; a < s; a += 1)
                l = t.v[a][0] + (i[0] - t.v[a][0]) * r,
                o = t.v[a][1] + (i[1] - t.v[a][1]) * r,
                f = t.o[a][0] + (i[0] - t.o[a][0]) * -r,
                y = t.o[a][1] + (i[1] - t.o[a][1]) * -r,
                P = t.i[a][0] + (i[0] - t.i[a][0]) * -r,
                u = t.i[a][1] + (i[1] - t.i[a][1]) * -r,
                n.setTripleAt(l, o, f, y, P, u, a);
            return n
        }
        ,
        PuckerAndBloatModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length, s, a, n = this.amount.v;
            if (n !== 0) {
                var l, o;
                for (r = 0; r < i; r += 1) {
                    if (l = this.shapes[r],
                    o = l.localShapeCollection,
                    !(!l.shape._mdf && !this._mdf && !t))
                        for (o.releaseShapes(),
                        l.shape._mdf = !0,
                        e = l.shape.paths.shapes,
                        a = l.shape.paths._length,
                        s = 0; s < a; s += 1)
                            o.addShape(this.processPath(e[s], n));
                    l.shape.paths = l.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        }
        ;
        var TransformPropertyFactory = function() {
            var t = [0, 0];
            function e(o) {
                var f = this._mdf;
                this.iterateDynamicProperties(),
                this._mdf = this._mdf || f,
                this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                this.sk && o.skewFromAxis(-this.sk.v, this.sa.v),
                this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            }
            function r(o) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (this._isDirty && (this.precalculateMatrix(),
                    this._isDirty = !1),
                    this.iterateDynamicProperties(),
                    this._mdf || o) {
                        var f;
                        if (this.v.cloneFromProps(this.pre.props),
                        this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                        this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                        this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v),
                        this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                        this.autoOriented) {
                            var y, P;
                            if (f = this.elem.globalData.frameRate,
                            this.p && this.p.keyframes && this.p.getValueAtTime)
                                this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (y = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / f, 0),
                                P = this.p.getValueAtTime(this.p.keyframes[0].t / f, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (y = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / f, 0),
                                P = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / f, 0)) : (y = this.p.pv,
                                P = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / f, this.p.offsetTime));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                y = [],
                                P = [];
                                var u = this.px
                                  , b = this.py;
                                u._caching.lastFrame + u.offsetTime <= u.keyframes[0].t ? (y[0] = u.getValueAtTime((u.keyframes[0].t + .01) / f, 0),
                                y[1] = b.getValueAtTime((b.keyframes[0].t + .01) / f, 0),
                                P[0] = u.getValueAtTime(u.keyframes[0].t / f, 0),
                                P[1] = b.getValueAtTime(b.keyframes[0].t / f, 0)) : u._caching.lastFrame + u.offsetTime >= u.keyframes[u.keyframes.length - 1].t ? (y[0] = u.getValueAtTime(u.keyframes[u.keyframes.length - 1].t / f, 0),
                                y[1] = b.getValueAtTime(b.keyframes[b.keyframes.length - 1].t / f, 0),
                                P[0] = u.getValueAtTime((u.keyframes[u.keyframes.length - 1].t - .01) / f, 0),
                                P[1] = b.getValueAtTime((b.keyframes[b.keyframes.length - 1].t - .01) / f, 0)) : (y = [u.pv, b.pv],
                                P[0] = u.getValueAtTime((u._caching.lastFrame + u.offsetTime - .01) / f, u.offsetTime),
                                P[1] = b.getValueAtTime((b._caching.lastFrame + b.offsetTime - .01) / f, b.offsetTime))
                            } else
                                P = t,
                                y = P;
                            this.v.rotate(-Math.atan2(y[1] - P[1], y[0] - P[0]))
                        }
                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    }
                    this.frameId = this.elem.globalData.frameId
                }
            }
            function i() {
                if (this.appliedTransformations = 0,
                this.pre.reset(),
                !this.a.effectsSequence.length)
                    this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                    this.appliedTransformations = 1;
                else
                    return;
                if (!this.s.effectsSequence.length)
                    this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                    this.appliedTransformations = 2;
                else
                    return;
                if (this.sk)
                    if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length)
                        this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                        this.appliedTransformations = 3;
                    else
                        return;
                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v),
                this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                this.appliedTransformations = 4)
            }
            function s() {}
            function a(o) {
                this._addDynamicProperty(o),
                this.elem.addDynamicProperty(o),
                this._isDirty = !0
            }
            function n(o, f, y) {
                if (this.elem = o,
                this.frameId = -1,
                this.propType = "transform",
                this.data = f,
                this.v = new Matrix,
                this.pre = new Matrix,
                this.appliedTransformations = 0,
                this.initDynamicPropertyContainer(y || o),
                f.p && f.p.s ? (this.px = PropertyFactory.getProp(o, f.p.x, 0, 0, this),
                this.py = PropertyFactory.getProp(o, f.p.y, 0, 0, this),
                f.p.z && (this.pz = PropertyFactory.getProp(o, f.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(o, f.p || {
                    k: [0, 0, 0]
                }, 1, 0, this),
                f.rx) {
                    if (this.rx = PropertyFactory.getProp(o, f.rx, 0, degToRads, this),
                    this.ry = PropertyFactory.getProp(o, f.ry, 0, degToRads, this),
                    this.rz = PropertyFactory.getProp(o, f.rz, 0, degToRads, this),
                    f.or.k[0].ti) {
                        var P, u = f.or.k.length;
                        for (P = 0; P < u; P += 1)
                            f.or.k[P].to = null,
                            f.or.k[P].ti = null
                    }
                    this.or = PropertyFactory.getProp(o, f.or, 1, degToRads, this),
                    this.or.sh = !0
                } else
                    this.r = PropertyFactory.getProp(o, f.r || {
                        k: 0
                    }, 0, degToRads, this);
                f.sk && (this.sk = PropertyFactory.getProp(o, f.sk, 0, degToRads, this),
                this.sa = PropertyFactory.getProp(o, f.sa, 0, degToRads, this)),
                this.a = PropertyFactory.getProp(o, f.a || {
                    k: [0, 0, 0]
                }, 1, 0, this),
                this.s = PropertyFactory.getProp(o, f.s || {
                    k: [100, 100, 100]
                }, 1, .01, this),
                f.o ? this.o = PropertyFactory.getProp(o, f.o, 0, .01, o) : this.o = {
                    _mdf: !1,
                    v: 1
                },
                this._isDirty = !0,
                this.dynamicProperties.length || this.getValue(!0)
            }
            n.prototype = {
                applyToMatrix: e,
                getValue: r,
                precalculateMatrix: i,
                autoOrient: s
            },
            extendPrototype([DynamicPropertyContainer], n),
            n.prototype.addDynamicProperty = a,
            n.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
            function l(o, f, y) {
                return new n(o,f,y)
            }
            return {
                getTransformProperty: l
            }
        }();
        function RepeaterModifier() {}
        extendPrototype([ShapeModifier], RepeaterModifier),
        RepeaterModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys,
            this.c = PropertyFactory.getProp(t, e.c, 0, null, this),
            this.o = PropertyFactory.getProp(t, e.o, 0, null, this),
            this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this),
            this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this),
            this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this),
            this.data = e,
            this.dynamicProperties.length || this.getValue(!0),
            this._isAnimated = !!this.dynamicProperties.length,
            this.pMatrix = new Matrix,
            this.rMatrix = new Matrix,
            this.sMatrix = new Matrix,
            this.tMatrix = new Matrix,
            this.matrix = new Matrix
        }
        ,
        RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, s, a) {
            var n = a ? -1 : 1
              , l = i.s.v[0] + (1 - i.s.v[0]) * (1 - s)
              , o = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
            t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]),
            e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
            e.rotate(-i.r.v * n * s),
            e.translate(i.a.v[0], i.a.v[1], i.a.v[2]),
            r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
            r.scale(a ? 1 / l : l, a ? 1 / o : o),
            r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
        }
        ,
        RepeaterModifier.prototype.init = function(t, e, r, i) {
            for (this.elem = t,
            this.arr = e,
            this.pos = r,
            this.elemsData = i,
            this._currentCopies = 0,
            this._elements = [],
            this._groups = [],
            this.frameId = -1,
            this.initDynamicPropertyContainer(t),
            this.initModifierProperties(t, e[r]); r > 0; )
                r -= 1,
                this._elements.unshift(e[r]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }
        ,
        RepeaterModifier.prototype.resetElements = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1)
                t[e]._processed = !1,
                t[e].ty === "gr" && this.resetElements(t[e].it)
        }
        ,
        RepeaterModifier.prototype.cloneElements = function(t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e),
            e
        }
        ,
        RepeaterModifier.prototype.changeGroupRender = function(t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1)
                t[r]._render = e,
                t[r].ty === "gr" && this.changeGroupRender(t[r].it, e)
        }
        ,
        RepeaterModifier.prototype.processShapes = function(t) {
            var e, r, i, s, a, n = !1;
            if (this._mdf || t) {
                var l = Math.ceil(this.c.v);
                if (this._groups.length < l) {
                    for (; this._groups.length < l; ) {
                        var o = {
                            it: this.cloneElements(this._elements),
                            ty: "gr"
                        };
                        o.it.push({
                            a: {
                                a: 0,
                                ix: 1,
                                k: [0, 0]
                            },
                            nm: "Transform",
                            o: {
                                a: 0,
                                ix: 7,
                                k: 100
                            },
                            p: {
                                a: 0,
                                ix: 2,
                                k: [0, 0]
                            },
                            r: {
                                a: 1,
                                ix: 6,
                                k: [{
                                    s: 0,
                                    e: 0,
                                    t: 0
                                }, {
                                    s: 0,
                                    e: 0,
                                    t: 1
                                }]
                            },
                            s: {
                                a: 0,
                                ix: 3,
                                k: [100, 100]
                            },
                            sa: {
                                a: 0,
                                ix: 5,
                                k: 0
                            },
                            sk: {
                                a: 0,
                                ix: 4,
                                k: 0
                            },
                            ty: "tr"
                        }),
                        this.arr.splice(0, 0, o),
                        this._groups.splice(0, 0, o),
                        this._currentCopies += 1
                    }
                    this.elem.reloadShapes(),
                    n = !0
                }
                a = 0;
                var f;
                for (i = 0; i <= this._groups.length - 1; i += 1) {
                    if (f = a < l,
                    this._groups[i]._render = f,
                    this.changeGroupRender(this._groups[i].it, f),
                    !f) {
                        var y = this.elemsData[i].it
                          , P = y[y.length - 1];
                        P.transform.op.v !== 0 ? (P.transform.op._mdf = !0,
                        P.transform.op.v = 0) : P.transform.op._mdf = !1
                    }
                    a += 1
                }
                this._currentCopies = l;
                var u = this.o.v
                  , b = u % 1
                  , x = u > 0 ? Math.floor(u) : Math.ceil(u)
                  , d = this.pMatrix.props
                  , C = this.rMatrix.props
                  , c = this.sMatrix.props;
                this.pMatrix.reset(),
                this.rMatrix.reset(),
                this.sMatrix.reset(),
                this.tMatrix.reset(),
                this.matrix.reset();
                var m = 0;
                if (u > 0) {
                    for (; m < x; )
                        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                        m += 1;
                    b && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, b, !1),
                    m += b)
                } else if (u < 0) {
                    for (; m > x; )
                        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0),
                        m -= 1;
                    b && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -b, !0),
                    m -= b)
                }
                i = this.data.m === 1 ? 0 : this._currentCopies - 1,
                s = this.data.m === 1 ? 1 : -1,
                a = this._currentCopies;
                for (var p, g; a; ) {
                    if (e = this.elemsData[i].it,
                    r = e[e.length - 1].transform.mProps.v.props,
                    g = r.length,
                    e[e.length - 1].transform.mProps._mdf = !0,
                    e[e.length - 1].transform.op._mdf = !0,
                    e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)),
                    m !== 0) {
                        for ((i !== 0 && s === 1 || i !== this._currentCopies - 1 && s === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                        this.matrix.transform(C[0], C[1], C[2], C[3], C[4], C[5], C[6], C[7], C[8], C[9], C[10], C[11], C[12], C[13], C[14], C[15]),
                        this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]),
                        this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]),
                        p = 0; p < g; p += 1)
                            r[p] = this.matrix.props[p];
                        this.matrix.reset()
                    } else
                        for (this.matrix.reset(),
                        p = 0; p < g; p += 1)
                            r[p] = this.matrix.props[p];
                    m += 1,
                    a -= 1,
                    i += s
                }
            } else
                for (a = this._currentCopies,
                i = 0,
                s = 1; a; )
                    e = this.elemsData[i].it,
                    r = e[e.length - 1].transform.mProps.v.props,
                    e[e.length - 1].transform.mProps._mdf = !1,
                    e[e.length - 1].transform.op._mdf = !1,
                    a -= 1,
                    i += s;
            return n
        }
        ,
        RepeaterModifier.prototype.addShape = function() {}
        ;
        function RoundCornersModifier() {}
        extendPrototype([ShapeModifier], RoundCornersModifier),
        RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys,
            this.rd = PropertyFactory.getProp(t, e.r, 0, null, this),
            this._isAnimated = !!this.rd.effectsSequence.length
        }
        ,
        RoundCornersModifier.prototype.processPath = function(t, e) {
            var r = shapePool.newElement();
            r.c = t.c;
            var i, s = t._length, a, n, l, o, f, y, P = 0, u, b, x, d, C, c;
            for (i = 0; i < s; i += 1)
                a = t.v[i],
                l = t.o[i],
                n = t.i[i],
                a[0] === l[0] && a[1] === l[1] && a[0] === n[0] && a[1] === n[1] ? (i === 0 || i === s - 1) && !t.c ? (r.setTripleAt(a[0], a[1], l[0], l[1], n[0], n[1], P),
                P += 1) : (i === 0 ? o = t.v[s - 1] : o = t.v[i - 1],
                f = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)),
                y = f ? Math.min(f / 2, e) / f : 0,
                C = a[0] + (o[0] - a[0]) * y,
                u = C,
                c = a[1] - (a[1] - o[1]) * y,
                b = c,
                x = u - (u - a[0]) * roundCorner,
                d = b - (b - a[1]) * roundCorner,
                r.setTripleAt(u, b, x, d, C, c, P),
                P += 1,
                i === s - 1 ? o = t.v[0] : o = t.v[i + 1],
                f = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)),
                y = f ? Math.min(f / 2, e) / f : 0,
                x = a[0] + (o[0] - a[0]) * y,
                u = x,
                d = a[1] + (o[1] - a[1]) * y,
                b = d,
                C = u - (u - a[0]) * roundCorner,
                c = b - (b - a[1]) * roundCorner,
                r.setTripleAt(u, b, x, d, C, c, P),
                P += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], P),
                P += 1);
            return r
        }
        ,
        RoundCornersModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length, s, a, n = this.rd.v;
            if (n !== 0) {
                var l, o;
                for (r = 0; r < i; r += 1) {
                    if (l = this.shapes[r],
                    o = l.localShapeCollection,
                    !(!l.shape._mdf && !this._mdf && !t))
                        for (o.releaseShapes(),
                        l.shape._mdf = !0,
                        e = l.shape.paths.shapes,
                        a = l.shape.paths._length,
                        s = 0; s < a; s += 1)
                            o.addShape(this.processPath(e[s], n));
                    l.shape.paths = l.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        }
        ;
        function floatEqual(t, e) {
            return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e))
        }
        function floatZero(t) {
            return Math.abs(t) <= 1e-5
        }
        function lerp(t, e, r) {
            return t * (1 - r) + e * r
        }
        function lerpPoint(t, e, r) {
            return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)]
        }
        function quadRoots(t, e, r) {
            if (t === 0)
                return [];
            var i = e * e - 4 * t * r;
            if (i < 0)
                return [];
            var s = -e / (2 * t);
            if (i === 0)
                return [s];
            var a = Math.sqrt(i) / (2 * t);
            return [s - a, s + a]
        }
        function polynomialCoefficients(t, e, r, i) {
            return [-t + 3 * e - 3 * r + i, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t]
        }
        function singlePoint(t) {
            return new PolynomialBezier(t,t,t,t,!1)
        }
        function PolynomialBezier(t, e, r, i, s) {
            s && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)),
            s && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
            var a = polynomialCoefficients(t[0], e[0], r[0], i[0])
              , n = polynomialCoefficients(t[1], e[1], r[1], i[1]);
            this.a = [a[0], n[0]],
            this.b = [a[1], n[1]],
            this.c = [a[2], n[2]],
            this.d = [a[3], n[3]],
            this.points = [t, e, r, i]
        }
        PolynomialBezier.prototype.point = function(t) {
            return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
        }
        ,
        PolynomialBezier.prototype.derivative = function(t) {
            return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
        }
        ,
        PolynomialBezier.prototype.tangentAngle = function(t) {
            var e = this.derivative(t);
            return Math.atan2(e[1], e[0])
        }
        ,
        PolynomialBezier.prototype.normalAngle = function(t) {
            var e = this.derivative(t);
            return Math.atan2(e[0], e[1])
        }
        ,
        PolynomialBezier.prototype.inflectionPoints = function() {
            var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
            if (floatZero(t))
                return [];
            var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t
              , r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
            if (r < 0)
                return [];
            var i = Math.sqrt(r);
            return floatZero(i) ? i > 0 && i < 1 ? [e] : [] : [e - i, e + i].filter(function(s) {
                return s > 0 && s < 1
            })
        }
        ,
        PolynomialBezier.prototype.split = function(t) {
            if (t <= 0)
                return [singlePoint(this.points[0]), this];
            if (t >= 1)
                return [this, singlePoint(this.points[this.points.length - 1])];
            var e = lerpPoint(this.points[0], this.points[1], t)
              , r = lerpPoint(this.points[1], this.points[2], t)
              , i = lerpPoint(this.points[2], this.points[3], t)
              , s = lerpPoint(e, r, t)
              , a = lerpPoint(r, i, t)
              , n = lerpPoint(s, a, t);
            return [new PolynomialBezier(this.points[0],e,s,n,!0), new PolynomialBezier(n,a,i,this.points[3],!0)]
        }
        ;
        function extrema(t, e) {
            var r = t.points[0][e]
              , i = t.points[t.points.length - 1][e];
            if (r > i) {
                var s = i;
                i = r,
                r = s
            }
            for (var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < a.length; n += 1)
                if (a[n] > 0 && a[n] < 1) {
                    var l = t.point(a[n])[e];
                    l < r ? r = l : l > i && (i = l)
                }
            return {
                min: r,
                max: i
            }
        }
        PolynomialBezier.prototype.bounds = function() {
            return {
                x: extrema(this, 0),
                y: extrema(this, 1)
            }
        }
        ,
        PolynomialBezier.prototype.boundingBox = function() {
            var t = this.bounds();
            return {
                left: t.x.min,
                right: t.x.max,
                top: t.y.min,
                bottom: t.y.max,
                width: t.x.max - t.x.min,
                height: t.y.max - t.y.min,
                cx: (t.x.max + t.x.min) / 2,
                cy: (t.y.max + t.y.min) / 2
            }
        }
        ;
        function intersectData(t, e, r) {
            var i = t.boundingBox();
            return {
                cx: i.cx,
                cy: i.cy,
                width: i.width,
                height: i.height,
                bez: t,
                t: (e + r) / 2,
                t1: e,
                t2: r
            }
        }
        function splitData(t) {
            var e = t.bez.split(.5);
            return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
        }
        function boxIntersect(t, e) {
            return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height
        }
        function intersectsImpl(t, e, r, i, s, a) {
            if (boxIntersect(t, e)) {
                if (r >= a || t.width <= i && t.height <= i && e.width <= i && e.height <= i) {
                    s.push([t.t, e.t]);
                    return
                }
                var n = splitData(t)
                  , l = splitData(e);
                intersectsImpl(n[0], l[0], r + 1, i, s, a),
                intersectsImpl(n[0], l[1], r + 1, i, s, a),
                intersectsImpl(n[1], l[0], r + 1, i, s, a),
                intersectsImpl(n[1], l[1], r + 1, i, s, a)
            }
        }
        PolynomialBezier.prototype.intersections = function(t, e, r) {
            e === void 0 && (e = 2),
            r === void 0 && (r = 7);
            var i = [];
            return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, r),
            i
        }
        ,
        PolynomialBezier.shapeSegment = function(t, e) {
            var r = (e + 1) % t.length();
            return new PolynomialBezier(t.v[e],t.o[e],t.i[r],t.v[r],!0)
        }
        ,
        PolynomialBezier.shapeSegmentInverted = function(t, e) {
            var r = (e + 1) % t.length();
            return new PolynomialBezier(t.v[r],t.i[r],t.o[e],t.v[e],!0)
        }
        ;
        function crossProduct(t, e) {
            return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
        }
        function lineIntersection(t, e, r, i) {
            var s = [t[0], t[1], 1]
              , a = [e[0], e[1], 1]
              , n = [r[0], r[1], 1]
              , l = [i[0], i[1], 1]
              , o = crossProduct(crossProduct(s, a), crossProduct(n, l));
            return floatZero(o[2]) ? null : [o[0] / o[2], o[1] / o[2]]
        }
        function polarOffset(t, e, r) {
            return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r]
        }
        function pointDistance(t, e) {
            return Math.hypot(t[0] - e[0], t[1] - e[1])
        }
        function pointEqual(t, e) {
            return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
        }
        function ZigZagModifier() {}
        extendPrototype([ShapeModifier], ZigZagModifier),
        ZigZagModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys,
            this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this),
            this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this),
            this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this),
            this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0
        }
        ;
        function setPoint(t, e, r, i, s, a, n) {
            var l = r - Math.PI / 2
              , o = r + Math.PI / 2
              , f = e[0] + Math.cos(r) * i * s
              , y = e[1] - Math.sin(r) * i * s;
            t.setTripleAt(f, y, f + Math.cos(l) * a, y - Math.sin(l) * a, f + Math.cos(o) * n, y - Math.sin(o) * n, t.length())
        }
        function getPerpendicularVector(t, e) {
            var r = [e[0] - t[0], e[1] - t[1]]
              , i = -Math.PI * .5
              , s = [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]];
            return s
        }
        function getProjectingAngle(t, e) {
            var r = e === 0 ? t.length() - 1 : e - 1
              , i = (e + 1) % t.length()
              , s = t.v[r]
              , a = t.v[i]
              , n = getPerpendicularVector(s, a);
            return Math.atan2(0, 1) - Math.atan2(n[1], n[0])
        }
        function zigZagCorner(t, e, r, i, s, a, n) {
            var l = getProjectingAngle(e, r)
              , o = e.v[r % e._length]
              , f = e.v[r === 0 ? e._length - 1 : r - 1]
              , y = e.v[(r + 1) % e._length]
              , P = a === 2 ? Math.sqrt(Math.pow(o[0] - f[0], 2) + Math.pow(o[1] - f[1], 2)) : 0
              , u = a === 2 ? Math.sqrt(Math.pow(o[0] - y[0], 2) + Math.pow(o[1] - y[1], 2)) : 0;
            setPoint(t, e.v[r % e._length], l, n, i, u / ((s + 1) * 2), P / ((s + 1) * 2))
        }
        function zigZagSegment(t, e, r, i, s, a) {
            for (var n = 0; n < i; n += 1) {
                var l = (n + 1) / (i + 1)
                  , o = s === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0
                  , f = e.normalAngle(l)
                  , y = e.point(l);
                setPoint(t, y, f, a, r, o / ((i + 1) * 2), o / ((i + 1) * 2)),
                a = -a
            }
            return a
        }
        ZigZagModifier.prototype.processPath = function(t, e, r, i) {
            var s = t._length
              , a = shapePool.newElement();
            if (a.c = t.c,
            t.c || (s -= 1),
            s === 0)
                return a;
            var n = -1
              , l = PolynomialBezier.shapeSegment(t, 0);
            zigZagCorner(a, t, 0, e, r, i, n);
            for (var o = 0; o < s; o += 1)
                n = zigZagSegment(a, l, e, r, i, -n),
                o === s - 1 && !t.c ? l = null : l = PolynomialBezier.shapeSegment(t, (o + 1) % s),
                zigZagCorner(a, t, o + 1, e, r, i, n);
            return a
        }
        ,
        ZigZagModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length, s, a, n = this.amplitude.v, l = Math.max(0, Math.round(this.frequency.v)), o = this.pointsType.v;
            if (n !== 0) {
                var f, y;
                for (r = 0; r < i; r += 1) {
                    if (f = this.shapes[r],
                    y = f.localShapeCollection,
                    !(!f.shape._mdf && !this._mdf && !t))
                        for (y.releaseShapes(),
                        f.shape._mdf = !0,
                        e = f.shape.paths.shapes,
                        a = f.shape.paths._length,
                        s = 0; s < a; s += 1)
                            y.addShape(this.processPath(e[s], n, l, o));
                    f.shape.paths = f.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        }
        ;
        function linearOffset(t, e, r) {
            var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
            return [polarOffset(t, i, r), polarOffset(e, i, r)]
        }
        function offsetSegment(t, e) {
            var r, i, s, a, n, l, o;
            o = linearOffset(t.points[0], t.points[1], e),
            r = o[0],
            i = o[1],
            o = linearOffset(t.points[1], t.points[2], e),
            s = o[0],
            a = o[1],
            o = linearOffset(t.points[2], t.points[3], e),
            n = o[0],
            l = o[1];
            var f = lineIntersection(r, i, s, a);
            f === null && (f = i);
            var y = lineIntersection(n, l, s, a);
            return y === null && (y = n),
            new PolynomialBezier(r,f,y,l)
        }
        function joinLines(t, e, r, i, s) {
            var a = e.points[3]
              , n = r.points[0];
            if (i === 3 || pointEqual(a, n))
                return a;
            if (i === 2) {
                var l = -e.tangentAngle(1)
                  , o = -r.tangentAngle(0) + Math.PI
                  , f = lineIntersection(a, polarOffset(a, l + Math.PI / 2, 100), n, polarOffset(n, l + Math.PI / 2, 100))
                  , y = f ? pointDistance(f, a) : pointDistance(a, n) / 2
                  , P = polarOffset(a, l, 2 * y * roundCorner);
                return t.setXYAt(P[0], P[1], "o", t.length() - 1),
                P = polarOffset(n, o, 2 * y * roundCorner),
                t.setTripleAt(n[0], n[1], n[0], n[1], P[0], P[1], t.length()),
                n
            }
            var u = pointEqual(a, e.points[2]) ? e.points[0] : e.points[2]
              , b = pointEqual(n, r.points[1]) ? r.points[3] : r.points[1]
              , x = lineIntersection(u, a, n, b);
            return x && pointDistance(x, a) < s ? (t.setTripleAt(x[0], x[1], x[0], x[1], x[0], x[1], t.length()),
            x) : a
        }
        function getIntersection(t, e) {
            var r = t.intersections(e);
            return r.length && floatEqual(r[0][0], 1) && r.shift(),
            r.length ? r[0] : null
        }
        function pruneSegmentIntersection(t, e) {
            var r = t.slice()
              , i = e.slice()
              , s = getIntersection(t[t.length - 1], e[0]);
            return s && (r[t.length - 1] = t[t.length - 1].split(s[0])[0],
            i[0] = e[0].split(s[1])[1]),
            t.length > 1 && e.length > 1 && (s = getIntersection(t[0], e[e.length - 1]),
            s) ? [[t[0].split(s[0])[0]], [e[e.length - 1].split(s[1])[1]]] : [r, i]
        }
        function pruneIntersections(t) {
            for (var e, r = 1; r < t.length; r += 1)
                e = pruneSegmentIntersection(t[r - 1], t[r]),
                t[r - 1] = e[0],
                t[r] = e[1];
            return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]),
            t[t.length - 1] = e[0],
            t[0] = e[1]),
            t
        }
        function offsetSegmentSplit(t, e) {
            var r = t.inflectionPoints(), i, s, a, n;
            if (r.length === 0)
                return [offsetSegment(t, e)];
            if (r.length === 1 || floatEqual(r[1], 1))
                return a = t.split(r[0]),
                i = a[0],
                s = a[1],
                [offsetSegment(i, e), offsetSegment(s, e)];
            a = t.split(r[0]),
            i = a[0];
            var l = (r[1] - r[0]) / (1 - r[0]);
            return a = a[1].split(l),
            n = a[0],
            s = a[1],
            [offsetSegment(i, e), offsetSegment(n, e), offsetSegment(s, e)]
        }
        function OffsetPathModifier() {}
        extendPrototype([ShapeModifier], OffsetPathModifier),
        OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys,
            this.amount = PropertyFactory.getProp(t, e.a, 0, null, this),
            this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this),
            this.lineJoin = e.lj,
            this._isAnimated = this.amount.effectsSequence.length !== 0
        }
        ,
        OffsetPathModifier.prototype.processPath = function(t, e, r, i) {
            var s = shapePool.newElement();
            s.c = t.c;
            var a = t.length();
            t.c || (a -= 1);
            var n, l, o, f = [];
            for (n = 0; n < a; n += 1)
                o = PolynomialBezier.shapeSegment(t, n),
                f.push(offsetSegmentSplit(o, e));
            if (!t.c)
                for (n = a - 1; n >= 0; n -= 1)
                    o = PolynomialBezier.shapeSegmentInverted(t, n),
                    f.push(offsetSegmentSplit(o, e));
            f = pruneIntersections(f);
            var y = null
              , P = null;
            for (n = 0; n < f.length; n += 1) {
                var u = f[n];
                for (P && (y = joinLines(s, P, u[0], r, i)),
                P = u[u.length - 1],
                l = 0; l < u.length; l += 1)
                    o = u[l],
                    y && pointEqual(o.points[0], y) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()),
                    s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()),
                    y = o.points[3]
            }
            return f.length && joinLines(s, P, f[0][0], r, i),
            s
        }
        ,
        OffsetPathModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length, s, a, n = this.amount.v, l = this.miterLimit.v, o = this.lineJoin;
            if (n !== 0) {
                var f, y;
                for (r = 0; r < i; r += 1) {
                    if (f = this.shapes[r],
                    y = f.localShapeCollection,
                    !(!f.shape._mdf && !this._mdf && !t))
                        for (y.releaseShapes(),
                        f.shape._mdf = !0,
                        e = f.shape.paths.shapes,
                        a = f.shape.paths._length,
                        s = 0; s < a; s += 1)
                            y.addShape(this.processPath(e[s], n, o, l));
                    f.shape.paths = f.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        }
        ;
        function getFontProperties(t) {
            for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", s = e.length, a, n = 0; n < s; n += 1)
                switch (a = e[n].toLowerCase(),
                a) {
                case "italic":
                    i = "italic";
                    break;
                case "bold":
                    r = "700";
                    break;
                case "black":
                    r = "900";
                    break;
                case "medium":
                    r = "500";
                    break;
                case "regular":
                case "normal":
                    r = "400";
                    break;
                case "light":
                case "thin":
                    r = "200";
                    break
                }
            return {
                style: i,
                weight: t.fWeight || r
            }
        }
        var FontManager = function() {
            var t = 5e3
              , e = {
                w: 0,
                size: 0,
                shapes: [],
                data: {
                    shapes: []
                }
            }
              , r = [];
            r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
            var i = 127988
              , s = 917631
              , a = 917601
              , n = 917626
              , l = 65039
              , o = 8205
              , f = 127462
              , y = 127487
              , P = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
            function u(A) {
                var F = A.split(","), k, S = F.length, I = [];
                for (k = 0; k < S; k += 1)
                    F[k] !== "sans-serif" && F[k] !== "monospace" && I.push(F[k]);
                return I.join(",")
            }
            function b(A, F) {
                var k = createTag("span");
                k.setAttribute("aria-hidden", !0),
                k.style.fontFamily = F;
                var S = createTag("span");
                S.innerText = "giItT1WQy@!-/#",
                k.style.position = "absolute",
                k.style.left = "-10000px",
                k.style.top = "-10000px",
                k.style.fontSize = "300px",
                k.style.fontVariant = "normal",
                k.style.fontStyle = "normal",
                k.style.fontWeight = "normal",
                k.style.letterSpacing = "0",
                k.appendChild(S),
                document.body.appendChild(k);
                var I = S.offsetWidth;
                return S.style.fontFamily = u(A) + ", " + F,
                {
                    node: S,
                    w: I,
                    parent: k
                }
            }
            function x() {
                var A, F = this.fonts.length, k, S, I = F;
                for (A = 0; A < F; A += 1)
                    this.fonts[A].loaded ? I -= 1 : this.fonts[A].fOrigin === "n" || this.fonts[A].origin === 0 ? this.fonts[A].loaded = !0 : (k = this.fonts[A].monoCase.node,
                    S = this.fonts[A].monoCase.w,
                    k.offsetWidth !== S ? (I -= 1,
                    this.fonts[A].loaded = !0) : (k = this.fonts[A].sansCase.node,
                    S = this.fonts[A].sansCase.w,
                    k.offsetWidth !== S && (I -= 1,
                    this.fonts[A].loaded = !0)),
                    this.fonts[A].loaded && (this.fonts[A].sansCase.parent.parentNode.removeChild(this.fonts[A].sansCase.parent),
                    this.fonts[A].monoCase.parent.parentNode.removeChild(this.fonts[A].monoCase.parent)));
                I !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
            }
            function d(A, F) {
                var k = document.body && F ? "svg" : "canvas", S, I = getFontProperties(A);
                if (k === "svg") {
                    var V = createNS("text");
                    V.style.fontSize = "100px",
                    V.setAttribute("font-family", A.fFamily),
                    V.setAttribute("font-style", I.style),
                    V.setAttribute("font-weight", I.weight),
                    V.textContent = "1",
                    A.fClass ? (V.style.fontFamily = "inherit",
                    V.setAttribute("class", A.fClass)) : V.style.fontFamily = A.fFamily,
                    F.appendChild(V),
                    S = V
                } else {
                    var G = new OffscreenCanvas(500,500).getContext("2d");
                    G.font = I.style + " " + I.weight + " 100px " + A.fFamily,
                    S = G
                }
                function j($) {
                    return k === "svg" ? (S.textContent = $,
                    S.getComputedTextLength()) : S.measureText($).width
                }
                return {
                    measureText: j
                }
            }
            function C(A, F) {
                if (!A) {
                    this.isLoaded = !0;
                    return
                }
                if (this.chars) {
                    this.isLoaded = !0,
                    this.fonts = A.list;
                    return
                }
                if (!document.body) {
                    this.isLoaded = !0,
                    A.list.forEach(function(Z) {
                        Z.helper = d(Z),
                        Z.cache = {}
                    }),
                    this.fonts = A.list;
                    return
                }
                var k = A.list, S, I = k.length, V = I;
                for (S = 0; S < I; S += 1) {
                    var G = !0, j, $;
                    if (k[S].loaded = !1,
                    k[S].monoCase = b(k[S].fFamily, "monospace"),
                    k[S].sansCase = b(k[S].fFamily, "sans-serif"),
                    !k[S].fPath)
                        k[S].loaded = !0,
                        V -= 1;
                    else if (k[S].fOrigin === "p" || k[S].origin === 3) {
                        if (j = document.querySelectorAll('style[f-forigin="p"][f-family="' + k[S].fFamily + '"], style[f-origin="3"][f-family="' + k[S].fFamily + '"]'),
                        j.length > 0 && (G = !1),
                        G) {
                            var W = createTag("style");
                            W.setAttribute("f-forigin", k[S].fOrigin),
                            W.setAttribute("f-origin", k[S].origin),
                            W.setAttribute("f-family", k[S].fFamily),
                            W.type = "text/css",
                            W.innerText = "@font-face {font-family: " + k[S].fFamily + "; font-style: normal; src: url('" + k[S].fPath + "');}",
                            F.appendChild(W)
                        }
                    } else if (k[S].fOrigin === "g" || k[S].origin === 1) {
                        for (j = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),
                        $ = 0; $ < j.length; $ += 1)
                            j[$].href.indexOf(k[S].fPath) !== -1 && (G = !1);
                        if (G) {
                            var q = createTag("link");
                            q.setAttribute("f-forigin", k[S].fOrigin),
                            q.setAttribute("f-origin", k[S].origin),
                            q.type = "text/css",
                            q.rel = "stylesheet",
                            q.href = k[S].fPath,
                            document.body.appendChild(q)
                        }
                    } else if (k[S].fOrigin === "t" || k[S].origin === 2) {
                        for (j = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),
                        $ = 0; $ < j.length; $ += 1)
                            k[S].fPath === j[$].src && (G = !1);
                        if (G) {
                            var X = createTag("link");
                            X.setAttribute("f-forigin", k[S].fOrigin),
                            X.setAttribute("f-origin", k[S].origin),
                            X.setAttribute("rel", "stylesheet"),
                            X.setAttribute("href", k[S].fPath),
                            F.appendChild(X)
                        }
                    }
                    k[S].helper = d(k[S], F),
                    k[S].cache = {},
                    this.fonts.push(k[S])
                }
                V === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
            }
            function c(A) {
                if (A) {
                    this.chars || (this.chars = []);
                    var F, k = A.length, S, I = this.chars.length, V;
                    for (F = 0; F < k; F += 1) {
                        for (S = 0,
                        V = !1; S < I; )
                            this.chars[S].style === A[F].style && this.chars[S].fFamily === A[F].fFamily && this.chars[S].ch === A[F].ch && (V = !0),
                            S += 1;
                        V || (this.chars.push(A[F]),
                        I += 1)
                    }
                }
            }
            function m(A, F, k) {
                for (var S = 0, I = this.chars.length; S < I; ) {
                    if (this.chars[S].ch === A && this.chars[S].style === F && this.chars[S].fFamily === k)
                        return this.chars[S];
                    S += 1
                }
                return (typeof A == "string" && A.charCodeAt(0) !== 13 || !A) && console && console.warn && !this._warned && (this._warned = !0,
                console.warn("Missing character from exported characters list: ", A, F, k)),
                e
            }
            function p(A, F, k) {
                var S = this.getFontByName(F)
                  , I = A;
                if (!S.cache[I]) {
                    var V = S.helper;
                    if (A === " ") {
                        var G = V.measureText("|" + A + "|")
                          , j = V.measureText("||");
                        S.cache[I] = (G - j) / 100
                    } else
                        S.cache[I] = V.measureText(A) / 100
                }
                return S.cache[I] * k
            }
            function g(A) {
                for (var F = 0, k = this.fonts.length; F < k; ) {
                    if (this.fonts[F].fName === A)
                        return this.fonts[F];
                    F += 1
                }
                return this.fonts[0]
            }
            function E(A) {
                var F = 0
                  , k = A.charCodeAt(0);
                if (k >= 55296 && k <= 56319) {
                    var S = A.charCodeAt(1);
                    S >= 56320 && S <= 57343 && (F = (k - 55296) * 1024 + S - 56320 + 65536)
                }
                return F
            }
            function _(A, F) {
                var k = A.toString(16) + F.toString(16);
                return P.indexOf(k) !== -1
            }
            function T(A) {
                return A === o
            }
            function M(A) {
                return A === l
            }
            function B(A) {
                var F = E(A);
                return F >= f && F <= y
            }
            function z(A) {
                return B(A.substr(0, 2)) && B(A.substr(2, 2))
            }
            function R(A) {
                return r.indexOf(A) !== -1
            }
            function L(A, F) {
                var k = E(A.substr(F, 2));
                if (k !== i)
                    return !1;
                var S = 0;
                for (F += 2; S < 5; ) {
                    if (k = E(A.substr(F, 2)),
                    k < a || k > n)
                        return !1;
                    S += 1,
                    F += 2
                }
                return E(A.substr(F, 2)) === s
            }
            function O() {
                this.isLoaded = !0
            }
            var N = function() {
                this.fonts = [],
                this.chars = null,
                this.typekitLoaded = 0,
                this.isLoaded = !1,
                this._warned = !1,
                this.initTime = Date.now(),
                this.setIsLoadedBinded = this.setIsLoaded.bind(this),
                this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
            };
            N.isModifier = _,
            N.isZeroWidthJoiner = T,
            N.isFlagEmoji = z,
            N.isRegionalCode = B,
            N.isCombinedCharacter = R,
            N.isRegionalFlag = L,
            N.isVariationSelector = M,
            N.BLACK_FLAG_CODE_POINT = i;
            var D = {
                addChars: c,
                addFonts: C,
                getCharData: m,
                getFontByName: g,
                measureText: p,
                checkLoadedFonts: x,
                setIsLoaded: O
            };
            return N.prototype = D,
            N
        }();
        function SlotManager(t) {
            this.animationData = t
        }
        SlotManager.prototype.getProp = function(t) {
            return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
        }
        ;
        function slotFactory(t) {
            return new SlotManager(t)
        }
        function RenderableElement() {}
        RenderableElement.prototype = {
            initRenderable: function() {
                this.isInRange = !1,
                this.hidden = !1,
                this.isTransparent = !1,
                this.renderableComponents = []
            },
            addRenderableComponent: function(e) {
                this.renderableComponents.indexOf(e) === -1 && this.renderableComponents.push(e)
            },
            removeRenderableComponent: function(e) {
                this.renderableComponents.indexOf(e) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1)
            },
            prepareRenderableFrame: function(e) {
                this.checkLayerLimits(e)
            },
            checkTransparency: function() {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0,
                this.hide()) : this.isTransparent && (this.isTransparent = !1,
                this.show())
            },
            checkLayerLimits: function(e) {
                this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? this.isInRange !== !0 && (this.globalData._mdf = !0,
                this._mdf = !0,
                this.isInRange = !0,
                this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0,
                this.isInRange = !1,
                this.hide())
            },
            renderRenderable: function() {
                var e, r = this.renderableComponents.length;
                for (e = 0; e < r; e += 1)
                    this.renderableComponents[e].renderFrame(this._isFirstFrame)
            },
            sourceRectAtTime: function() {
                return {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                }
            },
            getLayerSize: function() {
                return this.data.ty === 5 ? {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                } : {
                    w: this.data.width,
                    h: this.data.height
                }
            }
        };
        var getBlendMode = function() {
            var t = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity"
            };
            return function(e) {
                return t[e] || ""
            }
        }();
        function SliderEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }
        function AngleEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }
        function ColorEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }
        function PointEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }
        function LayerIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }
        function MaskIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }
        function CheckboxEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }
        function NoValueEffect() {
            this.p = {}
        }
        function EffectsManager(t, e) {
            var r = t.ef || [];
            this.effectElements = [];
            var i, s = r.length, a;
            for (i = 0; i < s; i += 1)
                a = new GroupEffect(r[i],e),
                this.effectElements.push(a)
        }
        function GroupEffect(t, e) {
            this.init(t, e)
        }
        extendPrototype([DynamicPropertyContainer], GroupEffect),
        GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties,
        GroupEffect.prototype.init = function(t, e) {
            this.data = t,
            this.effectElements = [],
            this.initDynamicPropertyContainer(e);
            var r, i = this.data.ef.length, s, a = this.data.ef;
            for (r = 0; r < i; r += 1) {
                switch (s = null,
                a[r].ty) {
                case 0:
                    s = new SliderEffect(a[r],e,this);
                    break;
                case 1:
                    s = new AngleEffect(a[r],e,this);
                    break;
                case 2:
                    s = new ColorEffect(a[r],e,this);
                    break;
                case 3:
                    s = new PointEffect(a[r],e,this);
                    break;
                case 4:
                case 7:
                    s = new CheckboxEffect(a[r],e,this);
                    break;
                case 10:
                    s = new LayerIndexEffect(a[r],e,this);
                    break;
                case 11:
                    s = new MaskIndexEffect(a[r],e,this);
                    break;
                case 5:
                    s = new EffectsManager(a[r],e);
                    break;
                default:
                    s = new NoValueEffect(a[r]);
                    break
                }
                s && this.effectElements.push(s)
            }
        }
        ;
        function BaseElement() {}
        BaseElement.prototype = {
            checkMasks: function() {
                if (!this.data.hasMask)
                    return !1;
                for (var e = 0, r = this.data.masksProperties.length; e < r; ) {
                    if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== !1)
                        return !0;
                    e += 1
                }
                return !1
            },
            initExpressions: function() {
                var e = getExpressionInterfaces();
                if (e) {
                    var r = e("layer")
                      , i = e("effects")
                      , s = e("shape")
                      , a = e("text")
                      , n = e("comp");
                    this.layerInterface = r(this),
                    this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                    var l = i.createEffectsInterface(this, this.layerInterface);
                    this.layerInterface.registerEffectsInterface(l),
                    this.data.ty === 0 || this.data.xt ? this.compInterface = n(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface),
                    this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = a(this),
                    this.layerInterface.text = this.layerInterface.textInterface)
                }
            },
            setBlendMode: function() {
                var e = getBlendMode(this.data.bm)
                  , r = this.baseElement || this.layerElement;
                r.style["mix-blend-mode"] = e
            },
            initBaseData: function(e, r, i) {
                this.globalData = r,
                this.comp = i,
                this.data = e,
                this.layerId = createElementID(),
                this.data.sr || (this.data.sr = 1),
                this.effectsManager = new EffectsManager(this.data,this,this.dynamicProperties)
            },
            getType: function() {
                return this.type
            },
            sourceRectAtTime: function() {}
        };
        function FrameElement() {}
        FrameElement.prototype = {
            initFrame: function() {
                this._isFirstFrame = !1,
                this.dynamicProperties = [],
                this._mdf = !1
            },
            prepareProperties: function(e, r) {
                var i, s = this.dynamicProperties.length;
                for (i = 0; i < s; i += 1)
                    (r || this._isParent && this.dynamicProperties[i].propType === "transform") && (this.dynamicProperties[i].getValue(),
                    this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0,
                    this._mdf = !0))
            },
            addDynamicProperty: function(e) {
                this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e)
            }
        };
        function FootageElement(t, e, r) {
            this.initFrame(),
            this.initRenderable(),
            this.assetData = e.getAssetData(t.refId),
            this.footageData = e.imageLoader.getAsset(this.assetData),
            this.initBaseData(t, e, r)
        }
        FootageElement.prototype.prepareFrame = function() {}
        ,
        extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement),
        FootageElement.prototype.getBaseElement = function() {
            return null
        }
        ,
        FootageElement.prototype.renderFrame = function() {}
        ,
        FootageElement.prototype.destroy = function() {}
        ,
        FootageElement.prototype.initExpressions = function() {
            var t = getExpressionInterfaces();
            if (t) {
                var e = t("footage");
                this.layerInterface = e(this)
            }
        }
        ,
        FootageElement.prototype.getFootageData = function() {
            return this.footageData
        }
        ;
        function AudioElement(t, e, r) {
            this.initFrame(),
            this.initRenderable(),
            this.assetData = e.getAssetData(t.refId),
            this.initBaseData(t, e, r),
            this._isPlaying = !1,
            this._canPlay = !1;
            var i = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(i),
            this._currentTime = 0,
            this.globalData.audioController.addAudio(this),
            this._volumeMultiplier = 1,
            this._volume = 1,
            this._previousVolume = null,
            this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            },
            this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
                k: [100]
            }, 1, .01, this)
        }
        AudioElement.prototype.prepareFrame = function(t) {
            if (this.prepareRenderableFrame(t, !0),
            this.prepareProperties(t, !0),
            this.tm._placeholder)
                this._currentTime = t / this.data.sr;
            else {
                var e = this.tm.v;
                this._currentTime = e
            }
            this._volume = this.lv.v[0];
            var r = this._volume * this._volumeMultiplier;
            this._previousVolume !== r && (this._previousVolume = r,
            this.audio.volume(r))
        }
        ,
        extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement),
        AudioElement.prototype.renderFrame = function() {
            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(),
            this.audio.seek(this._currentTime / this.globalData.frameRate),
            this._isPlaying = !0))
        }
        ,
        AudioElement.prototype.show = function() {}
        ,
        AudioElement.prototype.hide = function() {
            this.audio.pause(),
            this._isPlaying = !1
        }
        ,
        AudioElement.prototype.pause = function() {
            this.audio.pause(),
            this._isPlaying = !1,
            this._canPlay = !1
        }
        ,
        AudioElement.prototype.resume = function() {
            this._canPlay = !0
        }
        ,
        AudioElement.prototype.setRate = function(t) {
            this.audio.rate(t)
        }
        ,
        AudioElement.prototype.volume = function(t) {
            this._volumeMultiplier = t,
            this._previousVolume = t * this._volume,
            this.audio.volume(this._previousVolume)
        }
        ,
        AudioElement.prototype.getBaseElement = function() {
            return null
        }
        ,
        AudioElement.prototype.destroy = function() {}
        ,
        AudioElement.prototype.sourceRectAtTime = function() {}
        ,
        AudioElement.prototype.initExpressions = function() {}
        ;
        function BaseRenderer() {}
        BaseRenderer.prototype.checkLayers = function(t) {
            var e, r = this.layers.length, i;
            for (this.completeLayers = !0,
            e = r - 1; e >= 0; e -= 1)
                this.elements[e] || (i = this.layers[e],
                i.ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e)),
                this.completeLayers = this.elements[e] ? this.completeLayers : !1;
            this.checkPendingElements()
        }
        ,
        BaseRenderer.prototype.createItem = function(t) {
            switch (t.ty) {
            case 2:
                return this.createImage(t);
            case 0:
                return this.createComp(t);
            case 1:
                return this.createSolid(t);
            case 3:
                return this.createNull(t);
            case 4:
                return this.createShape(t);
            case 5:
                return this.createText(t);
            case 6:
                return this.createAudio(t);
            case 13:
                return this.createCamera(t);
            case 15:
                return this.createFootage(t);
            default:
                return this.createNull(t)
            }
        }
        ,
        BaseRenderer.prototype.createCamera = function() {
            throw new Error("You're using a 3d camera. Try the html renderer.")
        }
        ,
        BaseRenderer.prototype.createAudio = function(t) {
            return new AudioElement(t,this.globalData,this)
        }
        ,
        BaseRenderer.prototype.createFootage = function(t) {
            return new FootageElement(t,this.globalData,this)
        }
        ,
        BaseRenderer.prototype.buildAllItems = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1)
                this.buildItem(t);
            this.checkPendingElements()
        }
        ,
        BaseRenderer.prototype.includeLayers = function(t) {
            this.completeLayers = !1;
            var e, r = t.length, i, s = this.layers.length;
            for (e = 0; e < r; e += 1)
                for (i = 0; i < s; ) {
                    if (this.layers[i].id === t[e].id) {
                        this.layers[i] = t[e];
                        break
                    }
                    i += 1
                }
        }
        ,
        BaseRenderer.prototype.setProjectInterface = function(t) {
            this.globalData.projectInterface = t
        }
        ,
        BaseRenderer.prototype.initItems = function() {
            this.globalData.progressiveLoad || this.buildAllItems()
        }
        ,
        BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
            for (var i = this.elements, s = this.layers, a = 0, n = s.length; a < n; )
                s[a].ind == e && (!i[a] || i[a] === !0 ? (this.buildItem(a),
                this.addPendingElement(t)) : (r.push(i[a]),
                i[a].setAsParent(),
                s[a].parent !== void 0 ? this.buildElementParenting(t, s[a].parent, r) : t.setHierarchy(r))),
                a += 1
        }
        ,
        BaseRenderer.prototype.addPendingElement = function(t) {
            this.pendingElements.push(t)
        }
        ,
        BaseRenderer.prototype.searchExtraCompositions = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1)
                if (t[e].xt) {
                    var i = this.createComp(t[e]);
                    i.initExpressions(),
                    this.globalData.projectInterface.registerComposition(i)
                }
        }
        ,
        BaseRenderer.prototype.getElementById = function(t) {
            var e, r = this.elements.length;
            for (e = 0; e < r; e += 1)
                if (this.elements[e].data.ind === t)
                    return this.elements[e];
            return null
        }
        ,
        BaseRenderer.prototype.getElementByPath = function(t) {
            var e = t.shift(), r;
            if (typeof e == "number")
                r = this.elements[e];
            else {
                var i, s = this.elements.length;
                for (i = 0; i < s; i += 1)
                    if (this.elements[i].data.nm === e) {
                        r = this.elements[i];
                        break
                    }
            }
            return t.length === 0 ? r : r.getElementByPath(t)
        }
        ,
        BaseRenderer.prototype.setupGlobalData = function(t, e) {
            this.globalData.fontManager = new FontManager,
            this.globalData.slotManager = slotFactory(t),
            this.globalData.fontManager.addChars(t.chars),
            this.globalData.fontManager.addFonts(t.fonts, e),
            this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem),
            this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem),
            this.globalData.imageLoader = this.animationItem.imagePreloader,
            this.globalData.audioController = this.animationItem.audioController,
            this.globalData.frameId = 0,
            this.globalData.frameRate = t.fr,
            this.globalData.nm = t.nm,
            this.globalData.compSize = {
                w: t.w,
                h: t.h
            }
        }
        ;
        var effectTypes = {
            TRANSFORM_EFFECT: "transformEFfect"
        };
        function TransformElement() {}
        TransformElement.prototype = {
            initTransform: function() {
                var e = new Matrix;
                this.finalTransform = {
                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                        o: 0
                    },
                    _matMdf: !1,
                    _localMatMdf: !1,
                    _opMdf: !1,
                    mat: e,
                    localMat: e,
                    localOpacity: 1
                },
                this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                this.data.ty
            },
            renderTransform: function() {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame,
                this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame,
                this.hierarchy) {
                    var e, r = this.finalTransform.mat, i = 0, s = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                        for (; i < s; ) {
                            if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                this.finalTransform._matMdf = !0;
                                break
                            }
                            i += 1
                        }
                    if (this.finalTransform._matMdf)
                        for (e = this.finalTransform.mProp.v.props,
                        r.cloneFromProps(e),
                        i = 0; i < s; i += 1)
                            r.multiply(this.hierarchy[i].finalTransform.mProp.v)
                }
                this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf),
                this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
            },
            renderLocalTransform: function() {
                if (this.localTransforms) {
                    var e = 0
                      , r = this.localTransforms.length;
                    if (this.finalTransform._localMatMdf = this.finalTransform._matMdf,
                    !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                        for (; e < r; )
                            this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0),
                            this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v,
                            this.finalTransform._opMdf = !0),
                            e += 1;
                    if (this.finalTransform._localMatMdf) {
                        var i = this.finalTransform.localMat;
                        for (this.localTransforms[0].matrix.clone(i),
                        e = 1; e < r; e += 1) {
                            var s = this.localTransforms[e].matrix;
                            i.multiply(s)
                        }
                        i.multiply(this.finalTransform.mat)
                    }
                    if (this.finalTransform._opMdf) {
                        var a = this.finalTransform.localOpacity;
                        for (e = 0; e < r; e += 1)
                            a *= this.localTransforms[e].opacity * .01;
                        this.finalTransform.localOpacity = a
                    }
                }
            },
            searchEffectTransforms: function() {
                if (this.renderableEffectsManager) {
                    var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                    if (e.length) {
                        this.localTransforms = [],
                        this.finalTransform.localMat = new Matrix;
                        var r = 0
                          , i = e.length;
                        for (r = 0; r < i; r += 1)
                            this.localTransforms.push(e[r])
                    }
                }
            },
            globalToLocal: function(e) {
                var r = [];
                r.push(this.finalTransform);
                for (var i = !0, s = this.comp; i; )
                    s.finalTransform ? (s.data.hasMask && r.splice(0, 0, s.finalTransform),
                    s = s.comp) : i = !1;
                var a, n = r.length, l;
                for (a = 0; a < n; a += 1)
                    l = r[a].mat.applyToPointArray(0, 0, 0),
                    e = [e[0] - l[0], e[1] - l[1], 0];
                return e
            },
            mHelper: new Matrix
        };
        function MaskElement(t, e, r) {
            this.data = t,
            this.element = e,
            this.globalData = r,
            this.storedData = [],
            this.masksProperties = this.data.masksProperties || [],
            this.maskElement = null;
            var i = this.globalData.defs, s, a = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(a),
            this.solidPath = "";
            var n, l = this.masksProperties, o = 0, f = [], y, P, u = createElementID(), b, x, d, C, c = "clipPath", m = "clip-path";
            for (s = 0; s < a; s += 1)
                if ((l[s].mode !== "a" && l[s].mode !== "n" || l[s].inv || l[s].o.k !== 100 || l[s].o.x) && (c = "mask",
                m = "mask"),
                (l[s].mode === "s" || l[s].mode === "i") && o === 0 ? (b = createNS("rect"),
                b.setAttribute("fill", "#ffffff"),
                b.setAttribute("width", this.element.comp.data.w || 0),
                b.setAttribute("height", this.element.comp.data.h || 0),
                f.push(b)) : b = null,
                n = createNS("path"),
                l[s].mode === "n")
                    this.viewData[s] = {
                        op: PropertyFactory.getProp(this.element, l[s].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3),
                        elem: n,
                        lastPath: ""
                    },
                    i.appendChild(n);
                else {
                    o += 1,
                    n.setAttribute("fill", l[s].mode === "s" ? "#000000" : "#ffffff"),
                    n.setAttribute("clip-rule", "nonzero");
                    var p;
                    if (l[s].x.k !== 0 ? (c = "mask",
                    m = "mask",
                    C = PropertyFactory.getProp(this.element, l[s].x, 0, null, this.element),
                    p = createElementID(),
                    x = createNS("filter"),
                    x.setAttribute("id", p),
                    d = createNS("feMorphology"),
                    d.setAttribute("operator", "erode"),
                    d.setAttribute("in", "SourceGraphic"),
                    d.setAttribute("radius", "0"),
                    x.appendChild(d),
                    i.appendChild(x),
                    n.setAttribute("stroke", l[s].mode === "s" ? "#000000" : "#ffffff")) : (d = null,
                    C = null),
                    this.storedData[s] = {
                        elem: n,
                        x: C,
                        expan: d,
                        lastPath: "",
                        lastOperator: "",
                        filterId: p,
                        lastRadius: 0
                    },
                    l[s].mode === "i") {
                        P = f.length;
                        var g = createNS("g");
                        for (y = 0; y < P; y += 1)
                            g.appendChild(f[y]);
                        var E = createNS("mask");
                        E.setAttribute("mask-type", "alpha"),
                        E.setAttribute("id", u + "_" + o),
                        E.appendChild(n),
                        i.appendChild(E),
                        g.setAttribute("mask", "url(" + getLocationHref() + "#" + u + "_" + o + ")"),
                        f.length = 0,
                        f.push(g)
                    } else
                        f.push(n);
                    l[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
                    this.viewData[s] = {
                        elem: n,
                        lastPath: "",
                        op: PropertyFactory.getProp(this.element, l[s].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3),
                        invRect: b
                    },
                    this.viewData[s].prop.k || this.drawPath(l[s], this.viewData[s].prop.v, this.viewData[s])
                }
            for (this.maskElement = createNS(c),
            a = f.length,
            s = 0; s < a; s += 1)
                this.maskElement.appendChild(f[s]);
            o > 0 && (this.maskElement.setAttribute("id", u),
            this.element.maskedElement.setAttribute(m, "url(" + getLocationHref() + "#" + u + ")"),
            i.appendChild(this.maskElement)),
            this.viewData.length && this.element.addRenderableComponent(this)
        }
        MaskElement.prototype.getMaskProperty = function(t) {
            return this.viewData[t].prop
        }
        ,
        MaskElement.prototype.renderFrame = function(t) {
            var e = this.element.finalTransform.mat, r, i = this.masksProperties.length;
            for (r = 0; r < i; r += 1)
                if ((this.viewData[r].prop._mdf || t) && this.drawPath(this.masksProperties[r], this.viewData[r].prop.v, this.viewData[r]),
                (this.viewData[r].op._mdf || t) && this.viewData[r].elem.setAttribute("fill-opacity", this.viewData[r].op.v),
                this.masksProperties[r].mode !== "n" && (this.viewData[r].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[r].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()),
                this.storedData[r].x && (this.storedData[r].x._mdf || t))) {
                    var s = this.storedData[r].expan;
                    this.storedData[r].x.v < 0 ? (this.storedData[r].lastOperator !== "erode" && (this.storedData[r].lastOperator = "erode",
                    this.storedData[r].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[r].filterId + ")")),
                    s.setAttribute("radius", -this.storedData[r].x.v)) : (this.storedData[r].lastOperator !== "dilate" && (this.storedData[r].lastOperator = "dilate",
                    this.storedData[r].elem.setAttribute("filter", null)),
                    this.storedData[r].elem.setAttribute("stroke-width", this.storedData[r].x.v * 2))
                }
        }
        ,
        MaskElement.prototype.getMaskelement = function() {
            return this.maskElement
        }
        ,
        MaskElement.prototype.createLayerSolidPath = function() {
            var t = "M0,0 ";
            return t += " h" + this.globalData.compSize.w,
            t += " v" + this.globalData.compSize.h,
            t += " h-" + this.globalData.compSize.w,
            t += " v-" + this.globalData.compSize.h + " ",
            t
        }
        ,
        MaskElement.prototype.drawPath = function(t, e, r) {
            var i = " M" + e.v[0][0] + "," + e.v[0][1], s, a;
            for (a = e._length,
            s = 1; s < a; s += 1)
                i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
            if (e.c && a > 1 && (i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]),
            r.lastPath !== i) {
                var n = "";
                r.elem && (e.c && (n = t.inv ? this.solidPath + i : i),
                r.elem.setAttribute("d", n)),
                r.lastPath = i
            }
        }
        ,
        MaskElement.prototype.destroy = function() {
            this.element = null,
            this.globalData = null,
            this.maskElement = null,
            this.data = null,
            this.masksProperties = null
        }
        ;
        var filtersFactory = function() {
            var t = {};
            t.createFilter = e,
            t.createAlphaToLuminanceFilter = r;
            function e(i, s) {
                var a = createNS("filter");
                return a.setAttribute("id", i),
                s !== !0 && (a.setAttribute("filterUnits", "objectBoundingBox"),
                a.setAttribute("x", "0%"),
                a.setAttribute("y", "0%"),
                a.setAttribute("width", "100%"),
                a.setAttribute("height", "100%")),
                a
            }
            function r() {
                var i = createNS("feColorMatrix");
                return i.setAttribute("type", "matrix"),
                i.setAttribute("color-interpolation-filters", "sRGB"),
                i.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),
                i
            }
            return t
        }()
          , featureSupport = function() {
            var t = {
                maskType: !0,
                svgLumaHidden: !0,
                offscreenCanvas: typeof OffscreenCanvas < "u"
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1),
            /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1),
            t
        }()
          , registeredEffects$1 = {}
          , idPrefix = "filter_result_";
        function SVGEffects(t) {
            var e, r = "SourceGraphic", i = t.data.ef ? t.data.ef.length : 0, s = createElementID(), a = filtersFactory.createFilter(s, !0), n = 0;
            this.filters = [];
            var l;
            for (e = 0; e < i; e += 1) {
                l = null;
                var o = t.data.ef[e].ty;
                if (registeredEffects$1[o]) {
                    var f = registeredEffects$1[o].effect;
                    l = new f(a,t.effectsManager.effectElements[e],t,idPrefix + n,r),
                    r = idPrefix + n,
                    registeredEffects$1[o].countsAsEffect && (n += 1)
                }
                l && this.filters.push(l)
            }
            n && (t.globalData.defs.appendChild(a),
            t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")),
            this.filters.length && t.addRenderableComponent(this)
        }
        SVGEffects.prototype.renderFrame = function(t) {
            var e, r = this.filters.length;
            for (e = 0; e < r; e += 1)
                this.filters[e].renderFrame(t)
        }
        ,
        SVGEffects.prototype.getEffects = function(t) {
            var e, r = this.filters.length, i = [];
            for (e = 0; e < r; e += 1)
                this.filters[e].type === t && i.push(this.filters[e]);
            return i
        }
        ;
        function registerEffect$1(t, e, r) {
            registeredEffects$1[t] = {
                effect: e,
                countsAsEffect: r
            }
        }
        function SVGBaseElement() {}
        SVGBaseElement.prototype = {
            initRendererElement: function() {
                this.layerElement = createNS("g")
            },
            createContainerElements: function() {
                this.matteElement = createNS("g"),
                this.transformedElement = this.layerElement,
                this.maskedElement = this.layerElement,
                this._sizeChanged = !1;
                var e = null;
                if (this.data.td) {
                    this.matteMasks = {};
                    var r = createNS("g");
                    r.setAttribute("id", this.layerId),
                    r.appendChild(this.layerElement),
                    e = r,
                    this.globalData.defs.appendChild(r)
                } else
                    this.data.tt ? (this.matteElement.appendChild(this.layerElement),
                    e = this.matteElement,
                    this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                this.data.ty === 0 && !this.data.hd) {
                    var i = createNS("clipPath")
                      , s = createNS("path");
                    s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var a = createElementID();
                    if (i.setAttribute("id", a),
                    i.appendChild(s),
                    this.globalData.defs.appendChild(i),
                    this.checkMasks()) {
                        var n = createNS("g");
                        n.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"),
                        n.appendChild(this.layerElement),
                        this.transformedElement = n,
                        e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                    } else
                        this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")")
                }
                this.data.bm !== 0 && this.setBlendMode()
            },
            renderElement: function() {
                this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()),
                this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
            },
            destroyBaseElement: function() {
                this.layerElement = null,
                this.matteElement = null,
                this.maskManager.destroy()
            },
            getBaseElement: function() {
                return this.data.hd ? null : this.baseElement
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data,this,this.globalData),
                this.renderableEffectsManager = new SVGEffects(this),
                this.searchEffectTransforms()
            },
            getMatte: function(e) {
                if (this.matteMasks || (this.matteMasks = {}),
                !this.matteMasks[e]) {
                    var r = this.layerId + "_" + e, i, s, a, n;
                    if (e === 1 || e === 3) {
                        var l = createNS("mask");
                        l.setAttribute("id", r),
                        l.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"),
                        a = createNS("use"),
                        a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId),
                        l.appendChild(a),
                        this.globalData.defs.appendChild(l),
                        !featureSupport.maskType && e === 1 && (l.setAttribute("mask-type", "luminance"),
                        i = createElementID(),
                        s = filtersFactory.createFilter(i),
                        this.globalData.defs.appendChild(s),
                        s.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                        n = createNS("g"),
                        n.appendChild(a),
                        l.appendChild(n),
                        n.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"))
                    } else if (e === 2) {
                        var o = createNS("mask");
                        o.setAttribute("id", r),
                        o.setAttribute("mask-type", "alpha");
                        var f = createNS("g");
                        o.appendChild(f),
                        i = createElementID(),
                        s = filtersFactory.createFilter(i);
                        var y = createNS("feComponentTransfer");
                        y.setAttribute("in", "SourceGraphic"),
                        s.appendChild(y);
                        var P = createNS("feFuncA");
                        P.setAttribute("type", "table"),
                        P.setAttribute("tableValues", "1.0 0.0"),
                        y.appendChild(P),
                        this.globalData.defs.appendChild(s);
                        var u = createNS("rect");
                        u.setAttribute("width", this.comp.data.w),
                        u.setAttribute("height", this.comp.data.h),
                        u.setAttribute("x", "0"),
                        u.setAttribute("y", "0"),
                        u.setAttribute("fill", "#ffffff"),
                        u.setAttribute("opacity", "0"),
                        f.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"),
                        f.appendChild(u),
                        a = createNS("use"),
                        a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId),
                        f.appendChild(a),
                        featureSupport.maskType || (o.setAttribute("mask-type", "luminance"),
                        s.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                        n = createNS("g"),
                        f.appendChild(u),
                        n.appendChild(this.layerElement),
                        f.appendChild(n)),
                        this.globalData.defs.appendChild(o)
                    }
                    this.matteMasks[e] = r
                }
                return this.matteMasks[e]
            },
            setMatte: function(e) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")")
            }
        };
        function HierarchyElement() {}
        HierarchyElement.prototype = {
            initHierarchy: function() {
                this.hierarchy = [],
                this._isParent = !1,
                this.checkParenting()
            },
            setHierarchy: function(e) {
                this.hierarchy = e
            },
            setAsParent: function() {
                this._isParent = !0
            },
            checkParenting: function() {
                this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, [])
            }
        };
        function RenderableDOMElement() {}
        (function() {
            var t = {
                initElement: function(r, i, s) {
                    this.initFrame(),
                    this.initBaseData(r, i, s),
                    this.initTransform(r, i, s),
                    this.initHierarchy(),
                    this.initRenderable(),
                    this.initRendererElement(),
                    this.createContainerElements(),
                    this.createRenderableComponents(),
                    this.createContent(),
                    this.hide()
                },
                hide: function() {
                    if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                        var r = this.baseElement || this.layerElement;
                        r.style.display = "none",
                        this.hidden = !0
                    }
                },
                show: function() {
                    if (this.isInRange && !this.isTransparent) {
                        if (!this.data.hd) {
                            var r = this.baseElement || this.layerElement;
                            r.style.display = "block"
                        }
                        this.hidden = !1,
                        this._isFirstFrame = !0
                    }
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(),
                    this.renderRenderable(),
                    this.renderLocalTransform(),
                    this.renderElement(),
                    this.renderInnerContent(),
                    this._isFirstFrame && (this._isFirstFrame = !1))
                },
                renderInnerContent: function() {},
                prepareFrame: function(r) {
                    this._mdf = !1,
                    this.prepareRenderableFrame(r),
                    this.prepareProperties(r, this.isInRange),
                    this.checkTransparency()
                },
                destroy: function() {
                    this.innerElem = null,
                    this.destroyBaseElement()
                }
            };
            extendPrototype([RenderableElement, createProxyFunction(t)], RenderableDOMElement)
        }
        )();
        function IImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId),
            this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)),
            this.initElement(t, e, r),
            this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            }
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement),
        IImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"),
            this.innerElem.setAttribute("width", this.assetData.w + "px"),
            this.innerElem.setAttribute("height", this.assetData.h + "px"),
            this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio),
            this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
            this.layerElement.appendChild(this.innerElem)
        }
        ,
        IImageElement.prototype.sourceRectAtTime = function() {
            return this.sourceRect
        }
        ;
        function ProcessedElement(t, e) {
            this.elem = t,
            this.pos = e
        }
        function IShapeElement() {}
        IShapeElement.prototype = {
            addShapeToModifiers: function(e) {
                var r, i = this.shapeModifiers.length;
                for (r = 0; r < i; r += 1)
                    this.shapeModifiers[r].addShape(e)
            },
            isShapeInAnimatedModifiers: function(e) {
                for (var r = 0, i = this.shapeModifiers.length; r < i; )
                    if (this.shapeModifiers[r].isAnimatedWithShape(e))
                        return !0;
                return !1
            },
            renderModifiers: function() {
                if (this.shapeModifiers.length) {
                    var e, r = this.shapes.length;
                    for (e = 0; e < r; e += 1)
                        this.shapes[e].sh.reset();
                    r = this.shapeModifiers.length;
                    var i;
                    for (e = r - 1; e >= 0 && (i = this.shapeModifiers[e].processShapes(this._isFirstFrame),
                    !i); e -= 1)
                        ;
                }
            },
            searchProcessedElement: function(e) {
                for (var r = this.processedElements, i = 0, s = r.length; i < s; ) {
                    if (r[i].elem === e)
                        return r[i].pos;
                    i += 1
                }
                return 0
            },
            addProcessedElement: function(e, r) {
                for (var i = this.processedElements, s = i.length; s; )
                    if (s -= 1,
                    i[s].elem === e) {
                        i[s].pos = r;
                        return
                    }
                i.push(new ProcessedElement(e,r))
            },
            prepareFrame: function(e) {
                this.prepareRenderableFrame(e),
                this.prepareProperties(e, this.isInRange)
            }
        };
        var lineCapEnum = {
            1: "butt",
            2: "round",
            3: "square"
        }
          , lineJoinEnum = {
            1: "miter",
            2: "round",
            3: "bevel"
        };
        function SVGShapeData(t, e, r) {
            this.caches = [],
            this.styles = [],
            this.transformers = t,
            this.lStr = "",
            this.sh = r,
            this.lvl = e,
            this._isAnimated = !!r.k;
            for (var i = 0, s = t.length; i < s; ) {
                if (t[i].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break
                }
                i += 1
            }
        }
        SVGShapeData.prototype.setAsAnimated = function() {
            this._isAnimated = !0
        }
        ;
        function SVGStyleData(t, e) {
            this.data = t,
            this.type = t.ty,
            this.d = "",
            this.lvl = e,
            this._mdf = !1,
            this.closed = t.hd === !0,
            this.pElem = createNS("path"),
            this.msElem = null
        }
        SVGStyleData.prototype.reset = function() {
            this.d = "",
            this._mdf = !1
        }
        ;
        function DashProperty(t, e, r, i) {
            this.elem = t,
            this.frameId = -1,
            this.dataProps = createSizedArray(e.length),
            this.renderer = r,
            this.k = !1,
            this.dashStr = "",
            this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0),
            this.dashoffset = createTypedArray("float32", 1),
            this.initDynamicPropertyContainer(i);
            var s, a = e.length || 0, n;
            for (s = 0; s < a; s += 1)
                n = PropertyFactory.getProp(t, e[s].v, 0, 0, this),
                this.k = n.k || this.k,
                this.dataProps[s] = {
                    n: e[s].n,
                    p: n
                };
            this.k || this.getValue(!0),
            this._isAnimated = this.k
        }
        DashProperty.prototype.getValue = function(t) {
            if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId,
            this.iterateDynamicProperties(),
            this._mdf = this._mdf || t,
            this._mdf)) {
                var e = 0
                  , r = this.dataProps.length;
                for (this.renderer === "svg" && (this.dashStr = ""),
                e = 0; e < r; e += 1)
                    this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
            }
        }
        ,
        extendPrototype([DynamicPropertyContainer], DashProperty);
        function SVGStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t),
            this.getValue = this.iterateDynamicProperties,
            this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
            this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
            this.d = new DashProperty(t,e.d || {},"svg",this),
            this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
            this.style = r,
            this._isAnimated = !!this._isAnimated
        }
        extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);
        function SVGFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t),
            this.getValue = this.iterateDynamicProperties,
            this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
            this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
            this.style = r
        }
        extendPrototype([DynamicPropertyContainer], SVGFillStyleData);
        function SVGNoStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t),
            this.getValue = this.iterateDynamicProperties,
            this.style = r
        }
        extendPrototype([DynamicPropertyContainer], SVGNoStyleData);
        function GradientProperty(t, e, r) {
            this.data = e,
            this.c = createTypedArray("uint8c", e.p * 4);
            var i = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
            this.o = createTypedArray("float32", i),
            this._cmdf = !1,
            this._omdf = !1,
            this._collapsable = this.checkCollapsable(),
            this._hasOpacity = i,
            this.initDynamicPropertyContainer(r),
            this.prop = PropertyFactory.getProp(t, e.k, 1, null, this),
            this.k = this.prop.k,
            this.getValue(!0)
        }
        GradientProperty.prototype.comparePoints = function(t, e) {
            for (var r = 0, i = this.o.length / 2, s; r < i; ) {
                if (s = Math.abs(t[r * 4] - t[e * 4 + r * 2]),
                s > .01)
                    return !1;
                r += 1
            }
            return !0
        }
        ,
        GradientProperty.prototype.checkCollapsable = function() {
            if (this.o.length / 2 !== this.c.length / 4)
                return !1;
            if (this.data.k.k[0].s)
                for (var t = 0, e = this.data.k.k.length; t < e; ) {
                    if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                        return !1;
                    t += 1
                }
            else if (!this.comparePoints(this.data.k.k, this.data.p))
                return !1;
            return !0
        }
        ,
        GradientProperty.prototype.getValue = function(t) {
            if (this.prop.getValue(),
            this._mdf = !1,
            this._cmdf = !1,
            this._omdf = !1,
            this.prop._mdf || t) {
                var e, r = this.data.p * 4, i, s;
                for (e = 0; e < r; e += 1)
                    i = e % 4 === 0 ? 100 : 255,
                    s = Math.round(this.prop.v[e] * i),
                    this.c[e] !== s && (this.c[e] = s,
                    this._cmdf = !t);
                if (this.o.length)
                    for (r = this.prop.v.length,
                    e = this.data.p * 4; e < r; e += 1)
                        i = e % 2 === 0 ? 100 : 1,
                        s = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e],
                        this.o[e - this.data.p * 4] !== s && (this.o[e - this.data.p * 4] = s,
                        this._omdf = !t);
                this._mdf = !t
            }
        }
        ,
        extendPrototype([DynamicPropertyContainer], GradientProperty);
        function SVGGradientFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t),
            this.getValue = this.iterateDynamicProperties,
            this.initGradientData(t, e, r)
        }
        SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
            this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
            this.s = PropertyFactory.getProp(t, e.s, 1, null, this),
            this.e = PropertyFactory.getProp(t, e.e, 1, null, this),
            this.h = PropertyFactory.getProp(t, e.h || {
                k: 0
            }, 0, .01, this),
            this.a = PropertyFactory.getProp(t, e.a || {
                k: 0
            }, 0, degToRads, this),
            this.g = new GradientProperty(t,e.g,this),
            this.style = r,
            this.stops = [],
            this.setGradientData(r.pElem, e),
            this.setGradientOpacity(e, r),
            this._isAnimated = !!this._isAnimated
        }
        ,
        SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
            var r = createElementID()
              , i = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
            i.setAttribute("id", r),
            i.setAttribute("spreadMethod", "pad"),
            i.setAttribute("gradientUnits", "userSpaceOnUse");
            var s = [], a, n, l;
            for (l = e.g.p * 4,
            n = 0; n < l; n += 4)
                a = createNS("stop"),
                i.appendChild(a),
                s.push(a);
            t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"),
            this.gf = i,
            this.cst = s
        }
        ,
        SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var r, i, s, a = createNS("mask"), n = createNS("path");
                a.appendChild(n);
                var l = createElementID()
                  , o = createElementID();
                a.setAttribute("id", o);
                var f = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
                f.setAttribute("id", l),
                f.setAttribute("spreadMethod", "pad"),
                f.setAttribute("gradientUnits", "userSpaceOnUse"),
                s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var y = this.stops;
                for (i = t.g.p * 4; i < s; i += 2)
                    r = createNS("stop"),
                    r.setAttribute("stop-color", "rgb(255,255,255)"),
                    f.appendChild(r),
                    y.push(r);
                n.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + l + ")"),
                t.ty === "gs" && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
                n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
                t.lj === 1 && n.setAttribute("stroke-miterlimit", t.ml)),
                this.of = f,
                this.ms = a,
                this.ost = y,
                this.maskId = o,
                e.msElem = n
            }
        }
        ,
        extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);
        function SVGGradientStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t),
            this.getValue = this.iterateDynamicProperties,
            this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
            this.d = new DashProperty(t,e.d || {},"svg",this),
            this.initGradientData(t, e, r),
            this._isAnimated = !!this._isAnimated
        }
        extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        function ShapeGroupData() {
            this.it = [],
            this.prevViewData = [],
            this.gr = createNS("g")
        }
        function SVGTransformData(t, e, r) {
            this.transform = {
                mProps: t,
                op: e,
                container: r
            },
            this.elements = [],
            this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }
        var buildShapeString = function(e, r, i, s) {
            if (r === 0)
                return "";
            var a = e.o, n = e.i, l = e.v, o, f = " M" + s.applyToPointStringified(l[0][0], l[0][1]);
            for (o = 1; o < r; o += 1)
                f += " C" + s.applyToPointStringified(a[o - 1][0], a[o - 1][1]) + " " + s.applyToPointStringified(n[o][0], n[o][1]) + " " + s.applyToPointStringified(l[o][0], l[o][1]);
            return i && r && (f += " C" + s.applyToPointStringified(a[o - 1][0], a[o - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(l[0][0], l[0][1]),
            f += "z"),
            f
        }
          , SVGElementsRenderer = function() {
            var t = new Matrix
              , e = new Matrix
              , r = {
                createRenderFunction: i
            };
            function i(P) {
                switch (P.ty) {
                case "fl":
                    return l;
                case "gf":
                    return f;
                case "gs":
                    return o;
                case "st":
                    return y;
                case "sh":
                case "el":
                case "rc":
                case "sr":
                    return n;
                case "tr":
                    return s;
                case "no":
                    return a;
                default:
                    return null
                }
            }
            function s(P, u, b) {
                (b || u.transform.op._mdf) && u.transform.container.setAttribute("opacity", u.transform.op.v),
                (b || u.transform.mProps._mdf) && u.transform.container.setAttribute("transform", u.transform.mProps.v.to2dCSS())
            }
            function a() {}
            function n(P, u, b) {
                var x, d, C, c, m, p, g = u.styles.length, E = u.lvl, _, T, M, B;
                for (p = 0; p < g; p += 1) {
                    if (c = u.sh._mdf || b,
                    u.styles[p].lvl < E) {
                        for (T = e.reset(),
                        M = E - u.styles[p].lvl,
                        B = u.transformers.length - 1; !c && M > 0; )
                            c = u.transformers[B].mProps._mdf || c,
                            M -= 1,
                            B -= 1;
                        if (c)
                            for (M = E - u.styles[p].lvl,
                            B = u.transformers.length - 1; M > 0; )
                                T.multiply(u.transformers[B].mProps.v),
                                M -= 1,
                                B -= 1
                    } else
                        T = t;
                    if (_ = u.sh.paths,
                    d = _._length,
                    c) {
                        for (C = "",
                        x = 0; x < d; x += 1)
                            m = _.shapes[x],
                            m && m._length && (C += buildShapeString(m, m._length, m.c, T));
                        u.caches[p] = C
                    } else
                        C = u.caches[p];
                    u.styles[p].d += P.hd === !0 ? "" : C,
                    u.styles[p]._mdf = c || u.styles[p]._mdf
                }
            }
            function l(P, u, b) {
                var x = u.style;
                (u.c._mdf || b) && x.pElem.setAttribute("fill", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"),
                (u.o._mdf || b) && x.pElem.setAttribute("fill-opacity", u.o.v)
            }
            function o(P, u, b) {
                f(P, u, b),
                y(P, u, b)
            }
            function f(P, u, b) {
                var x = u.gf
                  , d = u.g._hasOpacity
                  , C = u.s.v
                  , c = u.e.v;
                if (u.o._mdf || b) {
                    var m = P.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                    u.style.pElem.setAttribute(m, u.o.v)
                }
                if (u.s._mdf || b) {
                    var p = P.t === 1 ? "x1" : "cx"
                      , g = p === "x1" ? "y1" : "cy";
                    x.setAttribute(p, C[0]),
                    x.setAttribute(g, C[1]),
                    d && !u.g._collapsable && (u.of.setAttribute(p, C[0]),
                    u.of.setAttribute(g, C[1]))
                }
                var E, _, T, M;
                if (u.g._cmdf || b) {
                    E = u.cst;
                    var B = u.g.c;
                    for (T = E.length,
                    _ = 0; _ < T; _ += 1)
                        M = E[_],
                        M.setAttribute("offset", B[_ * 4] + "%"),
                        M.setAttribute("stop-color", "rgb(" + B[_ * 4 + 1] + "," + B[_ * 4 + 2] + "," + B[_ * 4 + 3] + ")")
                }
                if (d && (u.g._omdf || b)) {
                    var z = u.g.o;
                    for (u.g._collapsable ? E = u.cst : E = u.ost,
                    T = E.length,
                    _ = 0; _ < T; _ += 1)
                        M = E[_],
                        u.g._collapsable || M.setAttribute("offset", z[_ * 2] + "%"),
                        M.setAttribute("stop-opacity", z[_ * 2 + 1])
                }
                if (P.t === 1)
                    (u.e._mdf || b) && (x.setAttribute("x2", c[0]),
                    x.setAttribute("y2", c[1]),
                    d && !u.g._collapsable && (u.of.setAttribute("x2", c[0]),
                    u.of.setAttribute("y2", c[1])));
                else {
                    var R;
                    if ((u.s._mdf || u.e._mdf || b) && (R = Math.sqrt(Math.pow(C[0] - c[0], 2) + Math.pow(C[1] - c[1], 2)),
                    x.setAttribute("r", R),
                    d && !u.g._collapsable && u.of.setAttribute("r", R)),
                    u.e._mdf || u.h._mdf || u.a._mdf || b) {
                        R || (R = Math.sqrt(Math.pow(C[0] - c[0], 2) + Math.pow(C[1] - c[1], 2)));
                        var L = Math.atan2(c[1] - C[1], c[0] - C[0])
                          , O = u.h.v;
                        O >= 1 ? O = .99 : O <= -1 && (O = -.99);
                        var N = R * O
                          , D = Math.cos(L + u.a.v) * N + C[0]
                          , A = Math.sin(L + u.a.v) * N + C[1];
                        x.setAttribute("fx", D),
                        x.setAttribute("fy", A),
                        d && !u.g._collapsable && (u.of.setAttribute("fx", D),
                        u.of.setAttribute("fy", A))
                    }
                }
            }
            function y(P, u, b) {
                var x = u.style
                  , d = u.d;
                d && (d._mdf || b) && d.dashStr && (x.pElem.setAttribute("stroke-dasharray", d.dashStr),
                x.pElem.setAttribute("stroke-dashoffset", d.dashoffset[0])),
                u.c && (u.c._mdf || b) && x.pElem.setAttribute("stroke", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"),
                (u.o._mdf || b) && x.pElem.setAttribute("stroke-opacity", u.o.v),
                (u.w._mdf || b) && (x.pElem.setAttribute("stroke-width", u.w.v),
                x.msElem && x.msElem.setAttribute("stroke-width", u.w.v))
            }
            return r
        }();
        function SVGShapeElement(t, e, r) {
            this.shapes = [],
            this.shapesData = t.shapes,
            this.stylesList = [],
            this.shapeModifiers = [],
            this.itemsData = [],
            this.processedElements = [],
            this.animatedContents = [],
            this.initElement(t, e, r),
            this.prevViewData = []
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement),
        SVGShapeElement.prototype.initSecondaryElement = function() {}
        ,
        SVGShapeElement.prototype.identityMatrix = new Matrix,
        SVGShapeElement.prototype.buildExpressionInterface = function() {}
        ,
        SVGShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
            this.filterUniqueShapes()
        }
        ,
        SVGShapeElement.prototype.filterUniqueShapes = function() {
            var t, e = this.shapes.length, r, i, s = this.stylesList.length, a, n = [], l = !1;
            for (i = 0; i < s; i += 1) {
                for (a = this.stylesList[i],
                l = !1,
                n.length = 0,
                t = 0; t < e; t += 1)
                    r = this.shapes[t],
                    r.styles.indexOf(a) !== -1 && (n.push(r),
                    l = r._isAnimated || l);
                n.length > 1 && l && this.setShapesAsAnimated(n)
            }
        }
        ,
        SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1)
                t[e].setAsAnimated()
        }
        ,
        SVGShapeElement.prototype.createStyleElement = function(t, e) {
            var r, i = new SVGStyleData(t,e), s = i.pElem;
            if (t.ty === "st")
                r = new SVGStrokeStyleData(this,t,i);
            else if (t.ty === "fl")
                r = new SVGFillStyleData(this,t,i);
            else if (t.ty === "gf" || t.ty === "gs") {
                var a = t.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
                r = new a(this,t,i),
                this.globalData.defs.appendChild(r.gf),
                r.maskId && (this.globalData.defs.appendChild(r.ms),
                this.globalData.defs.appendChild(r.of),
                s.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))
            } else
                t.ty === "no" && (r = new SVGNoStyleData(this,t,i));
            return (t.ty === "st" || t.ty === "gs") && (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
            s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
            s.setAttribute("fill-opacity", "0"),
            t.lj === 1 && s.setAttribute("stroke-miterlimit", t.ml)),
            t.r === 2 && s.setAttribute("fill-rule", "evenodd"),
            t.ln && s.setAttribute("id", t.ln),
            t.cl && s.setAttribute("class", t.cl),
            t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)),
            this.stylesList.push(i),
            this.addToAnimatedContents(t, r),
            r
        }
        ,
        SVGShapeElement.prototype.createGroupElement = function(t) {
            var e = new ShapeGroupData;
            return t.ln && e.gr.setAttribute("id", t.ln),
            t.cl && e.gr.setAttribute("class", t.cl),
            t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
            e
        }
        ,
        SVGShapeElement.prototype.createTransformElement = function(t, e) {
            var r = TransformPropertyFactory.getTransformProperty(this, t, this)
              , i = new SVGTransformData(r,r.o,e);
            return this.addToAnimatedContents(t, i),
            i
        }
        ,
        SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
            var i = 4;
            t.ty === "rc" ? i = 5 : t.ty === "el" ? i = 6 : t.ty === "sr" && (i = 7);
            var s = ShapePropertyFactory.getShapeProp(this, t, i, this)
              , a = new SVGShapeData(e,r,s);
            return this.shapes.push(a),
            this.addShapeToModifiers(a),
            this.addToAnimatedContents(t, a),
            a
        }
        ,
        SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
            for (var r = 0, i = this.animatedContents.length; r < i; ) {
                if (this.animatedContents[r].element === e)
                    return;
                r += 1
            }
            this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(t),
                element: e,
                data: t
            })
        }
        ,
        SVGShapeElement.prototype.setElementStyles = function(t) {
            var e = t.styles, r, i = this.stylesList.length;
            for (r = 0; r < i; r += 1)
                this.stylesList[r].closed || e.push(this.stylesList[r])
        }
        ,
        SVGShapeElement.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var t, e = this.itemsData.length;
            for (t = 0; t < e; t += 1)
                this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
            this.filterUniqueShapes(),
            e = this.dynamicProperties.length,
            t = 0; t < e; t += 1)
                this.dynamicProperties[t].getValue();
            this.renderModifiers()
        }
        ,
        SVGShapeElement.prototype.searchShapes = function(t, e, r, i, s, a, n) {
            var l = [].concat(a), o, f = t.length - 1, y, P, u = [], b = [], x, d, C;
            for (o = f; o >= 0; o -= 1) {
                if (C = this.searchProcessedElement(t[o]),
                C ? e[o] = r[C - 1] : t[o]._render = n,
                t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no")
                    C ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s),
                    t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem),
                    u.push(e[o].style);
                else if (t[o].ty === "gr") {
                    if (!C)
                        e[o] = this.createGroupElement(t[o]);
                    else
                        for (P = e[o].it.length,
                        y = 0; y < P; y += 1)
                            e[o].prevViewData[y] = e[o].it[y];
                    this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, l, n),
                    t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr)
                } else
                    t[o].ty === "tr" ? (C || (e[o] = this.createTransformElement(t[o], i)),
                    x = e[o].transform,
                    l.push(x)) : t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr" ? (C || (e[o] = this.createShapeElement(t[o], l, s)),
                    this.setElementStyles(e[o])) : t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op" ? (C ? (d = e[o],
                    d.closed = !1) : (d = ShapeModifiers.getModifier(t[o].ty),
                    d.init(this, t[o]),
                    e[o] = d,
                    this.shapeModifiers.push(d)),
                    b.push(d)) : t[o].ty === "rp" && (C ? (d = e[o],
                    d.closed = !0) : (d = ShapeModifiers.getModifier(t[o].ty),
                    e[o] = d,
                    d.init(this, t, o, e),
                    this.shapeModifiers.push(d),
                    n = !1),
                    b.push(d));
                this.addProcessedElement(t[o], o + 1)
            }
            for (f = u.length,
            o = 0; o < f; o += 1)
                u[o].closed = !0;
            for (f = b.length,
            o = 0; o < f; o += 1)
                b[o].closed = !0
        }
        ,
        SVGShapeElement.prototype.renderInnerContent = function() {
            this.renderModifiers();
            var t, e = this.stylesList.length;
            for (t = 0; t < e; t += 1)
                this.stylesList[t].reset();
            for (this.renderShape(),
            t = 0; t < e; t += 1)
                (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d),
                this.stylesList[t].d = "M0 0" + this.stylesList[t].d),
                this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
        }
        ,
        SVGShapeElement.prototype.renderShape = function() {
            var t, e = this.animatedContents.length, r;
            for (t = 0; t < e; t += 1)
                r = this.animatedContents[t],
                (this._isFirstFrame || r.element._isAnimated) && r.data !== !0 && r.fn(r.data, r.element, this._isFirstFrame)
        }
        ,
        SVGShapeElement.prototype.destroy = function() {
            this.destroyBaseElement(),
            this.shapesData = null,
            this.itemsData = null
        }
        ;
        function LetterProps(t, e, r, i, s, a) {
            this.o = t,
            this.sw = e,
            this.sc = r,
            this.fc = i,
            this.m = s,
            this.p = a,
            this._mdf = {
                o: !0,
                sw: !!e,
                sc: !!r,
                fc: !!i,
                m: !0,
                p: !0
            }
        }
        LetterProps.prototype.update = function(t, e, r, i, s, a) {
            this._mdf.o = !1,
            this._mdf.sw = !1,
            this._mdf.sc = !1,
            this._mdf.fc = !1,
            this._mdf.m = !1,
            this._mdf.p = !1;
            var n = !1;
            return this.o !== t && (this.o = t,
            this._mdf.o = !0,
            n = !0),
            this.sw !== e && (this.sw = e,
            this._mdf.sw = !0,
            n = !0),
            this.sc !== r && (this.sc = r,
            this._mdf.sc = !0,
            n = !0),
            this.fc !== i && (this.fc = i,
            this._mdf.fc = !0,
            n = !0),
            this.m !== s && (this.m = s,
            this._mdf.m = !0,
            n = !0),
            a.length && (this.p[0] !== a[0] || this.p[1] !== a[1] || this.p[4] !== a[4] || this.p[5] !== a[5] || this.p[12] !== a[12] || this.p[13] !== a[13]) && (this.p = a,
            this._mdf.p = !0,
            n = !0),
            n
        }
        ;
        function TextProperty(t, e) {
            this._frameId = initialDefaultFrame,
            this.pv = "",
            this.v = "",
            this.kf = !1,
            this._isFirstFrame = !0,
            this._mdf = !1,
            e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)),
            this.data = e,
            this.elem = t,
            this.comp = this.elem.comp,
            this.keysIndex = 0,
            this.canResize = !1,
            this.minimumFontSize = 1,
            this.effectsSequence = [],
            this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1
            },
            this.copyData(this.currentData, this.data.d.k[0].s),
            this.searchProperty() || this.completeTextData(this.currentData)
        }
        TextProperty.prototype.defaultBoxWidth = [0, 0],
        TextProperty.prototype.copyData = function(t, e) {
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }
        ,
        TextProperty.prototype.setCurrentData = function(t) {
            t.__complete || this.completeTextData(t),
            this.currentData = t,
            this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth,
            this._mdf = !0
        }
        ,
        TextProperty.prototype.searchProperty = function() {
            return this.searchKeyframes()
        }
        ,
        TextProperty.prototype.searchKeyframes = function() {
            return this.kf = this.data.d.k.length > 1,
            this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
            this.kf
        }
        ,
        TextProperty.prototype.addEffect = function(t) {
            this.effectsSequence.push(t),
            this.elem.addDynamicProperty(this)
        }
        ,
        TextProperty.prototype.getValue = function(t) {
            if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t)) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData
                  , r = this.keysIndex;
                if (this.lock) {
                    this.setCurrentData(this.currentData);
                    return
                }
                this.lock = !0,
                this._mdf = !1;
                var i, s = this.effectsSequence.length, a = t || this.data.d.k[this.keysIndex].s;
                for (i = 0; i < s; i += 1)
                    r !== this.keysIndex ? a = this.effectsSequence[i](a, a.t) : a = this.effectsSequence[i](this.currentData, a.t);
                e !== a && this.setCurrentData(a),
                this.v = this.currentData,
                this.pv = this.v,
                this.lock = !1,
                this.frameId = this.elem.globalData.frameId
            }
        }
        ,
        TextProperty.prototype.getKeyframeValue = function() {
            for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e); )
                r += 1;
            return this.keysIndex !== r && (this.keysIndex = r),
            this.data.d.k[this.keysIndex].s
        }
        ,
        TextProperty.prototype.buildFinalText = function(t) {
            for (var e = [], r = 0, i = t.length, s, a, n = !1, l = !1, o = ""; r < i; )
                n = l,
                l = !1,
                s = t.charCodeAt(r),
                o = t.charAt(r),
                FontManager.isCombinedCharacter(s) ? n = !0 : s >= 55296 && s <= 56319 ? FontManager.isRegionalFlag(t, r) ? o = t.substr(r, 14) : (a = t.charCodeAt(r + 1),
                a >= 56320 && a <= 57343 && (FontManager.isModifier(s, a) ? (o = t.substr(r, 2),
                n = !0) : FontManager.isFlagEmoji(t.substr(r, 4)) ? o = t.substr(r, 4) : o = t.substr(r, 2))) : s > 56319 ? (a = t.charCodeAt(r + 1),
                FontManager.isVariationSelector(s) && (n = !0)) : FontManager.isZeroWidthJoiner(s) && (n = !0,
                l = !0),
                n ? (e[e.length - 1] += o,
                n = !1) : e.push(o),
                r += o.length;
            return e
        }
        ,
        TextProperty.prototype.completeTextData = function(t) {
            t.__complete = !0;
            var e = this.elem.globalData.fontManager, r = this.data, i = [], s, a, n, l = 0, o, f = r.m.g, y = 0, P = 0, u = 0, b = [], x = 0, d = 0, C, c, m = e.getFontByName(t.f), p, g = 0, E = getFontProperties(m);
            t.fWeight = E.weight,
            t.fStyle = E.style,
            t.finalSize = t.s,
            t.finalText = this.buildFinalText(t.t),
            a = t.finalText.length,
            t.finalLineHeight = t.lh;
            var _ = t.tr / 1e3 * t.finalSize, T;
            if (t.sz)
                for (var M = !0, B = t.sz[0], z = t.sz[1], R, L; M; ) {
                    L = this.buildFinalText(t.t),
                    R = 0,
                    x = 0,
                    a = L.length,
                    _ = t.tr / 1e3 * t.finalSize;
                    var O = -1;
                    for (s = 0; s < a; s += 1)
                        T = L[s].charCodeAt(0),
                        n = !1,
                        L[s] === " " ? O = s : (T === 13 || T === 3) && (x = 0,
                        n = !0,
                        R += t.finalLineHeight || t.finalSize * 1.2),
                        e.chars ? (p = e.getCharData(L[s], m.fStyle, m.fFamily),
                        g = n ? 0 : p.w * t.finalSize / 100) : g = e.measureText(L[s], t.f, t.finalSize),
                        x + g > B && L[s] !== " " ? (O === -1 ? a += 1 : s = O,
                        R += t.finalLineHeight || t.finalSize * 1.2,
                        L.splice(s, O === s ? 1 : 0, "\r"),
                        O = -1,
                        x = 0) : (x += g,
                        x += _);
                    R += m.ascent * t.finalSize / 100,
                    this.canResize && t.finalSize > this.minimumFontSize && z < R ? (t.finalSize -= 1,
                    t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = L,
                    a = t.finalText.length,
                    M = !1)
                }
            x = -_,
            g = 0;
            var N = 0, D;
            for (s = 0; s < a; s += 1)
                if (n = !1,
                D = t.finalText[s],
                T = D.charCodeAt(0),
                T === 13 || T === 3 ? (N = 0,
                b.push(x),
                d = x > d ? x : d,
                x = -2 * _,
                o = "",
                n = !0,
                u += 1) : o = D,
                e.chars ? (p = e.getCharData(D, m.fStyle, e.getFontByName(t.f).fFamily),
                g = n ? 0 : p.w * t.finalSize / 100) : g = e.measureText(o, t.f, t.finalSize),
                D === " " ? N += g + _ : (x += g + _ + N,
                N = 0),
                i.push({
                    l: g,
                    an: g,
                    add: y,
                    n,
                    anIndexes: [],
                    val: o,
                    line: u,
                    animatorJustifyOffset: 0
                }),
                f == 2) {
                    if (y += g,
                    o === "" || o === " " || s === a - 1) {
                        for ((o === "" || o === " ") && (y -= g); P <= s; )
                            i[P].an = y,
                            i[P].ind = l,
                            i[P].extra = g,
                            P += 1;
                        l += 1,
                        y = 0
                    }
                } else if (f == 3) {
                    if (y += g,
                    o === "" || s === a - 1) {
                        for (o === "" && (y -= g); P <= s; )
                            i[P].an = y,
                            i[P].ind = l,
                            i[P].extra = g,
                            P += 1;
                        y = 0,
                        l += 1
                    }
                } else
                    i[l].ind = l,
                    i[l].extra = 0,
                    l += 1;
            if (t.l = i,
            d = x > d ? x : d,
            b.push(x),
            t.sz)
                t.boxWidth = t.sz[0],
                t.justifyOffset = 0;
            else
                switch (t.boxWidth = d,
                t.j) {
                case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                default:
                    t.justifyOffset = 0
                }
            t.lineWidths = b;
            var A = r.a, F, k;
            c = A.length;
            var S, I, V = [];
            for (C = 0; C < c; C += 1) {
                for (F = A[C],
                F.a.sc && (t.strokeColorAnim = !0),
                F.a.sw && (t.strokeWidthAnim = !0),
                (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0),
                I = 0,
                S = F.s.b,
                s = 0; s < a; s += 1)
                    k = i[s],
                    k.anIndexes[C] = I,
                    (S == 1 && k.val !== "" || S == 2 && k.val !== "" && k.val !== " " || S == 3 && (k.n || k.val == " " || s == a - 1) || S == 4 && (k.n || s == a - 1)) && (F.s.rn === 1 && V.push(I),
                    I += 1);
                r.a[C].s.totalChars = I;
                var G = -1, j;
                if (F.s.rn === 1)
                    for (s = 0; s < a; s += 1)
                        k = i[s],
                        G != k.anIndexes[C] && (G = k.anIndexes[C],
                        j = V.splice(Math.floor(Math.random() * V.length), 1)[0]),
                        k.anIndexes[C] = j
            }
            t.yOffset = t.finalLineHeight || t.finalSize * 1.2,
            t.ls = t.ls || 0,
            t.ascent = m.ascent * t.finalSize / 100
        }
        ,
        TextProperty.prototype.updateDocumentData = function(t, e) {
            e = e === void 0 ? this.keysIndex : e;
            var r = this.copyData({}, this.data.d.k[e].s);
            r = this.copyData(r, t),
            this.data.d.k[e].s = r,
            this.recalculate(e),
            this.setCurrentData(r),
            this.elem.addDynamicProperty(this)
        }
        ,
        TextProperty.prototype.recalculate = function(t) {
            var e = this.data.d.k[t].s;
            e.__complete = !1,
            this.keysIndex = 0,
            this._isFirstFrame = !0,
            this.getValue(e)
        }
        ,
        TextProperty.prototype.canResizeFont = function(t) {
            this.canResize = t,
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this)
        }
        ,
        TextProperty.prototype.setMinimumFontSize = function(t) {
            this.minimumFontSize = Math.floor(t) || 1,
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this)
        }
        ;
        var TextSelectorProp = function() {
            var t = Math.max
              , e = Math.min
              , r = Math.floor;
            function i(a, n) {
                this._currentTextLength = -1,
                this.k = !1,
                this.data = n,
                this.elem = a,
                this.comp = a.comp,
                this.finalS = 0,
                this.finalE = 0,
                this.initDynamicPropertyContainer(a),
                this.s = PropertyFactory.getProp(a, n.s || {
                    k: 0
                }, 0, 0, this),
                "e"in n ? this.e = PropertyFactory.getProp(a, n.e, 0, 0, this) : this.e = {
                    v: 100
                },
                this.o = PropertyFactory.getProp(a, n.o || {
                    k: 0
                }, 0, 0, this),
                this.xe = PropertyFactory.getProp(a, n.xe || {
                    k: 0
                }, 0, 0, this),
                this.ne = PropertyFactory.getProp(a, n.ne || {
                    k: 0
                }, 0, 0, this),
                this.sm = PropertyFactory.getProp(a, n.sm || {
                    k: 100
                }, 0, 0, this),
                this.a = PropertyFactory.getProp(a, n.a, 0, .01, this),
                this.dynamicProperties.length || this.getValue()
            }
            i.prototype = {
                getMult: function(n) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var l = 0
                      , o = 0
                      , f = 1
                      , y = 1;
                    this.ne.v > 0 ? l = this.ne.v / 100 : o = -this.ne.v / 100,
                    this.xe.v > 0 ? f = 1 - this.xe.v / 100 : y = 1 + this.xe.v / 100;
                    var P = BezierFactory.getBezierEasing(l, o, f, y).get
                      , u = 0
                      , b = this.finalS
                      , x = this.finalE
                      , d = this.data.sh;
                    if (d === 2)
                        x === b ? u = n >= x ? 1 : 0 : u = t(0, e(.5 / (x - b) + (n - b) / (x - b), 1)),
                        u = P(u);
                    else if (d === 3)
                        x === b ? u = n >= x ? 0 : 1 : u = 1 - t(0, e(.5 / (x - b) + (n - b) / (x - b), 1)),
                        u = P(u);
                    else if (d === 4)
                        x === b ? u = 0 : (u = t(0, e(.5 / (x - b) + (n - b) / (x - b), 1)),
                        u < .5 ? u *= 2 : u = 1 - 2 * (u - .5)),
                        u = P(u);
                    else if (d === 5) {
                        if (x === b)
                            u = 0;
                        else {
                            var C = x - b;
                            n = e(t(0, n + .5 - b), x - b);
                            var c = -C / 2 + n
                              , m = C / 2;
                            u = Math.sqrt(1 - c * c / (m * m))
                        }
                        u = P(u)
                    } else
                        d === 6 ? (x === b ? u = 0 : (n = e(t(0, n + .5 - b), x - b),
                        u = (1 + Math.cos(Math.PI + Math.PI * 2 * n / (x - b))) / 2),
                        u = P(u)) : (n >= r(b) && (n - b < 0 ? u = t(0, e(e(x, 1) - (b - n), 1)) : u = t(0, e(x - n, 1))),
                        u = P(u));
                    if (this.sm.v !== 100) {
                        var p = this.sm.v * .01;
                        p === 0 && (p = 1e-8);
                        var g = .5 - p * .5;
                        u < g ? u = 0 : (u = (u - g) / p,
                        u > 1 && (u = 1))
                    }
                    return u * this.a.v
                },
                getValue: function(n) {
                    this.iterateDynamicProperties(),
                    this._mdf = n || this._mdf,
                    this._currentTextLength = this.elem.textProperty.currentData.l.length || 0,
                    n && this.data.r === 2 && (this.e.v = this._currentTextLength);
                    var l = this.data.r === 2 ? 1 : 100 / this.data.totalChars
                      , o = this.o.v / l
                      , f = this.s.v / l + o
                      , y = this.e.v / l + o;
                    if (f > y) {
                        var P = f;
                        f = y,
                        y = P
                    }
                    this.finalS = f,
                    this.finalE = y
                }
            },
            extendPrototype([DynamicPropertyContainer], i);
            function s(a, n, l) {
                return new i(a,n)
            }
            return {
                getTextSelectorProp: s
            }
        }();
        function TextAnimatorDataProperty(t, e, r) {
            var i = {
                propType: !1
            }
              , s = PropertyFactory.getProp
              , a = e.a;
            this.a = {
                r: a.r ? s(t, a.r, 0, degToRads, r) : i,
                rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i,
                ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i,
                sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i,
                sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i,
                s: a.s ? s(t, a.s, 1, .01, r) : i,
                a: a.a ? s(t, a.a, 1, 0, r) : i,
                o: a.o ? s(t, a.o, 0, .01, r) : i,
                p: a.p ? s(t, a.p, 1, 0, r) : i,
                sw: a.sw ? s(t, a.sw, 0, 0, r) : i,
                sc: a.sc ? s(t, a.sc, 1, 0, r) : i,
                fc: a.fc ? s(t, a.fc, 1, 0, r) : i,
                fh: a.fh ? s(t, a.fh, 0, 0, r) : i,
                fs: a.fs ? s(t, a.fs, 0, .01, r) : i,
                fb: a.fb ? s(t, a.fb, 0, .01, r) : i,
                t: a.t ? s(t, a.t, 0, 0, r) : i
            },
            this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r),
            this.s.t = e.s.t
        }
        function TextAnimatorProperty(t, e, r) {
            this._isFirstFrame = !0,
            this._hasMaskedPath = !1,
            this._frameId = -1,
            this._textData = t,
            this._renderType = e,
            this._elem = r,
            this._animatorsData = createSizedArray(this._textData.a.length),
            this._pathData = {},
            this._moreOptions = {
                alignment: {}
            },
            this.renderedLetters = [],
            this.lettersChangedFlag = !1,
            this.initDynamicPropertyContainer(r)
        }
        TextAnimatorProperty.prototype.searchProperties = function() {
            var t, e = this._textData.a.length, r, i = PropertyFactory.getProp;
            for (t = 0; t < e; t += 1)
                r = this._textData.a[t],
                this._animatorsData[t] = new TextAnimatorDataProperty(this._elem,r,this);
            this._textData.p && "m"in this._textData.p ? (this._pathData = {
                a: i(this._elem, this._textData.p.a, 0, 0, this),
                f: i(this._elem, this._textData.p.f, 0, 0, this),
                l: i(this._elem, this._textData.p.l, 0, 0, this),
                r: i(this._elem, this._textData.p.r, 0, 0, this),
                p: i(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            },
            this._hasMaskedPath = !0) : this._hasMaskedPath = !1,
            this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
        }
        ,
        TextAnimatorProperty.prototype.getMeasures = function(t, e) {
            if (this.lettersChangedFlag = e,
            !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
                this._isFirstFrame = !1;
                var r = this._moreOptions.alignment.v, i = this._animatorsData, s = this._textData, a = this.mHelper, n = this._renderType, l = this.renderedLetters.length, o, f, y, P, u = t.l, b, x, d, C, c, m, p, g, E, _, T, M, B, z, R;
                if (this._hasMaskedPath) {
                    if (R = this._pathData.m,
                    !this._pathData.n || this._pathData._mdf) {
                        var L = R.v;
                        this._pathData.r.v && (L = L.reverse()),
                        b = {
                            tLength: 0,
                            segments: []
                        },
                        P = L._length - 1;
                        var O;
                        for (M = 0,
                        y = 0; y < P; y += 1)
                            O = bez.buildBezierData(L.v[y], L.v[y + 1], [L.o[y][0] - L.v[y][0], L.o[y][1] - L.v[y][1]], [L.i[y + 1][0] - L.v[y + 1][0], L.i[y + 1][1] - L.v[y + 1][1]]),
                            b.tLength += O.segmentLength,
                            b.segments.push(O),
                            M += O.segmentLength;
                        y = P,
                        R.v.c && (O = bez.buildBezierData(L.v[y], L.v[0], [L.o[y][0] - L.v[y][0], L.o[y][1] - L.v[y][1]], [L.i[0][0] - L.v[0][0], L.i[0][1] - L.v[0][1]]),
                        b.tLength += O.segmentLength,
                        b.segments.push(O),
                        M += O.segmentLength),
                        this._pathData.pi = b
                    }
                    if (b = this._pathData.pi,
                    x = this._pathData.f.v,
                    p = 0,
                    m = 1,
                    C = 0,
                    c = !0,
                    _ = b.segments,
                    x < 0 && R.v.c)
                        for (b.tLength < Math.abs(x) && (x = -Math.abs(x) % b.tLength),
                        p = _.length - 1,
                        E = _[p].points,
                        m = E.length - 1; x < 0; )
                            x += E[m].partialLength,
                            m -= 1,
                            m < 0 && (p -= 1,
                            E = _[p].points,
                            m = E.length - 1);
                    E = _[p].points,
                    g = E[m - 1],
                    d = E[m],
                    T = d.partialLength
                }
                P = u.length,
                o = 0,
                f = 0;
                var N = t.finalSize * 1.2 * .714, D = !0, A, F, k, S, I;
                S = i.length;
                var V, G = -1, j, $, W, q = x, X = p, Z = m, rt = -1, K, J, Q, Y, H, st, lt, at, it = "", nt = this.defaultPropsArray, ot;
                if (t.j === 2 || t.j === 1) {
                    var U = 0
                      , ht = 0
                      , ft = t.j === 2 ? -.5 : -1
                      , tt = 0
                      , pt = !0;
                    for (y = 0; y < P; y += 1)
                        if (u[y].n) {
                            for (U && (U += ht); tt < y; )
                                u[tt].animatorJustifyOffset = U,
                                tt += 1;
                            U = 0,
                            pt = !0
                        } else {
                            for (k = 0; k < S; k += 1)
                                A = i[k].a,
                                A.t.propType && (pt && t.j === 2 && (ht += A.t.v * ft),
                                F = i[k].s,
                                V = F.getMult(u[y].anIndexes[k], s.a[k].s.totalChars),
                                V.length ? U += A.t.v * V[0] * ft : U += A.t.v * V * ft);
                            pt = !1
                        }
                    for (U && (U += ht); tt < y; )
                        u[tt].animatorJustifyOffset = U,
                        tt += 1
                }
                for (y = 0; y < P; y += 1) {
                    if (a.reset(),
                    K = 1,
                    u[y].n)
                        o = 0,
                        f += t.yOffset,
                        f += D ? 1 : 0,
                        x = q,
                        D = !1,
                        this._hasMaskedPath && (p = X,
                        m = Z,
                        E = _[p].points,
                        g = E[m - 1],
                        d = E[m],
                        T = d.partialLength,
                        C = 0),
                        it = "",
                        at = "",
                        st = "",
                        ot = "",
                        nt = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (rt !== u[y].line) {
                                switch (t.j) {
                                case 1:
                                    x += M - t.lineWidths[u[y].line];
                                    break;
                                case 2:
                                    x += (M - t.lineWidths[u[y].line]) / 2;
                                    break
                                }
                                rt = u[y].line
                            }
                            G !== u[y].ind && (u[G] && (x += u[G].extra),
                            x += u[y].an / 2,
                            G = u[y].ind),
                            x += r[0] * u[y].an * .005;
                            var et = 0;
                            for (k = 0; k < S; k += 1)
                                A = i[k].a,
                                A.p.propType && (F = i[k].s,
                                V = F.getMult(u[y].anIndexes[k], s.a[k].s.totalChars),
                                V.length ? et += A.p.v[0] * V[0] : et += A.p.v[0] * V),
                                A.a.propType && (F = i[k].s,
                                V = F.getMult(u[y].anIndexes[k], s.a[k].s.totalChars),
                                V.length ? et += A.a.v[0] * V[0] : et += A.a.v[0] * V);
                            for (c = !0,
                            this._pathData.a.v && (x = u[0].an * .5 + (M - this._pathData.f.v - u[0].an * .5 - u[u.length - 1].an * .5) * G / (P - 1),
                            x += this._pathData.f.v); c; )
                                C + T >= x + et || !E ? (B = (x + et - C) / d.partialLength,
                                $ = g.point[0] + (d.point[0] - g.point[0]) * B,
                                W = g.point[1] + (d.point[1] - g.point[1]) * B,
                                a.translate(-r[0] * u[y].an * .005, -(r[1] * N) * .01),
                                c = !1) : E && (C += d.partialLength,
                                m += 1,
                                m >= E.length && (m = 0,
                                p += 1,
                                _[p] ? E = _[p].points : R.v.c ? (m = 0,
                                p = 0,
                                E = _[p].points) : (C -= d.partialLength,
                                E = null)),
                                E && (g = d,
                                d = E[m],
                                T = d.partialLength));
                            j = u[y].an / 2 - u[y].add,
                            a.translate(-j, 0, 0)
                        } else
                            j = u[y].an / 2 - u[y].add,
                            a.translate(-j, 0, 0),
                            a.translate(-r[0] * u[y].an * .005, -r[1] * N * .01, 0);
                        for (k = 0; k < S; k += 1)
                            A = i[k].a,
                            A.t.propType && (F = i[k].s,
                            V = F.getMult(u[y].anIndexes[k], s.a[k].s.totalChars),
                            (o !== 0 || t.j !== 0) && (this._hasMaskedPath ? V.length ? x += A.t.v * V[0] : x += A.t.v * V : V.length ? o += A.t.v * V[0] : o += A.t.v * V));
                        for (t.strokeWidthAnim && (Q = t.sw || 0),
                        t.strokeColorAnim && (t.sc ? J = [t.sc[0], t.sc[1], t.sc[2]] : J = [0, 0, 0]),
                        t.fillColorAnim && t.fc && (Y = [t.fc[0], t.fc[1], t.fc[2]]),
                        k = 0; k < S; k += 1)
                            A = i[k].a,
                            A.a.propType && (F = i[k].s,
                            V = F.getMult(u[y].anIndexes[k], s.a[k].s.totalChars),
                            V.length ? a.translate(-A.a.v[0] * V[0], -A.a.v[1] * V[1], A.a.v[2] * V[2]) : a.translate(-A.a.v[0] * V, -A.a.v[1] * V, A.a.v[2] * V));
                        for (k = 0; k < S; k += 1)
                            A = i[k].a,
                            A.s.propType && (F = i[k].s,
                            V = F.getMult(u[y].anIndexes[k], s.a[k].s.totalChars),
                            V.length ? a.scale(1 + (A.s.v[0] - 1) * V[0], 1 + (A.s.v[1] - 1) * V[1], 1) : a.scale(1 + (A.s.v[0] - 1) * V, 1 + (A.s.v[1] - 1) * V, 1));
                        for (k = 0; k < S; k += 1) {
                            if (A = i[k].a,
                            F = i[k].s,
                            V = F.getMult(u[y].anIndexes[k], s.a[k].s.totalChars),
                            A.sk.propType && (V.length ? a.skewFromAxis(-A.sk.v * V[0], A.sa.v * V[1]) : a.skewFromAxis(-A.sk.v * V, A.sa.v * V)),
                            A.r.propType && (V.length ? a.rotateZ(-A.r.v * V[2]) : a.rotateZ(-A.r.v * V)),
                            A.ry.propType && (V.length ? a.rotateY(A.ry.v * V[1]) : a.rotateY(A.ry.v * V)),
                            A.rx.propType && (V.length ? a.rotateX(A.rx.v * V[0]) : a.rotateX(A.rx.v * V)),
                            A.o.propType && (V.length ? K += (A.o.v * V[0] - K) * V[0] : K += (A.o.v * V - K) * V),
                            t.strokeWidthAnim && A.sw.propType && (V.length ? Q += A.sw.v * V[0] : Q += A.sw.v * V),
                            t.strokeColorAnim && A.sc.propType)
                                for (H = 0; H < 3; H += 1)
                                    V.length ? J[H] += (A.sc.v[H] - J[H]) * V[0] : J[H] += (A.sc.v[H] - J[H]) * V;
                            if (t.fillColorAnim && t.fc) {
                                if (A.fc.propType)
                                    for (H = 0; H < 3; H += 1)
                                        V.length ? Y[H] += (A.fc.v[H] - Y[H]) * V[0] : Y[H] += (A.fc.v[H] - Y[H]) * V;
                                A.fh.propType && (V.length ? Y = addHueToRGB(Y, A.fh.v * V[0]) : Y = addHueToRGB(Y, A.fh.v * V)),
                                A.fs.propType && (V.length ? Y = addSaturationToRGB(Y, A.fs.v * V[0]) : Y = addSaturationToRGB(Y, A.fs.v * V)),
                                A.fb.propType && (V.length ? Y = addBrightnessToRGB(Y, A.fb.v * V[0]) : Y = addBrightnessToRGB(Y, A.fb.v * V))
                            }
                        }
                        for (k = 0; k < S; k += 1)
                            A = i[k].a,
                            A.p.propType && (F = i[k].s,
                            V = F.getMult(u[y].anIndexes[k], s.a[k].s.totalChars),
                            this._hasMaskedPath ? V.length ? a.translate(0, A.p.v[1] * V[0], -A.p.v[2] * V[1]) : a.translate(0, A.p.v[1] * V, -A.p.v[2] * V) : V.length ? a.translate(A.p.v[0] * V[0], A.p.v[1] * V[1], -A.p.v[2] * V[2]) : a.translate(A.p.v[0] * V, A.p.v[1] * V, -A.p.v[2] * V));
                        if (t.strokeWidthAnim && (st = Q < 0 ? 0 : Q),
                        t.strokeColorAnim && (lt = "rgb(" + Math.round(J[0] * 255) + "," + Math.round(J[1] * 255) + "," + Math.round(J[2] * 255) + ")"),
                        t.fillColorAnim && t.fc && (at = "rgb(" + Math.round(Y[0] * 255) + "," + Math.round(Y[1] * 255) + "," + Math.round(Y[2] * 255) + ")"),
                        this._hasMaskedPath) {
                            if (a.translate(0, -t.ls),
                            a.translate(0, r[1] * N * .01 + f, 0),
                            this._pathData.p.v) {
                                z = (d.point[1] - g.point[1]) / (d.point[0] - g.point[0]);
                                var ct = Math.atan(z) * 180 / Math.PI;
                                d.point[0] < g.point[0] && (ct += 180),
                                a.rotate(-ct * Math.PI / 180)
                            }
                            a.translate($, W, 0),
                            x -= r[0] * u[y].an * .005,
                            u[y + 1] && G !== u[y + 1].ind && (x += u[y].an / 2,
                            x += t.tr * .001 * t.finalSize)
                        } else {
                            switch (a.translate(o, f, 0),
                            t.ps && a.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                            t.j) {
                            case 1:
                                a.translate(u[y].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[u[y].line]), 0, 0);
                                break;
                            case 2:
                                a.translate(u[y].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[u[y].line]) / 2, 0, 0);
                                break
                            }
                            a.translate(0, -t.ls),
                            a.translate(j, 0, 0),
                            a.translate(r[0] * u[y].an * .005, r[1] * N * .01, 0),
                            o += u[y].l + t.tr * .001 * t.finalSize
                        }
                        n === "html" ? it = a.toCSS() : n === "svg" ? it = a.to2dCSS() : nt = [a.props[0], a.props[1], a.props[2], a.props[3], a.props[4], a.props[5], a.props[6], a.props[7], a.props[8], a.props[9], a.props[10], a.props[11], a.props[12], a.props[13], a.props[14], a.props[15]],
                        ot = K
                    }
                    l <= y ? (I = new LetterProps(ot,st,lt,at,it,nt),
                    this.renderedLetters.push(I),
                    l += 1,
                    this.lettersChangedFlag = !0) : (I = this.renderedLetters[y],
                    this.lettersChangedFlag = I.update(ot, st, lt, at, it, nt) || this.lettersChangedFlag)
                }
            }
        }
        ,
        TextAnimatorProperty.prototype.getValue = function() {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId,
            this.iterateDynamicProperties())
        }
        ,
        TextAnimatorProperty.prototype.mHelper = new Matrix,
        TextAnimatorProperty.prototype.defaultPropsArray = [],
        extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);
        function ITextElement() {}
        ITextElement.prototype.initElement = function(t, e, r) {
            this.lettersChangedFlag = !0,
            this.initFrame(),
            this.initBaseData(t, e, r),
            this.textProperty = new TextProperty(this,t.t,this.dynamicProperties),
            this.textAnimator = new TextAnimatorProperty(t.t,this.renderType,this),
            this.initTransform(t, e, r),
            this.initHierarchy(),
            this.initRenderable(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            this.createContent(),
            this.hide(),
            this.textAnimator.searchProperties(this.dynamicProperties)
        }
        ,
        ITextElement.prototype.prepareFrame = function(t) {
            this._mdf = !1,
            this.prepareRenderableFrame(t),
            this.prepareProperties(t, this.isInRange)
        }
        ,
        ITextElement.prototype.createPathShape = function(t, e) {
            var r, i = e.length, s, a = "";
            for (r = 0; r < i; r += 1)
                e[r].ty === "sh" && (s = e[r].ks.k,
                a += buildShapeString(s, s.i.length, !0, t));
            return a
        }
        ,
        ITextElement.prototype.updateDocumentData = function(t, e) {
            this.textProperty.updateDocumentData(t, e)
        }
        ,
        ITextElement.prototype.canResizeFont = function(t) {
            this.textProperty.canResizeFont(t)
        }
        ,
        ITextElement.prototype.setMinimumFontSize = function(t) {
            this.textProperty.setMinimumFontSize(t)
        }
        ,
        ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, s) {
            switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
            e.translate(0, -t.ls, 0),
            t.j) {
            case 1:
                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                break;
            case 2:
                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
                break
            }
            e.translate(i, s, 0)
        }
        ,
        ITextElement.prototype.buildColor = function(t) {
            return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")"
        }
        ,
        ITextElement.prototype.emptyProp = new LetterProps,
        ITextElement.prototype.destroy = function() {}
        ,
        ITextElement.prototype.validateText = function() {
            (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(),
            this.textProperty._isFirstFrame = !1,
            this.textProperty._mdf = !1)
        }
        ;
        var emptyShapeData = {
            shapes: []
        };
        function SVGTextLottieElement(t, e, r) {
            this.textSpans = [],
            this.renderType = "svg",
            this.initElement(t, e, r)
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement),
        SVGTextLottieElement.prototype.createContent = function() {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }
        ,
        SVGTextLottieElement.prototype.buildTextContents = function(t) {
            for (var e = 0, r = t.length, i = [], s = ""; e < r; )
                t[e] === "\r" || t[e] === "" ? (i.push(s),
                s = "") : s += t[e],
                e += 1;
            return i.push(s),
            i
        }
        ,
        SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
            if (t.shapes && t.shapes.length) {
                var r = t.shapes[0];
                if (r.it) {
                    var i = r.it[r.it.length - 1];
                    i.s && (i.s.k[0] = e,
                    i.s.k[1] = e)
                }
            }
            return t
        }
        ,
        SVGTextLottieElement.prototype.buildNewText = function() {
            this.addDynamicProperty(this);
            var t, e, r = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(r ? r.l.length : 0),
            r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
            r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)),
            this.layerElement.setAttribute("stroke-width", r.sw)),
            this.layerElement.setAttribute("font-size", r.finalSize);
            var i = this.globalData.fontManager.getFontByName(r.f);
            if (i.fClass)
                this.layerElement.setAttribute("class", i.fClass);
            else {
                this.layerElement.setAttribute("font-family", i.fFamily);
                var s = r.fWeight
                  , a = r.fStyle;
                this.layerElement.setAttribute("font-style", a),
                this.layerElement.setAttribute("font-weight", s)
            }
            this.layerElement.setAttribute("aria-label", r.t);
            var n = r.l || []
              , l = !!this.globalData.fontManager.chars;
            e = n.length;
            var o, f = this.mHelper, y = "", P = this.data.singleShape, u = 0, b = 0, x = !0, d = r.tr * .001 * r.finalSize;
            if (P && !l && !r.sz) {
                var C = this.textContainer
                  , c = "start";
                switch (r.j) {
                case 1:
                    c = "end";
                    break;
                case 2:
                    c = "middle";
                    break;
                default:
                    c = "start";
                    break
                }
                C.setAttribute("text-anchor", c),
                C.setAttribute("letter-spacing", d);
                var m = this.buildTextContents(r.finalText);
                for (e = m.length,
                b = r.ps ? r.ps[1] + r.ascent : 0,
                t = 0; t < e; t += 1)
                    o = this.textSpans[t].span || createNS("tspan"),
                    o.textContent = m[t],
                    o.setAttribute("x", 0),
                    o.setAttribute("y", b),
                    o.style.display = "inherit",
                    C.appendChild(o),
                    this.textSpans[t] || (this.textSpans[t] = {
                        span: null,
                        glyph: null
                    }),
                    this.textSpans[t].span = o,
                    b += r.finalLineHeight;
                this.layerElement.appendChild(C)
            } else {
                var p = this.textSpans.length, g;
                for (t = 0; t < e; t += 1) {
                    if (this.textSpans[t] || (this.textSpans[t] = {
                        span: null,
                        childSpan: null,
                        glyph: null
                    }),
                    !l || !P || t === 0) {
                        if (o = p > t ? this.textSpans[t].span : createNS(l ? "g" : "text"),
                        p <= t) {
                            if (o.setAttribute("stroke-linecap", "butt"),
                            o.setAttribute("stroke-linejoin", "round"),
                            o.setAttribute("stroke-miterlimit", "4"),
                            this.textSpans[t].span = o,
                            l) {
                                var E = createNS("g");
                                o.appendChild(E),
                                this.textSpans[t].childSpan = E
                            }
                            this.textSpans[t].span = o,
                            this.layerElement.appendChild(o)
                        }
                        o.style.display = "inherit"
                    }
                    if (f.reset(),
                    P && (n[t].n && (u = -d,
                    b += r.yOffset,
                    b += x ? 1 : 0,
                    x = !1),
                    this.applyTextPropertiesToMatrix(r, f, n[t].line, u, b),
                    u += n[t].l || 0,
                    u += d),
                    l) {
                        g = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily);
                        var _;
                        if (g.t === 1)
                            _ = new SVGCompElement(g.data,this.globalData,this);
                        else {
                            var T = emptyShapeData;
                            g.data && g.data.shapes && (T = this.buildShapeData(g.data, r.finalSize)),
                            _ = new SVGShapeElement(T,this.globalData,this)
                        }
                        if (this.textSpans[t].glyph) {
                            var M = this.textSpans[t].glyph;
                            this.textSpans[t].childSpan.removeChild(M.layerElement),
                            M.destroy()
                        }
                        this.textSpans[t].glyph = _,
                        _._debug = !0,
                        _.prepareFrame(0),
                        _.renderFrame(),
                        this.textSpans[t].childSpan.appendChild(_.layerElement),
                        g.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
                    } else
                        P && o.setAttribute("transform", "translate(" + f.props[12] + "," + f.props[13] + ")"),
                        o.textContent = n[t].val,
                        o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                }
                P && o && o.setAttribute("d", y)
            }
            for (; t < this.textSpans.length; )
                this.textSpans[t].span.style.display = "none",
                t += 1;
            this._sizeChanged = !0
        }
        ,
        SVGTextLottieElement.prototype.sourceRectAtTime = function() {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st),
            this.renderInnerContent(),
            this._sizeChanged) {
                this._sizeChanged = !1;
                var t = this.layerElement.getBBox();
                this.bbox = {
                    top: t.y,
                    left: t.x,
                    width: t.width,
                    height: t.height
                }
            }
            return this.bbox
        }
        ,
        SVGTextLottieElement.prototype.getValue = function() {
            var t, e = this.textSpans.length, r;
            for (this.renderedFrame = this.comp.renderedFrame,
            t = 0; t < e; t += 1)
                r = this.textSpans[t].glyph,
                r && (r.prepareFrame(this.comp.renderedFrame - this.data.st),
                r._mdf && (this._mdf = !0))
        }
        ,
        SVGTextLottieElement.prototype.renderInnerContent = function() {
            if (this.validateText(),
            (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
            this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                this._sizeChanged = !0;
                var t, e, r = this.textAnimator.renderedLetters, i = this.textProperty.currentData.l;
                e = i.length;
                var s, a, n;
                for (t = 0; t < e; t += 1)
                    i[t].n || (s = r[t],
                    a = this.textSpans[t].span,
                    n = this.textSpans[t].glyph,
                    n && n.renderFrame(),
                    s._mdf.m && a.setAttribute("transform", s.m),
                    s._mdf.o && a.setAttribute("opacity", s.o),
                    s._mdf.sw && a.setAttribute("stroke-width", s.sw),
                    s._mdf.sc && a.setAttribute("stroke", s.sc),
                    s._mdf.fc && a.setAttribute("fill", s.fc))
            }
        }
        ;
        function ISolidElement(t, e, r) {
            this.initElement(t, e, r)
        }
        extendPrototype([IImageElement], ISolidElement),
        ISolidElement.prototype.createContent = function() {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw),
            t.setAttribute("height", this.data.sh),
            t.setAttribute("fill", this.data.sc),
            this.layerElement.appendChild(t)
        }
        ;
        function NullElement(t, e, r) {
            this.initFrame(),
            this.initBaseData(t, e, r),
            this.initFrame(),
            this.initTransform(t, e, r),
            this.initHierarchy()
        }
        NullElement.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0)
        }
        ,
        NullElement.prototype.renderFrame = function() {}
        ,
        NullElement.prototype.getBaseElement = function() {
            return null
        }
        ,
        NullElement.prototype.destroy = function() {}
        ,
        NullElement.prototype.sourceRectAtTime = function() {}
        ,
        NullElement.prototype.hide = function() {}
        ,
        extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);
        function SVGRendererBase() {}
        extendPrototype([BaseRenderer], SVGRendererBase),
        SVGRendererBase.prototype.createNull = function(t) {
            return new NullElement(t,this.globalData,this)
        }
        ,
        SVGRendererBase.prototype.createShape = function(t) {
            return new SVGShapeElement(t,this.globalData,this)
        }
        ,
        SVGRendererBase.prototype.createText = function(t) {
            return new SVGTextLottieElement(t,this.globalData,this)
        }
        ,
        SVGRendererBase.prototype.createImage = function(t) {
            return new IImageElement(t,this.globalData,this)
        }
        ,
        SVGRendererBase.prototype.createSolid = function(t) {
            return new ISolidElement(t,this.globalData,this)
        }
        ,
        SVGRendererBase.prototype.configAnimation = function(t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
            this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"),
            this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h),
            this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w),
            this.svgElement.setAttribute("height", t.h),
            this.svgElement.style.width = "100%",
            this.svgElement.style.height = "100%",
            this.svgElement.style.transform = "translate3d(0,0,0)",
            this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility),
            this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width),
            this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height),
            this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className),
            this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id),
            this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable),
            this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio),
            this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e),
            this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
            this.data = t;
            var r = createNS("clipPath")
              , i = createNS("rect");
            i.setAttribute("width", t.w),
            i.setAttribute("height", t.h),
            i.setAttribute("x", 0),
            i.setAttribute("y", 0);
            var s = createElementID();
            r.setAttribute("id", s),
            r.appendChild(i),
            this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"),
            e.appendChild(r),
            this.layers = t.layers,
            this.elements = createSizedArray(t.layers.length)
        }
        ,
        SVGRendererBase.prototype.destroy = function() {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
            this.layerElement = null,
            this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1)
                this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0,
            this.destroyed = !0,
            this.animationItem = null
        }
        ,
        SVGRendererBase.prototype.updateContainerSize = function() {}
        ,
        SVGRendererBase.prototype.findIndexByInd = function(t) {
            var e = 0
              , r = this.layers.length;
            for (e = 0; e < r; e += 1)
                if (this.layers[e].ind === t)
                    return e;
            return -1
        }
        ,
        SVGRendererBase.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!(e[t] || this.layers[t].ty === 99)) {
                e[t] = !0;
                var r = this.createItem(this.layers[t]);
                if (e[t] = r,
                getExpressionsPlugin() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(r),
                r.initExpressions()),
                this.appendElementInPos(r, t),
                this.layers[t].tt) {
                    var i = "tp"in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                    if (i === -1)
                        return;
                    if (!this.elements[i] || this.elements[i] === !0)
                        this.buildItem(i),
                        this.addPendingElement(r);
                    else {
                        var s = e[i]
                          , a = s.getMatte(this.layers[t].tt);
                        r.setMatte(a)
                    }
                }
            }
        }
        ,
        SVGRendererBase.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length; ) {
                var t = this.pendingElements.pop();
                if (t.checkParenting(),
                t.data.tt)
                    for (var e = 0, r = this.elements.length; e < r; ) {
                        if (this.elements[e] === t) {
                            var i = "tp"in t.data ? this.findIndexByInd(t.data.tp) : e - 1
                              , s = this.elements[i]
                              , a = s.getMatte(this.layers[e].tt);
                            t.setMatte(a);
                            break
                        }
                        e += 1
                    }
            }
        }
        ,
        SVGRendererBase.prototype.renderFrame = function(t) {
            if (!(this.renderedFrame === t || this.destroyed)) {
                t === null ? t = this.renderedFrame : this.renderedFrame = t,
                this.globalData.frameNum = t,
                this.globalData.frameId += 1,
                this.globalData.projectInterface.currentFrame = t,
                this.globalData._mdf = !1;
                var e, r = this.layers.length;
                for (this.completeLayers || this.checkLayers(t),
                e = r - 1; e >= 0; e -= 1)
                    (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf)
                    for (e = 0; e < r; e += 1)
                        (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }
        }
        ,
        SVGRendererBase.prototype.appendElementInPos = function(t, e) {
            var r = t.getBaseElement();
            if (r) {
                for (var i = 0, s; i < e; )
                    this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (s = this.elements[i].getBaseElement()),
                    i += 1;
                s ? this.layerElement.insertBefore(r, s) : this.layerElement.appendChild(r)
            }
        }
        ,
        SVGRendererBase.prototype.hide = function() {
            this.layerElement.style.display = "none"
        }
        ,
        SVGRendererBase.prototype.show = function() {
            this.layerElement.style.display = "block"
        }
        ;
        function ICompElement() {}
        extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement),
        ICompElement.prototype.initElement = function(t, e, r) {
            this.initFrame(),
            this.initBaseData(t, e, r),
            this.initTransform(t, e, r),
            this.initRenderable(),
            this.initHierarchy(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            (this.data.xt || !e.progressiveLoad) && this.buildAllItems(),
            this.hide()
        }
        ,
        ICompElement.prototype.prepareFrame = function(t) {
            if (this._mdf = !1,
            this.prepareRenderableFrame(t),
            this.prepareProperties(t, this.isInRange),
            !(!this.isInRange && !this.data.xt)) {
                if (this.tm._placeholder)
                    this.renderedFrame = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1),
                    this.renderedFrame = e
                }
                var r, i = this.elements.length;
                for (this.completeLayers || this.checkLayers(this.renderedFrame),
                r = i - 1; r >= 0; r -= 1)
                    (this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st),
                    this.elements[r]._mdf && (this._mdf = !0))
            }
        }
        ,
        ICompElement.prototype.renderInnerContent = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1)
                (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }
        ,
        ICompElement.prototype.setElements = function(t) {
            this.elements = t
        }
        ,
        ICompElement.prototype.getElements = function() {
            return this.elements
        }
        ,
        ICompElement.prototype.destroyElements = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1)
                this.elements[t] && this.elements[t].destroy()
        }
        ,
        ICompElement.prototype.destroy = function() {
            this.destroyElements(),
            this.destroyBaseElement()
        }
        ;
        function SVGCompElement(t, e, r) {
            this.layers = t.layers,
            this.supports3d = !0,
            this.completeLayers = !1,
            this.pendingElements = [],
            this.elements = this.layers ? createSizedArray(this.layers.length) : [],
            this.initElement(t, e, r),
            this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }
        extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement),
        SVGCompElement.prototype.createComp = function(t) {
            return new SVGCompElement(t,this.globalData,this)
        }
        ;
        function SVGRenderer(t, e) {
            this.animationItem = t,
            this.layers = null,
            this.renderedFrame = -1,
            this.svgElement = createNS("svg");
            var r = "";
            if (e && e.title) {
                var i = createNS("title")
                  , s = createElementID();
                i.setAttribute("id", s),
                i.textContent = e.title,
                this.svgElement.appendChild(i),
                r += s
            }
            if (e && e.description) {
                var a = createNS("desc")
                  , n = createElementID();
                a.setAttribute("id", n),
                a.textContent = e.description,
                this.svgElement.appendChild(a),
                r += " " + n
            }
            r && this.svgElement.setAttribute("aria-labelledby", r);
            var l = createNS("defs");
            this.svgElement.appendChild(l);
            var o = createNS("g");
            this.svgElement.appendChild(o),
            this.layerElement = o,
            this.renderConfig = {
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                progressiveLoad: e && e.progressiveLoad || !1,
                hideOnTransparent: !(e && e.hideOnTransparent === !1),
                viewBoxOnly: e && e.viewBoxOnly || !1,
                viewBoxSize: e && e.viewBoxSize || !1,
                className: e && e.className || "",
                id: e && e.id || "",
                focusable: e && e.focusable,
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "100%",
                    height: e && e.filterSize && e.filterSize.height || "100%",
                    x: e && e.filterSize && e.filterSize.x || "0%",
                    y: e && e.filterSize && e.filterSize.y || "0%"
                },
                width: e && e.width,
                height: e && e.height,
                runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
            },
            this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: l,
                renderConfig: this.renderConfig
            },
            this.elements = [],
            this.pendingElements = [],
            this.destroyed = !1,
            this.rendererType = "svg"
        }
        extendPrototype([SVGRendererBase], SVGRenderer),
        SVGRenderer.prototype.createComp = function(t) {
            return new SVGCompElement(t,this.globalData,this)
        }
        ;
        function ShapeTransformManager() {
            this.sequences = {},
            this.sequenceList = [],
            this.transform_key_count = 0
        }
        ShapeTransformManager.prototype = {
            addTransformSequence: function(e) {
                var r, i = e.length, s = "_";
                for (r = 0; r < i; r += 1)
                    s += e[r].transform.key + "_";
                var a = this.sequences[s];
                return a || (a = {
                    transforms: [].concat(e),
                    finalTransform: new Matrix,
                    _mdf: !1
                },
                this.sequences[s] = a,
                this.sequenceList.push(a)),
                a
            },
            processSequence: function(e, r) {
                for (var i = 0, s = e.transforms.length, a = r; i < s && !r; ) {
                    if (e.transforms[i].transform.mProps._mdf) {
                        a = !0;
                        break
                    }
                    i += 1
                }
                if (a)
                    for (e.finalTransform.reset(),
                    i = s - 1; i >= 0; i -= 1)
                        e.finalTransform.multiply(e.transforms[i].transform.mProps.v);
                e._mdf = a
            },
            processSequences: function(e) {
                var r, i = this.sequenceList.length;
                for (r = 0; r < i; r += 1)
                    this.processSequence(this.sequenceList[r], e)
            },
            getNewKey: function() {
                return this.transform_key_count += 1,
                "_" + this.transform_key_count
            }
        };
        var lumaLoader = function() {
            var e = "__lottie_element_luma_buffer"
              , r = null
              , i = null
              , s = null;
            function a() {
                var o = createNS("svg")
                  , f = createNS("filter")
                  , y = createNS("feColorMatrix");
                return f.setAttribute("id", e),
                y.setAttribute("type", "matrix"),
                y.setAttribute("color-interpolation-filters", "sRGB"),
                y.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"),
                f.appendChild(y),
                o.appendChild(f),
                o.setAttribute("id", e + "_svg"),
                featureSupport.svgLumaHidden && (o.style.display = "none"),
                o
            }
            function n() {
                r || (s = a(),
                document.body.appendChild(s),
                r = createTag("canvas"),
                i = r.getContext("2d"),
                i.filter = "url(#" + e + ")",
                i.fillStyle = "rgba(0,0,0,0)",
                i.fillRect(0, 0, 1, 1))
            }
            function l(o) {
                return r || n(),
                r.width = o.width,
                r.height = o.height,
                i.filter = "url(#" + e + ")",
                r
            }
            return {
                load: n,
                get: l
            }
        };
        function createCanvas(t, e) {
            if (featureSupport.offscreenCanvas)
                return new OffscreenCanvas(t,e);
            var r = createTag("canvas");
            return r.width = t,
            r.height = e,
            r
        }
        var assetLoader = function() {
            return {
                loadLumaCanvas: lumaLoader.load,
                getLumaCanvas: lumaLoader.get,
                createCanvas
            }
        }()
          , registeredEffects = {};
        function CVEffects(t) {
            var e, r = t.data.ef ? t.data.ef.length : 0;
            this.filters = [];
            var i;
            for (e = 0; e < r; e += 1) {
                i = null;
                var s = t.data.ef[e].ty;
                if (registeredEffects[s]) {
                    var a = registeredEffects[s].effect;
                    i = new a(t.effectsManager.effectElements[e],t)
                }
                i && this.filters.push(i)
            }
            this.filters.length && t.addRenderableComponent(this)
        }
        CVEffects.prototype.renderFrame = function(t) {
            var e, r = this.filters.length;
            for (e = 0; e < r; e += 1)
                this.filters[e].renderFrame(t)
        }
        ,
        CVEffects.prototype.getEffects = function(t) {
            var e, r = this.filters.length, i = [];
            for (e = 0; e < r; e += 1)
                this.filters[e].type === t && i.push(this.filters[e]);
            return i
        }
        ;
        function registerEffect(t, e) {
            registeredEffects[t] = {
                effect: e
            }
        }
        function CVMaskElement(t, e) {
            this.data = t,
            this.element = e,
            this.masksProperties = this.data.masksProperties || [],
            this.viewData = createSizedArray(this.masksProperties.length);
            var r, i = this.masksProperties.length, s = !1;
            for (r = 0; r < i; r += 1)
                this.masksProperties[r].mode !== "n" && (s = !0),
                this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
            this.hasMasks = s,
            s && this.element.addRenderableComponent(this)
        }
        CVMaskElement.prototype.renderFrame = function() {
            if (this.hasMasks) {
                var t = this.element.finalTransform.mat, e = this.element.canvasContext, r, i = this.masksProperties.length, s, a, n;
                for (e.beginPath(),
                r = 0; r < i; r += 1)
                    if (this.masksProperties[r].mode !== "n") {
                        this.masksProperties[r].inv && (e.moveTo(0, 0),
                        e.lineTo(this.element.globalData.compSize.w, 0),
                        e.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h),
                        e.lineTo(0, this.element.globalData.compSize.h),
                        e.lineTo(0, 0)),
                        n = this.viewData[r].v,
                        s = t.applyToPointArray(n.v[0][0], n.v[0][1], 0),
                        e.moveTo(s[0], s[1]);
                        var l, o = n._length;
                        for (l = 1; l < o; l += 1)
                            a = t.applyToTriplePoints(n.o[l - 1], n.i[l], n.v[l]),
                            e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
                        a = t.applyToTriplePoints(n.o[l - 1], n.i[0], n.v[0]),
                        e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5])
                    }
                this.element.globalData.renderer.save(!0),
                e.clip()
            }
        }
        ,
        CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty,
        CVMaskElement.prototype.destroy = function() {
            this.element = null
        }
        ;
        function CVBaseElement() {}
        var operationsMap = {
            1: "source-in",
            2: "source-out",
            3: "source-in",
            4: "source-out"
        };
        CVBaseElement.prototype = {
            createElements: function() {},
            initRendererElement: function() {},
            createContainerElements: function() {
                if (this.data.tt >= 1) {
                    this.buffers = [];
                    var e = this.globalData.canvasContext
                      , r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                    this.buffers.push(r);
                    var i = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                    this.buffers.push(i),
                    this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                }
                this.canvasContext = this.globalData.canvasContext,
                this.transformCanvas = this.globalData.transformCanvas,
                this.renderableEffectsManager = new CVEffects(this),
                this.searchEffectTransforms()
            },
            createContent: function() {},
            setBlendMode: function() {
                var e = this.globalData;
                if (e.blendMode !== this.data.bm) {
                    e.blendMode = this.data.bm;
                    var r = getBlendMode(this.data.bm);
                    e.canvasContext.globalCompositeOperation = r
                }
            },
            createRenderableComponents: function() {
                this.maskManager = new CVMaskElement(this.data,this),
                this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
            },
            hideElement: function() {
                !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = !0)
            },
            showElement: function() {
                this.isInRange && !this.isTransparent && (this.hidden = !1,
                this._isFirstFrame = !0,
                this.maskManager._isFirstFrame = !0)
            },
            clearCanvas: function(e) {
                e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
            },
            prepareLayer: function() {
                if (this.data.tt >= 1) {
                    var e = this.buffers[0]
                      , r = e.getContext("2d");
                    this.clearCanvas(r),
                    r.drawImage(this.canvasContext.canvas, 0, 0),
                    this.currentTransform = this.canvasContext.getTransform(),
                    this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
                    this.clearCanvas(this.canvasContext),
                    this.canvasContext.setTransform(this.currentTransform)
                }
            },
            exitLayer: function() {
                if (this.data.tt >= 1) {
                    var e = this.buffers[1]
                      , r = e.getContext("2d");
                    this.clearCanvas(r),
                    r.drawImage(this.canvasContext.canvas, 0, 0),
                    this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
                    this.clearCanvas(this.canvasContext),
                    this.canvasContext.setTransform(this.currentTransform);
                    var i = this.comp.getElementById("tp"in this.data ? this.data.tp : this.data.ind - 1);
                    if (i.renderFrame(!0),
                    this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
                    this.data.tt >= 3 && !document._isProxy) {
                        var s = assetLoader.getLumaCanvas(this.canvasContext.canvas)
                          , a = s.getContext("2d");
                        a.drawImage(this.canvasContext.canvas, 0, 0),
                        this.clearCanvas(this.canvasContext),
                        this.canvasContext.drawImage(s, 0, 0)
                    }
                    this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt],
                    this.canvasContext.drawImage(e, 0, 0),
                    this.canvasContext.globalCompositeOperation = "destination-over",
                    this.canvasContext.drawImage(this.buffers[0], 0, 0),
                    this.canvasContext.setTransform(this.currentTransform),
                    this.canvasContext.globalCompositeOperation = "source-over"
                }
            },
            renderFrame: function(e) {
                if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !e)) {
                    this.renderTransform(),
                    this.renderRenderable(),
                    this.renderLocalTransform(),
                    this.setBlendMode();
                    var r = this.data.ty === 0;
                    this.prepareLayer(),
                    this.globalData.renderer.save(r),
                    this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props),
                    this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity),
                    this.renderInnerContent(),
                    this.globalData.renderer.restore(r),
                    this.exitLayer(),
                    this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
                    this._isFirstFrame && (this._isFirstFrame = !1)
                }
            },
            destroy: function() {
                this.canvasContext = null,
                this.data = null,
                this.globalData = null,
                this.maskManager.destroy()
            },
            mHelper: new Matrix
        },
        CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement,
        CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;
        function CVShapeData(t, e, r, i) {
            this.styledShapes = [],
            this.tr = [0, 0, 0, 0, 0, 0];
            var s = 4;
            e.ty === "rc" ? s = 5 : e.ty === "el" ? s = 6 : e.ty === "sr" && (s = 7),
            this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
            var a, n = r.length, l;
            for (a = 0; a < n; a += 1)
                r[a].closed || (l = {
                    transforms: i.addTransformSequence(r[a].transforms),
                    trNodes: []
                },
                this.styledShapes.push(l),
                r[a].elements.push(l))
        }
        CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;
        function CVShapeElement(t, e, r) {
            this.shapes = [],
            this.shapesData = t.shapes,
            this.stylesList = [],
            this.itemsData = [],
            this.prevViewData = [],
            this.shapeModifiers = [],
            this.processedElements = [],
            this.transformsManager = new ShapeTransformManager,
            this.initElement(t, e, r)
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement),
        CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement,
        CVShapeElement.prototype.transformHelper = {
            opacity: 1,
            _opMdf: !1
        },
        CVShapeElement.prototype.dashResetter = [],
        CVShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }
        ,
        CVShapeElement.prototype.createStyleElement = function(t, e) {
            var r = {
                data: t,
                type: t.ty,
                preTransforms: this.transformsManager.addTransformSequence(e),
                transforms: [],
                elements: [],
                closed: t.hd === !0
            }
              , i = {};
            if (t.ty === "fl" || t.ty === "st" ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this),
            i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : (t.ty === "gf" || t.ty === "gs") && (i.s = PropertyFactory.getProp(this, t.s, 1, null, this),
            i.e = PropertyFactory.getProp(this, t.e, 1, null, this),
            i.h = PropertyFactory.getProp(this, t.h || {
                k: 0
            }, 0, .01, this),
            i.a = PropertyFactory.getProp(this, t.a || {
                k: 0
            }, 0, degToRads, this),
            i.g = new GradientProperty(this,t.g,this)),
            i.o = PropertyFactory.getProp(this, t.o, 0, .01, this),
            t.ty === "st" || t.ty === "gs") {
                if (r.lc = lineCapEnum[t.lc || 2],
                r.lj = lineJoinEnum[t.lj || 2],
                t.lj == 1 && (r.ml = t.ml),
                i.w = PropertyFactory.getProp(this, t.w, 0, null, this),
                i.w.k || (r.wi = i.w.v),
                t.d) {
                    var s = new DashProperty(this,t.d,"canvas",this);
                    i.d = s,
                    i.d.k || (r.da = i.d.dashArray,
                    r.do = i.d.dashoffset[0])
                }
            } else
                r.r = t.r === 2 ? "evenodd" : "nonzero";
            return this.stylesList.push(r),
            i.style = r,
            i
        }
        ,
        CVShapeElement.prototype.createGroupElement = function() {
            var t = {
                it: [],
                prevViewData: []
            };
            return t
        }
        ,
        CVShapeElement.prototype.createTransformElement = function(t) {
            var e = {
                transform: {
                    opacity: 1,
                    _opMdf: !1,
                    key: this.transformsManager.getNewKey(),
                    op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                    mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                }
            };
            return e
        }
        ,
        CVShapeElement.prototype.createShapeElement = function(t) {
            var e = new CVShapeData(this,t,this.stylesList,this.transformsManager);
            return this.shapes.push(e),
            this.addShapeToModifiers(e),
            e
        }
        ,
        CVShapeElement.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var t, e = this.itemsData.length;
            for (t = 0; t < e; t += 1)
                this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []),
            e = this.dynamicProperties.length,
            t = 0; t < e; t += 1)
                this.dynamicProperties[t].getValue();
            this.renderModifiers(),
            this.transformsManager.processSequences(this._isFirstFrame)
        }
        ,
        CVShapeElement.prototype.addTransformToStyleList = function(t) {
            var e, r = this.stylesList.length;
            for (e = 0; e < r; e += 1)
                this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
        }
        ,
        CVShapeElement.prototype.removeTransformFromStyleList = function() {
            var t, e = this.stylesList.length;
            for (t = 0; t < e; t += 1)
                this.stylesList[t].closed || this.stylesList[t].transforms.pop()
        }
        ,
        CVShapeElement.prototype.closeStyles = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1)
                t[e].closed = !0
        }
        ,
        CVShapeElement.prototype.searchShapes = function(t, e, r, i, s) {
            var a, n = t.length - 1, l, o, f = [], y = [], P, u, b, x = [].concat(s);
            for (a = n; a >= 0; a -= 1) {
                if (P = this.searchProcessedElement(t[a]),
                P ? e[a] = r[P - 1] : t[a]._shouldRender = i,
                t[a].ty === "fl" || t[a].ty === "st" || t[a].ty === "gf" || t[a].ty === "gs")
                    P ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], x),
                    f.push(e[a].style);
                else if (t[a].ty === "gr") {
                    if (!P)
                        e[a] = this.createGroupElement(t[a]);
                    else
                        for (o = e[a].it.length,
                        l = 0; l < o; l += 1)
                            e[a].prevViewData[l] = e[a].it[l];
                    this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, x)
                } else
                    t[a].ty === "tr" ? (P || (b = this.createTransformElement(t[a]),
                    e[a] = b),
                    x.push(e[a]),
                    this.addTransformToStyleList(e[a])) : t[a].ty === "sh" || t[a].ty === "rc" || t[a].ty === "el" || t[a].ty === "sr" ? P || (e[a] = this.createShapeElement(t[a])) : t[a].ty === "tm" || t[a].ty === "rd" || t[a].ty === "pb" || t[a].ty === "zz" || t[a].ty === "op" ? (P ? (u = e[a],
                    u.closed = !1) : (u = ShapeModifiers.getModifier(t[a].ty),
                    u.init(this, t[a]),
                    e[a] = u,
                    this.shapeModifiers.push(u)),
                    y.push(u)) : t[a].ty === "rp" && (P ? (u = e[a],
                    u.closed = !0) : (u = ShapeModifiers.getModifier(t[a].ty),
                    e[a] = u,
                    u.init(this, t, a, e),
                    this.shapeModifiers.push(u),
                    i = !1),
                    y.push(u));
                this.addProcessedElement(t[a], a + 1)
            }
            for (this.removeTransformFromStyleList(),
            this.closeStyles(f),
            n = y.length,
            a = 0; a < n; a += 1)
                y[a].closed = !0
        }
        ,
        CVShapeElement.prototype.renderInnerContent = function() {
            this.transformHelper.opacity = 1,
            this.transformHelper._opMdf = !1,
            this.renderModifiers(),
            this.transformsManager.processSequences(this._isFirstFrame),
            this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }
        ,
        CVShapeElement.prototype.renderShapeTransform = function(t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity,
            e.opacity *= e.op.v,
            e._opMdf = !0)
        }
        ,
        CVShapeElement.prototype.drawLayer = function() {
            var t, e = this.stylesList.length, r, i, s, a, n, l, o = this.globalData.renderer, f = this.globalData.canvasContext, y, P;
            for (t = 0; t < e; t += 1)
                if (P = this.stylesList[t],
                y = P.type,
                !((y === "st" || y === "gs") && P.wi === 0 || !P.data._shouldRender || P.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
                    for (o.save(),
                    n = P.elements,
                    y === "st" || y === "gs" ? (o.ctxStrokeStyle(y === "st" ? P.co : P.grd),
                    o.ctxLineWidth(P.wi),
                    o.ctxLineCap(P.lc),
                    o.ctxLineJoin(P.lj),
                    o.ctxMiterLimit(P.ml || 0)) : o.ctxFillStyle(y === "fl" ? P.co : P.grd),
                    o.ctxOpacity(P.coOp),
                    y !== "st" && y !== "gs" && f.beginPath(),
                    o.ctxTransform(P.preTransforms.finalTransform.props),
                    i = n.length,
                    r = 0; r < i; r += 1) {
                        for ((y === "st" || y === "gs") && (f.beginPath(),
                        P.da && (f.setLineDash(P.da),
                        f.lineDashOffset = P.do)),
                        l = n[r].trNodes,
                        a = l.length,
                        s = 0; s < a; s += 1)
                            l[s].t === "m" ? f.moveTo(l[s].p[0], l[s].p[1]) : l[s].t === "c" ? f.bezierCurveTo(l[s].pts[0], l[s].pts[1], l[s].pts[2], l[s].pts[3], l[s].pts[4], l[s].pts[5]) : f.closePath();
                        (y === "st" || y === "gs") && (o.ctxStroke(),
                        P.da && f.setLineDash(this.dashResetter))
                    }
                    y !== "st" && y !== "gs" && this.globalData.renderer.ctxFill(P.r),
                    o.restore()
                }
        }
        ,
        CVShapeElement.prototype.renderShape = function(t, e, r, i) {
            var s, a = e.length - 1, n;
            for (n = t,
            s = a; s >= 0; s -= 1)
                e[s].ty === "tr" ? (n = r[s].transform,
                this.renderShapeTransform(t, n)) : e[s].ty === "sh" || e[s].ty === "el" || e[s].ty === "rc" || e[s].ty === "sr" ? this.renderPath(e[s], r[s]) : e[s].ty === "fl" ? this.renderFill(e[s], r[s], n) : e[s].ty === "st" ? this.renderStroke(e[s], r[s], n) : e[s].ty === "gf" || e[s].ty === "gs" ? this.renderGradientFill(e[s], r[s], n) : e[s].ty === "gr" ? this.renderShape(n, e[s].it, r[s].it) : e[s].ty;
            i && this.drawLayer()
        }
        ,
        CVShapeElement.prototype.renderStyledShape = function(t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var r = t.trNodes, i = e.paths, s, a, n, l = i._length;
                r.length = 0;
                var o = t.transforms.finalTransform;
                for (n = 0; n < l; n += 1) {
                    var f = i.shapes[n];
                    if (f && f.v) {
                        for (a = f._length,
                        s = 1; s < a; s += 1)
                            s === 1 && r.push({
                                t: "m",
                                p: o.applyToPointArray(f.v[0][0], f.v[0][1], 0)
                            }),
                            r.push({
                                t: "c",
                                pts: o.applyToTriplePoints(f.o[s - 1], f.i[s], f.v[s])
                            });
                        a === 1 && r.push({
                            t: "m",
                            p: o.applyToPointArray(f.v[0][0], f.v[0][1], 0)
                        }),
                        f.c && a && (r.push({
                            t: "c",
                            pts: o.applyToTriplePoints(f.o[s - 1], f.i[0], f.v[0])
                        }),
                        r.push({
                            t: "z"
                        }))
                    }
                }
                t.trNodes = r
            }
        }
        ,
        CVShapeElement.prototype.renderPath = function(t, e) {
            if (t.hd !== !0 && t._shouldRender) {
                var r, i = e.styledShapes.length;
                for (r = 0; r < i; r += 1)
                    this.renderStyledShape(e.styledShapes[r], e.sh)
            }
        }
        ,
        CVShapeElement.prototype.renderFill = function(t, e, r) {
            var i = e.style;
            (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
            (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity)
        }
        ,
        CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
            var i = e.style, s;
            if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || t.t !== 1 && (e.h._mdf || e.a._mdf)) {
                var a = this.globalData.canvasContext
                  , n = e.s.v
                  , l = e.e.v;
                if (t.t === 1)
                    s = a.createLinearGradient(n[0], n[1], l[0], l[1]);
                else {
                    var o = Math.sqrt(Math.pow(n[0] - l[0], 2) + Math.pow(n[1] - l[1], 2))
                      , f = Math.atan2(l[1] - n[1], l[0] - n[0])
                      , y = e.h.v;
                    y >= 1 ? y = .99 : y <= -1 && (y = -.99);
                    var P = o * y
                      , u = Math.cos(f + e.a.v) * P + n[0]
                      , b = Math.sin(f + e.a.v) * P + n[1];
                    s = a.createRadialGradient(u, b, 0, n[0], n[1], o)
                }
                var x, d = t.g.p, C = e.g.c, c = 1;
                for (x = 0; x < d; x += 1)
                    e.g._hasOpacity && e.g._collapsable && (c = e.g.o[x * 2 + 1]),
                    s.addColorStop(C[x * 4] / 100, "rgba(" + C[x * 4 + 1] + "," + C[x * 4 + 2] + "," + C[x * 4 + 3] + "," + c + ")");
                i.grd = s
            }
            i.coOp = e.o.v * r.opacity
        }
        ,
        CVShapeElement.prototype.renderStroke = function(t, e, r) {
            var i = e.style
              , s = e.d;
            s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray,
            i.do = s.dashoffset[0]),
            (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
            (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity),
            (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
        }
        ,
        CVShapeElement.prototype.destroy = function() {
            this.shapesData = null,
            this.globalData = null,
            this.canvasContext = null,
            this.stylesList.length = 0,
            this.itemsData.length = 0
        }
        ;
        function CVTextElement(t, e, r) {
            this.textSpans = [],
            this.yOffset = 0,
            this.fillColorAnim = !1,
            this.strokeColorAnim = !1,
            this.strokeWidthAnim = !1,
            this.stroke = !1,
            this.fill = !1,
            this.justifyOffset = 0,
            this.currentRender = null,
            this.renderType = "canvas",
            this.values = {
                fill: "rgba(0,0,0,0)",
                stroke: "rgba(0,0,0,0)",
                sWidth: 0,
                fValue: ""
            },
            this.initElement(t, e, r)
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement),
        CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"),
        CVTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = !1;
            t.fc ? (e = !0,
            this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)",
            this.fill = e;
            var r = !1;
            t.sc && (r = !0,
            this.values.stroke = this.buildColor(t.sc),
            this.values.sWidth = t.sw);
            var i = this.globalData.fontManager.getFontByName(t.f), s, a, n = t.l, l = this.mHelper;
            this.stroke = r,
            this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily,
            a = t.finalText.length;
            var o, f, y, P, u, b, x, d, C, c, m = this.data.singleShape, p = t.tr * .001 * t.finalSize, g = 0, E = 0, _ = !0, T = 0;
            for (s = 0; s < a; s += 1) {
                o = this.globalData.fontManager.getCharData(t.finalText[s], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily),
                f = o && o.data || {},
                l.reset(),
                m && n[s].n && (g = -p,
                E += t.yOffset,
                E += _ ? 1 : 0,
                _ = !1),
                u = f.shapes ? f.shapes[0].it : [],
                x = u.length,
                l.scale(t.finalSize / 100, t.finalSize / 100),
                m && this.applyTextPropertiesToMatrix(t, l, n[s].line, g, E),
                C = createSizedArray(x - 1);
                var M = 0;
                for (b = 0; b < x; b += 1)
                    if (u[b].ty === "sh") {
                        for (P = u[b].ks.k.i.length,
                        d = u[b].ks.k,
                        c = [],
                        y = 1; y < P; y += 1)
                            y === 1 && c.push(l.applyToX(d.v[0][0], d.v[0][1], 0), l.applyToY(d.v[0][0], d.v[0][1], 0)),
                            c.push(l.applyToX(d.o[y - 1][0], d.o[y - 1][1], 0), l.applyToY(d.o[y - 1][0], d.o[y - 1][1], 0), l.applyToX(d.i[y][0], d.i[y][1], 0), l.applyToY(d.i[y][0], d.i[y][1], 0), l.applyToX(d.v[y][0], d.v[y][1], 0), l.applyToY(d.v[y][0], d.v[y][1], 0));
                        c.push(l.applyToX(d.o[y - 1][0], d.o[y - 1][1], 0), l.applyToY(d.o[y - 1][0], d.o[y - 1][1], 0), l.applyToX(d.i[0][0], d.i[0][1], 0), l.applyToY(d.i[0][0], d.i[0][1], 0), l.applyToX(d.v[0][0], d.v[0][1], 0), l.applyToY(d.v[0][0], d.v[0][1], 0)),
                        C[M] = c,
                        M += 1
                    }
                m && (g += n[s].l,
                g += p),
                this.textSpans[T] ? this.textSpans[T].elem = C : this.textSpans[T] = {
                    elem: C
                },
                T += 1
            }
        }
        ,
        CVTextElement.prototype.renderInnerContent = function() {
            this.validateText();
            var t = this.canvasContext;
            t.font = this.values.fValue,
            this.globalData.renderer.ctxLineCap("butt"),
            this.globalData.renderer.ctxLineJoin("miter"),
            this.globalData.renderer.ctxMiterLimit(4),
            this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var e, r, i, s, a, n, l = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l;
            r = o.length;
            var f, y = null, P = null, u = null, b, x, d = this.globalData.renderer;
            for (e = 0; e < r; e += 1)
                if (!o[e].n) {
                    if (f = l[e],
                    f && (d.save(),
                    d.ctxTransform(f.p),
                    d.ctxOpacity(f.o)),
                    this.fill) {
                        for (f && f.fc ? y !== f.fc && (d.ctxFillStyle(f.fc),
                        y = f.fc) : y !== this.values.fill && (y = this.values.fill,
                        d.ctxFillStyle(this.values.fill)),
                        b = this.textSpans[e].elem,
                        s = b.length,
                        this.globalData.canvasContext.beginPath(),
                        i = 0; i < s; i += 1)
                            for (x = b[i],
                            n = x.length,
                            this.globalData.canvasContext.moveTo(x[0], x[1]),
                            a = 2; a < n; a += 6)
                                this.globalData.canvasContext.bezierCurveTo(x[a], x[a + 1], x[a + 2], x[a + 3], x[a + 4], x[a + 5]);
                        this.globalData.canvasContext.closePath(),
                        d.ctxFill()
                    }
                    if (this.stroke) {
                        for (f && f.sw ? u !== f.sw && (u = f.sw,
                        d.ctxLineWidth(f.sw)) : u !== this.values.sWidth && (u = this.values.sWidth,
                        d.ctxLineWidth(this.values.sWidth)),
                        f && f.sc ? P !== f.sc && (P = f.sc,
                        d.ctxStrokeStyle(f.sc)) : P !== this.values.stroke && (P = this.values.stroke,
                        d.ctxStrokeStyle(this.values.stroke)),
                        b = this.textSpans[e].elem,
                        s = b.length,
                        this.globalData.canvasContext.beginPath(),
                        i = 0; i < s; i += 1)
                            for (x = b[i],
                            n = x.length,
                            this.globalData.canvasContext.moveTo(x[0], x[1]),
                            a = 2; a < n; a += 6)
                                this.globalData.canvasContext.bezierCurveTo(x[a], x[a + 1], x[a + 2], x[a + 3], x[a + 4], x[a + 5]);
                        this.globalData.canvasContext.closePath(),
                        d.ctxStroke()
                    }
                    f && this.globalData.renderer.restore()
                }
        }
        ;
        function CVImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId),
            this.img = e.imageLoader.getAsset(this.assetData),
            this.initElement(t, e, r)
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement),
        CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement,
        CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
        CVImageElement.prototype.createContent = function() {
            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                var t = createTag("canvas");
                t.width = this.assetData.w,
                t.height = this.assetData.h;
                var e = t.getContext("2d"), r = this.img.width, i = this.img.height, s = r / i, a = this.assetData.w / this.assetData.h, n, l, o = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                s > a && o === "xMidYMid slice" || s < a && o !== "xMidYMid slice" ? (l = i,
                n = l * a) : (n = r,
                l = n / a),
                e.drawImage(this.img, (r - n) / 2, (i - l) / 2, n, l, 0, 0, this.assetData.w, this.assetData.h),
                this.img = t
            }
        }
        ,
        CVImageElement.prototype.renderInnerContent = function() {
            this.canvasContext.drawImage(this.img, 0, 0)
        }
        ,
        CVImageElement.prototype.destroy = function() {
            this.img = null
        }
        ;
        function CVSolidElement(t, e, r) {
            this.initElement(t, e, r)
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement),
        CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement,
        CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
        CVSolidElement.prototype.renderInnerContent = function() {
            this.globalData.renderer.ctxFillStyle(this.data.sc),
            this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
        }
        ;
        function CanvasRendererBase() {}
        extendPrototype([BaseRenderer], CanvasRendererBase),
        CanvasRendererBase.prototype.createShape = function(t) {
            return new CVShapeElement(t,this.globalData,this)
        }
        ,
        CanvasRendererBase.prototype.createText = function(t) {
            return new CVTextElement(t,this.globalData,this)
        }
        ,
        CanvasRendererBase.prototype.createImage = function(t) {
            return new CVImageElement(t,this.globalData,this)
        }
        ,
        CanvasRendererBase.prototype.createSolid = function(t) {
            return new CVSolidElement(t,this.globalData,this)
        }
        ,
        CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull,
        CanvasRendererBase.prototype.ctxTransform = function(t) {
            t[0] === 1 && t[1] === 0 && t[4] === 0 && t[5] === 1 && t[12] === 0 && t[13] === 0 || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
        }
        ,
        CanvasRendererBase.prototype.ctxOpacity = function(t) {
            this.canvasContext.globalAlpha *= t < 0 ? 0 : t
        }
        ,
        CanvasRendererBase.prototype.ctxFillStyle = function(t) {
            this.canvasContext.fillStyle = t
        }
        ,
        CanvasRendererBase.prototype.ctxStrokeStyle = function(t) {
            this.canvasContext.strokeStyle = t
        }
        ,
        CanvasRendererBase.prototype.ctxLineWidth = function(t) {
            this.canvasContext.lineWidth = t
        }
        ,
        CanvasRendererBase.prototype.ctxLineCap = function(t) {
            this.canvasContext.lineCap = t
        }
        ,
        CanvasRendererBase.prototype.ctxLineJoin = function(t) {
            this.canvasContext.lineJoin = t
        }
        ,
        CanvasRendererBase.prototype.ctxMiterLimit = function(t) {
            this.canvasContext.miterLimit = t
        }
        ,
        CanvasRendererBase.prototype.ctxFill = function(t) {
            this.canvasContext.fill(t)
        }
        ,
        CanvasRendererBase.prototype.ctxFillRect = function(t, e, r, i) {
            this.canvasContext.fillRect(t, e, r, i)
        }
        ,
        CanvasRendererBase.prototype.ctxStroke = function() {
            this.canvasContext.stroke()
        }
        ,
        CanvasRendererBase.prototype.reset = function() {
            if (!this.renderConfig.clearCanvas) {
                this.canvasContext.restore();
                return
            }
            this.contextData.reset()
        }
        ,
        CanvasRendererBase.prototype.save = function() {
            this.canvasContext.save()
        }
        ,
        CanvasRendererBase.prototype.restore = function(t) {
            if (!this.renderConfig.clearCanvas) {
                this.canvasContext.restore();
                return
            }
            t && (this.globalData.blendMode = "source-over"),
            this.contextData.restore(t)
        }
        ,
        CanvasRendererBase.prototype.configAnimation = function(t) {
            if (this.animationItem.wrapper) {
                this.animationItem.container = createTag("canvas");
                var e = this.animationItem.container.style;
                e.width = "100%",
                e.height = "100%";
                var r = "0px 0px 0px";
                e.transformOrigin = r,
                e.mozTransformOrigin = r,
                e.webkitTransformOrigin = r,
                e["-webkit-transform"] = r,
                e.contentVisibility = this.renderConfig.contentVisibility,
                this.animationItem.wrapper.appendChild(this.animationItem.container),
                this.canvasContext = this.animationItem.container.getContext("2d"),
                this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className),
                this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
            } else
                this.canvasContext = this.renderConfig.context;
            this.contextData.setContext(this.canvasContext),
            this.data = t,
            this.layers = t.layers,
            this.transformCanvas = {
                w: t.w,
                h: t.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0
            },
            this.setupGlobalData(t, document.body),
            this.globalData.canvasContext = this.canvasContext,
            this.globalData.renderer = this,
            this.globalData.isDashed = !1,
            this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
            this.globalData.transformCanvas = this.transformCanvas,
            this.elements = createSizedArray(t.layers.length),
            this.updateContainerSize()
        }
        ,
        CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
            this.reset();
            var r, i;
            t ? (r = t,
            i = e,
            this.canvasContext.canvas.width = r,
            this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth,
            i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width,
            i = this.canvasContext.canvas.height),
            this.canvasContext.canvas.width = r * this.renderConfig.dpr,
            this.canvasContext.canvas.height = i * this.renderConfig.dpr);
            var s, a;
            if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
                var n = this.renderConfig.preserveAspectRatio.split(" ")
                  , l = n[1] || "meet"
                  , o = n[0] || "xMidYMid"
                  , f = o.substr(0, 4)
                  , y = o.substr(4);
                s = r / i,
                a = this.transformCanvas.w / this.transformCanvas.h,
                a > s && l === "meet" || a < s && l === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr),
                this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr),
                this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)),
                f === "xMid" && (a < s && l === "meet" || a > s && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : f === "xMax" && (a < s && l === "meet" || a > s && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0,
                y === "YMid" && (a > s && l === "meet" || a < s && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : y === "YMax" && (a > s && l === "meet" || a < s && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0
            } else
                this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr),
                this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr),
                this.transformCanvas.tx = 0,
                this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr,
                this.transformCanvas.sy = this.renderConfig.dpr,
                this.transformCanvas.tx = 0,
                this.transformCanvas.ty = 0);
            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1],
            this.ctxTransform(this.transformCanvas.props),
            this.canvasContext.beginPath(),
            this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h),
            this.canvasContext.closePath(),
            this.canvasContext.clip(),
            this.renderFrame(this.renderedFrame, !0)
        }
        ,
        CanvasRendererBase.prototype.destroy = function() {
            this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
            var t, e = this.layers ? this.layers.length : 0;
            for (t = e - 1; t >= 0; t -= 1)
                this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0,
            this.globalData.canvasContext = null,
            this.animationItem.container = null,
            this.destroyed = !0
        }
        ,
        CanvasRendererBase.prototype.renderFrame = function(t, e) {
            if (!(this.renderedFrame === t && this.renderConfig.clearCanvas === !0 && !e || this.destroyed || t === -1)) {
                this.renderedFrame = t,
                this.globalData.frameNum = t - this.animationItem._isFirstFrame,
                this.globalData.frameId += 1,
                this.globalData._mdf = !this.renderConfig.clearCanvas || e,
                this.globalData.projectInterface.currentFrame = t;
                var r, i = this.layers.length;
                for (this.completeLayers || this.checkLayers(t),
                r = i - 1; r >= 0; r -= 1)
                    (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
                if (this.globalData._mdf) {
                    for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(),
                    r = i - 1; r >= 0; r -= 1)
                        (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                    this.renderConfig.clearCanvas !== !0 && this.restore()
                }
            }
        }
        ,
        CanvasRendererBase.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!(e[t] || this.layers[t].ty === 99)) {
                var r = this.createItem(this.layers[t], this, this.globalData);
                e[t] = r,
                r.initExpressions()
            }
        }
        ,
        CanvasRendererBase.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length; ) {
                var t = this.pendingElements.pop();
                t.checkParenting()
            }
        }
        ,
        CanvasRendererBase.prototype.hide = function() {
            this.animationItem.container.style.display = "none"
        }
        ,
        CanvasRendererBase.prototype.show = function() {
            this.animationItem.container.style.display = "block"
        }
        ;
        function CanvasContext() {
            this.opacity = -1,
            this.transform = createTypedArray("float32", 16),
            this.fillStyle = "",
            this.strokeStyle = "",
            this.lineWidth = "",
            this.lineCap = "",
            this.lineJoin = "",
            this.miterLimit = "",
            this.id = Math.random()
        }
        function CVContextData() {
            this.stack = [],
            this.cArrPos = 0,
            this.cTr = new Matrix;
            var t, e = 15;
            for (t = 0; t < e; t += 1) {
                var r = new CanvasContext;
                this.stack[t] = r
            }
            this._length = e,
            this.nativeContext = null,
            this.transformMat = new Matrix,
            this.currentOpacity = 1,
            this.currentFillStyle = "",
            this.appliedFillStyle = "",
            this.currentStrokeStyle = "",
            this.appliedStrokeStyle = "",
            this.currentLineWidth = "",
            this.appliedLineWidth = "",
            this.currentLineCap = "",
            this.appliedLineCap = "",
            this.currentLineJoin = "",
            this.appliedLineJoin = "",
            this.appliedMiterLimit = "",
            this.currentMiterLimit = ""
        }
        CVContextData.prototype.duplicate = function() {
            var t = this._length * 2
              , e = 0;
            for (e = this._length; e < t; e += 1)
                this.stack[e] = new CanvasContext;
            this._length = t
        }
        ,
        CVContextData.prototype.reset = function() {
            this.cArrPos = 0,
            this.cTr.reset(),
            this.stack[this.cArrPos].opacity = 1
        }
        ,
        CVContextData.prototype.restore = function(t) {
            this.cArrPos -= 1;
            var e = this.stack[this.cArrPos], r = e.transform, i, s = this.cTr.props;
            for (i = 0; i < 16; i += 1)
                s[i] = r[i];
            if (t) {
                this.nativeContext.restore();
                var a = this.stack[this.cArrPos + 1];
                this.appliedFillStyle = a.fillStyle,
                this.appliedStrokeStyle = a.strokeStyle,
                this.appliedLineWidth = a.lineWidth,
                this.appliedLineCap = a.lineCap,
                this.appliedLineJoin = a.lineJoin,
                this.appliedMiterLimit = a.miterLimit
            }
            this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]),
            (t || e.opacity !== -1 && this.currentOpacity !== e.opacity) && (this.nativeContext.globalAlpha = e.opacity,
            this.currentOpacity = e.opacity),
            this.currentFillStyle = e.fillStyle,
            this.currentStrokeStyle = e.strokeStyle,
            this.currentLineWidth = e.lineWidth,
            this.currentLineCap = e.lineCap,
            this.currentLineJoin = e.lineJoin,
            this.currentMiterLimit = e.miterLimit
        }
        ,
        CVContextData.prototype.save = function(t) {
            t && this.nativeContext.save();
            var e = this.cTr.props;
            this._length <= this.cArrPos && this.duplicate();
            var r = this.stack[this.cArrPos], i;
            for (i = 0; i < 16; i += 1)
                r.transform[i] = e[i];
            this.cArrPos += 1;
            var s = this.stack[this.cArrPos];
            s.opacity = r.opacity,
            s.fillStyle = r.fillStyle,
            s.strokeStyle = r.strokeStyle,
            s.lineWidth = r.lineWidth,
            s.lineCap = r.lineCap,
            s.lineJoin = r.lineJoin,
            s.miterLimit = r.miterLimit
        }
        ,
        CVContextData.prototype.setOpacity = function(t) {
            this.stack[this.cArrPos].opacity = t
        }
        ,
        CVContextData.prototype.setContext = function(t) {
            this.nativeContext = t
        }
        ,
        CVContextData.prototype.fillStyle = function(t) {
            this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t,
            this.stack[this.cArrPos].fillStyle = t)
        }
        ,
        CVContextData.prototype.strokeStyle = function(t) {
            this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t,
            this.stack[this.cArrPos].strokeStyle = t)
        }
        ,
        CVContextData.prototype.lineWidth = function(t) {
            this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t,
            this.stack[this.cArrPos].lineWidth = t)
        }
        ,
        CVContextData.prototype.lineCap = function(t) {
            this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t,
            this.stack[this.cArrPos].lineCap = t)
        }
        ,
        CVContextData.prototype.lineJoin = function(t) {
            this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t,
            this.stack[this.cArrPos].lineJoin = t)
        }
        ,
        CVContextData.prototype.miterLimit = function(t) {
            this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t,
            this.stack[this.cArrPos].miterLimit = t)
        }
        ,
        CVContextData.prototype.transform = function(t) {
            this.transformMat.cloneFromProps(t);
            var e = this.cTr;
            this.transformMat.multiply(e),
            e.cloneFromProps(this.transformMat.props);
            var r = e.props;
            this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
        }
        ,
        CVContextData.prototype.opacity = function(t) {
            var e = this.stack[this.cArrPos].opacity;
            e *= t < 0 ? 0 : t,
            this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t,
            this.currentOpacity = t),
            this.stack[this.cArrPos].opacity = e)
        }
        ,
        CVContextData.prototype.fill = function(t) {
            this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle,
            this.nativeContext.fillStyle = this.appliedFillStyle),
            this.nativeContext.fill(t)
        }
        ,
        CVContextData.prototype.fillRect = function(t, e, r, i) {
            this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle,
            this.nativeContext.fillStyle = this.appliedFillStyle),
            this.nativeContext.fillRect(t, e, r, i)
        }
        ,
        CVContextData.prototype.stroke = function() {
            this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle,
            this.nativeContext.strokeStyle = this.appliedStrokeStyle),
            this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth,
            this.nativeContext.lineWidth = this.appliedLineWidth),
            this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap,
            this.nativeContext.lineCap = this.appliedLineCap),
            this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin,
            this.nativeContext.lineJoin = this.appliedLineJoin),
            this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit,
            this.nativeContext.miterLimit = this.appliedMiterLimit),
            this.nativeContext.stroke()
        }
        ;
        function CVCompElement(t, e, r) {
            this.completeLayers = !1,
            this.layers = t.layers,
            this.pendingElements = [],
            this.elements = createSizedArray(this.layers.length),
            this.initElement(t, e, r),
            this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }
        extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement),
        CVCompElement.prototype.renderInnerContent = function() {
            var t = this.canvasContext;
            t.beginPath(),
            t.moveTo(0, 0),
            t.lineTo(this.data.w, 0),
            t.lineTo(this.data.w, this.data.h),
            t.lineTo(0, this.data.h),
            t.lineTo(0, 0),
            t.clip();
            var e, r = this.layers.length;
            for (e = r - 1; e >= 0; e -= 1)
                (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
        }
        ,
        CVCompElement.prototype.destroy = function() {
            var t, e = this.layers.length;
            for (t = e - 1; t >= 0; t -= 1)
                this.elements[t] && this.elements[t].destroy();
            this.layers = null,
            this.elements = null
        }
        ,
        CVCompElement.prototype.createComp = function(t) {
            return new CVCompElement(t,this.globalData,this)
        }
        ;
        function CanvasRenderer(t, e) {
            this.animationItem = t,
            this.renderConfig = {
                clearCanvas: e && e.clearCanvas !== void 0 ? e.clearCanvas : !0,
                context: e && e.context || null,
                progressiveLoad: e && e.progressiveLoad || !1,
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                className: e && e.className || "",
                id: e && e.id || "",
                runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
            },
            this.renderConfig.dpr = e && e.dpr || 1,
            this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1),
            this.renderedFrame = -1,
            this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
            },
            this.contextData = new CVContextData,
            this.elements = [],
            this.pendingElements = [],
            this.transformMat = new Matrix,
            this.completeLayers = !1,
            this.rendererType = "canvas",
            this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData),
            this.ctxOpacity = this.contextData.opacity.bind(this.contextData),
            this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData),
            this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData),
            this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData),
            this.ctxLineCap = this.contextData.lineCap.bind(this.contextData),
            this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData),
            this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData),
            this.ctxFill = this.contextData.fill.bind(this.contextData),
            this.ctxFillRect = this.contextData.fillRect.bind(this.contextData),
            this.ctxStroke = this.contextData.stroke.bind(this.contextData),
            this.save = this.contextData.save.bind(this.contextData))
        }
        extendPrototype([CanvasRendererBase], CanvasRenderer),
        CanvasRenderer.prototype.createComp = function(t) {
            return new CVCompElement(t,this.globalData,this)
        }
        ;
        function HBaseElement() {}
        HBaseElement.prototype = {
            checkBlendMode: function() {},
            initRendererElement: function() {
                this.baseElement = createTag(this.data.tg || "div"),
                this.data.hasMask ? (this.svgElement = createNS("svg"),
                this.layerElement = createNS("g"),
                this.maskedElement = this.layerElement,
                this.svgElement.appendChild(this.layerElement),
                this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement,
                styleDiv(this.baseElement)
            },
            createContainerElements: function() {
                this.renderableEffectsManager = new CVEffects(this),
                this.transformedElement = this.baseElement,
                this.maskedElement = this.layerElement,
                this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                this.data.bm !== 0 && this.setBlendMode()
            },
            renderElement: function() {
                var e = this.transformedElement ? this.transformedElement.style : {};
                if (this.finalTransform._matMdf) {
                    var r = this.finalTransform.mat.toCSS();
                    e.transform = r,
                    e.webkitTransform = r
                }
                this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v)
            },
            renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(),
                this.renderRenderable(),
                this.renderElement(),
                this.renderInnerContent(),
                this._isFirstFrame && (this._isFirstFrame = !1))
            },
            destroy: function() {
                this.layerElement = null,
                this.transformedElement = null,
                this.matteElement && (this.matteElement = null),
                this.maskManager && (this.maskManager.destroy(),
                this.maskManager = null)
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data,this,this.globalData)
            },
            addEffects: function() {},
            setMatte: function() {}
        },
        HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement,
        HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy,
        HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;
        function HSolidElement(t, e, r) {
            this.initElement(t, e, r)
        }
        extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement),
        HSolidElement.prototype.createContent = function() {
            var t;
            this.data.hasMask ? (t = createNS("rect"),
            t.setAttribute("width", this.data.sw),
            t.setAttribute("height", this.data.sh),
            t.setAttribute("fill", this.data.sc),
            this.svgElement.setAttribute("width", this.data.sw),
            this.svgElement.setAttribute("height", this.data.sh)) : (t = createTag("div"),
            t.style.width = this.data.sw + "px",
            t.style.height = this.data.sh + "px",
            t.style.backgroundColor = this.data.sc),
            this.layerElement.appendChild(t)
        }
        ;
        function HShapeElement(t, e, r) {
            this.shapes = [],
            this.shapesData = t.shapes,
            this.stylesList = [],
            this.shapeModifiers = [],
            this.itemsData = [],
            this.processedElements = [],
            this.animatedContents = [],
            this.shapesContainer = createNS("g"),
            this.initElement(t, e, r),
            this.prevViewData = [],
            this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }
        }
        extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement),
        HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent,
        HShapeElement.prototype.createContent = function() {
            var t;
            if (this.baseElement.style.fontSize = 0,
            this.data.hasMask)
                this.layerElement.appendChild(this.shapesContainer),
                t = this.svgElement;
            else {
                t = createNS("svg");
                var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                t.setAttribute("width", e.w),
                t.setAttribute("height", e.h),
                t.appendChild(this.shapesContainer),
                this.layerElement.appendChild(t)
            }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0),
            this.filterUniqueShapes(),
            this.shapeCont = t
        }
        ,
        HShapeElement.prototype.getTransformedPoint = function(t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1)
                e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
            return e
        }
        ,
        HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
            var r = t.sh.v, i = t.transformers, s, a = r._length, n, l, o, f;
            if (!(a <= 1)) {
                for (s = 0; s < a - 1; s += 1)
                    n = this.getTransformedPoint(i, r.v[s]),
                    l = this.getTransformedPoint(i, r.o[s]),
                    o = this.getTransformedPoint(i, r.i[s + 1]),
                    f = this.getTransformedPoint(i, r.v[s + 1]),
                    this.checkBounds(n, l, o, f, e);
                r.c && (n = this.getTransformedPoint(i, r.v[s]),
                l = this.getTransformedPoint(i, r.o[s]),
                o = this.getTransformedPoint(i, r.i[0]),
                f = this.getTransformedPoint(i, r.v[0]),
                this.checkBounds(n, l, o, f, e))
            }
        }
        ,
        HShapeElement.prototype.checkBounds = function(t, e, r, i, s) {
            this.getBoundsOfCurve(t, e, r, i);
            var a = this.shapeBoundingBox;
            s.x = bmMin(a.left, s.x),
            s.xMax = bmMax(a.right, s.xMax),
            s.y = bmMin(a.top, s.y),
            s.yMax = bmMax(a.bottom, s.yMax)
        }
        ,
        HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0
        },
        HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
            for (var s = [[t[0], i[0]], [t[1], i[1]]], a, n, l, o, f, y, P, u = 0; u < 2; ++u)
                n = 6 * t[u] - 12 * e[u] + 6 * r[u],
                a = -3 * t[u] + 9 * e[u] - 9 * r[u] + 3 * i[u],
                l = 3 * e[u] - 3 * t[u],
                n |= 0,
                a |= 0,
                l |= 0,
                a === 0 && n === 0 || (a === 0 ? (o = -l / n,
                o > 0 && o < 1 && s[u].push(this.calculateF(o, t, e, r, i, u))) : (f = n * n - 4 * l * a,
                f >= 0 && (y = (-n + bmSqrt(f)) / (2 * a),
                y > 0 && y < 1 && s[u].push(this.calculateF(y, t, e, r, i, u)),
                P = (-n - bmSqrt(f)) / (2 * a),
                P > 0 && P < 1 && s[u].push(this.calculateF(P, t, e, r, i, u)))));
            this.shapeBoundingBox.left = bmMin.apply(null, s[0]),
            this.shapeBoundingBox.top = bmMin.apply(null, s[1]),
            this.shapeBoundingBox.right = bmMax.apply(null, s[0]),
            this.shapeBoundingBox.bottom = bmMax.apply(null, s[1])
        }
        ,
        HShapeElement.prototype.calculateF = function(t, e, r, i, s, a) {
            return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bmPow(t, 2) * i[a] + bmPow(t, 3) * s[a]
        }
        ,
        HShapeElement.prototype.calculateBoundingBox = function(t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1)
                t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it ? this.calculateBoundingBox(t[r].it, e) : t[r] && t[r].style && t[r].w && this.expandStrokeBoundingBox(t[r].w, e)
        }
        ,
        HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
            var r = 0;
            if (t.keyframes) {
                for (var i = 0; i < t.keyframes.length; i += 1) {
                    var s = t.keyframes[i].s;
                    s > r && (r = s)
                }
                r *= t.mult
            } else
                r = t.v * t.mult;
            e.x -= r,
            e.xMax += r,
            e.y -= r,
            e.yMax += r
        }
        ,
        HShapeElement.prototype.currentBoxContains = function(t) {
            return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
        }
        ,
        HShapeElement.prototype.renderInnerContent = function() {
            if (this._renderShapeFrame(),
            !this.hidden && (this._isFirstFrame || this._mdf)) {
                var t = this.tempBoundingBox
                  , e = 999999;
                if (t.x = e,
                t.xMax = -e,
                t.y = e,
                t.yMax = -e,
                this.calculateBoundingBox(this.itemsData, t),
                t.width = t.xMax < t.x ? 0 : t.xMax - t.x,
                t.height = t.yMax < t.y ? 0 : t.yMax - t.y,
                this.currentBoxContains(t))
                    return;
                var r = !1;
                if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width,
                this.shapeCont.setAttribute("width", t.width),
                r = !0),
                this.currentBBox.h !== t.height && (this.currentBBox.h = t.height,
                this.shapeCont.setAttribute("height", t.height),
                r = !0),
                r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                    this.currentBBox.w = t.width,
                    this.currentBBox.h = t.height,
                    this.currentBBox.x = t.x,
                    this.currentBBox.y = t.y,
                    this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                    var i = this.shapeCont.style
                      , s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                    i.transform = s,
                    i.webkitTransform = s
                }
            }
        }
        ;
        function HTextElement(t, e, r) {
            this.textSpans = [],
            this.textPaths = [],
            this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            },
            this.renderType = "svg",
            this.isMasked = !1,
            this.initElement(t, e, r)
        }
        extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement),
        HTextElement.prototype.createContent = function() {
            if (this.isMasked = this.checkMasks(),
            this.isMasked) {
                this.renderType = "svg",
                this.compW = this.comp.data.w,
                this.compH = this.comp.data.h,
                this.svgElement.setAttribute("width", this.compW),
                this.svgElement.setAttribute("height", this.compH);
                var t = createNS("g");
                this.maskedElement.appendChild(t),
                this.innerElem = t
            } else
                this.renderType = "html",
                this.innerElem = this.layerElement;
            this.checkParenting()
        }
        ,
        HTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = this.innerElem.style
              , r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
            e.fill = r,
            e.color = r,
            t.sc && (e.stroke = this.buildColor(t.sc),
            e.strokeWidth = t.sw + "px");
            var i = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars)
                if (e.fontSize = t.finalSize + "px",
                e.lineHeight = t.finalSize + "px",
                i.fClass)
                    this.innerElem.className = i.fClass;
                else {
                    e.fontFamily = i.fFamily;
                    var s = t.fWeight
                      , a = t.fStyle;
                    e.fontStyle = a,
                    e.fontWeight = s
                }
            var n, l, o = t.l;
            l = o.length;
            var f, y, P, u = this.mHelper, b, x = "", d = 0;
            for (n = 0; n < l; n += 1) {
                if (this.globalData.fontManager.chars ? (this.textPaths[d] ? f = this.textPaths[d] : (f = createNS("path"),
                f.setAttribute("stroke-linecap", lineCapEnum[1]),
                f.setAttribute("stroke-linejoin", lineJoinEnum[2]),
                f.setAttribute("stroke-miterlimit", "4")),
                this.isMasked || (this.textSpans[d] ? (y = this.textSpans[d],
                P = y.children[0]) : (y = createTag("div"),
                y.style.lineHeight = 0,
                P = createNS("svg"),
                P.appendChild(f),
                styleDiv(y)))) : this.isMasked ? f = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (y = this.textSpans[d],
                f = this.textPaths[d]) : (y = createTag("span"),
                styleDiv(y),
                f = createTag("span"),
                styleDiv(f),
                y.appendChild(f)),
                this.globalData.fontManager.chars) {
                    var C = this.globalData.fontManager.getCharData(t.finalText[n], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), c;
                    if (C ? c = C.data : c = null,
                    u.reset(),
                    c && c.shapes && c.shapes.length && (b = c.shapes[0].it,
                    u.scale(t.finalSize / 100, t.finalSize / 100),
                    x = this.createPathShape(u, b),
                    f.setAttribute("d", x)),
                    this.isMasked)
                        this.innerElem.appendChild(f);
                    else {
                        if (this.innerElem.appendChild(y),
                        c && c.shapes) {
                            document.body.appendChild(P);
                            var m = P.getBBox();
                            P.setAttribute("width", m.width + 2),
                            P.setAttribute("height", m.height + 2),
                            P.setAttribute("viewBox", m.x - 1 + " " + (m.y - 1) + " " + (m.width + 2) + " " + (m.height + 2));
                            var p = P.style
                              , g = "translate(" + (m.x - 1) + "px," + (m.y - 1) + "px)";
                            p.transform = g,
                            p.webkitTransform = g,
                            o[n].yOffset = m.y - 1
                        } else
                            P.setAttribute("width", 1),
                            P.setAttribute("height", 1);
                        y.appendChild(P)
                    }
                } else if (f.textContent = o[n].val,
                f.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"),
                this.isMasked)
                    this.innerElem.appendChild(f);
                else {
                    this.innerElem.appendChild(y);
                    var E = f.style
                      , _ = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                    E.transform = _,
                    E.webkitTransform = _
                }
                this.isMasked ? this.textSpans[d] = f : this.textSpans[d] = y,
                this.textSpans[d].style.display = "block",
                this.textPaths[d] = f,
                d += 1
            }
            for (; d < this.textSpans.length; )
                this.textSpans[d].style.display = "none",
                d += 1
        }
        ,
        HTextElement.prototype.renderInnerContent = function() {
            this.validateText();
            var t;
            if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag)
                    return;
                if (this.isMasked && this.finalTransform._matMdf) {
                    this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH),
                    t = this.svgElement.style;
                    var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                    t.transform = e,
                    t.webkitTransform = e
                }
            }
            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
            !(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag)) {
                var r, i, s = 0, a = this.textAnimator.renderedLetters, n = this.textProperty.currentData.l;
                i = n.length;
                var l, o, f;
                for (r = 0; r < i; r += 1)
                    n[r].n ? s += 1 : (o = this.textSpans[r],
                    f = this.textPaths[r],
                    l = a[s],
                    s += 1,
                    l._mdf.m && (this.isMasked ? o.setAttribute("transform", l.m) : (o.style.webkitTransform = l.m,
                    o.style.transform = l.m)),
                    o.style.opacity = l.o,
                    l.sw && l._mdf.sw && f.setAttribute("stroke-width", l.sw),
                    l.sc && l._mdf.sc && f.setAttribute("stroke", l.sc),
                    l.fc && l._mdf.fc && (f.setAttribute("fill", l.fc),
                    f.style.color = l.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var y = this.innerElem.getBBox();
                    this.currentBBox.w !== y.width && (this.currentBBox.w = y.width,
                    this.svgElement.setAttribute("width", y.width)),
                    this.currentBBox.h !== y.height && (this.currentBBox.h = y.height,
                    this.svgElement.setAttribute("height", y.height));
                    var P = 1;
                    if (this.currentBBox.w !== y.width + P * 2 || this.currentBBox.h !== y.height + P * 2 || this.currentBBox.x !== y.x - P || this.currentBBox.y !== y.y - P) {
                        this.currentBBox.w = y.width + P * 2,
                        this.currentBBox.h = y.height + P * 2,
                        this.currentBBox.x = y.x - P,
                        this.currentBBox.y = y.y - P,
                        this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h),
                        t = this.svgElement.style;
                        var u = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        t.transform = u,
                        t.webkitTransform = u
                    }
                }
            }
        }
        ;
        function HCameraElement(t, e, r) {
            this.initFrame(),
            this.initBaseData(t, e, r),
            this.initHierarchy();
            var i = PropertyFactory.getProp;
            if (this.pe = i(this, t.pe, 0, 0, this),
            t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this),
            this.py = i(this, t.ks.p.y, 1, 0, this),
            this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this),
            t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)),
            t.ks.or.k.length && t.ks.or.k[0].to) {
                var s, a = t.ks.or.k.length;
                for (s = 0; s < a; s += 1)
                    t.ks.or.k[s].to = null,
                    t.ks.or.k[s].ti = null
            }
            this.or = i(this, t.ks.or, 1, degToRads, this),
            this.or.sh = !0,
            this.rx = i(this, t.ks.rx, 0, degToRads, this),
            this.ry = i(this, t.ks.ry, 0, degToRads, this),
            this.rz = i(this, t.ks.rz, 0, degToRads, this),
            this.mat = new Matrix,
            this._prevMat = new Matrix,
            this._isFirstFrame = !0,
            this.finalTransform = {
                mProp: this
            }
        }
        extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),
        HCameraElement.prototype.setup = function() {
            var t, e = this.comp.threeDElements.length, r, i, s;
            for (t = 0; t < e; t += 1)
                if (r = this.comp.threeDElements[t],
                r.type === "3d") {
                    i = r.perspectiveElem.style,
                    s = r.container.style;
                    var a = this.pe.v + "px"
                      , n = "0px 0px 0px"
                      , l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    i.perspective = a,
                    i.webkitPerspective = a,
                    s.transformOrigin = n,
                    s.mozTransformOrigin = n,
                    s.webkitTransformOrigin = n,
                    i.transform = l,
                    i.webkitTransform = l
                }
        }
        ,
        HCameraElement.prototype.createElements = function() {}
        ,
        HCameraElement.prototype.hide = function() {}
        ,
        HCameraElement.prototype.renderFrame = function() {
            var t = this._isFirstFrame, e, r;
            if (this.hierarchy)
                for (r = this.hierarchy.length,
                e = 0; e < r; e += 1)
                    t = this.hierarchy[e].finalTransform.mProp._mdf || t;
            if (t || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                if (this.mat.reset(),
                this.hierarchy)
                    for (r = this.hierarchy.length - 1,
                    e = r; e >= 0; e -= 1) {
                        var i = this.hierarchy[e].finalTransform.mProp;
                        this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]),
                        this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]),
                        this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v),
                        this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]),
                        this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                    }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
                this.a) {
                    var s;
                    this.p ? s = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : s = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                    var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2))
                      , n = [s[0] / a, s[1] / a, s[2] / a]
                      , l = Math.sqrt(n[2] * n[2] + n[0] * n[0])
                      , o = Math.atan2(n[1], l)
                      , f = Math.atan2(n[0], -n[2]);
                    this.mat.rotateY(f).rotateX(-o)
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
                this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),
                this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0),
                this.mat.translate(0, 0, this.pe.v);
                var y = !this._prevMat.equals(this.mat);
                if ((y || this.pe._mdf) && this.comp.threeDElements) {
                    r = this.comp.threeDElements.length;
                    var P, u, b;
                    for (e = 0; e < r; e += 1)
                        if (P = this.comp.threeDElements[e],
                        P.type === "3d") {
                            if (y) {
                                var x = this.mat.toCSS();
                                b = P.container.style,
                                b.transform = x,
                                b.webkitTransform = x
                            }
                            this.pe._mdf && (u = P.perspectiveElem.style,
                            u.perspective = this.pe.v + "px",
                            u.webkitPerspective = this.pe.v + "px")
                        }
                    this.mat.clone(this._prevMat)
                }
            }
            this._isFirstFrame = !1
        }
        ,
        HCameraElement.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0)
        }
        ,
        HCameraElement.prototype.destroy = function() {}
        ,
        HCameraElement.prototype.getBaseElement = function() {
            return null
        }
        ;
        function HImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId),
            this.initElement(t, e, r)
        }
        extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement),
        HImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData)
              , e = new Image;
            this.data.hasMask ? (this.imageElem = createNS("image"),
            this.imageElem.setAttribute("width", this.assetData.w + "px"),
            this.imageElem.setAttribute("height", this.assetData.h + "px"),
            this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
            this.layerElement.appendChild(this.imageElem),
            this.baseElement.setAttribute("width", this.assetData.w),
            this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e),
            e.crossOrigin = "anonymous",
            e.src = t,
            this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }
        ;
        function HybridRendererBase(t, e) {
            this.animationItem = t,
            this.layers = null,
            this.renderedFrame = -1,
            this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && e.hideOnTransparent === !1),
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "400%",
                    height: e && e.filterSize && e.filterSize.height || "400%",
                    x: e && e.filterSize && e.filterSize.x || "-100%",
                    y: e && e.filterSize && e.filterSize.y || "-100%"
                }
            },
            this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            },
            this.pendingElements = [],
            this.elements = [],
            this.threeDElements = [],
            this.destroyed = !1,
            this.camera = null,
            this.supports3d = !0,
            this.rendererType = "html"
        }
        extendPrototype([BaseRenderer], HybridRendererBase),
        HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem,
        HybridRendererBase.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length; ) {
                var t = this.pendingElements.pop();
                t.checkParenting()
            }
        }
        ,
        HybridRendererBase.prototype.appendElementInPos = function(t, e) {
            var r = t.getBaseElement();
            if (r) {
                var i = this.layers[e];
                if (!i.ddd || !this.supports3d)
                    if (this.threeDElements)
                        this.addTo3dContainer(r, e);
                    else {
                        for (var s = 0, a, n, l; s < e; )
                            this.elements[s] && this.elements[s] !== !0 && this.elements[s].getBaseElement && (n = this.elements[s],
                            l = this.layers[s].ddd ? this.getThreeDContainerByPos(s) : n.getBaseElement(),
                            a = l || a),
                            s += 1;
                        a ? (!i.ddd || !this.supports3d) && this.layerElement.insertBefore(r, a) : (!i.ddd || !this.supports3d) && this.layerElement.appendChild(r)
                    }
                else
                    this.addTo3dContainer(r, e)
            }
        }
        ,
        HybridRendererBase.prototype.createShape = function(t) {
            return this.supports3d ? new HShapeElement(t,this.globalData,this) : new SVGShapeElement(t,this.globalData,this)
        }
        ,
        HybridRendererBase.prototype.createText = function(t) {
            return this.supports3d ? new HTextElement(t,this.globalData,this) : new SVGTextLottieElement(t,this.globalData,this)
        }
        ,
        HybridRendererBase.prototype.createCamera = function(t) {
            return this.camera = new HCameraElement(t,this.globalData,this),
            this.camera
        }
        ,
        HybridRendererBase.prototype.createImage = function(t) {
            return this.supports3d ? new HImageElement(t,this.globalData,this) : new IImageElement(t,this.globalData,this)
        }
        ,
        HybridRendererBase.prototype.createSolid = function(t) {
            return this.supports3d ? new HSolidElement(t,this.globalData,this) : new ISolidElement(t,this.globalData,this)
        }
        ,
        HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull,
        HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
            for (var e = 0, r = this.threeDElements.length; e < r; ) {
                if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t)
                    return this.threeDElements[e].perspectiveElem;
                e += 1
            }
            return null
        }
        ,
        HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
            var r = createTag("div"), i, s;
            styleDiv(r);
            var a = createTag("div");
            if (styleDiv(a),
            e === "3d") {
                i = r.style,
                i.width = this.globalData.compSize.w + "px",
                i.height = this.globalData.compSize.h + "px";
                var n = "50% 50%";
                i.webkitTransformOrigin = n,
                i.mozTransformOrigin = n,
                i.transformOrigin = n,
                s = a.style;
                var l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                s.transform = l,
                s.webkitTransform = l
            }
            r.appendChild(a);
            var o = {
                container: a,
                perspectiveElem: r,
                startPos: t,
                endPos: t,
                type: e
            };
            return this.threeDElements.push(o),
            o
        }
        ,
        HybridRendererBase.prototype.build3dContainers = function() {
            var t, e = this.layers.length, r, i = "";
            for (t = 0; t < e; t += 1)
                this.layers[t].ddd && this.layers[t].ty !== 3 ? (i !== "3d" && (i = "3d",
                r = this.createThreeDContainer(t, "3d")),
                r.endPos = Math.max(r.endPos, t)) : (i !== "2d" && (i = "2d",
                r = this.createThreeDContainer(t, "2d")),
                r.endPos = Math.max(r.endPos, t));
            for (e = this.threeDElements.length,
            t = e - 1; t >= 0; t -= 1)
                this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }
        ,
        HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
            for (var r = 0, i = this.threeDElements.length; r < i; ) {
                if (e <= this.threeDElements[r].endPos) {
                    for (var s = this.threeDElements[r].startPos, a; s < e; )
                        this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s].getBaseElement()),
                        s += 1;
                    a ? this.threeDElements[r].container.insertBefore(t, a) : this.threeDElements[r].container.appendChild(t);
                    break
                }
                r += 1
            }
        }
        ,
        HybridRendererBase.prototype.configAnimation = function(t) {
            var e = createTag("div")
              , r = this.animationItem.wrapper
              , i = e.style;
            i.width = t.w + "px",
            i.height = t.h + "px",
            this.resizerElem = e,
            styleDiv(e),
            i.transformStyle = "flat",
            i.mozTransformStyle = "flat",
            i.webkitTransformStyle = "flat",
            this.renderConfig.className && e.setAttribute("class", this.renderConfig.className),
            r.appendChild(e),
            i.overflow = "hidden";
            var s = createNS("svg");
            s.setAttribute("width", "1"),
            s.setAttribute("height", "1"),
            styleDiv(s),
            this.resizerElem.appendChild(s);
            var a = createNS("defs");
            s.appendChild(a),
            this.data = t,
            this.setupGlobalData(t, s),
            this.globalData.defs = a,
            this.layers = t.layers,
            this.layerElement = this.resizerElem,
            this.build3dContainers(),
            this.updateContainerSize()
        }
        ,
        HybridRendererBase.prototype.destroy = function() {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
            this.animationItem.container = null,
            this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1)
                this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0,
            this.destroyed = !0,
            this.animationItem = null
        }
        ,
        HybridRendererBase.prototype.updateContainerSize = function() {
            var t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, r = t / e, i = this.globalData.compSize.w / this.globalData.compSize.h, s, a, n, l;
            i > r ? (s = t / this.globalData.compSize.w,
            a = t / this.globalData.compSize.w,
            n = 0,
            l = (e - this.globalData.compSize.h * (t / this.globalData.compSize.w)) / 2) : (s = e / this.globalData.compSize.h,
            a = e / this.globalData.compSize.h,
            n = (t - this.globalData.compSize.w * (e / this.globalData.compSize.h)) / 2,
            l = 0);
            var o = this.resizerElem.style;
            o.webkitTransform = "matrix3d(" + s + ",0,0,0,0," + a + ",0,0,0,0,1,0," + n + "," + l + ",0,1)",
            o.transform = o.webkitTransform
        }
        ,
        HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame,
        HybridRendererBase.prototype.hide = function() {
            this.resizerElem.style.display = "none"
        }
        ,
        HybridRendererBase.prototype.show = function() {
            this.resizerElem.style.display = "block"
        }
        ,
        HybridRendererBase.prototype.initItems = function() {
            if (this.buildAllItems(),
            this.camera)
                this.camera.setup();
            else {
                var t = this.globalData.compSize.w, e = this.globalData.compSize.h, r, i = this.threeDElements.length;
                for (r = 0; r < i; r += 1) {
                    var s = this.threeDElements[r].perspectiveElem.style;
                    s.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) + "px",
                    s.perspective = s.webkitPerspective
                }
            }
        }
        ,
        HybridRendererBase.prototype.searchExtraCompositions = function(t) {
            var e, r = t.length, i = createTag("div");
            for (e = 0; e < r; e += 1)
                if (t[e].xt) {
                    var s = this.createComp(t[e], i, this.globalData.comp, null);
                    s.initExpressions(),
                    this.globalData.projectInterface.registerComposition(s)
                }
        }
        ;
        function HCompElement(t, e, r) {
            this.layers = t.layers,
            this.supports3d = !t.hasMask,
            this.completeLayers = !1,
            this.pendingElements = [],
            this.elements = this.layers ? createSizedArray(this.layers.length) : [],
            this.initElement(t, e, r),
            this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }
        extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement),
        HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements,
        HCompElement.prototype.createContainerElements = function() {
            this._createBaseContainerElements(),
            this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w),
            this.svgElement.setAttribute("height", this.data.h),
            this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }
        ,
        HCompElement.prototype.addTo3dContainer = function(t, e) {
            for (var r = 0, i; r < e; )
                this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()),
                r += 1;
            i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
        }
        ,
        HCompElement.prototype.createComp = function(t) {
            return this.supports3d ? new HCompElement(t,this.globalData,this) : new SVGCompElement(t,this.globalData,this)
        }
        ;
        function HybridRenderer(t, e) {
            this.animationItem = t,
            this.layers = null,
            this.renderedFrame = -1,
            this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && e.hideOnTransparent === !1),
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "400%",
                    height: e && e.filterSize && e.filterSize.height || "400%",
                    x: e && e.filterSize && e.filterSize.x || "-100%",
                    y: e && e.filterSize && e.filterSize.y || "-100%"
                },
                runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
            },
            this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            },
            this.pendingElements = [],
            this.elements = [],
            this.threeDElements = [],
            this.destroyed = !1,
            this.camera = null,
            this.supports3d = !0,
            this.rendererType = "html"
        }
        extendPrototype([HybridRendererBase], HybridRenderer),
        HybridRenderer.prototype.createComp = function(t) {
            return this.supports3d ? new HCompElement(t,this.globalData,this) : new SVGCompElement(t,this.globalData,this)
        }
        ;
        var CompExpressionInterface = function() {
            return function(t) {
                function e(r) {
                    for (var i = 0, s = t.layers.length; i < s; ) {
                        if (t.layers[i].nm === r || t.layers[i].ind === r)
                            return t.elements[i].layerInterface;
                        i += 1
                    }
                    return null
                }
                return Object.defineProperty(e, "_name", {
                    value: t.data.nm
                }),
                e.layer = e,
                e.pixelAspect = 1,
                e.height = t.data.h || t.globalData.compSize.h,
                e.width = t.data.w || t.globalData.compSize.w,
                e.pixelAspect = 1,
                e.frameDuration = 1 / t.globalData.frameRate,
                e.displayStartTime = 0,
                e.numLayers = t.layers.length,
                e
            }
        }();
        function _typeof$2(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$2 = function(r) {
                return typeof r
            }
            : _typeof$2 = function(r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }
            ,
            _typeof$2(t)
        }
        function seedRandom(t, e) {
            var r = this, i = 256, s = 6, a = 52, n = "random", l = e.pow(i, s), o = e.pow(2, a), f = o * 2, y = i - 1, P;
            function u(p, g, E) {
                var _ = [];
                g = g === !0 ? {
                    entropy: !0
                } : g || {};
                var T = C(d(g.entropy ? [p, m(t)] : p === null ? c() : p, 3), _)
                  , M = new b(_)
                  , B = function() {
                    for (var R = M.g(s), L = l, O = 0; R < o; )
                        R = (R + O) * i,
                        L *= i,
                        O = M.g(1);
                    for (; R >= f; )
                        R /= 2,
                        L /= 2,
                        O >>>= 1;
                    return (R + O) / L
                };
                return B.int32 = function() {
                    return M.g(4) | 0
                }
                ,
                B.quick = function() {
                    return M.g(4) / 4294967296
                }
                ,
                B.double = B,
                C(m(M.S), t),
                (g.pass || E || function(z, R, L, O) {
                    return O && (O.S && x(O, M),
                    z.state = function() {
                        return x(M, {})
                    }
                    ),
                    L ? (e[n] = z,
                    R) : z
                }
                )(B, T, "global"in g ? g.global : this == e, g.state)
            }
            e["seed" + n] = u;
            function b(p) {
                var g, E = p.length, _ = this, T = 0, M = _.i = _.j = 0, B = _.S = [];
                for (E || (p = [E++]); T < i; )
                    B[T] = T++;
                for (T = 0; T < i; T++)
                    B[T] = B[M = y & M + p[T % E] + (g = B[T])],
                    B[M] = g;
                _.g = function(z) {
                    for (var R, L = 0, O = _.i, N = _.j, D = _.S; z--; )
                        R = D[O = y & O + 1],
                        L = L * i + D[y & (D[O] = D[N = y & N + R]) + (D[N] = R)];
                    return _.i = O,
                    _.j = N,
                    L
                }
            }
            function x(p, g) {
                return g.i = p.i,
                g.j = p.j,
                g.S = p.S.slice(),
                g
            }
            function d(p, g) {
                var E = [], _ = _typeof$2(p), T;
                if (g && _ == "object")
                    for (T in p)
                        try {
                            E.push(d(p[T], g - 1))
                        } catch {}
                return E.length ? E : _ == "string" ? p : p + "\0"
            }
            function C(p, g) {
                for (var E = p + "", _, T = 0; T < E.length; )
                    g[y & T] = y & (_ ^= g[y & T] * 19) + E.charCodeAt(T++);
                return m(g)
            }
            function c() {
                try {
                    var p = new Uint8Array(i);
                    return (r.crypto || r.msCrypto).getRandomValues(p),
                    m(p)
                } catch {
                    var g = r.navigator
                      , E = g && g.plugins;
                    return [+new Date, r, E, r.screen, m(t)]
                }
            }
            function m(p) {
                return String.fromCharCode.apply(0, p)
            }
            C(e.random(), t)
        }
        function initialize$2(t) {
            seedRandom([], t)
        }
        var propTypes = {
            SHAPE: "shape"
        };
        function _typeof$1(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$1 = function(r) {
                return typeof r
            }
            : _typeof$1 = function(r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }
            ,
            _typeof$1(t)
        }
        var ExpressionManager = function() {
            var ob = {}
              , Math = BMMath
              , window = null
              , document = null
              , XMLHttpRequest = null
              , fetch = null
              , frames = null
              , _lottieGlobal = {};
            initialize$2(BMMath);
            function resetFrame() {
                _lottieGlobal = {}
            }
            function $bm_isInstanceOfArray(t) {
                return t.constructor === Array || t.constructor === Float32Array
            }
            function isNumerable(t, e) {
                return t === "number" || e instanceof Number || t === "boolean" || t === "string"
            }
            function $bm_neg(t) {
                var e = _typeof$1(t);
                if (e === "number" || t instanceof Number || e === "boolean")
                    return -t;
                if ($bm_isInstanceOfArray(t)) {
                    var r, i = t.length, s = [];
                    for (r = 0; r < i; r += 1)
                        s[r] = -t[r];
                    return s
                }
                return t.propType ? t.v : -t
            }
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get
              , easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get
              , easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
            function sum(t, e) {
                var r = _typeof$1(t)
                  , i = _typeof$1(e);
                if (isNumerable(r, t) && isNumerable(i, e) || r === "string" || i === "string")
                    return t + e;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                    return t = t.slice(0),
                    t[0] += e,
                    t;
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                    return e = e.slice(0),
                    e[0] = t + e[0],
                    e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for (var s = 0, a = t.length, n = e.length, l = []; s < a || s < n; )
                        (typeof t[s] == "number" || t[s]instanceof Number) && (typeof e[s] == "number" || e[s]instanceof Number) ? l[s] = t[s] + e[s] : l[s] = e[s] === void 0 ? t[s] : t[s] || e[s],
                        s += 1;
                    return l
                }
                return 0
            }
            var add = sum;
            function sub(t, e) {
                var r = _typeof$1(t)
                  , i = _typeof$1(e);
                if (isNumerable(r, t) && isNumerable(i, e))
                    return r === "string" && (t = parseInt(t, 10)),
                    i === "string" && (e = parseInt(e, 10)),
                    t - e;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                    return t = t.slice(0),
                    t[0] -= e,
                    t;
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                    return e = e.slice(0),
                    e[0] = t - e[0],
                    e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for (var s = 0, a = t.length, n = e.length, l = []; s < a || s < n; )
                        (typeof t[s] == "number" || t[s]instanceof Number) && (typeof e[s] == "number" || e[s]instanceof Number) ? l[s] = t[s] - e[s] : l[s] = e[s] === void 0 ? t[s] : t[s] || e[s],
                        s += 1;
                    return l
                }
                return 0
            }
            function mul(t, e) {
                var r = _typeof$1(t), i = _typeof$1(e), s;
                if (isNumerable(r, t) && isNumerable(i, e))
                    return t * e;
                var a, n;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
                    for (n = t.length,
                    s = createTypedArray("float32", n),
                    a = 0; a < n; a += 1)
                        s[a] = t[a] * e;
                    return s
                }
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
                    for (n = e.length,
                    s = createTypedArray("float32", n),
                    a = 0; a < n; a += 1)
                        s[a] = t * e[a];
                    return s
                }
                return 0
            }
            function div(t, e) {
                var r = _typeof$1(t), i = _typeof$1(e), s;
                if (isNumerable(r, t) && isNumerable(i, e))
                    return t / e;
                var a, n;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
                    for (n = t.length,
                    s = createTypedArray("float32", n),
                    a = 0; a < n; a += 1)
                        s[a] = t[a] / e;
                    return s
                }
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
                    for (n = e.length,
                    s = createTypedArray("float32", n),
                    a = 0; a < n; a += 1)
                        s[a] = t / e[a];
                    return s
                }
                return 0
            }
            function mod(t, e) {
                return typeof t == "string" && (t = parseInt(t, 10)),
                typeof e == "string" && (e = parseInt(e, 10)),
                t % e
            }
            var $bm_sum = sum
              , $bm_sub = sub
              , $bm_mul = mul
              , $bm_div = div
              , $bm_mod = mod;
            function clamp(t, e, r) {
                if (e > r) {
                    var i = r;
                    r = e,
                    e = i
                }
                return Math.min(Math.max(t, e), r)
            }
            function radiansToDegrees(t) {
                return t / degToRads
            }
            var radians_to_degrees = radiansToDegrees;
            function degreesToRadians(t) {
                return t * degToRads
            }
            var degrees_to_radians = radiansToDegrees
              , helperLengthArray = [0, 0, 0, 0, 0, 0];
            function length(t, e) {
                if (typeof t == "number" || t instanceof Number)
                    return e = e || 0,
                    Math.abs(t - e);
                e || (e = helperLengthArray);
                var r, i = Math.min(t.length, e.length), s = 0;
                for (r = 0; r < i; r += 1)
                    s += Math.pow(e[r] - t[r], 2);
                return Math.sqrt(s)
            }
            function normalize(t) {
                return div(t, length(t))
            }
            function rgbToHsl(t) {
                var e = t[0], r = t[1], i = t[2], s = Math.max(e, r, i), a = Math.min(e, r, i), n, l, o = (s + a) / 2;
                if (s === a)
                    n = 0,
                    l = 0;
                else {
                    var f = s - a;
                    switch (l = o > .5 ? f / (2 - s - a) : f / (s + a),
                    s) {
                    case e:
                        n = (r - i) / f + (r < i ? 6 : 0);
                        break;
                    case r:
                        n = (i - e) / f + 2;
                        break;
                    case i:
                        n = (e - r) / f + 4;
                        break
                    }
                    n /= 6
                }
                return [n, l, o, t[3]]
            }
            function hue2rgb(t, e, r) {
                return r < 0 && (r += 1),
                r > 1 && (r -= 1),
                r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }
            function hslToRgb(t) {
                var e = t[0], r = t[1], i = t[2], s, a, n;
                if (r === 0)
                    s = i,
                    n = i,
                    a = i;
                else {
                    var l = i < .5 ? i * (1 + r) : i + r - i * r
                      , o = 2 * i - l;
                    s = hue2rgb(o, l, e + 1 / 3),
                    a = hue2rgb(o, l, e),
                    n = hue2rgb(o, l, e - 1 / 3)
                }
                return [s, a, n, t[3]]
            }
            function linear(t, e, r, i, s) {
                if ((i === void 0 || s === void 0) && (i = e,
                s = r,
                e = 0,
                r = 1),
                r < e) {
                    var a = r;
                    r = e,
                    e = a
                }
                if (t <= e)
                    return i;
                if (t >= r)
                    return s;
                var n = r === e ? 0 : (t - e) / (r - e);
                if (!i.length)
                    return i + (s - i) * n;
                var l, o = i.length, f = createTypedArray("float32", o);
                for (l = 0; l < o; l += 1)
                    f[l] = i[l] + (s[l] - i[l]) * n;
                return f
            }
            function random(t, e) {
                if (e === void 0 && (t === void 0 ? (t = 0,
                e = 1) : (e = t,
                t = void 0)),
                e.length) {
                    var r, i = e.length;
                    t || (t = createTypedArray("float32", i));
                    var s = createTypedArray("float32", i)
                      , a = BMMath.random();
                    for (r = 0; r < i; r += 1)
                        s[r] = t[r] + a * (e[r] - t[r]);
                    return s
                }
                t === void 0 && (t = 0);
                var n = BMMath.random();
                return t + n * (e - t)
            }
            function createPath(t, e, r, i) {
                var s, a = t.length, n = shapePool.newElement();
                n.setPathData(!!i, a);
                var l = [0, 0], o, f;
                for (s = 0; s < a; s += 1)
                    o = e && e[s] ? e[s] : l,
                    f = r && r[s] ? r[s] : l,
                    n.setTripleAt(t[s][0], t[s][1], f[0] + t[s][0], f[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
                return n
            }
            function initiateExpression(elem, data, property) {
                function noOp(t) {
                    return t
                }
                if (!elem.globalData.renderConfig.runExpressions)
                    return noOp;
                var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = val.indexOf("random") !== -1, elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
                thisProperty.valueAtTime = thisProperty.getValueAtTime,
                Object.defineProperty(thisProperty, "value", {
                    get: function() {
                        return thisProperty.v
                    }
                }),
                elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate,
                elem.comp.displayStartTime = 0;
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || this.data.hd !== !0, wiggle = (function t(e, r) {
                    var i, s, a = this.pv.length ? this.pv.length : 1, n = createTypedArray("float32", a);
                    e = 5;
                    var l = Math.floor(time * e);
                    for (i = 0,
                    s = 0; i < l; ) {
                        for (s = 0; s < a; s += 1)
                            n[s] += -r + r * 2 * BMMath.random();
                        i += 1
                    }
                    var o = time * e
                      , f = o - Math.floor(o)
                      , y = createTypedArray("float32", a);
                    if (a > 1) {
                        for (s = 0; s < a; s += 1)
                            y[s] = this.pv[s] + n[s] + (-r + r * 2 * BMMath.random()) * f;
                        return y
                    }
                    return this.pv + n[0] + (-r + r * 2 * BMMath.random()) * f
                }
                ).bind(this);
                thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty),
                loop_in = loopIn),
                thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty),
                loop_out = loopOut),
                thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty));
                function loopInDuration(t, e) {
                    return loopIn(t, e, !0)
                }
                function loopOutDuration(t, e) {
                    return loopOut(t, e, !0)
                }
                this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)),
                this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
                function lookAt(t, e) {
                    var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]]
                      , i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads
                      , s = -Math.atan2(r[1], r[2]) / degToRads;
                    return [s, i, 0]
                }
                function easeOut(t, e, r, i, s) {
                    return applyEase(easeOutBez, t, e, r, i, s)
                }
                function easeIn(t, e, r, i, s) {
                    return applyEase(easeInBez, t, e, r, i, s)
                }
                function ease(t, e, r, i, s) {
                    return applyEase(easeInOutBez, t, e, r, i, s)
                }
                function applyEase(t, e, r, i, s, a) {
                    s === void 0 ? (s = r,
                    a = i) : e = (e - r) / (i - r),
                    e > 1 ? e = 1 : e < 0 && (e = 0);
                    var n = t(e);
                    if ($bm_isInstanceOfArray(s)) {
                        var l, o = s.length, f = createTypedArray("float32", o);
                        for (l = 0; l < o; l += 1)
                            f[l] = (a[l] - s[l]) * n + s[l];
                        return f
                    }
                    return (a - s) * n + s
                }
                function nearestKey(t) {
                    var e, r = data.k.length, i, s;
                    if (!data.k.length || typeof data.k[0] == "number")
                        i = 0,
                        s = 0;
                    else if (i = -1,
                    t *= elem.comp.globalData.frameRate,
                    t < data.k[0].t)
                        i = 1,
                        s = data.k[0].t;
                    else {
                        for (e = 0; e < r - 1; e += 1)
                            if (t === data.k[e].t) {
                                i = e + 1,
                                s = data.k[e].t;
                                break
                            } else if (t > data.k[e].t && t < data.k[e + 1].t) {
                                t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2,
                                s = data.k[e + 1].t) : (i = e + 1,
                                s = data.k[e].t);
                                break
                            }
                        i === -1 && (i = e + 1,
                        s = data.k[e].t)
                    }
                    var a = {};
                    return a.index = i,
                    a.time = s / elem.comp.globalData.frameRate,
                    a
                }
                function key(t) {
                    var e, r, i;
                    if (!data.k.length || typeof data.k[0] == "number")
                        throw new Error("The property has no keyframe at index " + t);
                    t -= 1,
                    e = {
                        time: data.k[t].t / elem.comp.globalData.frameRate,
                        value: []
                    };
                    var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                    for (i = s.length,
                    r = 0; r < i; r += 1)
                        e[r] = s[r],
                        e.value[r] = s[r];
                    return e
                }
                function framesToTime(t, e) {
                    return e || (e = elem.comp.globalData.frameRate),
                    t / e
                }
                function timeToFrames(t, e) {
                    return !t && t !== 0 && (t = time),
                    e || (e = elem.comp.globalData.frameRate),
                    t * e
                }
                function seedRandom(t) {
                    BMMath.seedrandom(randSeed + t)
                }
                function sourceRectAtTime() {
                    return elem.sourceRectAtTime()
                }
                function substring(t, e) {
                    return typeof value == "string" ? e === void 0 ? value.substring(t) : value.substring(t, e) : ""
                }
                function substr(t, e) {
                    return typeof value == "string" ? e === void 0 ? value.substr(t) : value.substr(t, e) : ""
                }
                function posterizeTime(t) {
                    time = t === 0 ? 0 : Math.floor(time * t) / t,
                    value = valueAtTime(time)
                }
                var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind, hasParent = !!(elem.hierarchy && elem.hierarchy.length), parent, randSeed = Math.floor(Math.random() * 1e6), globalData = elem.globalData;
                function executeExpression(t) {
                    return value = t,
                    this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex,
                    textTotal = this.textTotal,
                    selectorValue = this.selectorValue),
                    thisLayer || (text = elem.layerInterface.text,
                    thisLayer = elem.layerInterface,
                    thisComp = elem.comp.compInterface,
                    toWorld = thisLayer.toWorld.bind(thisLayer),
                    fromWorld = thisLayer.fromWorld.bind(thisLayer),
                    fromComp = thisLayer.fromComp.bind(thisLayer),
                    toComp = thisLayer.toComp.bind(thisLayer),
                    mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null,
                    fromCompToSurface = fromComp),
                    transform || (transform = elem.layerInterface("ADBE Transform Group"),
                    $bm_transform = transform,
                    transform && (anchorPoint = transform.anchorPoint)),
                    elemType === 4 && !content && (content = thisLayer("ADBE Root Vectors Group")),
                    effect || (effect = thisLayer(4)),
                    hasParent = !!(elem.hierarchy && elem.hierarchy.length),
                    hasParent && !parent && (parent = elem.hierarchy[0].layerInterface),
                    time = this.comp.renderedFrame / this.comp.globalData.frameRate,
                    _needsRandom && seedRandom(randSeed + time),
                    needsVelocity && (velocity = velocityAtTime(time)),
                    expression_function(),
                    this.frameExpressionId = elem.globalData.frameId,
                    scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt,
                    scoped_bm_rt)
                }
                return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData],
                executeExpression
            }
            return ob.initiateExpression = initiateExpression,
            ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal],
            ob.resetFrame = resetFrame,
            ob
        }()
          , Expressions = function() {
            var t = {};
            t.initExpressions = e,
            t.resetFrame = ExpressionManager.resetFrame;
            function e(r) {
                var i = 0
                  , s = [];
                function a() {
                    i += 1
                }
                function n() {
                    i -= 1,
                    i === 0 && o()
                }
                function l(f) {
                    s.indexOf(f) === -1 && s.push(f)
                }
                function o() {
                    var f, y = s.length;
                    for (f = 0; f < y; f += 1)
                        s[f].release();
                    s.length = 0
                }
                r.renderer.compInterface = CompExpressionInterface(r.renderer),
                r.renderer.globalData.projectInterface.registerComposition(r.renderer),
                r.renderer.globalData.pushExpression = a,
                r.renderer.globalData.popExpression = n,
                r.renderer.globalData.registerExpressionProperty = l
            }
            return t
        }()
          , MaskManagerInterface = function() {
            function t(r, i) {
                this._mask = r,
                this._data = i
            }
            Object.defineProperty(t.prototype, "maskPath", {
                get: function() {
                    return this._mask.prop.k && this._mask.prop.getValue(),
                    this._mask.prop
                }
            }),
            Object.defineProperty(t.prototype, "maskOpacity", {
                get: function() {
                    return this._mask.op.k && this._mask.op.getValue(),
                    this._mask.op.v * 100
                }
            });
            var e = function(i) {
                var s = createSizedArray(i.viewData.length), a, n = i.viewData.length;
                for (a = 0; a < n; a += 1)
                    s[a] = new t(i.viewData[a],i.masksProperties[a]);
                var l = function(f) {
                    for (a = 0; a < n; ) {
                        if (i.masksProperties[a].nm === f)
                            return s[a];
                        a += 1
                    }
                    return null
                };
                return l
            };
            return e
        }()
          , ExpressionPropertyInterface = function() {
            var t = {
                pv: 0,
                v: 0,
                mult: 1
            }
              , e = {
                pv: [0, 0, 0],
                v: [0, 0, 0],
                mult: 1
            };
            function r(n, l, o) {
                Object.defineProperty(n, "velocity", {
                    get: function() {
                        return l.getVelocityAtTime(l.comp.currentFrame)
                    }
                }),
                n.numKeys = l.keyframes ? l.keyframes.length : 0,
                n.key = function(f) {
                    if (!n.numKeys)
                        return 0;
                    var y = "";
                    "s"in l.keyframes[f - 1] ? y = l.keyframes[f - 1].s : "e"in l.keyframes[f - 2] ? y = l.keyframes[f - 2].e : y = l.keyframes[f - 2].s;
                    var P = o === "unidimensional" ? new Number(y) : Object.assign({}, y);
                    return P.time = l.keyframes[f - 1].t / l.elem.comp.globalData.frameRate,
                    P.value = o === "unidimensional" ? y[0] : y,
                    P
                }
                ,
                n.valueAtTime = l.getValueAtTime,
                n.speedAtTime = l.getSpeedAtTime,
                n.velocityAtTime = l.getVelocityAtTime,
                n.propertyGroup = l.propertyGroup
            }
            function i(n) {
                (!n || !("pv"in n)) && (n = t);
                var l = 1 / n.mult
                  , o = n.pv * l
                  , f = new Number(o);
                return f.value = o,
                r(f, n, "unidimensional"),
                function() {
                    return n.k && n.getValue(),
                    o = n.v * l,
                    f.value !== o && (f = new Number(o),
                    f.value = o,
                    r(f, n, "unidimensional")),
                    f
                }
            }
            function s(n) {
                (!n || !("pv"in n)) && (n = e);
                var l = 1 / n.mult
                  , o = n.data && n.data.l || n.pv.length
                  , f = createTypedArray("float32", o)
                  , y = createTypedArray("float32", o);
                return f.value = y,
                r(f, n, "multidimensional"),
                function() {
                    n.k && n.getValue();
                    for (var P = 0; P < o; P += 1)
                        y[P] = n.v[P] * l,
                        f[P] = y[P];
                    return f
                }
            }
            function a() {
                return t
            }
            return function(n) {
                return n ? n.propType === "unidimensional" ? i(n) : s(n) : a
            }
        }()
          , TransformExpressionInterface = function() {
            return function(t) {
                function e(n) {
                    switch (n) {
                    case "scale":
                    case "Scale":
                    case "ADBE Scale":
                    case 6:
                        return e.scale;
                    case "rotation":
                    case "Rotation":
                    case "ADBE Rotation":
                    case "ADBE Rotate Z":
                    case 10:
                        return e.rotation;
                    case "ADBE Rotate X":
                        return e.xRotation;
                    case "ADBE Rotate Y":
                        return e.yRotation;
                    case "position":
                    case "Position":
                    case "ADBE Position":
                    case 2:
                        return e.position;
                    case "ADBE Position_0":
                        return e.xPosition;
                    case "ADBE Position_1":
                        return e.yPosition;
                    case "ADBE Position_2":
                        return e.zPosition;
                    case "anchorPoint":
                    case "AnchorPoint":
                    case "Anchor Point":
                    case "ADBE AnchorPoint":
                    case 1:
                        return e.anchorPoint;
                    case "opacity":
                    case "Opacity":
                    case 11:
                        return e.opacity;
                    default:
                        return null
                    }
                }
                Object.defineProperty(e, "rotation", {
                    get: ExpressionPropertyInterface(t.r || t.rz)
                }),
                Object.defineProperty(e, "zRotation", {
                    get: ExpressionPropertyInterface(t.rz || t.r)
                }),
                Object.defineProperty(e, "xRotation", {
                    get: ExpressionPropertyInterface(t.rx)
                }),
                Object.defineProperty(e, "yRotation", {
                    get: ExpressionPropertyInterface(t.ry)
                }),
                Object.defineProperty(e, "scale", {
                    get: ExpressionPropertyInterface(t.s)
                });
                var r, i, s, a;
                return t.p ? a = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px),
                i = ExpressionPropertyInterface(t.py),
                t.pz && (s = ExpressionPropertyInterface(t.pz))),
                Object.defineProperty(e, "position", {
                    get: function() {
                        return t.p ? a() : [r(), i(), s ? s() : 0]
                    }
                }),
                Object.defineProperty(e, "xPosition", {
                    get: ExpressionPropertyInterface(t.px)
                }),
                Object.defineProperty(e, "yPosition", {
                    get: ExpressionPropertyInterface(t.py)
                }),
                Object.defineProperty(e, "zPosition", {
                    get: ExpressionPropertyInterface(t.pz)
                }),
                Object.defineProperty(e, "anchorPoint", {
                    get: ExpressionPropertyInterface(t.a)
                }),
                Object.defineProperty(e, "opacity", {
                    get: ExpressionPropertyInterface(t.o)
                }),
                Object.defineProperty(e, "skew", {
                    get: ExpressionPropertyInterface(t.sk)
                }),
                Object.defineProperty(e, "skewAxis", {
                    get: ExpressionPropertyInterface(t.sa)
                }),
                Object.defineProperty(e, "orientation", {
                    get: ExpressionPropertyInterface(t.or)
                }),
                e
            }
        }()
          , LayerExpressionInterface = function() {
            function t(f) {
                var y = new Matrix;
                if (f !== void 0) {
                    var P = this._elem.finalTransform.mProp.getValueAtTime(f);
                    P.clone(y)
                } else {
                    var u = this._elem.finalTransform.mProp;
                    u.applyToMatrix(y)
                }
                return y
            }
            function e(f, y) {
                var P = this.getMatrix(y);
                return P.props[12] = 0,
                P.props[13] = 0,
                P.props[14] = 0,
                this.applyPoint(P, f)
            }
            function r(f, y) {
                var P = this.getMatrix(y);
                return this.applyPoint(P, f)
            }
            function i(f, y) {
                var P = this.getMatrix(y);
                return P.props[12] = 0,
                P.props[13] = 0,
                P.props[14] = 0,
                this.invertPoint(P, f)
            }
            function s(f, y) {
                var P = this.getMatrix(y);
                return this.invertPoint(P, f)
            }
            function a(f, y) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var P, u = this._elem.hierarchy.length;
                    for (P = 0; P < u; P += 1)
                        this._elem.hierarchy[P].finalTransform.mProp.applyToMatrix(f)
                }
                return f.applyToPointArray(y[0], y[1], y[2] || 0)
            }
            function n(f, y) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var P, u = this._elem.hierarchy.length;
                    for (P = 0; P < u; P += 1)
                        this._elem.hierarchy[P].finalTransform.mProp.applyToMatrix(f)
                }
                return f.inversePoint(y)
            }
            function l(f) {
                var y = new Matrix;
                if (y.reset(),
                this._elem.finalTransform.mProp.applyToMatrix(y),
                this._elem.hierarchy && this._elem.hierarchy.length) {
                    var P, u = this._elem.hierarchy.length;
                    for (P = 0; P < u; P += 1)
                        this._elem.hierarchy[P].finalTransform.mProp.applyToMatrix(y);
                    return y.inversePoint(f)
                }
                return y.inversePoint(f)
            }
            function o() {
                return [1, 1, 1, 1]
            }
            return function(f) {
                var y;
                function P(d) {
                    b.mask = new MaskManagerInterface(d,f)
                }
                function u(d) {
                    b.effect = d
                }
                function b(d) {
                    switch (d) {
                    case "ADBE Root Vectors Group":
                    case "Contents":
                    case 2:
                        return b.shapeInterface;
                    case 1:
                    case 6:
                    case "Transform":
                    case "transform":
                    case "ADBE Transform Group":
                        return y;
                    case 4:
                    case "ADBE Effect Parade":
                    case "effects":
                    case "Effects":
                        return b.effect;
                    case "ADBE Text Properties":
                        return b.textInterface;
                    default:
                        return null
                    }
                }
                b.getMatrix = t,
                b.invertPoint = n,
                b.applyPoint = a,
                b.toWorld = r,
                b.toWorldVec = e,
                b.fromWorld = s,
                b.fromWorldVec = i,
                b.toComp = r,
                b.fromComp = l,
                b.sampleImage = o,
                b.sourceRectAtTime = f.sourceRectAtTime.bind(f),
                b._elem = f,
                y = TransformExpressionInterface(f.finalTransform.mProp);
                var x = getDescriptor(y, "anchorPoint");
                return Object.defineProperties(b, {
                    hasParent: {
                        get: function() {
                            return f.hierarchy.length
                        }
                    },
                    parent: {
                        get: function() {
                            return f.hierarchy[0].layerInterface
                        }
                    },
                    rotation: getDescriptor(y, "rotation"),
                    scale: getDescriptor(y, "scale"),
                    position: getDescriptor(y, "position"),
                    opacity: getDescriptor(y, "opacity"),
                    anchorPoint: x,
                    anchor_point: x,
                    transform: {
                        get: function() {
                            return y
                        }
                    },
                    active: {
                        get: function() {
                            return f.isInRange
                        }
                    }
                }),
                b.startTime = f.data.st,
                b.index = f.data.ind,
                b.source = f.data.refId,
                b.height = f.data.ty === 0 ? f.data.h : 100,
                b.width = f.data.ty === 0 ? f.data.w : 100,
                b.inPoint = f.data.ip / f.comp.globalData.frameRate,
                b.outPoint = f.data.op / f.comp.globalData.frameRate,
                b._name = f.data.nm,
                b.registerMaskInterface = P,
                b.registerEffectsInterface = u,
                b
            }
        }()
          , propertyGroupFactory = function() {
            return function(t, e) {
                return function(r) {
                    return r = r === void 0 ? 1 : r,
                    r <= 0 ? t : e(r - 1)
                }
            }
        }()
          , PropertyInterface = function() {
            return function(t, e) {
                var r = {
                    _name: t
                };
                function i(s) {
                    return s = s === void 0 ? 1 : s,
                    s <= 0 ? r : e(s - 1)
                }
                return i
            }
        }()
          , EffectsExpressionInterface = function() {
            var t = {
                createEffectsInterface: e
            };
            function e(s, a) {
                if (s.effectsManager) {
                    var n = [], l = s.data.ef, o, f = s.effectsManager.effectElements.length;
                    for (o = 0; o < f; o += 1)
                        n.push(r(l[o], s.effectsManager.effectElements[o], a, s));
                    var y = s.data.ef || []
                      , P = function(b) {
                        for (o = 0,
                        f = y.length; o < f; ) {
                            if (b === y[o].nm || b === y[o].mn || b === y[o].ix)
                                return n[o];
                            o += 1
                        }
                        return null
                    };
                    return Object.defineProperty(P, "numProperties", {
                        get: function() {
                            return y.length
                        }
                    }),
                    P
                }
                return null
            }
            function r(s, a, n, l) {
                function o(b) {
                    for (var x = s.ef, d = 0, C = x.length; d < C; ) {
                        if (b === x[d].nm || b === x[d].mn || b === x[d].ix)
                            return x[d].ty === 5 ? y[d] : y[d]();
                        d += 1
                    }
                    throw new Error
                }
                var f = propertyGroupFactory(o, n), y = [], P, u = s.ef.length;
                for (P = 0; P < u; P += 1)
                    s.ef[P].ty === 5 ? y.push(r(s.ef[P], a.effectElements[P], a.effectElements[P].propertyGroup, l)) : y.push(i(a.effectElements[P], s.ef[P].ty, l, f));
                return s.mn === "ADBE Color Control" && Object.defineProperty(o, "color", {
                    get: function() {
                        return y[0]()
                    }
                }),
                Object.defineProperties(o, {
                    numProperties: {
                        get: function() {
                            return s.np
                        }
                    },
                    _name: {
                        value: s.nm
                    },
                    propertyGroup: {
                        value: f
                    }
                }),
                o.enabled = s.en !== 0,
                o.active = o.enabled,
                o
            }
            function i(s, a, n, l) {
                var o = ExpressionPropertyInterface(s.p);
                function f() {
                    return a === 10 ? n.comp.compInterface(s.p.v) : o()
                }
                return s.p.setGroupProperty && s.p.setGroupProperty(PropertyInterface("", l)),
                f
            }
            return t
        }()
          , ShapePathInterface = function() {
            return function(e, r, i) {
                var s = r.sh;
                function a(l) {
                    return l === "Shape" || l === "shape" || l === "Path" || l === "path" || l === "ADBE Vector Shape" || l === 2 ? a.path : null
                }
                var n = propertyGroupFactory(a, i);
                return s.setGroupProperty(PropertyInterface("Path", n)),
                Object.defineProperties(a, {
                    path: {
                        get: function() {
                            return s.k && s.getValue(),
                            s
                        }
                    },
                    shape: {
                        get: function() {
                            return s.k && s.getValue(),
                            s
                        }
                    },
                    _name: {
                        value: e.nm
                    },
                    ix: {
                        value: e.ix
                    },
                    propertyIndex: {
                        value: e.ix
                    },
                    mn: {
                        value: e.mn
                    },
                    propertyGroup: {
                        value: i
                    }
                }),
                a
            }
        }()
          , ShapeExpressionInterface = function() {
            function t(x, d, C) {
                var c = [], m, p = x ? x.length : 0;
                for (m = 0; m < p; m += 1)
                    x[m].ty === "gr" ? c.push(r(x[m], d[m], C)) : x[m].ty === "fl" ? c.push(i(x[m], d[m], C)) : x[m].ty === "st" ? c.push(n(x[m], d[m], C)) : x[m].ty === "tm" ? c.push(l(x[m], d[m], C)) : x[m].ty === "tr" || (x[m].ty === "el" ? c.push(f(x[m], d[m], C)) : x[m].ty === "sr" ? c.push(y(x[m], d[m], C)) : x[m].ty === "sh" ? c.push(ShapePathInterface(x[m], d[m], C)) : x[m].ty === "rc" ? c.push(P(x[m], d[m], C)) : x[m].ty === "rd" ? c.push(u(x[m], d[m], C)) : x[m].ty === "rp" ? c.push(b(x[m], d[m], C)) : x[m].ty === "gf" ? c.push(s(x[m], d[m], C)) : c.push(a(x[m], d[m])));
                return c
            }
            function e(x, d, C) {
                var c, m = function(E) {
                    for (var _ = 0, T = c.length; _ < T; ) {
                        if (c[_]._name === E || c[_].mn === E || c[_].propertyIndex === E || c[_].ix === E || c[_].ind === E)
                            return c[_];
                        _ += 1
                    }
                    return typeof E == "number" ? c[E - 1] : null
                };
                m.propertyGroup = propertyGroupFactory(m, C),
                c = t(x.it, d.it, m.propertyGroup),
                m.numProperties = c.length;
                var p = o(x.it[x.it.length - 1], d.it[d.it.length - 1], m.propertyGroup);
                return m.transform = p,
                m.propertyIndex = x.cix,
                m._name = x.nm,
                m
            }
            function r(x, d, C) {
                var c = function(E) {
                    switch (E) {
                    case "ADBE Vectors Group":
                    case "Contents":
                    case 2:
                        return c.content;
                    default:
                        return c.transform
                    }
                };
                c.propertyGroup = propertyGroupFactory(c, C);
                var m = e(x, d, c.propertyGroup)
                  , p = o(x.it[x.it.length - 1], d.it[d.it.length - 1], c.propertyGroup);
                return c.content = m,
                c.transform = p,
                Object.defineProperty(c, "_name", {
                    get: function() {
                        return x.nm
                    }
                }),
                c.numProperties = x.np,
                c.propertyIndex = x.ix,
                c.nm = x.nm,
                c.mn = x.mn,
                c
            }
            function i(x, d, C) {
                function c(m) {
                    return m === "Color" || m === "color" ? c.color : m === "Opacity" || m === "opacity" ? c.opacity : null
                }
                return Object.defineProperties(c, {
                    color: {
                        get: ExpressionPropertyInterface(d.c)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(d.o)
                    },
                    _name: {
                        value: x.nm
                    },
                    mn: {
                        value: x.mn
                    }
                }),
                d.c.setGroupProperty(PropertyInterface("Color", C)),
                d.o.setGroupProperty(PropertyInterface("Opacity", C)),
                c
            }
            function s(x, d, C) {
                function c(m) {
                    return m === "Start Point" || m === "start point" ? c.startPoint : m === "End Point" || m === "end point" ? c.endPoint : m === "Opacity" || m === "opacity" ? c.opacity : null
                }
                return Object.defineProperties(c, {
                    startPoint: {
                        get: ExpressionPropertyInterface(d.s)
                    },
                    endPoint: {
                        get: ExpressionPropertyInterface(d.e)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(d.o)
                    },
                    type: {
                        get: function() {
                            return "a"
                        }
                    },
                    _name: {
                        value: x.nm
                    },
                    mn: {
                        value: x.mn
                    }
                }),
                d.s.setGroupProperty(PropertyInterface("Start Point", C)),
                d.e.setGroupProperty(PropertyInterface("End Point", C)),
                d.o.setGroupProperty(PropertyInterface("Opacity", C)),
                c
            }
            function a() {
                function x() {
                    return null
                }
                return x
            }
            function n(x, d, C) {
                var c = propertyGroupFactory(T, C)
                  , m = propertyGroupFactory(_, c);
                function p(M) {
                    Object.defineProperty(_, x.d[M].nm, {
                        get: ExpressionPropertyInterface(d.d.dataProps[M].p)
                    })
                }
                var g, E = x.d ? x.d.length : 0, _ = {};
                for (g = 0; g < E; g += 1)
                    p(g),
                    d.d.dataProps[g].p.setGroupProperty(m);
                function T(M) {
                    return M === "Color" || M === "color" ? T.color : M === "Opacity" || M === "opacity" ? T.opacity : M === "Stroke Width" || M === "stroke width" ? T.strokeWidth : null
                }
                return Object.defineProperties(T, {
                    color: {
                        get: ExpressionPropertyInterface(d.c)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(d.o)
                    },
                    strokeWidth: {
                        get: ExpressionPropertyInterface(d.w)
                    },
                    dash: {
                        get: function() {
                            return _
                        }
                    },
                    _name: {
                        value: x.nm
                    },
                    mn: {
                        value: x.mn
                    }
                }),
                d.c.setGroupProperty(PropertyInterface("Color", c)),
                d.o.setGroupProperty(PropertyInterface("Opacity", c)),
                d.w.setGroupProperty(PropertyInterface("Stroke Width", c)),
                T
            }
            function l(x, d, C) {
                function c(p) {
                    return p === x.e.ix || p === "End" || p === "end" ? c.end : p === x.s.ix ? c.start : p === x.o.ix ? c.offset : null
                }
                var m = propertyGroupFactory(c, C);
                return c.propertyIndex = x.ix,
                d.s.setGroupProperty(PropertyInterface("Start", m)),
                d.e.setGroupProperty(PropertyInterface("End", m)),
                d.o.setGroupProperty(PropertyInterface("Offset", m)),
                c.propertyIndex = x.ix,
                c.propertyGroup = C,
                Object.defineProperties(c, {
                    start: {
                        get: ExpressionPropertyInterface(d.s)
                    },
                    end: {
                        get: ExpressionPropertyInterface(d.e)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(d.o)
                    },
                    _name: {
                        value: x.nm
                    }
                }),
                c.mn = x.mn,
                c
            }
            function o(x, d, C) {
                function c(p) {
                    return x.a.ix === p || p === "Anchor Point" ? c.anchorPoint : x.o.ix === p || p === "Opacity" ? c.opacity : x.p.ix === p || p === "Position" ? c.position : x.r.ix === p || p === "Rotation" || p === "ADBE Vector Rotation" ? c.rotation : x.s.ix === p || p === "Scale" ? c.scale : x.sk && x.sk.ix === p || p === "Skew" ? c.skew : x.sa && x.sa.ix === p || p === "Skew Axis" ? c.skewAxis : null
                }
                var m = propertyGroupFactory(c, C);
                return d.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", m)),
                d.transform.mProps.p.setGroupProperty(PropertyInterface("Position", m)),
                d.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", m)),
                d.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", m)),
                d.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", m)),
                d.transform.mProps.sk && (d.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", m)),
                d.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", m))),
                d.transform.op.setGroupProperty(PropertyInterface("Opacity", m)),
                Object.defineProperties(c, {
                    opacity: {
                        get: ExpressionPropertyInterface(d.transform.mProps.o)
                    },
                    position: {
                        get: ExpressionPropertyInterface(d.transform.mProps.p)
                    },
                    anchorPoint: {
                        get: ExpressionPropertyInterface(d.transform.mProps.a)
                    },
                    scale: {
                        get: ExpressionPropertyInterface(d.transform.mProps.s)
                    },
                    rotation: {
                        get: ExpressionPropertyInterface(d.transform.mProps.r)
                    },
                    skew: {
                        get: ExpressionPropertyInterface(d.transform.mProps.sk)
                    },
                    skewAxis: {
                        get: ExpressionPropertyInterface(d.transform.mProps.sa)
                    },
                    _name: {
                        value: x.nm
                    }
                }),
                c.ty = "tr",
                c.mn = x.mn,
                c.propertyGroup = C,
                c
            }
            function f(x, d, C) {
                function c(g) {
                    return x.p.ix === g ? c.position : x.s.ix === g ? c.size : null
                }
                var m = propertyGroupFactory(c, C);
                c.propertyIndex = x.ix;
                var p = d.sh.ty === "tm" ? d.sh.prop : d.sh;
                return p.s.setGroupProperty(PropertyInterface("Size", m)),
                p.p.setGroupProperty(PropertyInterface("Position", m)),
                Object.defineProperties(c, {
                    size: {
                        get: ExpressionPropertyInterface(p.s)
                    },
                    position: {
                        get: ExpressionPropertyInterface(p.p)
                    },
                    _name: {
                        value: x.nm
                    }
                }),
                c.mn = x.mn,
                c
            }
            function y(x, d, C) {
                function c(g) {
                    return x.p.ix === g ? c.position : x.r.ix === g ? c.rotation : x.pt.ix === g ? c.points : x.or.ix === g || g === "ADBE Vector Star Outer Radius" ? c.outerRadius : x.os.ix === g ? c.outerRoundness : x.ir && (x.ir.ix === g || g === "ADBE Vector Star Inner Radius") ? c.innerRadius : x.is && x.is.ix === g ? c.innerRoundness : null
                }
                var m = propertyGroupFactory(c, C)
                  , p = d.sh.ty === "tm" ? d.sh.prop : d.sh;
                return c.propertyIndex = x.ix,
                p.or.setGroupProperty(PropertyInterface("Outer Radius", m)),
                p.os.setGroupProperty(PropertyInterface("Outer Roundness", m)),
                p.pt.setGroupProperty(PropertyInterface("Points", m)),
                p.p.setGroupProperty(PropertyInterface("Position", m)),
                p.r.setGroupProperty(PropertyInterface("Rotation", m)),
                x.ir && (p.ir.setGroupProperty(PropertyInterface("Inner Radius", m)),
                p.is.setGroupProperty(PropertyInterface("Inner Roundness", m))),
                Object.defineProperties(c, {
                    position: {
                        get: ExpressionPropertyInterface(p.p)
                    },
                    rotation: {
                        get: ExpressionPropertyInterface(p.r)
                    },
                    points: {
                        get: ExpressionPropertyInterface(p.pt)
                    },
                    outerRadius: {
                        get: ExpressionPropertyInterface(p.or)
                    },
                    outerRoundness: {
                        get: ExpressionPropertyInterface(p.os)
                    },
                    innerRadius: {
                        get: ExpressionPropertyInterface(p.ir)
                    },
                    innerRoundness: {
                        get: ExpressionPropertyInterface(p.is)
                    },
                    _name: {
                        value: x.nm
                    }
                }),
                c.mn = x.mn,
                c
            }
            function P(x, d, C) {
                function c(g) {
                    return x.p.ix === g ? c.position : x.r.ix === g ? c.roundness : x.s.ix === g || g === "Size" || g === "ADBE Vector Rect Size" ? c.size : null
                }
                var m = propertyGroupFactory(c, C)
                  , p = d.sh.ty === "tm" ? d.sh.prop : d.sh;
                return c.propertyIndex = x.ix,
                p.p.setGroupProperty(PropertyInterface("Position", m)),
                p.s.setGroupProperty(PropertyInterface("Size", m)),
                p.r.setGroupProperty(PropertyInterface("Rotation", m)),
                Object.defineProperties(c, {
                    position: {
                        get: ExpressionPropertyInterface(p.p)
                    },
                    roundness: {
                        get: ExpressionPropertyInterface(p.r)
                    },
                    size: {
                        get: ExpressionPropertyInterface(p.s)
                    },
                    _name: {
                        value: x.nm
                    }
                }),
                c.mn = x.mn,
                c
            }
            function u(x, d, C) {
                function c(g) {
                    return x.r.ix === g || g === "Round Corners 1" ? c.radius : null
                }
                var m = propertyGroupFactory(c, C)
                  , p = d;
                return c.propertyIndex = x.ix,
                p.rd.setGroupProperty(PropertyInterface("Radius", m)),
                Object.defineProperties(c, {
                    radius: {
                        get: ExpressionPropertyInterface(p.rd)
                    },
                    _name: {
                        value: x.nm
                    }
                }),
                c.mn = x.mn,
                c
            }
            function b(x, d, C) {
                function c(g) {
                    return x.c.ix === g || g === "Copies" ? c.copies : x.o.ix === g || g === "Offset" ? c.offset : null
                }
                var m = propertyGroupFactory(c, C)
                  , p = d;
                return c.propertyIndex = x.ix,
                p.c.setGroupProperty(PropertyInterface("Copies", m)),
                p.o.setGroupProperty(PropertyInterface("Offset", m)),
                Object.defineProperties(c, {
                    copies: {
                        get: ExpressionPropertyInterface(p.c)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(p.o)
                    },
                    _name: {
                        value: x.nm
                    }
                }),
                c.mn = x.mn,
                c
            }
            return function(x, d, C) {
                var c;
                function m(g) {
                    if (typeof g == "number")
                        return g = g === void 0 ? 1 : g,
                        g === 0 ? C : c[g - 1];
                    for (var E = 0, _ = c.length; E < _; ) {
                        if (c[E]._name === g)
                            return c[E];
                        E += 1
                    }
                    return null
                }
                function p() {
                    return C
                }
                return m.propertyGroup = propertyGroupFactory(m, p),
                c = t(x, d, m.propertyGroup),
                m.numProperties = c.length,
                m._name = "Contents",
                m
            }
        }()
          , TextExpressionInterface = function() {
            return function(t) {
                var e;
                function r(i) {
                    switch (i) {
                    case "ADBE Text Document":
                        return r.sourceText;
                    default:
                        return null
                    }
                }
                return Object.defineProperty(r, "sourceText", {
                    get: function() {
                        t.textProperty.getValue();
                        var s = t.textProperty.currentData.t;
                        return (!e || s !== e.value) && (e = new String(s),
                        e.value = s || new String(s),
                        Object.defineProperty(e, "style", {
                            get: function() {
                                return {
                                    fillColor: t.textProperty.currentData.fc
                                }
                            }
                        })),
                        e
                    }
                }),
                r
            }
        }();
        function _typeof(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(r) {
                return typeof r
            }
            : _typeof = function(r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }
            ,
            _typeof(t)
        }
        var FootageInterface = function() {
            var t = function(i) {
                var s = ""
                  , a = i.getFootageData();
                function n() {
                    return s = "",
                    a = i.getFootageData(),
                    l
                }
                function l(o) {
                    if (a[o])
                        return s = o,
                        a = a[o],
                        _typeof(a) === "object" ? l : a;
                    var f = o.indexOf(s);
                    if (f !== -1) {
                        var y = parseInt(o.substr(f + s.length), 10);
                        return a = a[y],
                        _typeof(a) === "object" ? l : a
                    }
                    return ""
                }
                return n
            }
              , e = function(i) {
                function s(a) {
                    return a === "Outline" ? s.outlineInterface() : null
                }
                return s._name = "Outline",
                s.outlineInterface = t(i),
                s
            };
            return function(r) {
                function i(s) {
                    return s === "Data" ? i.dataInterface : null
                }
                return i._name = "Data",
                i.dataInterface = e(r),
                i
            }
        }()
          , interfaces = {
            layer: LayerExpressionInterface,
            effects: EffectsExpressionInterface,
            comp: CompExpressionInterface,
            shape: ShapeExpressionInterface,
            text: TextExpressionInterface,
            footage: FootageInterface
        };
        function getInterface(t) {
            return interfaces[t] || null
        }
        var expressionHelpers = function() {
            function t(n, l, o) {
                l.x && (o.k = !0,
                o.x = !0,
                o.initiateExpression = ExpressionManager.initiateExpression,
                o.effectsSequence.push(o.initiateExpression(n, l, o).bind(o)))
            }
            function e(n) {
                return n *= this.elem.globalData.frameRate,
                n -= this.offsetTime,
                n !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < n ? this._cachingAtTime.lastIndex : 0,
                this._cachingAtTime.value = this.interpolateValue(n, this._cachingAtTime),
                this._cachingAtTime.lastFrame = n),
                this._cachingAtTime.value
            }
            function r(n) {
                var l = -.01
                  , o = this.getValueAtTime(n)
                  , f = this.getValueAtTime(n + l)
                  , y = 0;
                if (o.length) {
                    var P;
                    for (P = 0; P < o.length; P += 1)
                        y += Math.pow(f[P] - o[P], 2);
                    y = Math.sqrt(y) * 100
                } else
                    y = 0;
                return y
            }
            function i(n) {
                if (this.vel !== void 0)
                    return this.vel;
                var l = -.001, o = this.getValueAtTime(n), f = this.getValueAtTime(n + l), y;
                if (o.length) {
                    y = createTypedArray("float32", o.length);
                    var P;
                    for (P = 0; P < o.length; P += 1)
                        y[P] = (f[P] - o[P]) / l
                } else
                    y = (f - o) / l;
                return y
            }
            function s() {
                return this.pv
            }
            function a(n) {
                this.propertyGroup = n
            }
            return {
                searchExpressions: t,
                getSpeedAtTime: r,
                getVelocityAtTime: i,
                getValueAtTime: e,
                getStaticValueAtTime: s,
                setGroupProperty: a
            }
        }();
        function addPropertyDecorator() {
            function t(u, b, x) {
                if (!this.k || !this.keyframes)
                    return this.pv;
                u = u ? u.toLowerCase() : "";
                var d = this.comp.renderedFrame
                  , C = this.keyframes
                  , c = C[C.length - 1].t;
                if (d <= c)
                    return this.pv;
                var m, p;
                x ? (b ? m = Math.abs(c - this.elem.comp.globalData.frameRate * b) : m = Math.max(0, c - this.elem.data.ip),
                p = c - m) : ((!b || b > C.length - 1) && (b = C.length - 1),
                p = C[C.length - 1 - b].t,
                m = c - p);
                var g, E, _;
                if (u === "pingpong") {
                    var T = Math.floor((d - p) / m);
                    if (T % 2 !== 0)
                        return this.getValueAtTime((m - (d - p) % m + p) / this.comp.globalData.frameRate, 0)
                } else if (u === "offset") {
                    var M = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                      , B = this.getValueAtTime(c / this.comp.globalData.frameRate, 0)
                      , z = this.getValueAtTime(((d - p) % m + p) / this.comp.globalData.frameRate, 0)
                      , R = Math.floor((d - p) / m);
                    if (this.pv.length) {
                        for (_ = new Array(M.length),
                        E = _.length,
                        g = 0; g < E; g += 1)
                            _[g] = (B[g] - M[g]) * R + z[g];
                        return _
                    }
                    return (B - M) * R + z
                } else if (u === "continue") {
                    var L = this.getValueAtTime(c / this.comp.globalData.frameRate, 0)
                      , O = this.getValueAtTime((c - .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (_ = new Array(L.length),
                        E = _.length,
                        g = 0; g < E; g += 1)
                            _[g] = L[g] + (L[g] - O[g]) * ((d - c) / this.comp.globalData.frameRate) / 5e-4;
                        return _
                    }
                    return L + (L - O) * ((d - c) / .001)
                }
                return this.getValueAtTime(((d - p) % m + p) / this.comp.globalData.frameRate, 0)
            }
            function e(u, b, x) {
                if (!this.k)
                    return this.pv;
                u = u ? u.toLowerCase() : "";
                var d = this.comp.renderedFrame
                  , C = this.keyframes
                  , c = C[0].t;
                if (d >= c)
                    return this.pv;
                var m, p;
                x ? (b ? m = Math.abs(this.elem.comp.globalData.frameRate * b) : m = Math.max(0, this.elem.data.op - c),
                p = c + m) : ((!b || b > C.length - 1) && (b = C.length - 1),
                p = C[b].t,
                m = p - c);
                var g, E, _;
                if (u === "pingpong") {
                    var T = Math.floor((c - d) / m);
                    if (T % 2 === 0)
                        return this.getValueAtTime(((c - d) % m + c) / this.comp.globalData.frameRate, 0)
                } else if (u === "offset") {
                    var M = this.getValueAtTime(c / this.comp.globalData.frameRate, 0)
                      , B = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                      , z = this.getValueAtTime((m - (c - d) % m + c) / this.comp.globalData.frameRate, 0)
                      , R = Math.floor((c - d) / m) + 1;
                    if (this.pv.length) {
                        for (_ = new Array(M.length),
                        E = _.length,
                        g = 0; g < E; g += 1)
                            _[g] = z[g] - (B[g] - M[g]) * R;
                        return _
                    }
                    return z - (B - M) * R
                } else if (u === "continue") {
                    var L = this.getValueAtTime(c / this.comp.globalData.frameRate, 0)
                      , O = this.getValueAtTime((c + .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (_ = new Array(L.length),
                        E = _.length,
                        g = 0; g < E; g += 1)
                            _[g] = L[g] + (L[g] - O[g]) * (c - d) / .001;
                        return _
                    }
                    return L + (L - O) * (c - d) / .001
                }
                return this.getValueAtTime((m - ((c - d) % m + c)) / this.comp.globalData.frameRate, 0)
            }
            function r(u, b) {
                if (!this.k)
                    return this.pv;
                if (u = (u || .4) * .5,
                b = Math.floor(b || 5),
                b <= 1)
                    return this.pv;
                var x = this.comp.renderedFrame / this.comp.globalData.frameRate, d = x - u, C = x + u, c = b > 1 ? (C - d) / (b - 1) : 1, m = 0, p = 0, g;
                this.pv.length ? g = createTypedArray("float32", this.pv.length) : g = 0;
                for (var E; m < b; ) {
                    if (E = this.getValueAtTime(d + m * c),
                    this.pv.length)
                        for (p = 0; p < this.pv.length; p += 1)
                            g[p] += E[p];
                    else
                        g += E;
                    m += 1
                }
                if (this.pv.length)
                    for (p = 0; p < this.pv.length; p += 1)
                        g[p] /= b;
                else
                    g /= b;
                return g
            }
            function i(u) {
                this._transformCachingAtTime || (this._transformCachingAtTime = {
                    v: new Matrix
                });
                var b = this._transformCachingAtTime.v;
                if (b.cloneFromProps(this.pre.props),
                this.appliedTransformations < 1) {
                    var x = this.a.getValueAtTime(u);
                    b.translate(-x[0] * this.a.mult, -x[1] * this.a.mult, x[2] * this.a.mult)
                }
                if (this.appliedTransformations < 2) {
                    var d = this.s.getValueAtTime(u);
                    b.scale(d[0] * this.s.mult, d[1] * this.s.mult, d[2] * this.s.mult)
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var C = this.sk.getValueAtTime(u)
                      , c = this.sa.getValueAtTime(u);
                    b.skewFromAxis(-C * this.sk.mult, c * this.sa.mult)
                }
                if (this.r && this.appliedTransformations < 4) {
                    var m = this.r.getValueAtTime(u);
                    b.rotate(-m * this.r.mult)
                } else if (!this.r && this.appliedTransformations < 4) {
                    var p = this.rz.getValueAtTime(u)
                      , g = this.ry.getValueAtTime(u)
                      , E = this.rx.getValueAtTime(u)
                      , _ = this.or.getValueAtTime(u);
                    b.rotateZ(-p * this.rz.mult).rotateY(g * this.ry.mult).rotateX(E * this.rx.mult).rotateZ(-_[2] * this.or.mult).rotateY(_[1] * this.or.mult).rotateX(_[0] * this.or.mult)
                }
                if (this.data.p && this.data.p.s) {
                    var T = this.px.getValueAtTime(u)
                      , M = this.py.getValueAtTime(u);
                    if (this.data.p.z) {
                        var B = this.pz.getValueAtTime(u);
                        b.translate(T * this.px.mult, M * this.py.mult, -B * this.pz.mult)
                    } else
                        b.translate(T * this.px.mult, M * this.py.mult, 0)
                } else {
                    var z = this.p.getValueAtTime(u);
                    b.translate(z[0] * this.p.mult, z[1] * this.p.mult, -z[2] * this.p.mult)
                }
                return b
            }
            function s() {
                return this.v.clone(new Matrix)
            }
            var a = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(u, b, x) {
                var d = a(u, b, x);
                return d.dynamicProperties.length ? d.getValueAtTime = i.bind(d) : d.getValueAtTime = s.bind(d),
                d.setGroupProperty = expressionHelpers.setGroupProperty,
                d
            }
            ;
            var n = PropertyFactory.getProp;
            PropertyFactory.getProp = function(u, b, x, d, C) {
                var c = n(u, b, x, d, C);
                c.kf ? c.getValueAtTime = expressionHelpers.getValueAtTime.bind(c) : c.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(c),
                c.setGroupProperty = expressionHelpers.setGroupProperty,
                c.loopOut = t,
                c.loopIn = e,
                c.smooth = r,
                c.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(c),
                c.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(c),
                c.numKeys = b.a === 1 ? b.k.length : 0,
                c.propertyIndex = b.ix;
                var m = 0;
                return x !== 0 && (m = createTypedArray("float32", b.a === 1 ? b.k[0].s.length : b.k.length)),
                c._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: m
                },
                expressionHelpers.searchExpressions(u, b, c),
                c.k && C.addDynamicProperty(c),
                c
            }
            ;
            function l(u) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }),
                u *= this.elem.globalData.frameRate,
                u -= this.offsetTime,
                u !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < u ? this._caching.lastIndex : 0,
                this._cachingAtTime.lastTime = u,
                this.interpolateShape(u, this._cachingAtTime.shapeValue, this._cachingAtTime)),
                this._cachingAtTime.shapeValue
            }
            var o = ShapePropertyFactory.getConstructorFunction()
              , f = ShapePropertyFactory.getKeyframedConstructorFunction();
            function y() {}
            y.prototype = {
                vertices: function(b, x) {
                    this.k && this.getValue();
                    var d = this.v;
                    x !== void 0 && (d = this.getValueAtTime(x, 0));
                    var C, c = d._length, m = d[b], p = d.v, g = createSizedArray(c);
                    for (C = 0; C < c; C += 1)
                        b === "i" || b === "o" ? g[C] = [m[C][0] - p[C][0], m[C][1] - p[C][1]] : g[C] = [m[C][0], m[C][1]];
                    return g
                },
                points: function(b) {
                    return this.vertices("v", b)
                },
                inTangents: function(b) {
                    return this.vertices("i", b)
                },
                outTangents: function(b) {
                    return this.vertices("o", b)
                },
                isClosed: function() {
                    return this.v.c
                },
                pointOnPath: function(b, x) {
                    var d = this.v;
                    x !== void 0 && (d = this.getValueAtTime(x, 0)),
                    this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(d));
                    for (var C = this._segmentsLength, c = C.lengths, m = C.totalLength * b, p = 0, g = c.length, E = 0, _; p < g; ) {
                        if (E + c[p].addedLength > m) {
                            var T = p
                              , M = d.c && p === g - 1 ? 0 : p + 1
                              , B = (m - E) / c[p].addedLength;
                            _ = bez.getPointInSegment(d.v[T], d.v[M], d.o[T], d.i[M], B, c[p]);
                            break
                        } else
                            E += c[p].addedLength;
                        p += 1
                    }
                    return _ || (_ = d.c ? [d.v[0][0], d.v[0][1]] : [d.v[d._length - 1][0], d.v[d._length - 1][1]]),
                    _
                },
                vectorOnPath: function(b, x, d) {
                    b == 1 ? b = this.v.c : b == 0 && (b = .999);
                    var C = this.pointOnPath(b, x)
                      , c = this.pointOnPath(b + .001, x)
                      , m = c[0] - C[0]
                      , p = c[1] - C[1]
                      , g = Math.sqrt(Math.pow(m, 2) + Math.pow(p, 2));
                    if (g === 0)
                        return [0, 0];
                    var E = d === "tangent" ? [m / g, p / g] : [-p / g, m / g];
                    return E
                },
                tangentOnPath: function(b, x) {
                    return this.vectorOnPath(b, x, "tangent")
                },
                normalOnPath: function(b, x) {
                    return this.vectorOnPath(b, x, "normal")
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            },
            extendPrototype([y], o),
            extendPrototype([y], f),
            f.prototype.getValueAtTime = l,
            f.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var P = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(u, b, x, d, C) {
                var c = P(u, b, x, d, C);
                return c.propertyIndex = b.ix,
                c.lock = !1,
                x === 3 ? expressionHelpers.searchExpressions(u, b.pt, c) : x === 4 && expressionHelpers.searchExpressions(u, b.ks, c),
                c.k && u.addDynamicProperty(c),
                c
            }
        }
        function initialize$1() {
            addPropertyDecorator()
        }
        function addDecorator() {
            function t() {
                return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this),
                this.addEffect(this.getExpressionValue.bind(this)),
                !0) : null
            }
            TextProperty.prototype.getExpressionValue = function(e, r) {
                var i = this.calculateExpression(r);
                if (e.t !== i) {
                    var s = {};
                    return this.copyData(s, e),
                    s.t = i.toString(),
                    s.__complete = !1,
                    s
                }
                return e
            }
            ,
            TextProperty.prototype.searchProperty = function() {
                var e = this.searchKeyframes()
                  , r = this.searchExpressions();
                return this.kf = e || r,
                this.kf
            }
            ,
            TextProperty.prototype.searchExpressions = t
        }
        function initialize() {
            addDecorator()
        }
        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
            createMergeNode: function t(e, r) {
                var i = createNS("feMerge");
                i.setAttribute("result", e);
                var s, a;
                for (a = 0; a < r.length; a += 1)
                    s = createNS("feMergeNode"),
                    s.setAttribute("in", r[a]),
                    i.appendChild(s),
                    i.appendChild(s);
                return i
            }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
        function SVGTintFilter(t, e, r, i, s) {
            this.filterManager = e;
            var a = createNS("feColorMatrix");
            a.setAttribute("type", "matrix"),
            a.setAttribute("color-interpolation-filters", "linearRGB"),
            a.setAttribute("values", linearFilterValue + " 1 0"),
            this.linearFilter = a,
            a.setAttribute("result", i + "_tint_1"),
            t.appendChild(a),
            a = createNS("feColorMatrix"),
            a.setAttribute("type", "matrix"),
            a.setAttribute("color-interpolation-filters", "sRGB"),
            a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
            a.setAttribute("result", i + "_tint_2"),
            t.appendChild(a),
            this.matrixFilter = a;
            var n = this.createMergeNode(i, [s, i + "_tint_1", i + "_tint_2"]);
            t.appendChild(n)
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter),
        SVGTintFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v
                  , r = this.filterManager.effectElements[1].p.v
                  , i = this.filterManager.effectElements[2].p.v / 100;
                this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"),
                this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
            }
        }
        ;
        function SVGFillFilter(t, e, r, i) {
            this.filterManager = e;
            var s = createNS("feColorMatrix");
            s.setAttribute("type", "matrix"),
            s.setAttribute("color-interpolation-filters", "sRGB"),
            s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
            s.setAttribute("result", i),
            t.appendChild(s),
            this.matrixFilter = s
        }
        SVGFillFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[2].p.v
                  , r = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
            }
        }
        ;
        function SVGStrokeEffect(t, e, r) {
            this.initialized = !1,
            this.filterManager = e,
            this.elem = r,
            this.paths = []
        }
        SVGStrokeEffect.prototype.initialize = function() {
            var t = this.elem.layerElement.children || this.elem.layerElement.childNodes, e, r, i, s;
            for (this.filterManager.effectElements[1].p.v === 1 ? (s = this.elem.maskManager.masksProperties.length,
            i = 0) : (i = this.filterManager.effectElements[0].p.v - 1,
            s = i + 1),
            r = createNS("g"),
            r.setAttribute("fill", "none"),
            r.setAttribute("stroke-linecap", "round"),
            r.setAttribute("stroke-dashoffset", 1),
            i; i < s; i += 1)
                e = createNS("path"),
                r.appendChild(e),
                this.paths.push({
                    p: e,
                    m: i
                });
            if (this.filterManager.effectElements[10].p.v === 3) {
                var a = createNS("mask")
                  , n = createElementID();
                a.setAttribute("id", n),
                a.setAttribute("mask-type", "alpha"),
                a.appendChild(r),
                this.elem.globalData.defs.appendChild(a);
                var l = createNS("g");
                for (l.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); t[0]; )
                    l.appendChild(t[0]);
                this.elem.layerElement.appendChild(l),
                this.masker = a,
                r.setAttribute("stroke", "#fff")
            } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
                if (this.filterManager.effectElements[10].p.v === 2)
                    for (t = this.elem.layerElement.children || this.elem.layerElement.childNodes; t.length; )
                        this.elem.layerElement.removeChild(t[0]);
                this.elem.layerElement.appendChild(r),
                this.elem.layerElement.removeAttribute("mask"),
                r.setAttribute("stroke", "#fff")
            }
            this.initialized = !0,
            this.pathMasker = r
        }
        ,
        SVGStrokeEffect.prototype.renderFrame = function(t) {
            this.initialized || this.initialize();
            var e, r = this.paths.length, i, s;
            for (e = 0; e < r; e += 1)
                if (this.paths[e].m !== -1 && (i = this.elem.maskManager.viewData[this.paths[e].m],
                s = this.paths[e].p,
                (t || this.filterManager._mdf || i.prop._mdf) && s.setAttribute("d", i.lastPath),
                t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                    var a;
                    if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                        var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01
                          , l = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01
                          , o = s.getTotalLength();
                        a = "0 0 0 " + o * n + " ";
                        var f = o * (l - n), y = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01, P = Math.floor(f / y), u;
                        for (u = 0; u < P; u += 1)
                            a += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01 + " ";
                        a += "0 " + o * 10 + " 0 0"
                    } else
                        a = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01;
                    s.setAttribute("stroke-dasharray", a)
                }
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2),
            (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v),
            (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t || this.filterManager.effectElements[3].p._mdf)) {
                var b = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(b[0] * 255) + "," + bmFloor(b[1] * 255) + "," + bmFloor(b[2] * 255) + ")")
            }
        }
        ;
        function SVGTritoneFilter(t, e, r, i) {
            this.filterManager = e;
            var s = createNS("feColorMatrix");
            s.setAttribute("type", "matrix"),
            s.setAttribute("color-interpolation-filters", "linearRGB"),
            s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),
            t.appendChild(s);
            var a = createNS("feComponentTransfer");
            a.setAttribute("color-interpolation-filters", "sRGB"),
            a.setAttribute("result", i),
            this.matrixFilter = a;
            var n = createNS("feFuncR");
            n.setAttribute("type", "table"),
            a.appendChild(n),
            this.feFuncR = n;
            var l = createNS("feFuncG");
            l.setAttribute("type", "table"),
            a.appendChild(l),
            this.feFuncG = l;
            var o = createNS("feFuncB");
            o.setAttribute("type", "table"),
            a.appendChild(o),
            this.feFuncB = o,
            t.appendChild(a)
        }
        SVGTritoneFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v
                  , r = this.filterManager.effectElements[1].p.v
                  , i = this.filterManager.effectElements[2].p.v
                  , s = i[0] + " " + r[0] + " " + e[0]
                  , a = i[1] + " " + r[1] + " " + e[1]
                  , n = i[2] + " " + r[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", s),
                this.feFuncG.setAttribute("tableValues", a),
                this.feFuncB.setAttribute("tableValues", n)
            }
        }
        ;
        function SVGProLevelsFilter(t, e, r, i) {
            this.filterManager = e;
            var s = this.filterManager.effectElements
              , a = createNS("feComponentTransfer");
            (s[10].p.k || s[10].p.v !== 0 || s[11].p.k || s[11].p.v !== 1 || s[12].p.k || s[12].p.v !== 1 || s[13].p.k || s[13].p.v !== 0 || s[14].p.k || s[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a)),
            (s[17].p.k || s[17].p.v !== 0 || s[18].p.k || s[18].p.v !== 1 || s[19].p.k || s[19].p.v !== 1 || s[20].p.k || s[20].p.v !== 0 || s[21].p.k || s[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a)),
            (s[24].p.k || s[24].p.v !== 0 || s[25].p.k || s[25].p.v !== 1 || s[26].p.k || s[26].p.v !== 1 || s[27].p.k || s[27].p.v !== 0 || s[28].p.k || s[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a)),
            (s[31].p.k || s[31].p.v !== 0 || s[32].p.k || s[32].p.v !== 1 || s[33].p.k || s[33].p.v !== 1 || s[34].p.k || s[34].p.v !== 0 || s[35].p.k || s[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a)),
            (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"),
            t.appendChild(a)),
            (s[3].p.k || s[3].p.v !== 0 || s[4].p.k || s[4].p.v !== 1 || s[5].p.k || s[5].p.v !== 1 || s[6].p.k || s[6].p.v !== 0 || s[7].p.k || s[7].p.v !== 1) && (a = createNS("feComponentTransfer"),
            a.setAttribute("color-interpolation-filters", "sRGB"),
            a.setAttribute("result", i),
            t.appendChild(a),
            this.feFuncRComposed = this.createFeFunc("feFuncR", a),
            this.feFuncGComposed = this.createFeFunc("feFuncG", a),
            this.feFuncBComposed = this.createFeFunc("feFuncB", a))
        }
        SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
            var r = createNS(t);
            return r.setAttribute("type", "table"),
            e.appendChild(r),
            r
        }
        ,
        SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, s) {
            for (var a = 0, n = 256, l, o = Math.min(t, e), f = Math.max(t, e), y = Array.call(null, {
                length: n
            }), P, u = 0, b = s - i, x = e - t; a <= 256; )
                l = a / 256,
                l <= o ? P = x < 0 ? s : i : l >= f ? P = x < 0 ? i : s : P = i + b * Math.pow((l - t) / x, 1 / r),
                y[u] = P,
                u += 1,
                a += 256 / (n - 1);
            return y.join(" ")
        }
        ,
        SVGProLevelsFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e, r = this.filterManager.effectElements;
                this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v),
                this.feFuncRComposed.setAttribute("tableValues", e),
                this.feFuncGComposed.setAttribute("tableValues", e),
                this.feFuncBComposed.setAttribute("tableValues", e)),
                this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v),
                this.feFuncR.setAttribute("tableValues", e)),
                this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v),
                this.feFuncG.setAttribute("tableValues", e)),
                this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v),
                this.feFuncB.setAttribute("tableValues", e)),
                this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v),
                this.feFuncA.setAttribute("tableValues", e))
            }
        }
        ;
        function SVGDropShadowEffect(t, e, r, i, s) {
            var a = e.container.globalData.renderConfig.filterSize
              , n = e.data.fs || a;
            t.setAttribute("x", n.x || a.x),
            t.setAttribute("y", n.y || a.y),
            t.setAttribute("width", n.width || a.width),
            t.setAttribute("height", n.height || a.height),
            this.filterManager = e;
            var l = createNS("feGaussianBlur");
            l.setAttribute("in", "SourceAlpha"),
            l.setAttribute("result", i + "_drop_shadow_1"),
            l.setAttribute("stdDeviation", "0"),
            this.feGaussianBlur = l,
            t.appendChild(l);
            var o = createNS("feOffset");
            o.setAttribute("dx", "25"),
            o.setAttribute("dy", "0"),
            o.setAttribute("in", i + "_drop_shadow_1"),
            o.setAttribute("result", i + "_drop_shadow_2"),
            this.feOffset = o,
            t.appendChild(o);
            var f = createNS("feFlood");
            f.setAttribute("flood-color", "#00ff00"),
            f.setAttribute("flood-opacity", "1"),
            f.setAttribute("result", i + "_drop_shadow_3"),
            this.feFlood = f,
            t.appendChild(f);
            var y = createNS("feComposite");
            y.setAttribute("in", i + "_drop_shadow_3"),
            y.setAttribute("in2", i + "_drop_shadow_2"),
            y.setAttribute("operator", "in"),
            y.setAttribute("result", i + "_drop_shadow_4"),
            t.appendChild(y);
            var P = this.createMergeNode(i, [i + "_drop_shadow_4", s]);
            t.appendChild(P)
        }
        extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
        SVGDropShadowEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4),
                t || this.filterManager.effectElements[0].p._mdf) {
                    var e = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(e[0] * 255), Math.round(e[1] * 255), Math.round(e[2] * 255)))
                }
                if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255),
                t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                    var r = this.filterManager.effectElements[3].p.v
                      , i = (this.filterManager.effectElements[2].p.v - 90) * degToRads
                      , s = r * Math.cos(i)
                      , a = r * Math.sin(i);
                    this.feOffset.setAttribute("dx", s),
                    this.feOffset.setAttribute("dy", a)
                }
            }
        }
        ;
        var _svgMatteSymbols = [];
        function SVGMatte3Effect(t, e, r) {
            this.initialized = !1,
            this.filterManager = e,
            this.filterElem = t,
            this.elem = r,
            r.matteElement = createNS("g"),
            r.matteElement.appendChild(r.layerElement),
            r.matteElement.appendChild(r.transformedElement),
            r.baseElement = r.matteElement
        }
        SVGMatte3Effect.prototype.findSymbol = function(t) {
            for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
                if (_svgMatteSymbols[e] === t)
                    return _svgMatteSymbols[e];
                e += 1
            }
            return null
        }
        ,
        SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
            var r = t.layerElement.parentNode;
            if (r) {
                for (var i = r.children, s = 0, a = i.length; s < a && i[s] !== t.layerElement; )
                    s += 1;
                var n;
                s <= a - 2 && (n = i[s + 1]);
                var l = createNS("use");
                l.setAttribute("href", "#" + e),
                n ? r.insertBefore(l, n) : r.appendChild(l)
            }
        }
        ,
        SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
            if (!this.findSymbol(e)) {
                var r = createElementID()
                  , i = createNS("mask");
                i.setAttribute("id", e.layerId),
                i.setAttribute("mask-type", "alpha"),
                _svgMatteSymbols.push(e);
                var s = t.globalData.defs;
                s.appendChild(i);
                var a = createNS("symbol");
                a.setAttribute("id", r),
                this.replaceInParent(e, r),
                a.appendChild(e.layerElement),
                s.appendChild(a);
                var n = createNS("use");
                n.setAttribute("href", "#" + r),
                i.appendChild(n),
                e.data.hd = !1,
                e.show()
            }
            t.setMatte(e.layerId)
        }
        ,
        SVGMatte3Effect.prototype.initialize = function() {
            for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i; )
                e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]),
                r += 1;
            this.initialized = !0
        }
        ,
        SVGMatte3Effect.prototype.renderFrame = function() {
            this.initialized || this.initialize()
        }
        ;
        function SVGGaussianBlurEffect(t, e, r, i) {
            t.setAttribute("x", "-100%"),
            t.setAttribute("y", "-100%"),
            t.setAttribute("width", "300%"),
            t.setAttribute("height", "300%"),
            this.filterManager = e;
            var s = createNS("feGaussianBlur");
            s.setAttribute("result", i),
            t.appendChild(s),
            this.feGaussianBlur = s
        }
        SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = .3
                  , r = this.filterManager.effectElements[0].p.v * e
                  , i = this.filterManager.effectElements[1].p.v
                  , s = i == 3 ? 0 : r
                  , a = i == 2 ? 0 : r;
                this.feGaussianBlur.setAttribute("stdDeviation", s + " " + a);
                var n = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", n)
            }
        }
        ;
        function TransformEffect() {}
        TransformEffect.prototype.init = function(t) {
            this.effectsManager = t,
            this.type = effectTypes.TRANSFORM_EFFECT,
            this.matrix = new Matrix,
            this.opacity = -1,
            this._mdf = !1,
            this._opMdf = !1
        }
        ,
        TransformEffect.prototype.renderFrame = function(t) {
            if (this._opMdf = !1,
            this._mdf = !1,
            t || this.effectsManager._mdf) {
                var e = this.effectsManager.effectElements
                  , r = e[0].p.v
                  , i = e[1].p.v
                  , s = e[2].p.v === 1
                  , a = e[3].p.v
                  , n = s ? a : e[4].p.v
                  , l = e[5].p.v
                  , o = e[6].p.v
                  , f = e[7].p.v;
                this.matrix.reset(),
                this.matrix.translate(-r[0], -r[1], r[2]),
                this.matrix.scale(n * .01, a * .01, 1),
                this.matrix.rotate(-f * degToRads),
                this.matrix.skewFromAxis(-l * degToRads, (o + 90) * degToRads),
                this.matrix.translate(i[0], i[1], 0),
                this._mdf = !0,
                this.opacity !== e[8].p.v && (this.opacity = e[8].p.v,
                this._opMdf = !0)
            }
        }
        ;
        function SVGTransformEffect(t, e) {
            this.init(e)
        }
        extendPrototype([TransformEffect], SVGTransformEffect);
        function CVTransformEffect(t) {
            this.init(t)
        }
        return extendPrototype([TransformEffect], CVTransformEffect),
        registerRenderer("canvas", CanvasRenderer),
        registerRenderer("html", HybridRenderer),
        registerRenderer("svg", SVGRenderer),
        ShapeModifiers.registerModifier("tm", TrimModifier),
        ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
        ShapeModifiers.registerModifier("rp", RepeaterModifier),
        ShapeModifiers.registerModifier("rd", RoundCornersModifier),
        ShapeModifiers.registerModifier("zz", ZigZagModifier),
        ShapeModifiers.registerModifier("op", OffsetPathModifier),
        setExpressionsPlugin(Expressions),
        setExpressionInterfaces(getInterface),
        initialize$1(),
        initialize(),
        registerEffect$1(20, SVGTintFilter, !0),
        registerEffect$1(21, SVGFillFilter, !0),
        registerEffect$1(22, SVGStrokeEffect, !1),
        registerEffect$1(23, SVGTritoneFilter, !0),
        registerEffect$1(24, SVGProLevelsFilter, !0),
        registerEffect$1(25, SVGDropShadowEffect, !0),
        registerEffect$1(28, SVGMatte3Effect, !1),
        registerEffect$1(29, SVGGaussianBlurEffect, !0),
        registerEffect$1(35, SVGTransformEffect, !1),
        registerEffect(35, CVTransformEffect),
        lottie
    })
}
)(lottie, lottie.exports);
var lottieExports = lottie.exports;
const Lottie = getDefaultExportFromCjs(lottieExports);
(function() {
    try {
        if (typeof document < "u") {
            var t = document.createElement("style");
            t.appendChild(document.createTextNode(".lottie-animation-container{width:var(--lottie-animation-container-width);height:var(--lottie-animation-container-height);background-color:var(--lottie-animation-container-background-color);overflow:hidden;margin:var(--lottie-animation-margin)}.lottie-animation-container svg{transform:scale(var(--lottie-animation-scale))}")),
            document.head.appendChild(t)
        }
    } catch (e) {
        console.error("vite-plugin-css-injected-by-js", e)
    }
}
)();
var __defProp = Object.defineProperty
  , __defProps = Object.defineProperties
  , __getOwnPropDescs = Object.getOwnPropertyDescriptors
  , __getOwnPropSymbols = Object.getOwnPropertySymbols
  , __hasOwnProp = Object.prototype.hasOwnProperty
  , __propIsEnum = Object.prototype.propertyIsEnumerable
  , __defNormalProp = (t,e,r)=>e in t ? __defProp(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r
  , __spreadValues = (t,e)=>{
    for (var r in e || (e = {}))
        __hasOwnProp.call(e, r) && __defNormalProp(t, r, e[r]);
    if (__getOwnPropSymbols)
        for (var r of __getOwnPropSymbols(e))
            __propIsEnum.call(e, r) && __defNormalProp(t, r, e[r]);
    return t
}
  , __spreadProps = (t,e)=>__defProps(t, __getOwnPropDescs(e))
  , es6 = function t(e, r) {
    if (e === r)
        return !0;
    if (e && r && typeof e == "object" && typeof r == "object") {
        if (e.constructor !== r.constructor)
            return !1;
        var i, s, a;
        if (Array.isArray(e)) {
            if (i = e.length,
            i != r.length)
                return !1;
            for (s = i; s-- !== 0; )
                if (!t(e[s], r[s]))
                    return !1;
            return !0
        }
        if (e instanceof Map && r instanceof Map) {
            if (e.size !== r.size)
                return !1;
            for (s of e.entries())
                if (!r.has(s[0]))
                    return !1;
            for (s of e.entries())
                if (!t(s[1], r.get(s[0])))
                    return !1;
            return !0
        }
        if (e instanceof Set && r instanceof Set) {
            if (e.size !== r.size)
                return !1;
            for (s of e.entries())
                if (!r.has(s[0]))
                    return !1;
            return !0
        }
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(r)) {
            if (i = e.length,
            i != r.length)
                return !1;
            for (s = i; s-- !== 0; )
                if (e[s] !== r[s])
                    return !1;
            return !0
        }
        if (e.constructor === RegExp)
            return e.source === r.source && e.flags === r.flags;
        if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === r.valueOf();
        if (e.toString !== Object.prototype.toString)
            return e.toString() === r.toString();
        if (a = Object.keys(e),
        i = a.length,
        i !== Object.keys(r).length)
            return !1;
        for (s = i; s-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(r, a[s]))
                return !1;
        for (s = i; s-- !== 0; ) {
            var n = a[s];
            if (!t(e[n], r[n]))
                return !1
        }
        return !0
    }
    return e !== e && r !== r
};
function klona(t) {
    var e, r, i;
    if (Array.isArray(t)) {
        for (r = Array(e = t.length); e--; )
            r[e] = (i = t[e]) && typeof i == "object" ? klona(i) : i;
        return r
    }
    if (Object.prototype.toString.call(t) === "[object Object]") {
        r = {};
        for (e in t)
            e === "__proto__" ? Object.defineProperty(r, e, {
                value: klona(t[e]),
                configurable: !0,
                enumerable: !0,
                writable: !0
            }) : r[e] = (i = t[e]) && typeof i == "object" ? klona(i) : i;
        return r
    }
    return t
}
var _export_sfc = (t,e)=>{
    const r = t.__vccOpts || t;
    for (const [i,s] of e)
        r[i] = s;
    return r
}
;
const _sfc_main$3 = defineComponent({
    props: {
        animationData: {
            type: Object,
            default: ()=>({})
        },
        animationLink: {
            type: String,
            default: ""
        },
        loop: {
            type: [Boolean, Number],
            default: !0
        },
        autoPlay: {
            type: Boolean,
            default: !0
        },
        width: {
            type: [Number, String],
            default: "100%"
        },
        height: {
            type: [Number, String],
            default: "100%"
        },
        speed: {
            type: Number,
            default: 1
        },
        delay: {
            type: Number,
            default: 0
        },
        direction: {
            type: String,
            default: "forward"
        },
        pauseOnHover: {
            type: Boolean,
            default: !1
        },
        playOnHover: {
            type: Boolean,
            default: !1
        },
        backgroundColor: {
            type: String,
            default: "transparent"
        },
        pauseAnimation: {
            type: Boolean,
            default: !1
        },
        noMargin: {
            type: Boolean,
            default: !1
        },
        scale: {
            type: Number,
            default: 1
        },
        renderer: {
            type: String,
            default: "svg"
        },
        rendererSettings: {
            type: Object,
            default: ()=>({})
        },
        assetsPath: {
            type: String,
            default: ""
        }
    },
    emits: {
        onComplete: null,
        onLoopComplete: null,
        onEnterFrame: null,
        onSegmentStart: null,
        onAnimationLoaded: null
    },
    setup(t, {emit: e}) {
        const r = ref();
        let i, s = null, a = 1;
        watchEffect(async()=>{
            if (r.value) {
                if (t.animationLink != "")
                    try {
                        i = await (await fetch(t.animationLink)).json()
                    } catch (_) {
                        console.error(_);
                        return
                    }
                else if (es6(t.animationData, {}) === !1)
                    i = klona(t.animationData);
                else
                    throw new Error("You must provide either animationLink or animationData");
                n()
            }
        }
        );
        const n = ()=>{
            if (!r.value || !i)
                return;
            s == null || s.destroy(),
            s = null;
            let _ = t.autoPlay
              , T = t.loop;
            t.playOnHover && (_ = !1),
            typeof T == "number" && T > 0 && (T = T - 1),
            t.delay > 0 && (_ = !1);
            const M = {
                container: r.value,
                renderer: t.renderer,
                loop: T,
                autoplay: _,
                animationData: i,
                assetsPath: t.assetsPath
            };
            es6(t.rendererSettings, {}) === !1 && (M.rendererSettings = t.rendererSettings),
            t.scale !== 1 && (M.rendererSettings = __spreadProps(__spreadValues({}, M.rendererSettings), {
                viewBoxOnly: !0
            })),
            s = Lottie.loadAnimation(M),
            setTimeout(()=>{
                _ = t.autoPlay,
                t.playOnHover ? s == null || s.pause() : _ ? s == null || s.play() : s == null || s.pause(),
                e("onAnimationLoaded")
            }
            , t.delay),
            s.setSpeed(t.speed),
            t.direction === "reverse" && s.setDirection(-1),
            t.direction === "normal" && s.setDirection(1),
            (t.pauseAnimation || t.playOnHover) && s.pause(),
            s.addEventListener("loopComplete", ()=>{
                t.direction === "alternate" && (s == null || s.stop(),
                a = a === -1 ? 1 : -1,
                s == null || s.setDirection(a),
                s == null || s.play()),
                e("onLoopComplete")
            }
            ),
            s.addEventListener("complete", ()=>{
                e("onComplete")
            }
            ),
            s.addEventListener("enterFrame", ()=>{
                e("onEnterFrame")
            }
            ),
            s.addEventListener("segmentStart", ()=>{
                e("onSegmentStart")
            }
            )
        }
          , l = computed(()=>{
            let _ = t.width
              , T = t.height;
            return typeof t.width == "number" && (_ = `${t.width}px`),
            typeof t.height == "number" && (T = `${t.height}px`),
            {
                "--lottie-animation-container-width": _,
                "--lottie-animation-container-height": T,
                "--lottie-animation-container-background-color": t.backgroundColor,
                "--lottie-animation-margin": t.noMargin ? "0" : "0 auto",
                "--lottie-animation-scale": t.scale != 1 ? t.scale : ""
            }
        }
        )
          , o = ()=>{
            s && t.pauseOnHover && s.pause(),
            s && t.playOnHover && s.play()
        }
          , f = ()=>{
            s && t.pauseOnHover && s.play(),
            s && t.playOnHover && s.pause()
        }
        ;
        return watch(()=>t.pauseAnimation, ()=>{
            if ((t.pauseOnHover || t.playOnHover) && t.pauseAnimation) {
                console.error("If you are using pauseAnimation prop for Vue3-Lottie, please remove the props pauseOnHover and playOnHover");
                return
            }
            s && (t.pauseAnimation ? s.pause() : s.play())
        }
        ),
        {
            lottieAnimationContainer: r,
            hoverEnded: f,
            hoverStarted: o,
            getCurrentStyle: l,
            play: ()=>{
                s && s.play()
            }
            ,
            pause: ()=>{
                s && s.pause()
            }
            ,
            stop: ()=>{
                s && s.stop()
            }
            ,
            destroy: ()=>{
                s && s.destroy()
            }
            ,
            setSpeed: (_=1)=>{
                if (_ <= 0)
                    throw new Error("Speed must be greater than 0");
                s && s.setSpeed(_)
            }
            ,
            setDirection: _=>{
                s && (_ === "forward" ? s.setDirection(1) : _ === "reverse" && s.setDirection(-1))
            }
            ,
            goToAndStop: (_,T=!0)=>{
                s && s.goToAndStop(_, T)
            }
            ,
            goToAndPlay: (_,T=!0)=>{
                s && s.goToAndPlay(_, T)
            }
            ,
            playSegments: (_,T=!1)=>{
                s && s.playSegments(_, T)
            }
            ,
            setSubFrame: (_=!0)=>{
                s && s.setSubframe(_)
            }
            ,
            getDuration: (_=!0)=>{
                if (s)
                    return s.getDuration(_)
            }
            ,
            updateDocumentData: (_,T=0)=>{
                s && s.renderer.elements[T].updateDocumentData(_)
            }
        }
    }
});
function _sfc_render(t, e, r, i, s, a) {
    return openBlock(),
    createElementBlock("div", {
        ref: "lottieAnimationContainer",
        class: "lottie-animation-container",
        style: normalizeStyle(t.getCurrentStyle),
        onMouseenter: e[0] || (e[0] = (...n)=>t.hoverStarted && t.hoverStarted(...n)),
        onMouseleave: e[1] || (e[1] = (...n)=>t.hoverEnded && t.hoverEnded(...n))
    }, null, 36)
}
var Vue3Lottie = _export_sfc(_sfc_main$3, [["render", _sfc_render]]);
const v$1 = "5.6.3"
  , fr$1 = 30
  , ip$1 = 0
  , op$1 = 120
  , w$1 = 300
  , h$1 = 180
  , nm$1 = "Certify"
  , ddd$1 = 0
  , assets$1 = [{
    id: "comp_0",
    layers: [{
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "tick/Approved Outlines",
        sr: 1,
        ks: {
            o: {
                a: 0,
                k: 100,
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 0,
                k: [148, 94, 0],
                ix: 2
            },
            a: {
                a: 0,
                k: [29, 21.5, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6
            }
        },
        ao: 0,
        hasMask: !0,
        masksProperties: [{
            inv: !1,
            mode: "a",
            pt: {
                a: 1,
                k: [{
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 22,
                    s: [{
                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        v: [[2.555, -.434], [-12.695, 26.856], [-1.954, 20.356], [1.046, 10.816]],
                        c: !0
                    }]
                }, {
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 28,
                    s: [{
                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        v: [[2.555, -.434], [-5.695, 43.856], [17.296, 44.856], [17.796, 21.816]],
                        c: !0
                    }]
                }, {
                    t: 35,
                    s: [{
                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        v: [[2.555, -.434], [-5.695, 43.856], [58.796, 42.856], [58.546, -.434]],
                        c: !0
                    }]
                }],
                ix: 1
            },
            o: {
                a: 0,
                k: 100,
                ix: 3
            },
            x: {
                a: 0,
                k: 0,
                ix: 4
            },
            nm: "Mask 1"
        }],
        shapes: [{
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[1.952, -1.586], [0, 0], [1.127, 1.349], [0, 0], [-1.932, 1.61], [-1.608, -1.932], [0, 0], [-1.366, 1.111], [0, 0], [-1.586, -1.952]],
                        o: [[0, 0], [-1.364, 1.109], [0, 0], [-1.613, -1.931], [1.931, -1.608], [0, 0], [1.126, 1.353], [0, 0], [1.952, -1.586], [1.587, 1.952]],
                        v: [[26.308, -10.801], [-9.564, 18.348], [-14.058, 17.915], [-26.943, 2.489], [-26.365, -3.925], [-19.956, -3.339], [-12.854, 5.19], [-8.358, 5.628], [20.563, -17.871], [26.969, -17.208]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [.9803921568627451, .9803921568627451, .9803921568627451, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [28.806, 19.707],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Group 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }, {
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[1.952, -1.586], [0, 0], [1.127, 1.349], [0, 0], [-1.932, 1.61], [-1.608, -1.932], [0, 0], [-1.366, 1.111], [0, 0], [-1.586, -1.952]],
                        o: [[0, 0], [-1.364, 1.109], [0, 0], [-1.613, -1.931], [1.931, -1.608], [0, 0], [1.126, 1.353], [0, 0], [1.952, -1.586], [1.587, 1.952]],
                        v: [[26.308, -10.801], [-9.564, 18.348], [-14.058, 17.915], [-26.943, 2.489], [-26.365, -3.925], [-19.956, -3.339], [-12.854, 5.19], [-8.358, 5.628], [20.563, -17.871], [26.969, -17.208]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "mm",
                mm: 4,
                nm: "Merge Paths 1",
                mn: "ADBE Vector Filter - Merge",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [.9490196078431372, .7803921568627451, .1803921568627451, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [28.806, 23.038],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Group 2",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 2,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 1836,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "circle/Approved Outlines",
        sr: 1,
        ks: {
            o: {
                a: 0,
                k: 100,
                ix: 11
            },
            r: {
                a: 1,
                k: [{
                    i: {
                        x: [.667],
                        y: [1]
                    },
                    o: {
                        x: [.333],
                        y: [0]
                    },
                    t: 0,
                    s: [-67]
                }, {
                    t: 61,
                    s: [0]
                }],
                ix: 10
            },
            p: {
                a: 0,
                k: [150, 90, 0],
                ix: 2
            },
            a: {
                a: 0,
                k: [61.5, 59, 0],
                ix: 1
            },
            s: {
                a: 1,
                k: [{
                    i: {
                        x: [.667, .667, .667],
                        y: [1, 1, 1]
                    },
                    o: {
                        x: [.333, .333, .333],
                        y: [0, 0, 0]
                    },
                    t: 0,
                    s: [0, 0, 100]
                }, {
                    t: 22,
                    s: [100, 100, 100]
                }],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[22.357, 0], [0, 22.357], [-22.356, 0], [0, -22.356]],
                        o: [[-22.356, 0], [0, -22.356], [22.357, 0], [0, 22.357]],
                        v: [[0, 40.557], [-40.558, -.001], [0, -40.557], [40.558, -.001]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ind: 1,
                ty: "sh",
                ix: 2,
                ks: {
                    a: 0,
                    k: {
                        i: [[24.837, 0], [0, -24.837], [-24.837, 0], [0, 24.838]],
                        o: [[-24.837, 0], [0, 24.838], [24.837, 0], [0, -24.837]],
                        v: [[0, -44.962], [-44.962, -.001], [0, 44.962], [44.962, -.001]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 2",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "mm",
                mm: 1,
                nm: "Merge Paths 1",
                mn: "ADBE Vector Filter - Merge",
                hd: !1
            }, {
                ty: "gr",
                it: [{
                    ty: "tr",
                    p: {
                        a: 0,
                        k: [0, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [0, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100],
                        ix: 3
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 6
                    },
                    o: {
                        a: 0,
                        k: 100,
                        ix: 7
                    },
                    sk: {
                        a: 0,
                        k: 0,
                        ix: 4
                    },
                    sa: {
                        a: 0,
                        k: 0,
                        ix: 5
                    },
                    nm: "Transform"
                }],
                nm: "Group 1",
                np: 0,
                cix: 2,
                bm: 0,
                ix: 4,
                mn: "ADBE Vector Group",
                hd: !1
            }, {
                ty: "mm",
                mm: 4,
                nm: "Merge Paths 2",
                mn: "ADBE Vector Filter - Merge",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [.9490196078431372, .7803921568627451, .1803921568627451, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [59.95, 59.608],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Group 1",
            np: 6,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }, {
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[21.529, 0], [0, 21.529], [-21.528, 0], [0, -21.528]],
                        o: [[-21.528, 0], [0, -21.528], [21.529, 0], [0, 21.529]],
                        v: [[0, 39.056], [-39.056, 0], [0, -39.055], [39.056, 0]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ind: 1,
                ty: "sh",
                ix: 2,
                ks: {
                    a: 0,
                    k: {
                        i: [[23.917, 0], [0, -23.917], [-23.917, 0], [0, 23.918]],
                        o: [[-23.917, 0], [0, 23.918], [23.917, 0], [0, -23.917]],
                        v: [[0, -43.297], [-43.297, 0], [0, 43.297], [43.297, 0]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 2",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "mm",
                mm: 1,
                nm: "Merge Paths 1",
                mn: "ADBE Vector Filter - Merge",
                hd: !1
            }, {
                ty: "mm",
                mm: 4,
                nm: "Merge Paths 2",
                mn: "ADBE Vector Filter - Merge",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [.9803921568627451, .9803921568627451, .9803921568627451, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [59.95, 59.608],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Group 2",
            np: 5,
            cix: 2,
            bm: 0,
            ix: 2,
            mn: "ADBE Vector Group",
            hd: !1
        }, {
            ty: "gr",
            it: [{
                ty: "gr",
                it: [{
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                        a: 0,
                        k: {
                            i: [[0, -22.356], [-22.356, 0], [0, 22.356], [22.357, 0]],
                            o: [[0, 22.356], [22.357, 0], [0, -22.356], [-22.356, 0]],
                            v: [[-40.558, 0], [0, 40.557], [40.558, 0], [0, -40.557]],
                            c: !0
                        },
                        ix: 2
                    },
                    nm: "Path 2",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1
                }, {
                    ty: "tr",
                    p: {
                        a: 0,
                        k: [0, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [0, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100],
                        ix: 3
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 6
                    },
                    o: {
                        a: 0,
                        k: 100,
                        ix: 7
                    },
                    sk: {
                        a: 0,
                        k: 0,
                        ix: 4
                    },
                    sa: {
                        a: 0,
                        k: 0,
                        ix: 5
                    },
                    nm: "Transform"
                }],
                nm: "Group 1",
                np: 1,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: !1
            }, {
                ty: "mm",
                mm: 4,
                nm: "Merge Paths 1",
                mn: "ADBE Vector Filter - Merge",
                hd: !1
            }, {
                ty: "gf",
                o: {
                    a: 0,
                    k: 100,
                    ix: 10
                },
                r: 1,
                bm: 0,
                g: {
                    p: 3,
                    k: {
                        a: 0,
                        k: [0, .965, .867, .443, .476, .965, .802, .376, 1, .965, .737, .31],
                        ix: 9
                    }
                },
                s: {
                    a: 0,
                    k: [.096, -42],
                    ix: 5
                },
                e: {
                    a: 0,
                    k: [1.168, 41.5],
                    ix: 6
                },
                t: 1,
                nm: "Gradient Fill 1",
                mn: "ADBE Vector Graphic - G-Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [59.95, 59.608],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Group 3",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 3,
            mn: "ADBE Vector Group",
            hd: !1
        }, {
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[1.022, -.335], [0, 0], [2.015, .649], [0, 0], [2.557, -3.514], [0, 0], [2.007, -.658], [0, 0], [0, -4.346], [0, 0], [1.24, -1.716], [0, 0], [-2.556, -3.505], [0, 0], [0, -2.123], [0, 0], [-4.13, -1.339], [0, 0], [-1.249, -1.716], [0, 0], [-4.13, 1.339], [0, 0], [-2.015, -.659], [0, 0], [-2.548, 3.513], [0, 0], [-2.015, .658], [0, 0], [.009, 4.346], [0, 0], [-1.241, 1.706], [0, 0], [2.555, 3.514], [0, 0], [0, 2.115], [0, 0], [4.13, 1.332], [0, 0], [1.249, 1.706], [0, 0], [3.142, 0]],
                        o: [[0, 0], [-2.006, .658], [0, 0], [-4.13, -1.34], [0, 0], [-1.24, 1.715], [0, 0], [-4.121, 1.34], [0, 0], [0, 2.115], [0, 0], [-2.556, 3.514], [0, 0], [1.248, 1.716], [0, 0], [.009, 4.346], [0, 0], [2.015, .649], [0, 0], [2.556, 3.513], [0, 0], [2.015, -.65], [0, 0], [4.131, 1.341], [0, 0], [1.249, -1.715], [0, 0], [4.13, -1.349], [0, 0], [0, -2.115], [0, 0], [2.548, -3.513], [0, 0], [-1.249, -1.707], [0, 0], [0, -4.347], [0, 0], [-2.015, -.658], [0, 0], [-1.922, -2.642], [-1.036, 0]],
                        v: [[11.768, -82.794], [2.442, -79.764], [-3.753, -79.755], [-13.07, -82.778], [-24.277, -79.131], [-30.031, -71.204], [-35.035, -67.557], [-44.361, -64.518], [-51.28, -54.984], [-51.271, -45.184], [-53.178, -39.289], [-58.932, -31.362], [-58.924, -19.581], [-53.161, -11.654], [-51.246, -5.759], [-51.238, 4.033], [-44.302, 13.566], [-34.984, 16.589], [-29.964, 20.228], [-24.202, 28.147], [-12.995, 31.786], [-3.678, 28.746], [2.518, 28.746], [11.842, 31.768], [23.042, 28.121], [28.795, 20.186], [33.808, 16.539], [43.125, 13.508], [50.044, 3.967], [50.036, -5.834], [51.951, -11.72], [57.704, -19.656], [57.697, -31.438], [51.935, -39.364], [50.011, -45.251], [50.003, -55.051], [43.075, -64.576], [33.749, -67.599], [28.737, -71.237], [22.975, -79.164], [14.873, -83.29]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 2",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "mm",
                mm: 1,
                nm: "Merge Paths 1",
                mn: "ADBE Vector Filter - Merge",
                hd: !1
            }, {
                ty: "gf",
                o: {
                    a: 0,
                    k: 100,
                    ix: 10
                },
                r: 1,
                bm: 0,
                g: {
                    p: 3,
                    k: {
                        a: 0,
                        k: [0, .965, .867, .443, .476, .965, .802, .376, 1, .965, .737, .31],
                        ix: 9
                    }
                },
                s: {
                    a: 0,
                    k: [-2.404, -76.5],
                    ix: 5
                },
                e: {
                    a: 0,
                    k: [-.832, 24.5],
                    ix: 6
                },
                t: 1,
                nm: "Gradient Fill 1",
                mn: "ADBE Vector Graphic - G-Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [61.738, 84.368],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Group 4",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 4,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 1836,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 6,
        ty: 4,
        nm: "flag/Approved Outlines",
        sr: 1,
        ks: {
            o: {
                a: 0,
                k: 100,
                ix: 11
            },
            r: {
                a: 1,
                k: [{
                    i: {
                        x: [.667],
                        y: [1]
                    },
                    o: {
                        x: [.333],
                        y: [0]
                    },
                    t: 21,
                    s: [14]
                }, {
                    t: 34,
                    s: [0]
                }],
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 21,
                    s: [150, 106, 0],
                    to: [0, 9, 0],
                    ti: [0, -9, 0]
                }, {
                    t: 34,
                    s: [150, 160, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [26.5, 31.5, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6
            }
        },
        ao: 0,
        ef: [{
            ty: 5,
            nm: "CC Bend It",
            np: 7,
            mn: "CC Bend It",
            ix: 1,
            en: 1,
            ef: [{
                ty: 0,
                nm: "Bend",
                mn: "CC Bend It-0001",
                ix: 1,
                v: {
                    a: 1,
                    k: [{
                        i: {
                            x: [.667],
                            y: [.687]
                        },
                        o: {
                            x: [.333],
                            y: [0]
                        },
                        t: 23,
                        s: [-32]
                    }, {
                        i: {
                            x: [.667],
                            y: [1]
                        },
                        o: {
                            x: [.333],
                            y: [-1.681]
                        },
                        t: 42,
                        s: [6.845]
                    }, {
                        t: 60,
                        s: [0]
                    }],
                    ix: 1
                }
            }, {
                ty: 3,
                nm: "Start",
                mn: "CC Bend It-0002",
                ix: 2,
                v: {
                    a: 0,
                    k: [149, 140],
                    ix: 2
                }
            }, {
                ty: 3,
                nm: "End",
                mn: "CC Bend It-0003",
                ix: 3,
                v: {
                    a: 0,
                    k: [150, 60],
                    ix: 3
                }
            }, {
                ty: 7,
                nm: "Render Prestart",
                mn: "CC Bend It-0004",
                ix: 4,
                v: {
                    a: 0,
                    k: 3,
                    ix: 4
                }
            }, {
                ty: 7,
                nm: "Distort",
                mn: "CC Bend It-0005",
                ix: 5,
                v: {
                    a: 0,
                    k: 1,
                    ix: 5
                }
            }]
        }],
        shapes: [{
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                        o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                        v: [[10.073, -25.479], [10.073, 25.479], [0, 18.652], [-10.073, 25.479], [-10.073, -25.479]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [.9372549019607843, .43529411764705883, .45098039215686275, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [26.062, 25.729],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }, {
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        v: [[7.87, -30.807], [7.87, 20.15], [-7.87, 30.807], [-7.87, -30.807]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [.9333333333333333, .11372549019607843, .13725490196078433, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [8.119, 31.058],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Group 2",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 2,
            mn: "ADBE Vector Group",
            hd: !1
        }, {
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        v: [[7.869, -30.807], [7.869, 30.807], [-7.869, 20.15], [-7.869, -30.807]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [.9333333333333333, .11372549019607843, .13725490196078433, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [44.004, 31.058],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Group 3",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 3,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 21,
        op: 1840,
        st: 4,
        bm: 0
    }]
}, {
    id: "comp_1",
    layers: [{
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "hong 2",
        sr: 1,
        ks: {
            o: {
                a: 1,
                k: [{
                    i: {
                        x: [.833],
                        y: [.833]
                    },
                    o: {
                        x: [.167],
                        y: [.167]
                    },
                    t: 32.5,
                    s: [100]
                }, {
                    t: 37.5,
                    s: [0]
                }],
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .833,
                        y: .968
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 0,
                    s: [-13.25, 74.406, 0],
                    to: [0, 0, 0],
                    ti: [-90.5, -10.844, 0]
                }, {
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .167,
                        y: .538
                    },
                    t: 8.5,
                    s: [249.25, 15.656, 0],
                    to: [41.25, 8.594, 0],
                    ti: [25.5, -20.781, 0]
                }, {
                    t: 59.5,
                    s: [248.25, 92.281, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [154.25, -31.594, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        v: [[150.969, -34.875], [150.375, -29.531], [157.906, -28.313], [158.125, -33.594]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [.980392156863, .462745098039, .592156862745, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Shape 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "vang cam 4",
        sr: 1,
        ks: {
            o: {
                a: 1,
                k: [{
                    i: {
                        x: [.833],
                        y: [.833]
                    },
                    o: {
                        x: [.167],
                        y: [.167]
                    },
                    t: 22.5,
                    s: [100]
                }, {
                    t: 27.5,
                    s: [0]
                }],
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .833,
                        y: .966
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 0,
                    s: [-18.516, 80.75, 0],
                    to: [0, 0, 0],
                    ti: [-60.391, 3.125, 0]
                }, {
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .167,
                        y: .476
                    },
                    t: 8.5,
                    s: [176.734, 27.625, 0],
                    to: [27.353, 14.741, 0],
                    ti: [0, 0, 0]
                }, {
                    t: 59.5,
                    s: [141.484, 96.875, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [124.234, 13.875, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        v: [[123.375, 6.5], [116.469, 17.5], [125.25, 21.25], [132, 10.375]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [1, .737254901961, .121568627451, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Shape 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "xanh min 4",
        sr: 1,
        ks: {
            o: {
                a: 1,
                k: [{
                    i: {
                        x: [.833],
                        y: [.833]
                    },
                    o: {
                        x: [.167],
                        y: [.167]
                    },
                    t: 35,
                    s: [100]
                }, {
                    t: 40,
                    s: [0]
                }],
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .833,
                        y: .967
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 0,
                    s: [-17.578, 80.859, 0],
                    to: [79.328, -39.859, 0],
                    ti: [-39.453, -1.391, 0]
                }, {
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .167,
                        y: .529
                    },
                    t: 8.5,
                    s: [220.797, 12.859, 0],
                    to: [50.953, 12.641, 0],
                    ti: [0, 0, 0]
                }, {
                    t: 59.5,
                    s: [254.922, 87.484, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [75.922, 18.484, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[.781, 3.063], [1.313, -1.25], [-2.563, -.406], [-1.156, 1.094]],
                        o: [[-1.313, 1.344], [.469, 2.656], [1.469, -1.188], [-2.844, -.875]],
                        v: [[75.156, 13.406], [70.594, 18], [76.719, 23.563], [81.25, 19.281]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [.188235294118, .839215686275, .686274509804, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Shape 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 4,
        ty: 4,
        nm: "xanh duong 2",
        sr: 1,
        ks: {
            o: {
                a: 1,
                k: [{
                    i: {
                        x: [.833],
                        y: [.833]
                    },
                    o: {
                        x: [.167],
                        y: [.167]
                    },
                    t: 24,
                    s: [100]
                }, {
                    t: 29,
                    s: [0]
                }],
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .833,
                        y: .963
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 0,
                    s: [-19.734, 84.563, 0],
                    to: [12.792, -17.146, 0],
                    ti: [-46.484, -8.813, 0]
                }, {
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .167,
                        y: .392
                    },
                    t: 8.5,
                    s: [125.516, 37.688, 0],
                    to: [20.967, 15.863, 0],
                    ti: [24.167, -7.917, 0]
                }, {
                    t: 59.5,
                    s: [69.266, 92.938, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [20.266, 28.938, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        v: [[21.969, 23.219], [14.594, 29.781], [18.563, 34.656], [25.938, 28.25]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [.247058823529, .403921568627, .949019607843, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Shape 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "do cam 2",
        sr: 1,
        ks: {
            o: {
                a: 1,
                k: [{
                    i: {
                        x: [.833],
                        y: [.833]
                    },
                    o: {
                        x: [.167],
                        y: [.167]
                    },
                    t: 20,
                    s: [100]
                }, {
                    t: 25,
                    s: [0]
                }],
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .833,
                        y: .968
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 0,
                    s: [-17.078, 79.531, 0],
                    to: [0, 0, 0],
                    ti: [-87.328, -22.969, 0]
                }, {
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .167,
                        y: .569
                    },
                    t: 8.5,
                    s: [218.672, 29.031, 0],
                    to: [-2.672, 43.719, 0],
                    ti: [0, 0, 0]
                }, {
                    t: 59.5,
                    s: [176.172, 95.906, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [-167.828, 29.156, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[0, 3.344], [1.875, -1.844], [-3.781, -.125], [-1.875, 2]],
                        o: [[-1.625, 1.625], [.094, 2.531], [1.688, -1.656], [-3.906, .844]],
                        v: [[-167.875, 23.719], [-173.906, 29.563], [-167.875, 34.594], [-161.75, 28.25]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [1, .505882352941, .392156862745, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Shape 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 6,
        ty: 4,
        nm: "vang cam 3",
        sr: 1,
        ks: {
            o: {
                a: 1,
                k: [{
                    i: {
                        x: [.833],
                        y: [.833]
                    },
                    o: {
                        x: [.167],
                        y: [.167]
                    },
                    t: 25,
                    s: [100]
                }, {
                    t: 30,
                    s: [0]
                }],
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .833,
                        y: .972
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 0,
                    s: [-19.391, 83.426, 0],
                    to: [0, 0, 0],
                    ti: [-108.391, -17.199, 0]
                }, {
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .167,
                        y: .899
                    },
                    t: 8.5,
                    s: [255.859, 43.301, 0],
                    to: [20.641, 12.949, 0],
                    ti: [0, 0, 0]
                }, {
                    t: 59.5,
                    s: [277.359, 89.676, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [-120.641, -26.949, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[2.063, 1.5], [.688, -1.344], [-2.688, .719], [-.031, 1.688]],
                        o: [[-.719, 1.406], [2, 2.219], [.031, -1.5], [-2.375, .313]],
                        v: [[-123.156, -30.281], [-125.344, -26.156], [-116.063, -23.875], [-115.938, -28.563]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [1, .737254901961, .121568627451, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Shape 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 7,
        ty: 4,
        nm: "xanh min 3",
        sr: 1,
        ks: {
            o: {
                a: 1,
                k: [{
                    i: {
                        x: [.833],
                        y: [.833]
                    },
                    o: {
                        x: [.167],
                        y: [.167]
                    },
                    t: 32.5,
                    s: [100]
                }, {
                    t: 37.5,
                    s: [0]
                }],
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .833,
                        y: .967
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 0,
                    s: [-13.797, 79.641, 0],
                    to: [0, 0, 0],
                    ti: [-72.672, 1.766, 0]
                }, {
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .167,
                        y: .533
                    },
                    t: 8.5,
                    s: [198.703, 15.141, 0],
                    to: [10.672, 43.234, 0],
                    ti: [0, 0, 0]
                }, {
                    t: 59.5,
                    s: [181.203, 92.141, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [-179.781, -30.328, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        v: [[-180.016, -34.984], [-183.828, -31.438], [-179.547, -25.672], [-175.734, -29.141]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [.1882353127, .839215755463, .686274528503, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Shape 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 8,
        ty: 4,
        nm: "dot 4",
        sr: 1,
        ks: {
            o: {
                a: 0,
                k: 100,
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 15,
                    s: [242.625, -5.875, 0],
                    to: [0, 0, 0],
                    ti: [99.5, -8, 0]
                }, {
                    t: 42.5,
                    s: [95, 90.25, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [168.625, -49.375, 0],
                ix: 1
            },
            s: {
                a: 1,
                k: [{
                    i: {
                        x: [.833, .833, .833],
                        y: [.833, .833, .833]
                    },
                    o: {
                        x: [.167, .167, .167],
                        y: [.167, .167, .167]
                    },
                    t: 15,
                    s: [0, 0, 100]
                }, {
                    i: {
                        x: [.833, .833, .833],
                        y: [.833, .833, .833]
                    },
                    o: {
                        x: [.167, .167, .167],
                        y: [.167, .167, .167]
                    },
                    t: 21.5,
                    s: [150, 150, 100]
                }, {
                    i: {
                        x: [.833, .833, .833],
                        y: [.833, .833, .833]
                    },
                    o: {
                        x: [.167, .167, .167],
                        y: [.167, .167, .167]
                    },
                    t: 31.5,
                    s: [150, 150, 100]
                }, {
                    t: 35,
                    s: [0, 0, 100]
                }],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                d: 1,
                ty: "el",
                s: {
                    a: 0,
                    k: [3.5, 3.5],
                    ix: 2
                },
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 3
                },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: !1
            }, {
                ty: "st",
                c: {
                    a: 0,
                    k: [.492810417624, 1, .683752441406, 1],
                    ix: 3
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 4
                },
                w: {
                    a: 0,
                    k: 1.5,
                    ix: 5
                },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [168.625, -49.375],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 9,
        ty: 4,
        nm: "dot 3",
        sr: 1,
        ks: {
            o: {
                a: 0,
                k: 100,
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 5,
                    s: [278.125, -6.375, 0],
                    to: [0, 0, 0],
                    ti: [82.5, -15.5, 0]
                }, {
                    t: 41.5,
                    s: [163.75, 93, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [168.625, -49.375, 0],
                ix: 1
            },
            s: {
                a: 1,
                k: [{
                    i: {
                        x: [.833, .833, .833],
                        y: [.833, .833, .833]
                    },
                    o: {
                        x: [.167, .167, .167],
                        y: [.167, .167, .167]
                    },
                    t: 8,
                    s: [0, 0, 100]
                }, {
                    i: {
                        x: [.833, .833, .833],
                        y: [.833, .833, .833]
                    },
                    o: {
                        x: [.167, .167, .167],
                        y: [.167, .167, .167]
                    },
                    t: 14.5,
                    s: [100, 100, 100]
                }, {
                    i: {
                        x: [.833, .833, .833],
                        y: [.833, .833, .833]
                    },
                    o: {
                        x: [.167, .167, .167],
                        y: [.167, .167, .167]
                    },
                    t: 27.5,
                    s: [100, 100, 100]
                }, {
                    t: 31,
                    s: [0, 0, 100]
                }],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                d: 1,
                ty: "el",
                s: {
                    a: 0,
                    k: [2.75, 2.75],
                    ix: 2
                },
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 3
                },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [.208615546133, .408031089633, .979085047105, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [168.625, -49.375],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 10,
        ty: 4,
        nm: "dot 2",
        sr: 1,
        ks: {
            o: {
                a: 0,
                k: 100,
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 12.5,
                    s: [320.625, -2.875, 0],
                    to: [0, 0, 0],
                    ti: [50.25, -13.5, 0]
                }, {
                    t: 40,
                    s: [231.75, 93.5, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [168.625, -49.375, 0],
                ix: 1
            },
            s: {
                a: 1,
                k: [{
                    i: {
                        x: [.833, .833, .833],
                        y: [.833, .833, .833]
                    },
                    o: {
                        x: [.167, .167, .167],
                        y: [.167, .167, .167]
                    },
                    t: 12,
                    s: [0, 0, 100]
                }, {
                    i: {
                        x: [.833, .833, .833],
                        y: [.833, .833, .833]
                    },
                    o: {
                        x: [.167, .167, .167],
                        y: [.167, .167, .167]
                    },
                    t: 18.5,
                    s: [100, 100, 100]
                }, {
                    i: {
                        x: [.833, .833, .833],
                        y: [.833, .833, .833]
                    },
                    o: {
                        x: [.167, .167, .167],
                        y: [.167, .167, .167]
                    },
                    t: 29,
                    s: [100, 100, 100]
                }, {
                    t: 32.5,
                    s: [0, 0, 100]
                }],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                d: 1,
                ty: "el",
                s: {
                    a: 0,
                    k: [3.5, 3.5],
                    ix: 2
                },
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 3
                },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: !1
            }, {
                ty: "st",
                c: {
                    a: 0,
                    k: [.492810417624, .862760356828, 1, 1],
                    ix: 3
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 4
                },
                w: {
                    a: 0,
                    k: 1.5,
                    ix: 5
                },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [168.625, -49.375],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 11,
        ty: 4,
        nm: "dot",
        sr: 1,
        ks: {
            o: {
                a: 0,
                k: 100,
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 8.5,
                    s: [356.125, -7.375, 0],
                    to: [0, 0, 0],
                    ti: [50.25, -13.5, 0]
                }, {
                    t: 45,
                    s: [267.25, 89, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [168.625, -49.375, 0],
                ix: 1
            },
            s: {
                a: 1,
                k: [{
                    i: {
                        x: [.833, .833, .833],
                        y: [.833, .833, .833]
                    },
                    o: {
                        x: [.167, .167, .167],
                        y: [.167, .167, .167]
                    },
                    t: 12,
                    s: [0, 0, 100]
                }, {
                    i: {
                        x: [.833, .833, .833],
                        y: [.833, .833, .833]
                    },
                    o: {
                        x: [.167, .167, .167],
                        y: [.167, .167, .167]
                    },
                    t: 18.5,
                    s: [100, 100, 100]
                }, {
                    i: {
                        x: [.833, .833, .833],
                        y: [.833, .833, .833]
                    },
                    o: {
                        x: [.167, .167, .167],
                        y: [.167, .167, .167]
                    },
                    t: 34,
                    s: [100, 100, 100]
                }, {
                    t: 37.5,
                    s: [0, 0, 100]
                }],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                d: 1,
                ty: "el",
                s: {
                    a: 0,
                    k: [2.75, 2.75],
                    ix: 2
                },
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 3
                },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [.980392156863, .462745098039, .592156862745, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [168.625, -49.375],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 12,
        ty: 4,
        nm: "hong",
        sr: 1,
        ks: {
            o: {
                a: 1,
                k: [{
                    i: {
                        x: [.833],
                        y: [.833]
                    },
                    o: {
                        x: [.167],
                        y: [.167]
                    },
                    t: 37.5,
                    s: [100]
                }, {
                    t: 42.5,
                    s: [0]
                }],
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .833,
                        y: .964
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 0,
                    s: [389, 75.656, 0],
                    to: [0, 0, 0],
                    ti: [73, -4.094, 0]
                }, {
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .167,
                        y: .432
                    },
                    t: 8.5,
                    s: [111.25, 12.906, 0],
                    to: [-40.25, 37.094, 0],
                    ti: [44.75, .219, 0]
                }, {
                    t: 59.5,
                    s: [-14.25, 69.031, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [154.25, -31.594, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        v: [[150.969, -34.875], [150.375, -29.531], [157.906, -28.313], [158.125, -33.594]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [.980392156863, .462745098039, .592156862745, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Shape 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 13,
        ty: 4,
        nm: "vang cam 2",
        sr: 1,
        ks: {
            o: {
                a: 1,
                k: [{
                    i: {
                        x: [.833],
                        y: [.833]
                    },
                    o: {
                        x: [.167],
                        y: [.167]
                    },
                    t: 22.5,
                    s: [100]
                }, {
                    t: 27.5,
                    s: [0]
                }],
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .833,
                        y: .965
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 0,
                    s: [385.234, 74.75, 0],
                    to: [0, 0, 0],
                    ti: [52.359, -8.125, 0]
                }, {
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .167,
                        y: .438
                    },
                    t: 8.5,
                    s: [146.734, 32.125, 0],
                    to: [-32.147, 42.741, 0],
                    ti: [0, 0, 0]
                }, {
                    t: 59.5,
                    s: [49.734, 96.125, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [124.234, 13.875, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        v: [[123.375, 6.5], [116.469, 17.5], [125.25, 21.25], [132, 10.375]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [1, .737254901961, .121568627451, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Shape 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 14,
        ty: 4,
        nm: "xanh min 2",
        sr: 1,
        ks: {
            o: {
                a: 1,
                k: [{
                    i: {
                        x: [.833],
                        y: [.833]
                    },
                    o: {
                        x: [.167],
                        y: [.167]
                    },
                    t: 35,
                    s: [100]
                }, {
                    t: 40,
                    s: [0]
                }],
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .833,
                        y: .963
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 0,
                    s: [387.422, 69.109, 0],
                    to: [-28.922, -20.109, 0],
                    ti: [63.797, -2.141, 0]
                }, {
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .167,
                        y: .407
                    },
                    t: 8.5,
                    s: [145.047, 9.109, 0],
                    to: [-22.047, 43.141, 0],
                    ti: [0, 0, 0]
                }, {
                    t: 59.5,
                    s: [38.922, 90.734, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [75.922, 18.484, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[.781, 3.063], [1.313, -1.25], [-2.563, -.406], [-1.156, 1.094]],
                        o: [[-1.313, 1.344], [.469, 2.656], [1.469, -1.188], [-2.844, -.875]],
                        v: [[75.156, 13.406], [70.594, 18], [76.719, 23.563], [81.25, 19.281]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [.188235294118, .839215686275, .686274509804, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Shape 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 15,
        ty: 4,
        nm: "xanh duong",
        sr: 1,
        ks: {
            o: {
                a: 1,
                k: [{
                    i: {
                        x: [.833],
                        y: [.833]
                    },
                    o: {
                        x: [.167],
                        y: [.167]
                    },
                    t: 24,
                    s: [100]
                }, {
                    t: 29,
                    s: [0]
                }],
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .833,
                        y: .959
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 0,
                    s: [386.016, 70.063, 0],
                    to: [-25.208, -13.896, 0],
                    ti: [82.766, -3.563, 0]
                }, {
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .167,
                        y: .34
                    },
                    t: 8.5,
                    s: [194.516, 33.938, 0],
                    to: [-58.533, 38.863, 0],
                    ti: [41.167, -6.167, 0]
                }, {
                    t: 59.5,
                    s: [67.266, 95.688, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [20.266, 28.938, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        v: [[21.969, 23.219], [14.594, 29.781], [18.563, 34.656], [25.938, 28.25]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [.247058823529, .403921568627, .949019607843, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Shape 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 16,
        ty: 4,
        nm: "do cam",
        sr: 1,
        ks: {
            o: {
                a: 1,
                k: [{
                    i: {
                        x: [.833],
                        y: [.833]
                    },
                    o: {
                        x: [.167],
                        y: [.167]
                    },
                    t: 20,
                    s: [100]
                }, {
                    t: 25,
                    s: [0]
                }],
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .833,
                        y: .946
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 0,
                    s: [385.922, 75.281, 0],
                    to: [0, 0, 0],
                    ti: [40.422, 1.531, 0]
                }, {
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .167,
                        y: .254
                    },
                    t: 8.5,
                    s: [271.922, 54.781, 0],
                    to: [-71.922, 32.469, 0],
                    ti: [0, 0, 0]
                }, {
                    t: 59.5,
                    s: [128.922, 93.156, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [-167.828, 29.156, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[0, 3.344], [1.875, -1.844], [-3.781, -.125], [-1.875, 2]],
                        o: [[-1.625, 1.625], [.094, 2.531], [1.688, -1.656], [-3.906, .844]],
                        v: [[-167.875, 23.719], [-173.906, 29.563], [-167.875, 34.594], [-161.75, 28.25]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [1, .505882352941, .392156862745, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Shape 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 17,
        ty: 4,
        nm: "vang cam",
        sr: 1,
        ks: {
            o: {
                a: 1,
                k: [{
                    i: {
                        x: [.833],
                        y: [.833]
                    },
                    o: {
                        x: [.167],
                        y: [.167]
                    },
                    t: 25,
                    s: [100]
                }, {
                    t: 30,
                    s: [0]
                }],
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .833,
                        y: .941
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 0,
                    s: [384.859, 77.176, 0],
                    to: [0, 0, 0],
                    ti: [52.859, -3.699, 0]
                }, {
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .167,
                        y: .241
                    },
                    t: 8.5,
                    s: [255.859, 43.301, 0],
                    to: [-79.359, 38.449, 0],
                    ti: [0, 0, 0]
                }, {
                    t: 59.5,
                    s: [66.859, 95.676, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [-120.641, -26.949, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[2.063, 1.5], [.688, -1.344], [-2.688, .719], [-.031, 1.688]],
                        o: [[-.719, 1.406], [2, 2.219], [.031, -1.5], [-2.375, .313]],
                        v: [[-123.156, -30.281], [-125.344, -26.156], [-116.063, -23.875], [-115.938, -28.563]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [1, .737254901961, .121568627451, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Shape 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }, {
        ddd: 0,
        ind: 18,
        ty: 4,
        nm: "xanh min",
        sr: 1,
        ks: {
            o: {
                a: 1,
                k: [{
                    i: {
                        x: [.833],
                        y: [.833]
                    },
                    o: {
                        x: [.167],
                        y: [.167]
                    },
                    t: 34,
                    s: [100]
                }, {
                    t: 39,
                    s: [0]
                }],
                ix: 11
            },
            r: {
                a: 0,
                k: 0,
                ix: 10
            },
            p: {
                a: 1,
                k: [{
                    i: {
                        x: .833,
                        y: .927
                    },
                    o: {
                        x: .333,
                        y: 0
                    },
                    t: 0,
                    s: [387.203, 76.391, 0],
                    to: [0, 0, 0],
                    ti: [32.578, 13.266, 0]
                }, {
                    i: {
                        x: .667,
                        y: 1
                    },
                    o: {
                        x: .167,
                        y: .212
                    },
                    t: 8.5,
                    s: [288.953, 23.141, 0],
                    to: [-120.328, 57.484, 0],
                    ti: [0, 0, 0]
                }, {
                    t: 59.5,
                    s: [68.203, 87.641, 0]
                }],
                ix: 2
            },
            a: {
                a: 0,
                k: [-179.781, -30.328, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6
            }
        },
        ao: 0,
        shapes: [{
            ty: "gr",
            it: [{
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                        v: [[-180.016, -34.984], [-183.828, -31.438], [-179.547, -25.672], [-175.734, -29.141]],
                        c: !0
                    },
                    ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: !1
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [.1882353127, .839215755463, .686274528503, 1],
                    ix: 4
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 5
                },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: !1
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [0, 0],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [0, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            }],
            nm: "Shape 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: !1
        }],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0
    }]
}]
  , layers$1 = [{
    ddd: 0,
    ind: 1,
    ty: 0,
    nm: "tickmedal",
    refId: "comp_0",
    sr: 1,
    ks: {
        o: {
            a: 0,
            k: 100,
            ix: 11
        },
        r: {
            a: 0,
            k: 0,
            ix: 10
        },
        p: {
            a: 0,
            k: [150, 100, 0],
            ix: 2
        },
        a: {
            a: 0,
            k: [150, 120, 0],
            ix: 1
        },
        s: {
            a: 0,
            k: [91, 91, 100],
            ix: 6
        }
    },
    ao: 0,
    w: 300,
    h: 240,
    ip: 0,
    op: 1840,
    st: 0,
    bm: 0
}, {
    ddd: 0,
    ind: 2,
    ty: 0,
    nm: "Comp 3",
    refId: "comp_1",
    sr: 1.49,
    ks: {
        o: {
            a: 1,
            k: [{
                i: {
                    x: [.833],
                    y: [.833]
                },
                o: {
                    x: [.167],
                    y: [.167]
                },
                t: 9,
                s: [0]
            }, {
                t: 20.0003564357758,
                s: [100]
            }],
            ix: 11
        },
        r: {
            a: 0,
            k: 0,
            ix: 10
        },
        p: {
            a: 1,
            k: [{
                i: {
                    x: .667,
                    y: 1
                },
                o: {
                    x: .333,
                    y: 0
                },
                t: 4,
                s: [150, 46, 0],
                to: [0, 14.5, 0],
                ti: [0, -16.167, 0]
            }, {
                i: {
                    x: .667,
                    y: 1
                },
                o: {
                    x: .333,
                    y: 0
                },
                t: 38,
                s: [150, 133, 0],
                to: [0, 16.167, 0],
                ti: [0, -1.667, 0]
            }, {
                t: 81.0004448890686,
                s: [150, 143, 0]
            }],
            ix: 2
        },
        a: {
            a: 0,
            k: [187.5, 42, 0],
            ix: 1
        },
        s: {
            a: 0,
            k: [81, 81, 100],
            ix: 6
        }
    },
    ao: 0,
    w: 375,
    h: 84,
    ip: 1.001001001001,
    op: 90.401001001001,
    st: 1.001001001001,
    bm: 0
}, {
    ddd: 0,
    ind: 4,
    ty: 4,
    nm: "BG design Outlines",
    sr: 1,
    ks: {
        o: {
            a: 1,
            k: [{
                i: {
                    x: [.667],
                    y: [1]
                },
                o: {
                    x: [.333],
                    y: [0]
                },
                t: 33,
                s: [0]
            }, {
                t: 44,
                s: [100]
            }],
            ix: 11
        },
        r: {
            a: 1,
            k: [{
                i: {
                    x: [.667],
                    y: [1]
                },
                o: {
                    x: [.333],
                    y: [0]
                },
                t: 33,
                s: [-30]
            }, {
                t: 67,
                s: [0]
            }],
            ix: 10
        },
        p: {
            a: 0,
            k: [150, 89, 0],
            ix: 2
        },
        a: {
            a: 0,
            k: [150, 150, 0],
            ix: 1
        },
        s: {
            a: 1,
            k: [{
                i: {
                    x: [.667, .667, .667],
                    y: [1, 1, 1]
                },
                o: {
                    x: [.333, .333, .333],
                    y: [0, 0, 0]
                },
                t: 33,
                s: [43, 43, 100]
            }, {
                t: 68,
                s: [92, 92, 100]
            }],
            ix: 6
        }
    },
    ao: 0,
    shapes: [{
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[-.715, -4.038], [-1.797, 1.285], [3.693, -.161]],
                    o: [[1.047, 5.917], [2.737, -1.959], [-2.041, .089]],
                    v: [[-5.816, -.054], [3.794, 7.734], [-2.427, -8.858]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [.987999949736, .952999997606, .855000035903, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [68.604, 164.415],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 1",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
    }, {
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[0, -1.657], [1.657, 0], [0, 1.657], [-1.657, 0]],
                    o: [[0, 1.657], [-1.657, 0], [0, -1.657], [1.657, 0]],
                    v: [[3, 0], [0, 3], [-3, 0], [0, -3]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [.987999949736, .952999997606, .855000035903, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [197, 85],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 2",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 2,
        mn: "ADBE Vector Group",
        hd: !1
    }, {
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[0, -2.209], [2.209, 0], [0, 2.209], [-2.209, 0]],
                    o: [[0, 2.209], [-2.209, 0], [0, -2.209], [2.209, 0]],
                    v: [[4, 0], [0, 4], [-4, 0], [0, -4]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [.987999949736, .952999997606, .855000035903, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [64, 136],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 3",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 3,
        mn: "ADBE Vector Group",
        hd: !1
    }, {
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[0, -.829], [.829, 0], [0, .829], [-.829, 0]],
                    o: [[0, .829], [-.829, 0], [0, -.829], [.829, 0]],
                    v: [[1.5, 0], [0, 1.5], [-1.5, 0], [0, -1.5]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [.980000035903, .663000009574, .638999968884, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [64.5, 118.5],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 4",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 4,
        mn: "ADBE Vector Group",
        hd: !1
    }, {
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[0, -.552], [.553, 0], [0, .552], [-.553, 0]],
                    o: [[0, .552], [-.553, 0], [0, -.552], [.553, 0]],
                    v: [[1, 0], [0, 1], [-1, 0], [0, -1]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [.976000019148, .513999968884, .501999978458, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [242, 95],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 5",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 5,
        mn: "ADBE Vector Group",
        hd: !1
    }, {
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[0, -.829], [.828, 0], [0, .829], [-.828, 0]],
                    o: [[0, .829], [-.828, 0], [0, -.829], [.828, 0]],
                    v: [[1.5, 0], [0, 1.5], [-1.5, 0], [0, -1.5]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [.980000035903, .663000009574, .638999968884, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [188.5, 73.5],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 6",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 6,
        mn: "ADBE Vector Group",
        hd: !1
    }, {
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[0, -1.104], [1.104, 0], [0, 1.104], [-1.104, 0]],
                    o: [[0, 1.104], [-1.104, 0], [0, -1.104], [1.104, 0]],
                    v: [[2, 0], [0, 2], [-2, 0], [0, -2]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [.980000035903, .663000009574, .638999968884, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [236, 187],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 7",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 7,
        mn: "ADBE Vector Group",
        hd: !1
    }, {
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[0, -1.381], [1.381, 0], [0, 1.381], [-1.381, 0]],
                    o: [[0, 1.381], [-1.381, 0], [0, -1.381], [1.381, 0]],
                    v: [[2.5, 0], [0, 2.5], [-2.5, 0], [0, -2.5]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [.995999983245, .964999988032, .889999988032, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [50.5, 155.5],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 8",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 8,
        mn: "ADBE Vector Group",
        hd: !1
    }, {
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[0, -1.104], [1.104, 0], [0, 1.104], [-1.104, 0]],
                    o: [[0, 1.104], [-1.104, 0], [0, -1.104], [1.104, 0]],
                    v: [[2, 0], [0, 2], [-2, 0], [0, -2]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [.984000052658, .894000004787, .651000019148, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [82, 198],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 9",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 9,
        mn: "ADBE Vector Group",
        hd: !1
    }, {
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[0, -1.381], [1.381, 0], [0, 1.381], [-1.381, 0]],
                    o: [[0, 1.381], [-1.381, 0], [0, -1.381], [1.381, 0]],
                    v: [[2.5, 0], [0, 2.5], [-2.5, 0], [0, -2.5]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [.984000052658, .894000004787, .651000019148, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [73.5, 84.5],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 10",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 10,
        mn: "ADBE Vector Group",
        hd: !1
    }, {
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[1.655, -2.812], [-4.811, 1.6], [3.386, 5.098]],
                    o: [[-2.413, 4.099], [2.989, -.995], [-4.046, -6.091]],
                    v: [[-7.988, -6.924], [5.348, 8.915], [7.016, -4.424]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [.987999949736, .952999997606, .855000035903, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [209.92, 99.953],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 11",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 11,
        mn: "ADBE Vector Group",
        hd: !1
    }, {
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[33.219, 20.846], [1.14, 5.561], [-26.516, 16.534], [-16.323, -8.175], [-21.87, -19.115], [-2.536, -5.018], [33.186, -16.342]],
                    o: [[-24.882, -15.614], [-4.822, -23.525], [19.199, -11.972], [6.493, 3.252], [22.175, 19.382], [10.607, 20.992], [-1.975, .973]],
                    v: [[-42.893, 56.063], [-74.893, 9.063], [-47.893, -64.937], [12.107, -67.937], [42.107, -42.937], [69.107, -19.937], [28.107, 59.063]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [.987999949736, .933000033509, .788000009574, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [158.893, 148.937],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 12",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 12,
        mn: "ADBE Vector Group",
        hd: !1
    }, {
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[17.108, -28.349], [-1.255, -16.276], [-30.359, -12.515], [-40.252, 14.387], [-9.863, 8.197], [5.554, 14.06], [20.502, 15.043], [19.619, 11.335]],
                    o: [[-9.113, 15.1], [.915, 11.862], [12.774, 5.266], [21.994, -7.862], [12.211, -10.149], [-5.063, -12.818], [-25.038, -18.37], [-24.109, -13.928]],
                    v: [[-80.214, -44.293], [-86.889, 2.424], [-51.611, 78.698], [21.801, 62.49], [62.799, 46.282], [83.774, 2.424], [41.824, -20.458], [4.639, -70.036]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [.995999983245, .964999988032, .889999988032, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [162.067, 136.566],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 13",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 13,
        mn: "ADBE Vector Group",
        hd: !1
    }],
    ip: 29,
    op: 1869,
    st: 29,
    bm: 0
}]
  , markers$1 = []
  , congratulations = {
    v: v$1,
    fr: fr$1,
    ip: ip$1,
    op: op$1,
    w: w$1,
    h: h$1,
    nm: nm$1,
    ddd: ddd$1,
    assets: assets$1,
    layers: layers$1,
    markers: markers$1
}
  , cash = "/assets/cash-CzSpWDMr.mp3";
function useCountdown(t) {
    const e = shallowRef(t);
    let r = -1;
    function i() {
        clearInterval(r)
    }
    function s() {
        i(),
        nextTick(()=>e.value = t)
    }
    function a(n) {
        const l = n ? getComputedStyle(n) : {
            transitionDuration: .2
        }
          , o = parseFloat(l.transitionDuration) * 1e3 || 200;
        if (i(),
        e.value <= 0)
            return;
        const f = performance.now();
        r = window.setInterval(()=>{
            const y = performance.now() - f + o;
            e.value = Math.max(t - y, 0),
            e.value <= 0 && i()
        }
        , o)
    }
    return onScopeDispose(i),
    {
        clear: i,
        time: e,
        start: a,
        reset: s
    }
}
const makeVSnackbarProps = propsFactory({
    multiLine: Boolean,
    text: String,
    timer: [Boolean, String],
    timeout: {
        type: [Number, String],
        default: 5e3
    },
    vertical: Boolean,
    ...makeLocationProps({
        location: "bottom"
    }),
    ...makePositionProps(),
    ...makeRoundedProps(),
    ...makeVariantProps(),
    ...makeThemeProps(),
    ...omit(makeVOverlayProps({
        transition: "v-snackbar-transition"
    }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])
}, "VSnackbar")
  , VSnackbar = genericComponent()({
    name: "VSnackbar",
    props: makeVSnackbarProps(),
    emits: {
        "update:modelValue": t=>!0
    },
    setup(t, e) {
        let {slots: r} = e;
        const i = useProxiedModel(t, "modelValue")
          , {locationStyles: s} = useLocation(t)
          , {positionClasses: a} = usePosition(t)
          , {scopeId: n} = useScopeId()
          , {themeClasses: l} = provideTheme(t)
          , {colorClasses: o, colorStyles: f, variantClasses: y} = useVariant(t)
          , {roundedClasses: P} = useRounded(t)
          , u = useCountdown(Number(t.timeout))
          , b = ref()
          , x = ref()
          , d = shallowRef(!1);
        watch(i, c),
        watch(()=>t.timeout, c),
        onMounted(()=>{
            i.value && c()
        }
        );
        let C = -1;
        function c() {
            u.reset(),
            window.clearTimeout(C);
            const E = Number(t.timeout);
            if (!i.value || E === -1)
                return;
            const _ = refElement(x.value);
            u.start(_),
            C = window.setTimeout(()=>{
                i.value = !1
            }
            , E)
        }
        function m() {
            u.reset(),
            window.clearTimeout(C)
        }
        function p() {
            d.value = !0,
            m()
        }
        function g() {
            d.value = !1,
            c()
        }
        return useRender(()=>{
            const E = VOverlay.filterProps(t)
              , _ = !!(r.default || r.text || t.text);
            return createVNode(VOverlay, mergeProps({
                ref: b,
                class: ["v-snackbar", {
                    "v-snackbar--active": i.value,
                    "v-snackbar--multi-line": t.multiLine && !t.vertical,
                    "v-snackbar--timer": !!t.timer,
                    "v-snackbar--vertical": t.vertical
                }, a.value, t.class],
                style: t.style
            }, E, {
                modelValue: i.value,
                "onUpdate:modelValue": T=>i.value = T,
                contentProps: mergeProps({
                    class: ["v-snackbar__wrapper", l.value, o.value, P.value, y.value],
                    style: [s.value, f.value],
                    onPointerenter: p,
                    onPointerleave: g
                }, E.contentProps),
                persistent: !0,
                noClickAnimation: !0,
                scrim: !1,
                scrollStrategy: "none",
                _disableGlobalStack: !0
            }, n), {
                default: ()=>{
                    var T, M;
                    return [genOverlays(!1, "v-snackbar"), t.timer && !d.value && createVNode("div", {
                        key: "timer",
                        class: "v-snackbar__timer"
                    }, [createVNode(VProgressLinear, {
                        ref: x,
                        color: typeof t.timer == "string" ? t.timer : "info",
                        max: t.timeout,
                        "model-value": u.time.value
                    }, null)]), _ && createVNode("div", {
                        key: "content",
                        class: "v-snackbar__content",
                        role: "status",
                        "aria-live": "polite"
                    }, [((T = r.text) == null ? void 0 : T.call(r)) ?? t.text, (M = r.default) == null ? void 0 : M.call(r)]), r.actions && createVNode(VDefaultsProvider, {
                        defaults: {
                            VBtn: {
                                variant: "text",
                                ripple: !1,
                                slim: !0
                            }
                        }
                    }, {
                        default: ()=>[createVNode("div", {
                            class: "v-snackbar__actions"
                        }, [r.actions()])]
                    })]
                }
                ,
                activator: r.activator
            })
        }
        ),
        forwardRefs({}, b)
    }
})
  , _withScopeId$1 = t=>(pushScopeId("data-v-1a09b177"),
t = t(),
popScopeId(),
t)
  , _hoisted_1$1 = {
    class: "fade-avatar mr-3 rounded-circle"
}
  , _hoisted_2$1 = {
    class: "d-flex align-center",
    style: {
        "font-size": "0.9rem"
    }
}
  , _hoisted_3$1 = {
    class: "w-100 d-flex justify-end"
}
  , _hoisted_4$1 = ["src"]
  , _hoisted_5$1 = _withScopeId$1(()=>createBaseVNode("p", {
    class: "text-center pb-2"
}, "Você tem interesse nessa publicação?", -1))
  , _hoisted_6$1 = _withScopeId$1(()=>createBaseVNode("p", {
    class: "text-center font-weight-bold"
}, "PARABÉNS!", -1))
  , _hoisted_7$1 = _withScopeId$1(()=>createBaseVNode("p", {
    class: "text-center font-weight-bold mt-4"
}, "Você acaba de ganhar", -1))
  , _hoisted_8$1 = {
    class: "text-h4 text-center font-weight-bold",
    style: {
        color: "#4ade80"
    }
}
  , _hoisted_9$1 = _withScopeId$1(()=>createBaseVNode("p", {
    class: "text-center text-caption"
}, [createTextVNode("Assista um curto vídeo com o passo a passo para você aprender a cadastrar sua chave "), createBaseVNode("b", null, "PIX"), createTextVNode(" e realizar o seu primeiro "), createBaseVNode("b", null, "SAQUE.")], -1))
  , _hoisted_10$1 = {
    class: "d-flex align-center"
}
  , _hoisted_11$1 = _withScopeId$1(()=>createBaseVNode("p", null, "Você avaliou essa públicação e recebeu R$37,56 por isso", -1))
  , _sfc_main$2 = defineComponent({
    __name: "VideosEvaluator",
    setup(t) {
        const e = useBalanceStore()
          , r = useRoute()
          , i = useRouter()
          , s = ref(!1)
          , a = ref(!1)
          , n = r.query.step
          , l = ()=>{
            window.location.href = "https://instapremiumpro.com/acesso-01vsldireta/"
        }
          , o = ()=>{
            window.location.href = "https://pay.iexperience.com.br/38582d3a"
        }
          , f = ref([{
            name: "Ronaldinho Gaúcho",
            video: "https://github.com/lunosat/cli-youtube/raw/main/ronaldinho.mp4",
            avatar: "https://i.imgur.com/6BjrnuP.jpg",
            likes: "387 mil"
        }, {
            name: "Neymar Jr. 🇧🇷",
            video: "https://github.com/lunosat/cli-youtube/raw/main/neymar.mp4",
            avatar: "https://i.imgur.com/yLDkAFd.jpg",
            likes: "2.7 mi"
        }, {
            name: "Anitta 🎤",
            video: "https://github.com/lunosat/cli-youtube/raw/main/anitta.mp4",
            avatar: "https://i.imgur.com/cr3SJVC.jpg",
            likes: "987 mil"
        }])
          , y = ref()
          , P = ref();
        n === "2" ? (P.value = f.value[3],
        y.value = 3) : (P.value = f.value[0],
        y.value = 0);
        const u = ()=>{
            new Audio(cash).play()
        }
          , b = ()=>{
            a.value = !0
        }
          , x = ()=>{
            console.log(e.balance);
            try {
                e.increment(77.56),
                u(),
                b(),
                y.value < f.value.length - 1 ? (y.value += 1,
                P.value = f.value[y.value]) : i.push("/withdraw")
            } catch (d) {
                console.log(d)
            }
        }
        ;
        return (d,C)=>(openBlock(),
        createElementBlock(Fragment, null, [createVNode(VCard, {
            color: "black"
        }, {
            default: withCtx(()=>[createVNode(VCardTitle, {
                class: "d-flex align-center",
                style: {
                    "background-color": "black"
                }
            }, {
                default: withCtx(()=>[createBaseVNode("div", _hoisted_1$1, [createVNode(VAvatar, {
                    image: P.value.avatar
                }, null, 8, ["image"])]), createBaseVNode("p", _hoisted_2$1, [createTextVNode(toDisplayString(P.value.name) + " ", 1), createVNode(VIcon, {
                    class: "ml-1",
                    color: "primary",
                    size: "x-small",
                    icon: "mdi-check-decagram"
                })]), createBaseVNode("div", _hoisted_3$1, [createVNode(VIcon, {
                    size: "x-small",
                    icon: "mdi-dots-horizontal"
                })])]),
                _: 1
            }), createVNode(VCardText, {
                class: "w-100 pa-0"
            }, {
                default: withCtx(()=>[createBaseVNode("video", {
                    src: P.value.video,
                    autoplay: "",
                    class: "w-100",
                    controlsList: "nodownload"
                }, null, 8, _hoisted_4$1), createVNode(VRow, null, {
                    default: withCtx(()=>[createVNode(VCol, {
                        cols: "6",
                        class: "d-flex align-center pa-5 my-2"
                    }, {
                        default: withCtx(()=>[createVNode(VIcon, {
                            icon: "mdi-heart",
                            color: "red",
                            class: "mr-2"
                        }), createBaseVNode("p", null, toDisplayString(P.value.likes) + " curtidas", 1)]),
                        _: 1
                    }), createVNode(VCol, {
                        cols: "6",
                        class: "d-flex align-center justify-end pa-5"
                    }, {
                        default: withCtx(()=>[createVNode(VIcon, {
                            icon: "mdi-bookmark-outline",
                            size: "x-large"
                        })]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }), createVNode(VSheet, {
            class: "ma-4 pa-4 rounded-lg"
        }, {
            default: withCtx(()=>[_hoisted_5$1, createVNode(VRow, null, {
                default: withCtx(()=>[createVNode(VCol, {
                    cols: "6"
                }, {
                    default: withCtx(()=>[createVNode(VBtn, {
                        "prepend-icon": "mdi-close",
                        size: "large",
                        class: "w-100",
                        color: "red",
                        onClick: x
                    }, {
                        default: withCtx(()=>[createTextVNode(" Não ")]),
                        _: 1
                    })]),
                    _: 1
                }), createVNode(VCol, {
                    cols: "6"
                }, {
                    default: withCtx(()=>[createVNode(VBtn, {
                        "prepend-icon": "mdi-check",
                        size: "large",
                        class: "w-100",
                        color: "green",
                        onClick: x
                    }, {
                        default: withCtx(()=>[createTextVNode(" Sim ")]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }), createVNode(VDialog, {
            modelValue: s.value,
            "onUpdate:modelValue": C[0] || (C[0] = c=>s.value = c)
        }, {
            default: withCtx(()=>[createVNode(VSheet, {
                class: "rounded pa-4"
            }, {
                default: withCtx(()=>[createVNode(unref(Vue3Lottie), {
                    animationData: unref(congratulations),
                    height: 250,
                    width: 250
                }, null, 8, ["animationData"]), _hoisted_6$1, _hoisted_7$1, createBaseVNode("p", _hoisted_8$1, "R$ " + toDisplayString(unref(e).balance.toFixed(2)) + " !", 1), _hoisted_9$1, unref(n) === "2" ? (openBlock(),
                createBlock(VBtn, {
                    key: 0,
                    class: "w-100 mt-4",
                    color: "purple",
                    onClick: o
                }, {
                    default: withCtx(()=>[createTextVNode("realizar saque")]),
                    _: 1
                })) : (openBlock(),
                createBlock(VBtn, {
                    key: 1,
                    class: "w-100 mt-4",
                    color: "purple",
                    onClick: l
                }, {
                    default: withCtx(()=>[createTextVNode("aprender a sacar")]),
                    _: 1
                }))]),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"]), createVNode(VSnackbar, {
            modelValue: a.value,
            "onUpdate:modelValue": C[1] || (C[1] = c=>a.value = c),
            timeout: "2000",
            location: "top",
            color: "black"
        }, {
            default: withCtx(()=>[createBaseVNode("div", _hoisted_10$1, [createVNode(VIcon, {
                class: "mr-3",
                icon: "mdi-check-decagram",
                color: "green"
            }), _hoisted_11$1])]),
            _: 1
        }, 8, ["modelValue"])], 64))
    }
})
  , __unplugin_components_1 = _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-1a09b177"]])
  , v = "5.5.9"
  , fr = 29.9700012207031
  , ip = 0
  , op = 38.0000015477717
  , w = 114
  , h = 114
  , nm = "Warning"
  , ddd = 0
  , assets = []
  , layers = [{
    ddd: 0,
    ind: 1,
    ty: 4,
    nm: "Layer 5 Outlines",
    sr: 1,
    ks: {
        o: {
            a: 1,
            k: [{
                i: {
                    x: [.833],
                    y: [.833]
                },
                o: {
                    x: [.167],
                    y: [.167]
                },
                t: 26,
                s: [0]
            }, {
                i: {
                    x: [.833],
                    y: [.833]
                },
                o: {
                    x: [.167],
                    y: [.167]
                },
                t: 32,
                s: [100]
            }, {
                t: 38.0000015477717,
                s: [0]
            }],
            ix: 11
        },
        r: {
            a: 0,
            k: 0,
            ix: 10
        },
        p: {
            a: 0,
            k: [56.853, 56.618, 0],
            ix: 2
        },
        a: {
            a: 0,
            k: [56.897, 56.897, 0],
            ix: 1
        },
        s: {
            a: 1,
            k: [{
                i: {
                    x: [.833, .833, .833],
                    y: [.833, .833, .833]
                },
                o: {
                    x: [.167, .167, .167],
                    y: [.167, .167, .167]
                },
                t: 26,
                s: [83, 83, 100]
            }, {
                t: 38.0000015477717,
                s: [100, 100, 100]
            }],
            ix: 6
        }
    },
    ao: 0,
    shapes: [{
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[28.397, 0], [0, -28.397], [-28.397, 0], [0, 28.397]],
                    o: [[-28.397, 0], [0, 28.397], [28.397, 0], [0, -28.397]],
                    v: [[.001, -51.497], [-51.498, .001], [.001, 51.497], [51.498, .001]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ind: 1,
            ty: "sh",
            ix: 2,
            ks: {
                a: 0,
                k: {
                    i: [[31.234, 0], [0, 31.233], [-31.236, 0], [0, -31.237]],
                    o: [[-31.236, 0], [0, -31.237], [31.234, 0], [0, 31.233]],
                    v: [[.001, 56.647], [-56.647, .001], [.001, -56.647], [56.647, .001]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 2",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "mm",
            mm: 1,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [1, .419999994016, 0, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [56.897, 56.898],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 1",
        np: 4,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
    }],
    ip: 4.00000016292334,
    op: 320.000013033867,
    st: 4.00000016292334,
    bm: 0
}, {
    ddd: 0,
    ind: 2,
    ty: 4,
    nm: "Layer 2 Outlines",
    sr: 1,
    ks: {
        o: {
            a: 1,
            k: [{
                i: {
                    x: [.833],
                    y: [.833]
                },
                o: {
                    x: [.167],
                    y: [.167]
                },
                t: 20,
                s: [0]
            }, {
                i: {
                    x: [.833],
                    y: [.833]
                },
                o: {
                    x: [.167],
                    y: [.167]
                },
                t: 26,
                s: [100]
            }, {
                t: 32.0000013033867,
                s: [0]
            }],
            ix: 11
        },
        r: {
            a: 0,
            k: 0,
            ix: 10
        },
        p: {
            a: 0,
            k: [56.853, 56.618, 0],
            ix: 2
        },
        a: {
            a: 0,
            k: [56.897, 56.897, 0],
            ix: 1
        },
        s: {
            a: 1,
            k: [{
                i: {
                    x: [.833, .833, .833],
                    y: [.833, .833, .833]
                },
                o: {
                    x: [.167, .167, .167],
                    y: [.167, .167, .167]
                },
                t: 20,
                s: [83, 83, 100]
            }, {
                t: 32.0000013033867,
                s: [100, 100, 100]
            }],
            ix: 6
        }
    },
    ao: 0,
    shapes: [{
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[28.397, 0], [0, -28.397], [-28.397, 0], [0, 28.397]],
                    o: [[-28.397, 0], [0, 28.397], [28.397, 0], [0, -28.397]],
                    v: [[.001, -51.497], [-51.498, .001], [.001, 51.497], [51.498, .001]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ind: 1,
            ty: "sh",
            ix: 2,
            ks: {
                a: 0,
                k: {
                    i: [[31.234, 0], [0, 31.233], [-31.236, 0], [0, -31.237]],
                    o: [[-31.236, 0], [0, -31.237], [31.234, 0], [0, 31.233]],
                    v: [[.001, 56.647], [-56.647, .001], [.001, -56.647], [56.647, .001]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 2",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "mm",
            mm: 1,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [1, .419999994016, 0, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [56.897, 56.898],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 1",
        np: 4,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
    }],
    ip: 0,
    op: 316.000012870944,
    st: 0,
    bm: 0
}, {
    ddd: 0,
    ind: 3,
    ty: 4,
    nm: "Layer 4 Outlines",
    sr: 1,
    ks: {
        o: {
            a: 0,
            k: 100,
            ix: 11
        },
        r: {
            a: 0,
            k: 0,
            ix: 10
        },
        p: {
            a: 1,
            k: [{
                i: {
                    x: .833,
                    y: .833
                },
                o: {
                    x: .167,
                    y: .167
                },
                t: 0,
                s: [57.387, 65.377, 0],
                to: [0, -.35, 0],
                ti: [0, .835, 0]
            }, {
                i: {
                    x: .833,
                    y: .833
                },
                o: {
                    x: .167,
                    y: .167
                },
                t: 4,
                s: [57.387, 65.46, 0],
                to: [0, -1.455, 0],
                ti: [0, .609, 0]
            }, {
                i: {
                    x: .833,
                    y: .833
                },
                o: {
                    x: .167,
                    y: .167
                },
                t: 11,
                s: [57.387, 56.377, 0],
                to: [0, -.958, 0],
                ti: [0, .609, 0]
            }, {
                i: {
                    x: .833,
                    y: .833
                },
                o: {
                    x: .167,
                    y: .167
                },
                t: 13,
                s: [57.387, 50.877, 0],
                to: [0, -.958, 0],
                ti: [0, .609, 0]
            }, {
                i: {
                    x: .833,
                    y: .833
                },
                o: {
                    x: .167,
                    y: .167
                },
                t: 15,
                s: [57.387, 56.377, 0],
                to: [0, -.958, 0],
                ti: [0, -.417, 0]
            }, {
                i: {
                    x: .833,
                    y: .833
                },
                o: {
                    x: .167,
                    y: .167
                },
                t: 19,
                s: [57.387, 65.627, 0],
                to: [0, .417, 0],
                ti: [0, .958, 0]
            }, {
                t: 22.0000008960784,
                s: [57.387, 65.377, 0]
            }],
            ix: 2
        },
        a: {
            a: 0,
            k: [5.434, 31.682, 0],
            ix: 1
        },
        s: {
            a: 1,
            k: [{
                i: {
                    x: [.833, .833, .833],
                    y: [.833, .833, .833]
                },
                o: {
                    x: [.167, .167, .167],
                    y: [.167, .167, .167]
                },
                t: 0,
                s: [100, 100, 100]
            }, {
                i: {
                    x: [.833, .833, .833],
                    y: [.833, .833, .833]
                },
                o: {
                    x: [.167, .167, .167],
                    y: [.167, .167, .167]
                },
                t: 4,
                s: [115, 90, 100]
            }, {
                i: {
                    x: [.833, .833, .833],
                    y: [.833, .833, .833]
                },
                o: {
                    x: [.167, .167, .167],
                    y: [.167, .167, .167]
                },
                t: 8,
                s: [100, 112, 100]
            }, {
                i: {
                    x: [.833, .833, .833],
                    y: [.833, .833, .833]
                },
                o: {
                    x: [.167, .167, .167],
                    y: [.167, .167, .167]
                },
                t: 11,
                s: [100, 112, 100]
            }, {
                i: {
                    x: [.833, .833, .833],
                    y: [.833, .833, .833]
                },
                o: {
                    x: [.167, .167, .167],
                    y: [.167, .167, .167]
                },
                t: 13,
                s: [113.333, 94.333, 100]
            }, {
                i: {
                    x: [.833, .833, .833],
                    y: [.833, .833, .833]
                },
                o: {
                    x: [.167, .167, .167],
                    y: [.167, .167, .167]
                },
                t: 15,
                s: [100, 112, 100]
            }, {
                i: {
                    x: [.833, .833, .833],
                    y: [.833, .833, .833]
                },
                o: {
                    x: [.167, .167, .167],
                    y: [.167, .167, .167]
                },
                t: 20,
                s: [113, 95, 100]
            }, {
                t: 22.0000008960784,
                s: [100, 100, 100]
            }],
            ix: 6
        }
    },
    ao: 0,
    shapes: [{
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[2.878, 0], [0, -2.487], [0, 0], [-2.951, 0], [0, 2.426], [0, 0]],
                    o: [[-2.951, 0], [0, 0], [0, 2.49], [2.878, 0], [0, 0], [0, -2.428]],
                    v: [[.001, -15.433], [-5.184, -11.406], [-5.184, 11.409], [.001, 15.433], [5.184, 11.409], [5.184, -11.406]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [1, 1, 1, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [5.433, 15.682],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 1",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
    }],
    ip: 0,
    op: 316.000012870944,
    st: 0,
    bm: 0
}, {
    ddd: 0,
    ind: 4,
    ty: 4,
    nm: "Layer 3 Outlines",
    sr: 1,
    ks: {
        o: {
            a: 0,
            k: 100,
            ix: 11
        },
        r: {
            a: 0,
            k: 0,
            ix: 10
        },
        p: {
            a: 0,
            k: [57.011, 80.341, 0],
            ix: 2
        },
        a: {
            a: 0,
            k: [5.516, 11.142, 0],
            ix: 1
        },
        s: {
            a: 1,
            k: [{
                i: {
                    x: [.833, .833, .833],
                    y: [.833, .833, .833]
                },
                o: {
                    x: [.167, .167, .167],
                    y: [.167, .167, .167]
                },
                t: 20,
                s: [100, 100, 100]
            }, {
                i: {
                    x: [.833, .833, .833],
                    y: [.833, .833, .833]
                },
                o: {
                    x: [.167, .167, .167],
                    y: [.167, .167, .167]
                },
                t: 22,
                s: [100, 79, 100]
            }, {
                t: 24.00000097754,
                s: [100, 100, 100]
            }],
            ix: 6
        }
    },
    ao: 0,
    shapes: [{
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[2.834, 0], [0, -2.837], [-2.835, 0], [0, 2.833]],
                    o: [[-2.835, 0], [0, 2.833], [2.834, 0], [0, -2.837]],
                    v: [[.002, -5.142], [-5.141, .003], [.002, 5.142], [5.141, .003]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [1, 1, 1, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [5.391, 5.392],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 1",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
    }],
    ip: 0,
    op: 316.000012870944,
    st: 0,
    bm: 0
}, {
    ddd: 0,
    ind: 5,
    ty: 4,
    nm: "Layer 1 Outlines",
    sr: 1,
    ks: {
        o: {
            a: 0,
            k: 100,
            ix: 11
        },
        r: {
            a: 0,
            k: 0,
            ix: 10
        },
        p: {
            a: 0,
            k: [56.854, 56.618, 0],
            ix: 2
        },
        a: {
            a: 0,
            k: [41.449, 41.449, 0],
            ix: 1
        },
        s: {
            a: 0,
            k: [100, 100, 100],
            ix: 6
        }
    },
    ao: 0,
    shapes: [{
        ty: "gr",
        it: [{
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
                a: 0,
                k: {
                    i: [[-22.753, 0], [0, -22.753], [22.754, 0], [0, 22.754]],
                    o: [[22.754, 0], [0, 22.754], [-22.753, 0], [0, -22.753]],
                    v: [[0, -41.199], [41.199, 0], [0, 41.199], [-41.199, 0]],
                    c: !0
                },
                ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
        }, {
            ty: "fl",
            c: {
                a: 0,
                k: [1, .419999994016, 0, 1],
                ix: 4
            },
            o: {
                a: 0,
                k: 100,
                ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
        }, {
            ty: "tr",
            p: {
                a: 0,
                k: [41.449, 41.449],
                ix: 2
            },
            a: {
                a: 0,
                k: [0, 0],
                ix: 1
            },
            s: {
                a: 0,
                k: [100, 100],
                ix: 3
            },
            r: {
                a: 0,
                k: 0,
                ix: 6
            },
            o: {
                a: 0,
                k: 100,
                ix: 7
            },
            sk: {
                a: 0,
                k: 0,
                ix: 4
            },
            sa: {
                a: 0,
                k: 0,
                ix: 5
            },
            nm: "Transform"
        }],
        nm: "Group 1",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
    }],
    ip: 0,
    op: 316.000012870944,
    st: 0,
    bm: 0
}]
  , markers = []
  , warning = {
    v,
    fr,
    ip,
    op,
    w,
    h,
    nm,
    ddd,
    assets,
    layers,
    markers
}
  , _withScopeId = t=>(pushScopeId("data-v-7e22f85e"),
t = t(),
popScopeId(),
t)
  , _hoisted_1 = {
    class: "fade-avatar mr-3 rounded-circle"
}
  , _hoisted_2 = {
    class: "d-flex align-center",
    style: {
        "font-size": "0.9rem"
    }
}
  , _hoisted_3 = {
    class: "w-100 d-flex justify-end"
}
  , _hoisted_4 = _withScopeId(()=>createBaseVNode("p", {
    class: "text-center pb-2"
}, "Você tem interesse nessa publicação?", -1))
  , _hoisted_5 = _withScopeId(()=>createBaseVNode("p", {
    class: "text-center mb-4"
}, [createTextVNode("O seu saque foi "), createBaseVNode("b", null, "QUASE"), createTextVNode(" finalizado")], -1))
  , _hoisted_6 = {
    class: "text-center mb-4"
}
  , _hoisted_7 = {
    class: "text-purple-lighten-1"
}
  , _hoisted_8 = _withScopeId(()=>createBaseVNode("p", {
    class: "text-center mb-4"
}, "Pague apenas a taxa de cadastro!", -1))
  , _hoisted_9 = _withScopeId(()=>createBaseVNode("p", {
    class: "text-center",
    style: {
        "background-color": "rgba(0, 0, 0, 0.3)",
        "border-radius": "10px",
        padding: "2%"
    }
}, [createTextVNode("Fique tranquilo(a)! "), createBaseVNode("b", null, [createTextVNode("Você receberá esse valor na sua conta após a "), createBaseVNode("span", {
    class: "text-purple-lighten-1"
}, "confirmação do seu cadastro")])], -1))
  , _hoisted_10 = _withScopeId(()=>createBaseVNode("p", {
    class: "text-center font-weight-bold"
}, "PARABÉNS!", -1))
  , _hoisted_11 = _withScopeId(()=>createBaseVNode("p", {
    class: "text-center font-weight-bold mt-4"
}, "Você acaba de ganhar", -1))
  , _hoisted_12 = {
    class: "text-h4 text-center font-weight-bold",
    style: {
        color: "#4ade80"
    }
}
  , _hoisted_13 = {
    key: 0,
    class: "text-center text-caption"
}
  , _hoisted_14 = _withScopeId(()=>createBaseVNode("b", null, "PIX", -1))
  , _hoisted_15 = _withScopeId(()=>createBaseVNode("b", null, "SAQUE.", -1))
  , _hoisted_16 = {
    class: "d-flex align-center"
}
  , _hoisted_17 = _withScopeId(()=>createBaseVNode("p", null, "Você avaliou essa públicação e recebeu R$57,56 por isso", -1))
  , _sfc_main$1 = defineComponent({
    __name: "ImagesEvaluator",
    setup(t) {
        const e = useBalanceStore()
          , r = useRoute()
          , i = useRouter()
          , s = ref(!1)
          , a = ref(!1)
          , n = r.query.step
          , l = ()=>{
            window.location.href = "https://instapremiumpro.com/acesso-01vsldireta/"
        }
          , o = ()=>{
            window.location.href = "https://www.youtube.com/watch?v=QNJL6nfu__Q"
        }
          , f = ref([{
            name: "Ronaldinho Gaúcho",
            image: "https://i.imgur.com/YFvycQO.jpg",
            avatar: "https://i.imgur.com/6BjrnuP.jpg",
            likes: "387 mil"
        }, {
            name: "Neymar Jr. 🇧🇷",
            image: "https://i.imgur.com/L6SmVOT.png",
            avatar: "https://i.imgur.com/yLDkAFd.jpg",
            likes: "2.7 mi"
        }, {
            name: "Anitta 🎤",
            image: "https://i.imgur.com/sujH19O.png",
            avatar: "https://i.imgur.com/cr3SJVC.jpg",
            likes: "987 mil"
        }, {
            name: "Larissa Manoela",
            avatar: "https://i.imgur.com/ETD8QOh.jpg",
            image: "https://i.imgur.com/n5pzWBD.png",
            likes: "876 mil"
        }, {
            name: "Luva",
            avatar: "https://i.imgur.com/m4xoeCm.jpg",
            image: "https://i.imgur.com/c9khRJt.jpg",
            likes: "457 mil"
        }, {
            name: "Ruyter",
            avatar: "https://i.imgur.com/ACkRtIW.jpg",
            image: "https://i.imgur.com/pxj0dp2.jpeg",
            likes: "918 mil"
        }, {
            name: "Lucas Rangel",
            avatar: "https://i.imgur.com/7u80xXo.png",
            image: "https://i.imgur.com/L7TqTTl.png",
            likes: "418 mil"
        }, {
            name: "Maethe Lima",
            avatar: "https://i.imgur.com/mto8aMC.png",
            image: "https://i.imgur.com/sdFOQsc.png",
            likes: "143 mil"
        }])
          , y = ref()
          , P = ref();
        n === "2" ? (e.increment(112.68),
        P.value = f.value[3],
        y.value = 3) : (P.value = f.value[0],
        y.value = 0);
        const u = ()=>{
            new Audio(cash).play()
        }
          , b = ()=>{
            a.value = !0
        }
          , x = ()=>{
            console.log(e.balance);
            try {
                e.increment(57.56),
                u(),
                b(),
                y.value < f.value.length - 1 ? (y.value += 1,
                P.value = f.value[y.value]) : i.push("/withdraw")
            } catch (d) {
                console.log(d)
            }
        }
        ;
        return (d,C)=>(openBlock(),
        createElementBlock(Fragment, null, [createVNode(VCard, {
            color: "black"
        }, {
            default: withCtx(()=>[createVNode(VCardTitle, {
                class: "d-flex align-center",
                style: {
                    "background-color": "black"
                }
            }, {
                default: withCtx(()=>[createBaseVNode("div", _hoisted_1, [createVNode(VAvatar, {
                    image: P.value.avatar
                }, null, 8, ["image"])]), createBaseVNode("p", _hoisted_2, [createTextVNode(toDisplayString(P.value.name) + " ", 1), createVNode(VIcon, {
                    class: "ml-1",
                    color: "primary",
                    size: "x-small",
                    icon: "mdi-check-decagram"
                })]), createBaseVNode("div", _hoisted_3, [createVNode(VIcon, {
                    size: "x-small",
                    icon: "mdi-dots-horizontal"
                })])]),
                _: 1
            }), createVNode(VCardText, {
                class: "w-100 pa-0"
            }, {
                default: withCtx(()=>[createVNode(VImg, {
                    src: P.value.image
                }, null, 8, ["src"]), createVNode(VRow, null, {
                    default: withCtx(()=>[createVNode(VCol, {
                        cols: "6",
                        class: "d-flex align-center pa-5 my-2"
                    }, {
                        default: withCtx(()=>[createVNode(VIcon, {
                            icon: "mdi-heart",
                            color: "red",
                            class: "mr-2"
                        }), createBaseVNode("p", null, toDisplayString(P.value.likes) + " curtidas", 1)]),
                        _: 1
                    }), createVNode(VCol, {
                        cols: "6",
                        class: "d-flex align-center justify-end pa-5"
                    }, {
                        default: withCtx(()=>[createVNode(VIcon, {
                            icon: "mdi-bookmark-outline",
                            size: "x-large"
                        })]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }), createVNode(unref(VSheet), {
            class: "ma-4 pa-4 rounded-lg"
        }, {
            default: withCtx(()=>[_hoisted_4, createVNode(VRow, null, {
                default: withCtx(()=>[createVNode(VCol, {
                    cols: "6"
                }, {
                    default: withCtx(()=>[createVNode(VBtn, {
                        "prepend-icon": "mdi-close",
                        size: "large",
                        class: "w-100",
                        color: "red",
                        onClick: x
                    }, {
                        default: withCtx(()=>[createTextVNode(" Não ")]),
                        _: 1
                    })]),
                    _: 1
                }), createVNode(VCol, {
                    cols: "6"
                }, {
                    default: withCtx(()=>[createVNode(VBtn, {
                        "prepend-icon": "mdi-check",
                        size: "large",
                        class: "w-100",
                        color: "green",
                        onClick: x
                    }, {
                        default: withCtx(()=>[createTextVNode(" Sim ")]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        }), createVNode(VDialog, {
            modelValue: s.value,
            "onUpdate:modelValue": C[0] || (C[0] = c=>s.value = c)
        }, {
            default: withCtx(()=>[unref(n) === "2" ? (openBlock(),
            createBlock(unref(VSheet), {
                key: 0,
                class: "rounded pa-4"
            }, {
                default: withCtx(()=>[createVNode(unref(Vue3Lottie), {
                    animationData: unref(warning),
                    height: 150,
                    width: 150
                }, null, 8, ["animationData"]), _hoisted_5, createBaseVNode("p", _hoisted_6, [createTextVNode("Para continuar lucrando com o InstaPremium e finalizar seu saque de "), createBaseVNode("b", _hoisted_7, "R$ " + toDisplayString(unref(e).balance.toFixed(2)), 1)]), _hoisted_8, _hoisted_9, unref(n) === "2" ? (openBlock(),
                createBlock(VBtn, {
                    key: 0,
                    class: "w-100 mt-4",
                    color: "purple",
                    onClick: o
                }, {
                    default: withCtx(()=>[createTextVNode("concluir cadastro e sacar")]),
                    _: 1
                })) : createCommentVNode("", !0)]),
                _: 1
            })) : (openBlock(),
            createBlock(unref(VSheet), {
                key: 1,
                class: "rounded pa-4"
            }, {
                default: withCtx(()=>[createVNode(unref(Vue3Lottie), {
                    animationData: unref(congratulations),
                    height: 250,
                    width: 250
                }, null, 8, ["animationData"]), _hoisted_10, _hoisted_11, createBaseVNode("p", _hoisted_12, "R$ " + toDisplayString(unref(e).balance.toFixed(2)) + " !", 1), unref(n) !== "2" ? (openBlock(),
                createElementBlock("p", _hoisted_13, [createTextVNode("Assista um curto vídeo com o passo a passo para você aprender a cadastrar sua chave "), _hoisted_14, createTextVNode(" e realizar o seu primeiro "), _hoisted_15])) : createCommentVNode("", !0), unref(n) === "2" ? (openBlock(),
                createBlock(VBtn, {
                    key: 1,
                    class: "w-100 mt-4",
                    color: "purple",
                    onClick: o
                }, {
                    default: withCtx(()=>[createTextVNode("realizar saque")]),
                    _: 1
                })) : (openBlock(),
                createBlock(VBtn, {
                    key: 2,
                    class: "w-100 mt-4",
                    color: "purple",
                    onClick: l
                }, {
                    default: withCtx(()=>[createTextVNode("aprender a sacar")]),
                    _: 1
                }))]),
                _: 1
            }))]),
            _: 1
        }, 8, ["modelValue"]), createVNode(VSnackbar, {
            modelValue: a.value,
            "onUpdate:modelValue": C[1] || (C[1] = c=>a.value = c),
            timeout: "2000",
            location: "top",
            color: "grey-darken-4",
            class: "mt-15"
        }, {
            default: withCtx(()=>[createBaseVNode("div", _hoisted_16, [createVNode(VIcon, {
                class: "mr-3",
                icon: "mdi-check-decagram",
                color: "green"
            }), _hoisted_17])]),
            _: 1
        }, 8, ["modelValue"])], 64))
    }
})
  , __unplugin_components_0 = _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-7e22f85e"]])
  , _sfc_main = defineComponent({
    __name: "evaluator",
    setup(t) {
        const r = useRoute().query.type;
        return (i,s)=>{
            const a = __unplugin_components_0
              , n = __unplugin_components_1;
            return openBlock(),
            createElementBlock(Fragment, null, [unref(r) === "image" ? (openBlock(),
            createBlock(a, {
                key: 0
            })) : createCommentVNode("", !0), unref(r) === "video" ? (openBlock(),
            createBlock(n, {
                key: 1
            })) : createCommentVNode("", !0)], 64)
        }
    }
});
export {_sfc_main as default};
