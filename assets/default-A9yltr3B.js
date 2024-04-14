import { u as j, V as G } from "./VSheet-axggTibZ.js";
import { m as O, a as Y, b as J, u as K, c as Q, d as W, e as X, V as N, f as I } from "./VImg-Dy7h4JrB.js";
import { p as P, m as R, a as H, g as C, u as w, c as a, b as Z, t as A, d as ee, e as te, s as _, f as i, h as ae, i as B, r as D, j as le, w as k, o as oe, k as ne, l as se, n as re, q as ue, v as ie, x as ce, y as L, z as de, A as F, B as M, C as U, D as S, E as ve, F as me, V as ge, G as fe, H as he } from "./index-DuJTDyAq.js";
import { V as be } from "./index-DsFL2t0Z.js";
const z = P({
    text: String,
    ...R(),
    ...H()
}, "VToolbarTitle")
    , $ = C()({
        name: "VToolbarTitle",
        props: z(),
        setup(e, c) {
            let { slots: t } = c;
            return w(() => {
                const r = !!(t.default || t.text || e.text);
                return a(e.tag, {
                    class: ["v-toolbar-title", e.class],
                    style: e.style
                }, {
                    default: () => {
                        var o;
                        return [r && a("div", {
                            class: "v-toolbar-title__placeholder"
                        }, [t.text ? t.text() : e.text, (o = t.default) == null ? void 0 : o.call(t)])]
                    }
                })
            }
            ),
                {}
        }
    })
    , ye = [null, "prominent", "default", "comfortable", "compact"]
    , q = P({
        absolute: Boolean,
        collapse: Boolean,
        color: String,
        density: {
            type: String,
            default: "default",
            validator: e => ye.includes(e)
        },
        extended: Boolean,
        extensionHeight: {
            type: [Number, String],
            default: 48
        },
        flat: Boolean,
        floating: Boolean,
        height: {
            type: [Number, String],
            default: 64
        },
        image: String,
        title: String,
        ...O(),
        ...R(),
        ...Y(),
        ...J(),
        ...H({
            tag: "header"
        }),
        ...Z()
    }, "VToolbar")
    , E = C()({
        name: "VToolbar",
        props: q(),
        setup(e, c) {
            var s;
            let { slots: t } = c;
            const { backgroundColorClasses: r, backgroundColorStyles: o } = K(A(e, "color"))
                , { borderClasses: l } = Q(e)
                , { elevationClasses: m } = W(e)
                , { roundedClasses: v } = X(e)
                , { themeClasses: g } = ee(e)
                , { rtlClasses: f } = te()
                , u = _(!!(e.extended || (s = t.extension) != null && s.call(t)))
                , h = i(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10))
                , d = i(() => u.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
            return ae({
                VBtn: {
                    variant: "text"
                }
            }),
                w(() => {
                    var n;
                    const b = !!(e.title || t.title)
                        , p = !!(t.image || e.image)
                        , V = (n = t.extension) == null ? void 0 : n.call(t);
                    return u.value = !!(e.extended || V),
                        a(e.tag, {
                            class: ["v-toolbar", {
                                "v-toolbar--absolute": e.absolute,
                                "v-toolbar--collapse": e.collapse,
                                "v-toolbar--flat": e.flat,
                                "v-toolbar--floating": e.floating,
                                [`v-toolbar--density-${e.density}`]: !0
                            }, r.value, l.value, m.value, v.value, g.value, f.value, e.class],
                            style: [o.value, e.style]
                        }, {
                            default: () => [p && a("div", {
                                key: "image",
                                class: "v-toolbar__image"
                            }, [t.image ? a(I, {
                                key: "image-defaults",
                                disabled: !e.image,
                                defaults: {
                                    VImg: {
                                        cover: !0,
                                        src: e.image
                                    }
                                }
                            }, t.image) : a(N, {
                                key: "image-img",
                                cover: !0,
                                src: e.image
                            }, null)]), a(I, {
                                defaults: {
                                    VTabs: {
                                        height: B(h.value)
                                    }
                                }
                            }, {
                                default: () => {
                                    var y, x, T;
                                    return [a("div", {
                                        class: "v-toolbar__content",
                                        style: {
                                            height: B(h.value)
                                        }
                                    }, [t.prepend && a("div", {
                                        class: "v-toolbar__prepend"
                                    }, [(y = t.prepend) == null ? void 0 : y.call(t)]), b && a($, {
                                        key: "title",
                                        text: e.title
                                    }, {
                                        text: t.title
                                    }), (x = t.default) == null ? void 0 : x.call(t), t.append && a("div", {
                                        class: "v-toolbar__append"
                                    }, [(T = t.append) == null ? void 0 : T.call(t)])])]
                                }
                            }), a(I, {
                                defaults: {
                                    VTabs: {
                                        height: B(d.value)
                                    }
                                }
                            }, {
                                default: () => [a(be, null, {
                                    default: () => [u.value && a("div", {
                                        class: "v-toolbar__extension",
                                        style: {
                                            height: B(d.value)
                                        }
                                    }, [V])]
                                })]
                            })]
                        })
                }
                ),
            {
                contentHeight: h,
                extensionHeight: d
            }
        }
    })
    , _e = P({
        scrollTarget: {
            type: String
        },
        scrollThreshold: {
            type: [String, Number],
            default: 300
        }
    }, "scroll");
function pe(e) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { canScroll: t } = c;
    let r = 0;
    const o = D(null)
        , l = _(0)
        , m = _(0)
        , v = _(0)
        , g = _(!1)
        , f = _(!1)
        , u = i(() => Number(e.scrollThreshold))
        , h = i(() => le((u.value - l.value) / u.value || 0))
        , d = () => {
            const s = o.value;
            !s || t && !t.value || (r = l.value,
                l.value = "window" in s ? s.pageYOffset : s.scrollTop,
                f.value = l.value < r,
                v.value = Math.abs(l.value - u.value))
        }
        ;
    return k(f, () => {
        m.value = m.value || l.value
    }
    ),
        k(g, () => {
            m.value = 0
        }
        ),
        oe(() => {
            k(() => e.scrollTarget, s => {
                var p;
                const b = s ? document.querySelector(s) : window;
                b && b !== o.value && ((p = o.value) == null || p.removeEventListener("scroll", d),
                    o.value = b,
                    o.value.addEventListener("scroll", d, {
                        passive: !0
                    }))
            }
                , {
                    immediate: !0
                })
        }
        ),
        ne(() => {
            var s;
            (s = o.value) == null || s.removeEventListener("scroll", d)
        }
        ),
        t && k(t, d, {
            immediate: !0
        }),
    {
        scrollThreshold: u,
        currentScroll: l,
        currentThreshold: v,
        isScrollActive: g,
        scrollRatio: h,
        isScrollingUp: f,
        savedScroll: m
    }
}
const Se = P({
    scrollBehavior: String,
    modelValue: {
        type: Boolean,
        default: !0
    },
    location: {
        type: String,
        default: "top",
        validator: e => ["top", "bottom"].includes(e)
    },
    ...q(),
    ...se(),
    ..._e(),
    height: {
        type: [Number, String],
        default: 64
    }
}, "VAppBar")
    , xe = C()({
        name: "VAppBar",
        props: Se(),
        emits: {
            "update:modelValue": e => !0
        },
        setup(e, c) {
            let { slots: t } = c;
            const r = D()
                , o = re(e, "modelValue")
                , l = i(() => {
                    var y;
                    const n = new Set(((y = e.scrollBehavior) == null ? void 0 : y.split(" ")) ?? []);
                    return {
                        hide: n.has("hide"),
                        inverted: n.has("inverted"),
                        collapse: n.has("collapse"),
                        elevate: n.has("elevate"),
                        fadeImage: n.has("fade-image")
                    }
                }
                )
                , m = i(() => {
                    const n = l.value;
                    return n.hide || n.inverted || n.collapse || n.elevate || n.fadeImage || !o.value
                }
                )
                , { currentScroll: v, scrollThreshold: g, isScrollingUp: f, scrollRatio: u } = pe(e, {
                    canScroll: m
                })
                , h = i(() => e.collapse || l.value.collapse && (l.value.inverted ? u.value > 0 : u.value === 0))
                , d = i(() => e.flat || l.value.elevate && (l.value.inverted ? v.value > 0 : v.value === 0))
                , s = i(() => l.value.fadeImage ? l.value.inverted ? 1 - u.value : u.value : void 0)
                , b = i(() => {
                    var x, T;
                    if (l.value.hide && l.value.inverted)
                        return 0;
                    const n = ((x = r.value) == null ? void 0 : x.contentHeight) ?? 0
                        , y = ((T = r.value) == null ? void 0 : T.extensionHeight) ?? 0;
                    return n + y
                }
                );
            ue(i(() => !!e.scrollBehavior), () => {
                de(() => {
                    l.value.hide ? l.value.inverted ? o.value = v.value > g.value : o.value = f.value || v.value < g.value : o.value = !0
                }
                )
            }
            );
            const { ssrBootStyles: p } = ie()
                , { layoutItemStyles: V } = ce({
                    id: e.name,
                    order: i(() => parseInt(e.order, 10)),
                    position: A(e, "location"),
                    layoutSize: b,
                    elementSize: _(void 0),
                    active: o,
                    absolute: A(e, "absolute")
                });
            return w(() => {
                const n = E.filterProps(e);
                return a(E, L({
                    ref: r,
                    class: ["v-app-bar", {
                        "v-app-bar--bottom": e.location === "bottom"
                    }, e.class],
                    style: [{
                        ...V.value,
                        "--v-toolbar-image-opacity": s.value,
                        height: void 0,
                        ...p.value
                    }, e.style]
                }, n, {
                    collapse: h.value,
                    flat: d.value
                }), t)
            }
            ),
                {}
        }
    })
    , Te = C()({
        name: "VAppBarTitle",
        props: z(),
        setup(e, c) {
            let { slots: t } = c;
            return w(() => a($, L(e, {
                class: "v-app-bar-title"
            }), t)),
                {}
        }
    })
    , Ve = "/assets/logo-DBEDg7TP.png"
    , Be = {
        class: "text-h6"
    }
    , ke = F({
        __name: "AppBar",
        setup(e) {
            const c = j()
                , t = i(() => c.balance.toFixed(2));
            return (r, o) => (M(),
                U(xe, {
                    color: "black"
                }, {
                    append: S(() => [a(G, {
                        class: "py-1 px-4 rounded",
                        color: "#7c3aed"
                    }, {
                        default: S(() => [ve("p", Be, "R$ " + me(t.value), 1)]),
                        _: 1
                    })]),
                    default: S(() => [a(Te, null, {
                        default: S(() => [a(N, {
                            width: 150,
                            src: Ve
                        })]),
                        _: 1
                    })]),
                    _: 1
                }))
        }
    })
    , Ae = F({
        __name: "default",
        setup(e) {
            return (c, t) => {
                const r = fe("router-view");
                return M(),
                    U(ge, null, {
                        default: S(() => [a(ke), a(he, null, {
                            default: S(() => [a(r)]),
                            _: 1
                        })]),
                        _: 1
                    })
            }
        }
    });
export { Ae as default };
