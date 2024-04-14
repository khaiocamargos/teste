import {ay as B, p as b, a4 as z, f as m, aI as _, aj as re, aJ as O, aK as ae, aL as se, aM as ie, g as V, aN as oe, h as le, i as y, e as ue, m as M, u as L, c as l, Z as ce, y as q, ae as de, af as ge, aC as X, t as fe, am as ve, s as x, r as me, w as $, a7 as be, P as he, k as Se, $ as U, a0 as ye, S as Ce, a8 as _e} from "./index-DuJTDyAq.js";
const Y = ["top", "bottom"]
  , ke = ["start", "end", "left", "right"];
function Pe(e, n) {
    let[r,t] = e.split(" ");
    return t || (t = B(Y, r) ? "start" : B(ke, r) ? "top" : "center"),
    {
        side: A(r, n),
        align: A(t, n)
    }
}
function A(e, n) {
    return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e
}
function He(e) {
    return {
        side: {
            center: "center",
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        }[e.side],
        align: e.align
    }
}
function Oe(e) {
    return {
        side: e.side,
        align: {
            center: "center",
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        }[e.align]
    }
}
function Ue(e) {
    return {
        side: e.align,
        align: e.side
    }
}
function Ae(e) {
    return B(Y, e.side) ? "y" : "x"
}
const Ee = b({
    border: [Boolean, Number, String]
}, "border");
function Fe(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z();
    return {
        borderClasses: m(()=>{
            const t = _(e) ? e.value : e.border
              , i = [];
            if (t === !0 || t === "")
                i.push(`${n}--border`);
            else if (typeof t == "string" || t === 0)
                for (const a of String(t).split(" "))
                    i.push(`border-${a}`);
            return i
        }
        )
    }
}
const Me = b({
    elevation: {
        type: [Number, String],
        validator(e) {
            const n = parseInt(e);
            return !isNaN(n) && n >= 0 && n <= 24
        }
    }
}, "elevation");
function Le(e) {
    return {
        elevationClasses: m(()=>{
            const r = _(e) ? e.value : e.elevation
              , t = [];
            return r == null || t.push(`elevation-${r}`),
            t
        }
        )
    }
}
const xe = b({
    rounded: {
        type: [Boolean, Number, String],
        default: void 0
    },
    tile: Boolean
}, "rounded");
function Ne(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z();
    return {
        roundedClasses: m(()=>{
            const t = _(e) ? e.value : e.rounded
              , i = _(e) ? e.value : e.tile
              , a = [];
            if (t === !0 || t === "")
                a.push(`${n}--rounded`);
            else if (typeof t == "string" || t === 0)
                for (const d of String(t).split(" "))
                    a.push(`rounded-${d}`);
            else
                i && a.push("rounded-0");
            return a
        }
        )
    }
}
function G(e) {
    return re(()=>{
        const n = []
          , r = {};
        if (e.value.background)
            if (O(e.value.background)) {
                if (r.backgroundColor = e.value.background,
                !e.value.text && ae(e.value.background)) {
                    const t = se(e.value.background);
                    if (t.a == null || t.a === 1) {
                        const i = ie(t);
                        r.color = i,
                        r.caretColor = i
                    }
                }
            } else
                n.push(`bg-${e.value.background}`);
        return e.value.text && (O(e.value.text) ? (r.color = e.value.text,
        r.caretColor = e.value.text) : n.push(`text-${e.value.text}`)),
        {
            colorClasses: n,
            colorStyles: r
        }
    }
    )
}
function qe(e, n) {
    const r = m(()=>({
        text: _(e) ? e.value : n ? e[n] : null
    }))
      , {colorClasses: t, colorStyles: i} = G(r);
    return {
        textColorClasses: t,
        textColorStyles: i
    }
}
function Ie(e, n) {
    const r = m(()=>({
        background: _(e) ? e.value : n ? e[n] : null
    }))
      , {colorClasses: t, colorStyles: i} = G(r);
    return {
        backgroundColorClasses: t,
        backgroundColorStyles: i
    }
}
const Re = b({
    defaults: Object,
    disabled: Boolean,
    reset: [Number, String],
    root: [Boolean, String],
    scoped: Boolean
}, "VDefaultsProvider")
  , Xe = V(!1)({
    name: "VDefaultsProvider",
    props: Re(),
    setup(e, n) {
        let {slots: r} = n;
        const {defaults: t, disabled: i, reset: a, root: d, scoped: f} = oe(e);
        return le(t, {
            reset: a,
            root: d,
            scoped: f,
            disabled: i
        }),
        ()=>{
            var u;
            return (u = r.default) == null ? void 0 : u.call(r)
        }
    }
})
  , $e = b({
    height: [Number, String],
    maxHeight: [Number, String],
    maxWidth: [Number, String],
    minHeight: [Number, String],
    minWidth: [Number, String],
    width: [Number, String]
}, "dimension");
function Be(e) {
    return {
        dimensionStyles: m(()=>({
            height: y(e.height),
            maxHeight: y(e.maxHeight),
            maxWidth: y(e.maxWidth),
            minHeight: y(e.minHeight),
            minWidth: y(e.minWidth),
            width: y(e.width)
        }))
    }
}
const E = {
    center: "center",
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
}
  , Ye = b({
    location: String
}, "location");
function Ge(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
      , r = arguments.length > 2 ? arguments[2] : void 0;
    const {isRtl: t} = ue();
    return {
        locationStyles: m(()=>{
            if (!e.location)
                return {};
            const {side: a, align: d} = Pe(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, t.value);
            function f(o) {
                return r ? r(o) : 0
            }
            const u = {};
            return a !== "center" && (n ? u[E[a]] = `calc(100% - ${f(a)}px)` : u[a] = 0),
            d !== "center" ? n ? u[E[d]] = `calc(100% - ${f(d)}px)` : u[d] = 0 : (a === "center" ? u.top = u.left = "50%" : u[{
                top: "left",
                bottom: "left",
                left: "top",
                right: "top"
            }[a]] = "50%",
            u.transform = {
                top: "translateX(-50%)",
                bottom: "translateX(-50%)",
                left: "translateY(-50%)",
                right: "translateY(-50%)",
                center: "translate(-50%, -50%)"
            }[a]),
            u
        }
        )
    }
}
const ze = ["static", "relative", "fixed", "absolute", "sticky"]
  , Je = b({
    position: {
        type: String,
        validator: e=>ze.includes(e)
    }
}, "position");
function Ke(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z();
    return {
        positionClasses: m(()=>e.position ? `${n}--${e.position}` : void 0)
    }
}
function Ve(e) {
    return {
        aspectStyles: m(()=>{
            const n = Number(e.aspectRatio);
            return n ? {
                paddingBottom: String(1 / n * 100) + "%"
            } : void 0
        }
        )
    }
}
const J = b({
    aspectRatio: [String, Number],
    contentClass: String,
    inline: Boolean,
    ...M(),
    ...$e()
}, "VResponsive")
  , F = V()({
    name: "VResponsive",
    props: J(),
    setup(e, n) {
        let {slots: r} = n;
        const {aspectStyles: t} = Ve(e)
          , {dimensionStyles: i} = Be(e);
        return L(()=>{
            var a;
            return l("div", {
                class: ["v-responsive", {
                    "v-responsive--inline": e.inline
                }, e.class],
                style: [i.value, e.style]
            }, [l("div", {
                class: "v-responsive__sizer",
                style: t.value
            }, null), (a = r.additional) == null ? void 0 : a.call(r), r.default && l("div", {
                class: ["v-responsive__content", e.contentClass]
            }, [r.default()])])
        }
        ),
        {}
    }
})
  , we = b({
    transition: {
        type: [Boolean, String, Object],
        default: "fade-transition",
        validator: e=>e !== !0
    }
}, "transition")
  , N = (e,n)=>{
    let {slots: r} = n;
    const {transition: t, disabled: i, group: a, ...d} = e
      , {component: f=a ? de : ge, ...u} = typeof t == "object" ? t : {};
    return ce(f, q(typeof t == "string" ? {
        name: i ? "" : t
    } : u, typeof t == "string" ? {} : {
        disabled: i,
        group: a
    }, d), r)
}
;
function Te(e, n) {
    if (!X)
        return;
    const r = n.modifiers || {}
      , t = n.value
      , {handler: i, options: a} = typeof t == "object" ? t : {
        handler: t,
        options: {}
    }
      , d = new IntersectionObserver(function() {
        var h;
        let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
          , u = arguments.length > 1 ? arguments[1] : void 0;
        const o = (h = e._observe) == null ? void 0 : h[n.instance.$.uid];
        if (!o)
            return;
        const c = f.some(C=>C.isIntersecting);
        i && (!r.quiet || o.init) && (!r.once || c || o.init) && i(c, f, u),
        c && r.once ? K(e, n) : o.init = !0
    }
    ,a);
    e._observe = Object(e._observe),
    e._observe[n.instance.$.uid] = {
        init: !1,
        observer: d
    },
    d.observe(e)
}
function K(e, n) {
    var t;
    const r = (t = e._observe) == null ? void 0 : t[n.instance.$.uid];
    r && (r.observer.unobserve(e),
    delete e._observe[n.instance.$.uid])
}
const je = {
    mounted: Te,
    unmounted: K
}
  , We = je
  , pe = b({
    alt: String,
    cover: Boolean,
    color: String,
    draggable: {
        type: [Boolean, String],
        default: void 0
    },
    eager: Boolean,
    gradient: String,
    lazySrc: String,
    options: {
        type: Object,
        default: ()=>({
            root: void 0,
            rootMargin: void 0,
            threshold: void 0
        })
    },
    sizes: String,
    src: {
        type: [String, Object],
        default: ""
    },
    crossorigin: String,
    referrerpolicy: String,
    srcset: String,
    position: String,
    ...J(),
    ...M(),
    ...xe(),
    ...we()
}, "VImg")
  , Ze = V()({
    name: "VImg",
    directives: {
        intersect: We
    },
    props: pe(),
    emits: {
        loadstart: e=>!0,
        load: e=>!0,
        error: e=>!0
    },
    setup(e, n) {
        let {emit: r, slots: t} = n;
        const {backgroundColorClasses: i, backgroundColorStyles: a} = Ie(fe(e, "color"))
          , {roundedClasses: d} = Ne(e)
          , f = ve("VImg")
          , u = x("")
          , o = me()
          , c = x(e.eager ? "loading" : "idle")
          , h = x()
          , C = x()
          , v = m(()=>e.src && typeof e.src == "object" ? {
            src: e.src.src,
            srcset: e.srcset || e.src.srcset,
            lazySrc: e.lazySrc || e.src.lazySrc,
            aspect: Number(e.aspectRatio || e.src.aspect || 0)
        } : {
            src: e.src,
            srcset: e.srcset,
            lazySrc: e.lazySrc,
            aspect: Number(e.aspectRatio || 0)
        })
          , k = m(()=>v.value.aspect || h.value / C.value || 0);
        $(()=>e.src, ()=>{
            I(c.value !== "idle")
        }
        ),
        $(k, (s,g)=>{
            !s && g && o.value && P(o.value)
        }
        ),
        be(()=>I());
        function I(s) {
            if (!(e.eager && s) && !(X && !s && !e.eager)) {
                if (c.value = "loading",
                v.value.lazySrc) {
                    const g = new Image;
                    g.src = v.value.lazySrc,
                    P(g, null)
                }
                v.value.src && he(()=>{
                    var g;
                    r("loadstart", ((g = o.value) == null ? void 0 : g.currentSrc) || v.value.src),
                    setTimeout(()=>{
                        var S;
                        if (!f.isUnmounted)
                            if ((S = o.value) != null && S.complete) {
                                if (o.value.naturalWidth || T(),
                                c.value === "error")
                                    return;
                                k.value || P(o.value, null),
                                c.value === "loading" && w()
                            } else
                                k.value || P(o.value),
                                j()
                    }
                    )
                }
                )
            }
        }
        function w() {
            var s;
            f.isUnmounted || (j(),
            P(o.value),
            c.value = "loaded",
            r("load", ((s = o.value) == null ? void 0 : s.currentSrc) || v.value.src))
        }
        function T() {
            var s;
            f.isUnmounted || (c.value = "error",
            r("error", ((s = o.value) == null ? void 0 : s.currentSrc) || v.value.src))
        }
        function j() {
            const s = o.value;
            s && (u.value = s.currentSrc || s.src)
        }
        let R = -1;
        Se(()=>{
            clearTimeout(R)
        }
        );
        function P(s) {
            let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
            const S = ()=>{
                if (clearTimeout(R),
                f.isUnmounted)
                    return;
                const {naturalHeight: D, naturalWidth: H} = s;
                D || H ? (h.value = H,
                C.value = D) : !s.complete && c.value === "loading" && g != null ? R = window.setTimeout(S, g) : (s.currentSrc.endsWith(".svg") || s.currentSrc.startsWith("data:image/svg+xml")) && (h.value = 1,
                C.value = 1)
            }
            ;
            S()
        }
        const W = m(()=>({
            "v-img__img--cover": e.cover,
            "v-img__img--contain": !e.cover
        }))
          , Z = ()=>{
            var S;
            if (!v.value.src || c.value === "idle")
                return null;
            const s = l("img", {
                class: ["v-img__img", W.value],
                style: {
                    objectPosition: e.position
                },
                src: v.value.src,
                srcset: v.value.srcset,
                alt: e.alt,
                crossorigin: e.crossorigin,
                referrerpolicy: e.referrerpolicy,
                draggable: e.draggable,
                sizes: e.sizes,
                ref: o,
                onLoad: w,
                onError: T
            }, null)
              , g = (S = t.sources) == null ? void 0 : S.call(t);
            return l(N, {
                transition: e.transition,
                appear: !0
            }, {
                default: ()=>[U(g ? l("picture", {
                    class: "v-img__picture"
                }, [g, s]) : s, [[_e, c.value === "loaded"]])]
            })
        }
          , Q = ()=>l(N, {
            transition: e.transition
        }, {
            default: ()=>[v.value.lazySrc && c.value !== "loaded" && l("img", {
                class: ["v-img__img", "v-img__img--preload", W.value],
                style: {
                    objectPosition: e.position
                },
                src: v.value.lazySrc,
                alt: e.alt,
                crossorigin: e.crossorigin,
                referrerpolicy: e.referrerpolicy,
                draggable: e.draggable
            }, null)]
        })
          , ee = ()=>t.placeholder ? l(N, {
            transition: e.transition,
            appear: !0
        }, {
            default: ()=>[(c.value === "loading" || c.value === "error" && !t.error) && l("div", {
                class: "v-img__placeholder"
            }, [t.placeholder()])]
        }) : null
          , te = ()=>t.error ? l(N, {
            transition: e.transition,
            appear: !0
        }, {
            default: ()=>[c.value === "error" && l("div", {
                class: "v-img__error"
            }, [t.error()])]
        }) : null
          , ne = ()=>e.gradient ? l("div", {
            class: "v-img__gradient",
            style: {
                backgroundImage: `linear-gradient(${e.gradient})`
            }
        }, null) : null
          , p = x(!1);
        {
            const s = $(k, g=>{
                g && (requestAnimationFrame(()=>{
                    requestAnimationFrame(()=>{
                        p.value = !0
                    }
                    )
                }
                ),
                s())
            }
            )
        }
        return L(()=>{
            const s = F.filterProps(e);
            return U(l(F, q({
                class: ["v-img", {
                    "v-img--booting": !p.value
                }, i.value, d.value, e.class],
                style: [{
                    width: y(e.width === "auto" ? h.value : e.width)
                }, a.value, e.style]
            }, s, {
                aspectRatio: k.value,
                "aria-label": e.alt,
                role: e.alt ? "img" : void 0
            }), {
                additional: ()=>l(Ce, null, [l(Z, null, null), l(Q, null, null), l(ne, null, null), l(ee, null, null), l(te, null, null)]),
                default: t.default
            }), [[ye("intersect"), {
                handler: I,
                options: e.options
            }, null, {
                once: !0
            }]])
        }
        ),
        {
            currentSrc: u,
            image: o,
            state: c,
            naturalWidth: h,
            naturalHeight: C
        }
    }
});
export {We as I, N as M, Ze as V, Me as a, xe as b, Fe as c, Le as d, Ne as e, Xe as f, Ye as g, Je as h, Ge as i, Ke as j, $e as k, Be as l, Ee as m, we as n, qe as o, Pe as p, He as q, Oe as r, Ue as s, Ae as t, Ie as u, G as v};
