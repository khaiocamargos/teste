import {g as m, X as p, Y as ee, m as g, Z as ae, h as te, u as b, c as n, p as V, _ as o, a as B, b as L, d as T, S as P, f as x, $ as ne, a0 as le} from "./index-DuJTDyAq.js";
import {c as I, d as ie, m as D, u as z, e as N, f as de, b as C, g as R, h as se, i as ce, R as ue, j as re, k as ve, L as oe} from "./VGrid-CmoWF2CG.js";
import {b as j, e as F, V as E, f as k, m as me, k as ge, a as ye, g as fe, h as ke, c as be, l as Ce, d as Ve, i as Ie, j as he} from "./VImg-Dy7h4JrB.js";
function h(e) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div"
      , t = arguments.length > 2 ? arguments[2] : void 0;
    return m()({
        name: t ?? p(ee(e.replace(/__/g, "-"))),
        props: {
            tag: {
                type: String,
                default: i
            },
            ...g()
        },
        setup(a, c) {
            let {slots: l} = c;
            return ()=>{
                var s;
                return ae(a.tag, {
                    class: [e, a.class],
                    style: a.style
                }, (s = l.default) == null ? void 0 : s.call(l))
            }
        }
    })
}
const Ae = m()({
    name: "VCardActions",
    props: g(),
    setup(e, i) {
        let {slots: t} = i;
        return te({
            VBtn: {
                slim: !0,
                variant: "text"
            }
        }),
        b(()=>{
            var a;
            return n("div", {
                class: ["v-card-actions", e.class],
                style: e.style
            }, [(a = t.default) == null ? void 0 : a.call(t)])
        }
        ),
        {}
    }
})
  , Se = h("v-card-subtitle")
  , Pe = h("v-card-title")
  , xe = V({
    start: Boolean,
    end: Boolean,
    icon: o,
    image: String,
    text: String,
    ...g(),
    ...I(),
    ...j(),
    ...ie(),
    ...B(),
    ...L(),
    ...D({
        variant: "flat"
    })
}, "VAvatar")
  , _ = m()({
    name: "VAvatar",
    props: xe(),
    setup(e, i) {
        let {slots: t} = i;
        const {themeClasses: a} = T(e)
          , {colorClasses: c, colorStyles: l, variantClasses: s} = z(e)
          , {densityClasses: r} = N(e)
          , {roundedClasses: v} = F(e)
          , {sizeClasses: u, sizeStyles: d} = de(e);
        return b(()=>n(e.tag, {
            class: ["v-avatar", {
                "v-avatar--start": e.start,
                "v-avatar--end": e.end
            }, a.value, c.value, r.value, v.value, u.value, s.value, e.class],
            style: [l.value, d.value, e.style]
        }, {
            default: ()=>[t.default ? n(k, {
                key: "content-defaults",
                defaults: {
                    VImg: {
                        cover: !0,
                        image: e.image
                    },
                    VIcon: {
                        icon: e.icon
                    }
                }
            }, {
                default: ()=>[t.default()]
            }) : e.image ? n(E, {
                key: "image",
                src: e.image,
                alt: "",
                cover: !0
            }, null) : e.icon ? n(C, {
                key: "icon",
                icon: e.icon
            }, null) : e.text, R(!1, "v-avatar")]
        })),
        {}
    }
})
  , _e = V({
    appendAvatar: String,
    appendIcon: o,
    prependAvatar: String,
    prependIcon: o,
    subtitle: [String, Number],
    title: [String, Number],
    ...g(),
    ...I()
}, "VCardItem")
  , Be = m()({
    name: "VCardItem",
    props: _e(),
    setup(e, i) {
        let {slots: t} = i;
        return b(()=>{
            var u;
            const a = !!(e.prependAvatar || e.prependIcon)
              , c = !!(a || t.prepend)
              , l = !!(e.appendAvatar || e.appendIcon)
              , s = !!(l || t.append)
              , r = !!(e.title != null || t.title)
              , v = !!(e.subtitle != null || t.subtitle);
            return n("div", {
                class: ["v-card-item", e.class],
                style: e.style
            }, [c && n("div", {
                key: "prepend",
                class: "v-card-item__prepend"
            }, [t.prepend ? n(k, {
                key: "prepend-defaults",
                disabled: !a,
                defaults: {
                    VAvatar: {
                        density: e.density,
                        image: e.prependAvatar
                    },
                    VIcon: {
                        density: e.density,
                        icon: e.prependIcon
                    }
                }
            }, t.prepend) : n(P, null, [e.prependAvatar && n(_, {
                key: "prepend-avatar",
                density: e.density,
                image: e.prependAvatar
            }, null), e.prependIcon && n(C, {
                key: "prepend-icon",
                density: e.density,
                icon: e.prependIcon
            }, null)])]), n("div", {
                class: "v-card-item__content"
            }, [r && n(Pe, {
                key: "title"
            }, {
                default: ()=>{
                    var d;
                    return [((d = t.title) == null ? void 0 : d.call(t)) ?? e.title]
                }
            }), v && n(Se, {
                key: "subtitle"
            }, {
                default: ()=>{
                    var d;
                    return [((d = t.subtitle) == null ? void 0 : d.call(t)) ?? e.subtitle]
                }
            }), (u = t.default) == null ? void 0 : u.call(t)]), s && n("div", {
                key: "append",
                class: "v-card-item__append"
            }, [t.append ? n(k, {
                key: "append-defaults",
                disabled: !l,
                defaults: {
                    VAvatar: {
                        density: e.density,
                        image: e.appendAvatar
                    },
                    VIcon: {
                        density: e.density,
                        icon: e.appendIcon
                    }
                }
            }, t.append) : n(P, null, [e.appendIcon && n(C, {
                key: "append-icon",
                density: e.density,
                icon: e.appendIcon
            }, null), e.appendAvatar && n(_, {
                key: "append-avatar",
                density: e.density,
                image: e.appendAvatar
            }, null)])])])
        }
        ),
        {}
    }
})
  , Le = h("v-card-text")
  , Te = V({
    appendAvatar: String,
    appendIcon: o,
    disabled: Boolean,
    flat: Boolean,
    hover: Boolean,
    image: String,
    link: {
        type: Boolean,
        default: void 0
    },
    prependAvatar: String,
    prependIcon: o,
    ripple: {
        type: [Boolean, Object],
        default: !0
    },
    subtitle: [String, Number],
    text: [String, Number],
    title: [String, Number],
    ...me(),
    ...g(),
    ...I(),
    ...ge(),
    ...ye(),
    ...se(),
    ...fe(),
    ...ke(),
    ...j(),
    ...ce(),
    ...B(),
    ...L(),
    ...D({
        variant: "elevated"
    })
}, "VCard")
  , Re = m()({
    name: "VCard",
    directives: {
        Ripple: ue
    },
    props: Te(),
    setup(e, i) {
        let {attrs: t, slots: a} = i;
        const {themeClasses: c} = T(e)
          , {borderClasses: l} = be(e)
          , {colorClasses: s, colorStyles: r, variantClasses: v} = z(e)
          , {densityClasses: u} = N(e)
          , {dimensionStyles: d} = Ce(e)
          , {elevationClasses: M} = Ve(e)
          , {loaderClasses: O} = re(e)
          , {locationStyles: w} = Ie(e)
          , {positionClasses: H} = he(e)
          , {roundedClasses: X} = F(e)
          , y = ve(e, t)
          , Y = x(()=>e.link !== !1 && y.isLink.value)
          , f = x(()=>!e.disabled && e.link !== !1 && (e.link || y.isClickable.value));
        return b(()=>{
            const Z = Y.value ? "a" : e.tag
              , $ = !!(a.title || e.title != null)
              , q = !!(a.subtitle || e.subtitle != null)
              , G = $ || q
              , J = !!(a.append || e.appendAvatar || e.appendIcon)
              , K = !!(a.prepend || e.prependAvatar || e.prependIcon)
              , Q = !!(a.image || e.image)
              , U = G || K || J
              , W = !!(a.text || e.text != null);
            return ne(n(Z, {
                class: ["v-card", {
                    "v-card--disabled": e.disabled,
                    "v-card--flat": e.flat,
                    "v-card--hover": e.hover && !(e.disabled || e.flat),
                    "v-card--link": f.value
                }, c.value, l.value, s.value, u.value, M.value, O.value, H.value, X.value, v.value, e.class],
                style: [r.value, d.value, w.value, e.style],
                href: y.href.value,
                onClick: f.value && y.navigate,
                tabindex: e.disabled ? -1 : void 0
            }, {
                default: ()=>{
                    var A;
                    return [Q && n("div", {
                        key: "image",
                        class: "v-card__image"
                    }, [a.image ? n(k, {
                        key: "image-defaults",
                        disabled: !e.image,
                        defaults: {
                            VImg: {
                                cover: !0,
                                src: e.image
                            }
                        }
                    }, a.image) : n(E, {
                        key: "image-img",
                        cover: !0,
                        src: e.image
                    }, null)]), n(oe, {
                        name: "v-card",
                        active: !!e.loading,
                        color: typeof e.loading == "boolean" ? void 0 : e.loading
                    }, {
                        default: a.loader
                    }), U && n(Be, {
                        key: "item",
                        prependAvatar: e.prependAvatar,
                        prependIcon: e.prependIcon,
                        title: e.title,
                        subtitle: e.subtitle,
                        appendAvatar: e.appendAvatar,
                        appendIcon: e.appendIcon
                    }, {
                        default: a.item,
                        prepend: a.prepend,
                        title: a.title,
                        subtitle: a.subtitle,
                        append: a.append
                    }), W && n(Le, {
                        key: "text"
                    }, {
                        default: ()=>{
                            var S;
                            return [((S = a.text) == null ? void 0 : S.call(a)) ?? e.text]
                        }
                    }), (A = a.default) == null ? void 0 : A.call(a), a.actions && n(Ae, null, {
                        default: a.actions
                    }), R(f.value, "v-card")]
                }
            }), [[le("ripple"), f.value && e.ripple]])
        }
        ),
        {}
    }
});
export {Re as V, Pe as a, Le as b, _ as c};
