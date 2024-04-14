import { v as He, m as be, a as Ce, b as te, c as pe, d as _e, e as ne, o as F, g as ke, i as we, u as ve, k as je, h as qe, l as Ue, j as We, f as X } from "./VImg-Dy7h4JrB.js";
import { p as x, a4 as j, f as d, c, S as Xe, R as J, m as N, a as O, b as A, g as V, d as D, h as Ye, t as B, u as P, am as q, a6 as Ke, aq as Se, a5 as Je, k as ae, w as se, ap as Qe, n as xe, o as Ze, aw as Ie, a3 as et, ax as tt, y as nt, aj as at, ay as st, i as w, _ as Q, r as ie, az as it, aA as lt, aB as ot, s as rt, aC as ut, aD as ct, z as dt, e as vt, af as ft, aE as mt, aF as fe, ai as gt, P as Ee, O as ht, aG as yt, aH as me, $ as bt, a0 as Ct } from "./index-DuJTDyAq.js";
const pt = [null, "default", "comfortable", "compact"]
    , Be = x({
        density: {
            type: String,
            default: "default",
            validator: e => pt.includes(e)
        }
    }, "density");
function Le(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j();
    return {
        densityClasses: d(() => `${t}--density-${e.density}`)
    }
}
const _t = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function kt(e, t) {
    return c(Xe, null, [e && c("span", {
        key: "overlay",
        class: `${t}__overlay`
    }, null), c("span", {
        key: "underlay",
        class: `${t}__underlay`
    }, null)])
}
const Te = x({
    color: String,
    variant: {
        type: String,
        default: "elevated",
        validator: e => _t.includes(e)
    }
}, "variant");
function wt(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j();
    const n = d(() => {
        const { variant: s } = J(e);
        return `${t}--variant-${s}`
    }
    )
        , { colorClasses: a, colorStyles: i } = He(d(() => {
            const { variant: s, color: l } = J(e);
            return {
                [["elevated", "flat"].includes(s) ? "background" : "text"]: l
            }
        }
        ));
    return {
        colorClasses: a,
        colorStyles: i,
        variantClasses: n
    }
}
const Ve = x({
    divided: Boolean,
    ...be(),
    ...N(),
    ...Be(),
    ...Ce(),
    ...te(),
    ...O(),
    ...A(),
    ...Te()
}, "VBtnGroup")
    , ge = V()({
        name: "VBtnGroup",
        props: Ve(),
        setup(e, t) {
            let { slots: n } = t;
            const { themeClasses: a } = D(e)
                , { densityClasses: i } = Le(e)
                , { borderClasses: s } = pe(e)
                , { elevationClasses: l } = _e(e)
                , { roundedClasses: v } = ne(e);
            Ye({
                VBtn: {
                    height: "auto",
                    color: B(e, "color"),
                    density: B(e, "density"),
                    flat: !0,
                    variant: B(e, "variant")
                }
            }),
                P(() => c(e.tag, {
                    class: ["v-btn-group", {
                        "v-btn-group--divided": e.divided
                    }, a.value, s.value, i.value, l.value, v.value, e.class],
                    style: e.style
                }, n))
        }
    })
    , St = x({
        modelValue: {
            type: null,
            default: void 0
        },
        multiple: Boolean,
        mandatory: [Boolean, String],
        max: Number,
        selectedClass: String,
        disabled: Boolean
    }, "group")
    , xt = x({
        value: null,
        disabled: Boolean,
        selectedClass: String
    }, "group-item");
function It(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    const a = q("useGroupItem");
    if (!a)
        throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
    const i = Ke();
    Se(Symbol.for(`${t.description}:id`), i);
    const s = Je(t, null);
    if (!s) {
        if (!n)
            return s;
        throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)
    }
    const l = B(e, "value")
        , v = d(() => !!(s.disabled.value || e.disabled));
    s.register({
        id: i,
        value: l,
        disabled: v
    }, a),
        ae(() => {
            s.unregister(i)
        }
        );
    const f = d(() => s.isSelected(i))
        , h = d(() => f.value && [s.selectedClass.value, e.selectedClass]);
    return se(f, y => {
        a.emit("group:selected", {
            value: y
        })
    }
        , {
            flush: "sync"
        }),
    {
        id: i,
        isSelected: f,
        toggle: () => s.select(i, !f.value),
        select: y => s.select(i, y),
        selectedClass: h,
        value: l,
        disabled: v,
        group: s
    }
}
function Et(e, t) {
    let n = !1;
    const a = Qe([])
        , i = xe(e, "modelValue", [], o => o == null ? [] : Pe(a, et(o)), o => {
            const r = Lt(a, o);
            return e.multiple ? r : r[0]
        }
        )
        , s = q("useGroup");
    function l(o, r) {
        const g = o
            , m = Symbol.for(`${t.description}:id`)
            , C = tt(m, s == null ? void 0 : s.vnode).indexOf(r);
        J(g.value) == null && (g.value = C),
            C > -1 ? a.splice(C, 0, g) : a.push(g)
    }
    function v(o) {
        if (n)
            return;
        f();
        const r = a.findIndex(g => g.id === o);
        a.splice(r, 1)
    }
    function f() {
        const o = a.find(r => !r.disabled);
        o && e.mandatory === "force" && !i.value.length && (i.value = [o.id])
    }
    Ze(() => {
        f()
    }
    ),
        ae(() => {
            n = !0
        }
        );
    function h(o, r) {
        const g = a.find(m => m.id === o);
        if (!(r && (g != null && g.disabled)))
            if (e.multiple) {
                const m = i.value.slice()
                    , k = m.findIndex(u => u === o)
                    , C = ~k;
                if (r = r ?? !C,
                    C && e.mandatory && m.length <= 1 || !C && e.max != null && m.length + 1 > e.max)
                    return;
                k < 0 && r ? m.push(o) : k >= 0 && !r && m.splice(k, 1),
                    i.value = m
            } else {
                const m = i.value.includes(o);
                if (e.mandatory && m)
                    return;
                i.value = r ?? !m ? [o] : []
            }
    }
    function y(o) {
        if (e.multiple,
            i.value.length) {
            const r = i.value[0]
                , g = a.findIndex(C => C.id === r);
            let m = (g + o) % a.length
                , k = a[m];
            for (; k.disabled && m !== g;)
                m = (m + o) % a.length,
                    k = a[m];
            if (k.disabled)
                return;
            i.value = [a[m].id]
        } else {
            const r = a.find(g => !g.disabled);
            r && (i.value = [r.id])
        }
    }
    const b = {
        register: l,
        unregister: v,
        selected: i,
        select: h,
        disabled: B(e, "disabled"),
        prev: () => y(a.length - 1),
        next: () => y(1),
        isSelected: o => i.value.includes(o),
        selectedClass: d(() => e.selectedClass),
        items: d(() => a),
        getItemIndex: o => Bt(a, o)
    };
    return Se(t, b),
        b
}
function Bt(e, t) {
    const n = Pe(e, [t]);
    return n.length ? e.findIndex(a => a.id === n[0]) : -1
}
function Pe(e, t) {
    const n = [];
    return t.forEach(a => {
        const i = e.find(l => Ie(a, l.value))
            , s = e[a];
        (i == null ? void 0 : i.value) != null ? n.push(i.id) : s != null && n.push(s.id)
    }
    ),
        n
}
function Lt(e, t) {
    const n = [];
    return t.forEach(a => {
        const i = e.findIndex(s => s.id === a);
        if (~i) {
            const s = e[i];
            n.push(s.value != null ? s.value : i)
        }
    }
    ),
        n
}
const Re = Symbol.for("vuetify:v-btn-toggle")
    , Tt = x({
        ...Ve(),
        ...St()
    }, "VBtnToggle");
V()({
    name: "VBtnToggle",
    props: Tt(),
    emits: {
        "update:modelValue": e => !0
    },
    setup(e, t) {
        let { slots: n } = t;
        const { isSelected: a, next: i, prev: s, select: l, selected: v } = Et(e, Re);
        return P(() => {
            const f = ge.filterProps(e);
            return c(ge, nt({
                class: ["v-btn-toggle", e.class]
            }, f, {
                style: e.style
            }), {
                default: () => {
                    var h;
                    return [(h = n.default) == null ? void 0 : h.call(n, {
                        isSelected: a,
                        next: i,
                        prev: s,
                        select: l,
                        selected: v
                    })]
                }
            })
        }
        ),
        {
            next: i,
            prev: s,
            select: l
        }
    }
});
const Vt = ["x-small", "small", "default", "large", "x-large"]
    , le = x({
        size: {
            type: [String, Number],
            default: "default"
        }
    }, "size");
function oe(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j();
    return at(() => {
        let n, a;
        return st(Vt, e.size) ? n = `${t}--size-${e.size}` : e.size && (a = {
            width: w(e.size),
            height: w(e.size)
        }),
        {
            sizeClasses: n,
            sizeStyles: a
        }
    }
    )
}
const Pt = x({
    color: String,
    disabled: Boolean,
    start: Boolean,
    end: Boolean,
    icon: Q,
    ...N(),
    ...le(),
    ...O({
        tag: "i"
    }),
    ...A()
}, "VIcon")
    , Y = V()({
        name: "VIcon",
        props: Pt(),
        setup(e, t) {
            let { attrs: n, slots: a } = t;
            const i = ie()
                , { themeClasses: s } = D(e)
                , { iconData: l } = it(d(() => i.value || e.icon))
                , { sizeClasses: v } = oe(e)
                , { textColorClasses: f, textColorStyles: h } = F(B(e, "color"));
            return P(() => {
                var o, r;
                const y = (o = a.default) == null ? void 0 : o.call(a);
                y && (i.value = (r = lt(y).filter(g => g.type === ot && g.children && typeof g.children == "string")[0]) == null ? void 0 : r.children);
                const b = !!(n.onClick || n.onClickOnce);
                return c(l.value.component, {
                    tag: e.tag,
                    icon: l.value.icon,
                    class: ["v-icon", "notranslate", s.value, v.value, f.value, {
                        "v-icon--clickable": b,
                        "v-icon--disabled": e.disabled,
                        "v-icon--start": e.start,
                        "v-icon--end": e.end
                    }, e.class],
                    style: [v.value ? void 0 : {
                        fontSize: w(e.size),
                        height: w(e.size),
                        width: w(e.size)
                    }, h.value, e.style],
                    role: b ? "button" : void 0,
                    "aria-hidden": !b,
                    tabindex: b ? e.disabled ? -1 : 0 : void 0
                }, {
                    default: () => [y]
                })
            }
            ),
                {}
        }
    });
function $e(e, t) {
    const n = ie()
        , a = rt(!1);
    if (ut) {
        const i = new IntersectionObserver(s => {
            e == null || e(s, i),
                a.value = !!s.find(l => l.isIntersecting)
        }
            , t);
        ae(() => {
            i.disconnect()
        }
        ),
            se(n, (s, l) => {
                l && (i.unobserve(l),
                    a.value = !1),
                    s && i.observe(s)
            }
                , {
                    flush: "post"
                })
    }
    return {
        intersectionRef: n,
        isIntersecting: a
    }
}
const Rt = x({
    bgColor: String,
    color: String,
    indeterminate: [Boolean, String],
    modelValue: {
        type: [Number, String],
        default: 0
    },
    rotate: {
        type: [Number, String],
        default: 0
    },
    width: {
        type: [Number, String],
        default: 4
    },
    ...N(),
    ...le(),
    ...O({
        tag: "div"
    }),
    ...A()
}, "VProgressCircular")
    , $t = V()({
        name: "VProgressCircular",
        props: Rt(),
        setup(e, t) {
            let { slots: n } = t;
            const a = 20
                , i = 2 * Math.PI * a
                , s = ie()
                , { themeClasses: l } = D(e)
                , { sizeClasses: v, sizeStyles: f } = oe(e)
                , { textColorClasses: h, textColorStyles: y } = F(B(e, "color"))
                , { textColorClasses: b, textColorStyles: o } = F(B(e, "bgColor"))
                , { intersectionRef: r, isIntersecting: g } = $e()
                , { resizeRef: m, contentRect: k } = ct()
                , C = d(() => Math.max(0, Math.min(100, parseFloat(e.modelValue))))
                , u = d(() => Number(e.width))
                , p = d(() => f.value ? Number(e.size) : k.value ? k.value.width : Math.max(u.value, 32))
                , E = d(() => a / (1 - u.value / p.value) * 2)
                , I = d(() => u.value / p.value * E.value)
                , R = d(() => w((100 - C.value) / 100 * i));
            return dt(() => {
                r.value = s.value,
                    m.value = s.value
            }
            ),
                P(() => c(e.tag, {
                    ref: s,
                    class: ["v-progress-circular", {
                        "v-progress-circular--indeterminate": !!e.indeterminate,
                        "v-progress-circular--visible": g.value,
                        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
                    }, l.value, v.value, h.value, e.class],
                    style: [f.value, y.value, e.style],
                    role: "progressbar",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                    "aria-valuenow": e.indeterminate ? void 0 : C.value
                }, {
                    default: () => [c("svg", {
                        style: {
                            transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
                        },
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: `0 0 ${E.value} ${E.value}`
                    }, [c("circle", {
                        class: ["v-progress-circular__underlay", b.value],
                        style: o.value,
                        fill: "transparent",
                        cx: "50%",
                        cy: "50%",
                        r: a,
                        "stroke-width": I.value,
                        "stroke-dasharray": i,
                        "stroke-dashoffset": 0
                    }, null), c("circle", {
                        class: "v-progress-circular__overlay",
                        fill: "transparent",
                        cx: "50%",
                        cy: "50%",
                        r: a,
                        "stroke-width": I.value,
                        "stroke-dasharray": i,
                        "stroke-dashoffset": R.value
                    }, null)]), n.default && c("div", {
                        class: "v-progress-circular__content"
                    }, [n.default({
                        value: C.value
                    })])]
                })),
                {}
        }
    })
    , zt = x({
        absolute: Boolean,
        active: {
            type: Boolean,
            default: !0
        },
        bgColor: String,
        bgOpacity: [Number, String],
        bufferValue: {
            type: [Number, String],
            default: 0
        },
        clickable: Boolean,
        color: String,
        height: {
            type: [Number, String],
            default: 4
        },
        indeterminate: Boolean,
        max: {
            type: [Number, String],
            default: 100
        },
        modelValue: {
            type: [Number, String],
            default: 0
        },
        reverse: Boolean,
        stream: Boolean,
        striped: Boolean,
        roundedBar: Boolean,
        ...N(),
        ...ke({
            location: "top"
        }),
        ...te(),
        ...O(),
        ...A()
    }, "VProgressLinear")
    , Nt = V()({
        name: "VProgressLinear",
        props: zt(),
        emits: {
            "update:modelValue": e => !0
        },
        setup(e, t) {
            let { slots: n } = t;
            const a = xe(e, "modelValue")
                , { isRtl: i, rtlClasses: s } = vt()
                , { themeClasses: l } = D(e)
                , { locationStyles: v } = we(e)
                , { textColorClasses: f, textColorStyles: h } = F(e, "color")
                , { backgroundColorClasses: y, backgroundColorStyles: b } = ve(d(() => e.bgColor || e.color))
                , { backgroundColorClasses: o, backgroundColorStyles: r } = ve(e, "color")
                , { roundedClasses: g } = ne(e)
                , { intersectionRef: m, isIntersecting: k } = $e()
                , C = d(() => parseInt(e.max, 10))
                , u = d(() => parseInt(e.height, 10))
                , p = d(() => parseFloat(e.bufferValue) / C.value * 100)
                , E = d(() => parseFloat(a.value) / C.value * 100)
                , I = d(() => i.value !== e.reverse)
                , R = d(() => e.indeterminate ? "fade-transition" : "slide-x-transition")
                , G = d(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
            function U(_) {
                if (!m.value)
                    return;
                const { left: L, right: W, width: T } = m.value.getBoundingClientRect()
                    , M = I.value ? T - _.clientX + (W - T) : _.clientX - L;
                a.value = Math.round(M / T * C.value)
            }
            return P(() => c(e.tag, {
                ref: m,
                class: ["v-progress-linear", {
                    "v-progress-linear--absolute": e.absolute,
                    "v-progress-linear--active": e.active && k.value,
                    "v-progress-linear--reverse": I.value,
                    "v-progress-linear--rounded": e.rounded,
                    "v-progress-linear--rounded-bar": e.roundedBar,
                    "v-progress-linear--striped": e.striped
                }, g.value, l.value, s.value, e.class],
                style: [{
                    bottom: e.location === "bottom" ? 0 : void 0,
                    top: e.location === "top" ? 0 : void 0,
                    height: e.active ? w(u.value) : 0,
                    "--v-progress-linear-height": w(u.value),
                    ...v.value
                }, e.style],
                role: "progressbar",
                "aria-hidden": e.active ? "false" : "true",
                "aria-valuemin": "0",
                "aria-valuemax": e.max,
                "aria-valuenow": e.indeterminate ? void 0 : E.value,
                onClick: e.clickable && U
            }, {
                default: () => [e.stream && c("div", {
                    key: "stream",
                    class: ["v-progress-linear__stream", f.value],
                    style: {
                        ...h.value,
                        [I.value ? "left" : "right"]: w(-u.value),
                        borderTop: `${w(u.value / 2)} dotted`,
                        opacity: G.value,
                        top: `calc(50% - ${w(u.value / 4)})`,
                        width: w(100 - p.value, "%"),
                        "--v-progress-linear-stream-to": w(u.value * (I.value ? 1 : -1))
                    }
                }, null), c("div", {
                    class: ["v-progress-linear__background", y.value],
                    style: [b.value, {
                        opacity: G.value,
                        width: w(e.stream ? p.value : 100, "%")
                    }]
                }, null), c(ft, {
                    name: R.value
                }, {
                    default: () => [e.indeterminate ? c("div", {
                        class: "v-progress-linear__indeterminate"
                    }, [["long", "short"].map(_ => c("div", {
                        key: _,
                        class: ["v-progress-linear__indeterminate", _, o.value],
                        style: r.value
                    }, null))]) : c("div", {
                        class: ["v-progress-linear__determinate", o.value],
                        style: [r.value, {
                            width: w(E.value, "%")
                        }]
                    }, null)]
                }), n.default && c("div", {
                    class: "v-progress-linear__content"
                }, [n.default({
                    value: E.value,
                    buffer: p.value
                })])]
            })),
                {}
        }
    })
    , Ot = x({
        loading: [Boolean, String]
    }, "loader");
function At(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j();
    return {
        loaderClasses: d(() => ({
            [`${t}--loading`]: e.loading
        }))
    }
}
function Qt(e, t) {
    var a;
    let { slots: n } = t;
    return c("div", {
        class: `${e.name}__loader`
    }, [((a = n.default) == null ? void 0 : a.call(n, {
        color: e.color,
        isActive: e.active
    })) || c(Nt, {
        absolute: e.absolute,
        active: e.active,
        color: e.color,
        height: "2",
        indeterminate: !0
    }, null)])
}
function Dt() {
    const e = q("useRoute");
    return d(() => {
        var t;
        return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route
    }
    )
}
function Zt() {
    var e, t;
    return (t = (e = q("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : t.$router
}
function Gt(e, t) {
    const n = mt("RouterLink")
        , a = d(() => !!(e.href || e.to))
        , i = d(() => (a == null ? void 0 : a.value) || fe(t, "click") || fe(e, "click"));
    if (typeof n == "string")
        return {
            isLink: a,
            isClickable: i,
            href: B(e, "href")
        };
    const s = e.to ? n.useLink(e) : void 0
        , l = Dt();
    return {
        isLink: a,
        isClickable: i,
        route: s == null ? void 0 : s.route,
        navigate: s == null ? void 0 : s.navigate,
        isActive: s && d(() => {
            var v, f, h;
            return e.exact ? l.value ? ((h = s.isExactActive) == null ? void 0 : h.value) && Ie(s.route.value.query, l.value.query) : (f = s.isExactActive) == null ? void 0 : f.value : (v = s.isActive) == null ? void 0 : v.value
        }
        ),
        href: d(() => e.to ? s == null ? void 0 : s.route.value.href : e.href)
    }
}
const Mt = x({
    href: String,
    replace: Boolean,
    to: [String, Object],
    exact: Boolean
}, "router");
let K = !1;
function en(e, t) {
    let n = !1, a, i;
    gt && (Ee(() => {
        window.addEventListener("popstate", s),
            a = e == null ? void 0 : e.beforeEach((l, v, f) => {
                K ? n ? t(f) : f() : setTimeout(() => n ? t(f) : f()),
                    K = !0
            }
            ),
            i = e == null ? void 0 : e.afterEach(() => {
                K = !1
            }
            )
    }
    ),
        ht(() => {
            window.removeEventListener("popstate", s),
                a == null || a(),
                i == null || i()
        }
        ));
    function s(l) {
        var v;
        (v = l.state) != null && v.replaced || (n = !0,
            setTimeout(() => n = !1))
    }
}
function Ft(e, t) {
    se(() => {
        var n;
        return (n = e.isActive) == null ? void 0 : n.value
    }
        , n => {
            e.isLink.value && n && t && Ee(() => {
                t(!0)
            }
            )
        }
        , {
            immediate: !0
        })
}
const Z = Symbol("rippleStop")
    , Ht = 80;
function he(e, t) {
    e.style.transform = t,
        e.style.webkitTransform = t
}
function ee(e) {
    return e.constructor.name === "TouchEvent"
}
function ze(e) {
    return e.constructor.name === "KeyboardEvent"
}
const jt = function (e, t) {
    var b;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
        , a = 0
        , i = 0;
    if (!ze(e)) {
        const o = t.getBoundingClientRect()
            , r = ee(e) ? e.touches[e.touches.length - 1] : e;
        a = r.clientX - o.left,
            i = r.clientY - o.top
    }
    let s = 0
        , l = .3;
    (b = t._ripple) != null && b.circle ? (l = .15,
        s = t.clientWidth / 2,
        s = n.center ? s : s + Math.sqrt((a - s) ** 2 + (i - s) ** 2) / 4) : s = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
    const v = `${(t.clientWidth - s * 2) / 2}px`
        , f = `${(t.clientHeight - s * 2) / 2}px`
        , h = n.center ? v : `${a - s}px`
        , y = n.center ? f : `${i - s}px`;
    return {
        radius: s,
        scale: l,
        x: h,
        y,
        centerX: v,
        centerY: f
    }
}
    , H = {
        show(e, t) {
            var r;
            let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            if (!((r = t == null ? void 0 : t._ripple) != null && r.enabled))
                return;
            const a = document.createElement("span")
                , i = document.createElement("span");
            a.appendChild(i),
                a.className = "v-ripple__container",
                n.class && (a.className += ` ${n.class}`);
            const { radius: s, scale: l, x: v, y: f, centerX: h, centerY: y } = jt(e, t, n)
                , b = `${s * 2}px`;
            i.className = "v-ripple__animation",
                i.style.width = b,
                i.style.height = b,
                t.appendChild(a);
            const o = window.getComputedStyle(t);
            o && o.position === "static" && (t.style.position = "relative",
                t.dataset.previousPosition = "static"),
                i.classList.add("v-ripple__animation--enter"),
                i.classList.add("v-ripple__animation--visible"),
                he(i, `translate(${v}, ${f}) scale3d(${l},${l},${l})`),
                i.dataset.activated = String(performance.now()),
                setTimeout(() => {
                    i.classList.remove("v-ripple__animation--enter"),
                        i.classList.add("v-ripple__animation--in"),
                        he(i, `translate(${h}, ${y}) scale3d(1,1,1)`)
                }
                    , 0)
        },
        hide(e) {
            var s;
            if (!((s = e == null ? void 0 : e._ripple) != null && s.enabled))
                return;
            const t = e.getElementsByClassName("v-ripple__animation");
            if (t.length === 0)
                return;
            const n = t[t.length - 1];
            if (n.dataset.isHiding)
                return;
            n.dataset.isHiding = "true";
            const a = performance.now() - Number(n.dataset.activated)
                , i = Math.max(250 - a, 0);
            setTimeout(() => {
                n.classList.remove("v-ripple__animation--in"),
                    n.classList.add("v-ripple__animation--out"),
                    setTimeout(() => {
                        var v;
                        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition,
                            delete e.dataset.previousPosition),
                            ((v = n.parentNode) == null ? void 0 : v.parentNode) === e && e.removeChild(n.parentNode)
                    }
                        , 300)
            }
                , i)
        }
    };
function Ne(e) {
    return typeof e > "u" || !!e
}
function $(e) {
    const t = {}
        , n = e.currentTarget;
    if (!(!(n != null && n._ripple) || n._ripple.touched || e[Z])) {
        if (e[Z] = !0,
            ee(e))
            n._ripple.touched = !0,
                n._ripple.isTouch = !0;
        else if (n._ripple.isTouch)
            return;
        if (t.center = n._ripple.centered || ze(e),
            n._ripple.class && (t.class = n._ripple.class),
            ee(e)) {
            if (n._ripple.showTimerCommit)
                return;
            n._ripple.showTimerCommit = () => {
                H.show(e, n, t)
            }
                ,
                n._ripple.showTimer = window.setTimeout(() => {
                    var a;
                    (a = n == null ? void 0 : n._ripple) != null && a.showTimerCommit && (n._ripple.showTimerCommit(),
                        n._ripple.showTimerCommit = null)
                }
                    , Ht)
        } else
            H.show(e, n, t)
    }
}
function ye(e) {
    e[Z] = !0
}
function S(e) {
    const t = e.currentTarget;
    if (t != null && t._ripple) {
        if (window.clearTimeout(t._ripple.showTimer),
            e.type === "touchend" && t._ripple.showTimerCommit) {
            t._ripple.showTimerCommit(),
                t._ripple.showTimerCommit = null,
                t._ripple.showTimer = window.setTimeout(() => {
                    S(e)
                }
                );
            return
        }
        window.setTimeout(() => {
            t._ripple && (t._ripple.touched = !1)
        }
        ),
            H.hide(t)
    }
}
function Oe(e) {
    const t = e.currentTarget;
    t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null),
        window.clearTimeout(t._ripple.showTimer))
}
let z = !1;
function Ae(e) {
    !z && (e.keyCode === me.enter || e.keyCode === me.space) && (z = !0,
        $(e))
}
function De(e) {
    z = !1,
        S(e)
}
function Ge(e) {
    z && (z = !1,
        S(e))
}
function Me(e, t, n) {
    const { value: a, modifiers: i } = t
        , s = Ne(a);
    if (s || H.hide(e),
        e._ripple = e._ripple ?? {},
        e._ripple.enabled = s,
        e._ripple.centered = i.center,
        e._ripple.circle = i.circle,
        yt(a) && a.class && (e._ripple.class = a.class),
        s && !n) {
        if (i.stop) {
            e.addEventListener("touchstart", ye, {
                passive: !0
            }),
                e.addEventListener("mousedown", ye);
            return
        }
        e.addEventListener("touchstart", $, {
            passive: !0
        }),
            e.addEventListener("touchend", S, {
                passive: !0
            }),
            e.addEventListener("touchmove", Oe, {
                passive: !0
            }),
            e.addEventListener("touchcancel", S),
            e.addEventListener("mousedown", $),
            e.addEventListener("mouseup", S),
            e.addEventListener("mouseleave", S),
            e.addEventListener("keydown", Ae),
            e.addEventListener("keyup", De),
            e.addEventListener("blur", Ge),
            e.addEventListener("dragstart", S, {
                passive: !0
            })
    } else
        !s && n && Fe(e)
}
function Fe(e) {
    e.removeEventListener("mousedown", $),
        e.removeEventListener("touchstart", $),
        e.removeEventListener("touchend", S),
        e.removeEventListener("touchmove", Oe),
        e.removeEventListener("touchcancel", S),
        e.removeEventListener("mouseup", S),
        e.removeEventListener("mouseleave", S),
        e.removeEventListener("keydown", Ae),
        e.removeEventListener("keyup", De),
        e.removeEventListener("dragstart", S),
        e.removeEventListener("blur", Ge)
}
function qt(e, t) {
    Me(e, t, !1)
}
function Ut(e) {
    delete e._ripple,
        Fe(e)
}
function Wt(e, t) {
    if (t.value === t.oldValue)
        return;
    const n = Ne(t.oldValue);
    Me(e, t, n)
}
const Xt = {
    mounted: qt,
    unmounted: Ut,
    updated: Wt
}
    , Yt = x({
        active: {
            type: Boolean,
            default: void 0
        },
        symbol: {
            type: null,
            default: Re
        },
        flat: Boolean,
        icon: [Boolean, String, Function, Object],
        prependIcon: Q,
        appendIcon: Q,
        block: Boolean,
        slim: Boolean,
        stacked: Boolean,
        ripple: {
            type: [Boolean, Object],
            default: !0
        },
        text: String,
        ...be(),
        ...N(),
        ...Be(),
        ...je(),
        ...Ce(),
        ...xt(),
        ...Ot(),
        ...ke(),
        ...qe(),
        ...te(),
        ...Mt(),
        ...le(),
        ...O({
            tag: "button"
        }),
        ...A(),
        ...Te({
            variant: "elevated"
        })
    }, "VBtn")
    , tn = V()({
        name: "VBtn",
        directives: {
            Ripple: Xt
        },
        props: Yt(),
        emits: {
            "group:selected": e => !0
        },
        setup(e, t) {
            let { attrs: n, slots: a } = t;
            const { themeClasses: i } = D(e)
                , { borderClasses: s } = pe(e)
                , { colorClasses: l, colorStyles: v, variantClasses: f } = wt(e)
                , { densityClasses: h } = Le(e)
                , { dimensionStyles: y } = Ue(e)
                , { elevationClasses: b } = _e(e)
                , { loaderClasses: o } = At(e)
                , { locationStyles: r } = we(e)
                , { positionClasses: g } = We(e)
                , { roundedClasses: m } = ne(e)
                , { sizeClasses: k, sizeStyles: C } = oe(e)
                , u = It(e, e.symbol, !1)
                , p = Gt(e, n)
                , E = d(() => {
                    var _;
                    return e.active !== void 0 ? e.active : p.isLink.value ? (_ = p.isActive) == null ? void 0 : _.value : u == null ? void 0 : u.isSelected.value
                }
                )
                , I = d(() => (u == null ? void 0 : u.disabled.value) || e.disabled)
                , R = d(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border))
                , G = d(() => {
                    if (!(e.value === void 0 || typeof e.value == "symbol"))
                        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value
                }
                );
            function U(_) {
                var L;
                I.value || p.isLink.value && (_.metaKey || _.ctrlKey || _.shiftKey || _.button !== 0 || n.target === "_blank") || ((L = p.navigate) == null || L.call(p, _),
                    u == null || u.toggle())
            }
            return Ft(p, u == null ? void 0 : u.select),
                P(() => {
                    var re, ue;
                    const _ = p.isLink.value ? "a" : e.tag
                        , L = !!(e.prependIcon || a.prepend)
                        , W = !!(e.appendIcon || a.append)
                        , T = !!(e.icon && e.icon !== !0)
                        , M = (u == null ? void 0 : u.isSelected.value) && (!p.isLink.value || ((re = p.isActive) == null ? void 0 : re.value)) || !u || ((ue = p.isActive) == null ? void 0 : ue.value);
                    return bt(c(_, {
                        type: _ === "a" ? void 0 : "button",
                        class: ["v-btn", u == null ? void 0 : u.selectedClass.value, {
                            "v-btn--active": E.value,
                            "v-btn--block": e.block,
                            "v-btn--disabled": I.value,
                            "v-btn--elevated": R.value,
                            "v-btn--flat": e.flat,
                            "v-btn--icon": !!e.icon,
                            "v-btn--loading": e.loading,
                            "v-btn--slim": e.slim,
                            "v-btn--stacked": e.stacked
                        }, i.value, s.value, M ? l.value : void 0, h.value, b.value, o.value, g.value, m.value, k.value, f.value, e.class],
                        style: [M ? v.value : void 0, y.value, r.value, C.value, e.style],
                        disabled: I.value || void 0,
                        href: p.href.value,
                        onClick: U,
                        value: G.value
                    }, {
                        default: () => {
                            var ce;
                            return [kt(!0, "v-btn"), !e.icon && L && c("span", {
                                key: "prepend",
                                class: "v-btn__prepend"
                            }, [a.prepend ? c(X, {
                                key: "prepend-defaults",
                                disabled: !e.prependIcon,
                                defaults: {
                                    VIcon: {
                                        icon: e.prependIcon
                                    }
                                }
                            }, a.prepend) : c(Y, {
                                key: "prepend-icon",
                                icon: e.prependIcon
                            }, null)]), c("span", {
                                class: "v-btn__content",
                                "data-no-activator": ""
                            }, [!a.default && T ? c(Y, {
                                key: "content-icon",
                                icon: e.icon
                            }, null) : c(X, {
                                key: "content-defaults",
                                disabled: !T,
                                defaults: {
                                    VIcon: {
                                        icon: e.icon
                                    }
                                }
                            }, {
                                default: () => {
                                    var de;
                                    return [((de = a.default) == null ? void 0 : de.call(a)) ?? e.text]
                                }
                            })]), !e.icon && W && c("span", {
                                key: "append",
                                class: "v-btn__append"
                            }, [a.append ? c(X, {
                                key: "append-defaults",
                                disabled: !e.appendIcon,
                                defaults: {
                                    VIcon: {
                                        icon: e.appendIcon
                                    }
                                }
                            }, a.append) : c(Y, {
                                key: "append-icon",
                                icon: e.appendIcon
                            }, null)]), !!e.loading && c("span", {
                                key: "loader",
                                class: "v-btn__loader"
                            }, [((ce = a.loader) == null ? void 0 : ce.call(a)) ?? c($t, {
                                color: typeof e.loading == "boolean" ? void 0 : e.loading,
                                indeterminate: !0,
                                size: "23",
                                width: "2"
                            }, null)])]
                        }
                    }), [[Ct("ripple"), !I.value && e.ripple, null]])
                }
                ),
            {
                group: u
            }
        }
    });
export { Qt as L, Xt as R, tn as V, Nt as a, Y as b, Be as c, le as d, Le as e, oe as f, kt as g, Ot as h, Mt as i, At as j, Gt as k, Zt as l, Te as m, en as n, wt as u };
