import { av as d, r as v, p as k, m as P, a as C, b as S, g, d as h, t as b, u as y, c as V } from "./index-DuJTDyAq.js";
import { m as f, k as B, a as R, g as p, h as T, b as D, u as E, c as L, l as j, d as x, i as F, j as N, e as q } from "./VImg-Dy7h4JrB.js";
const G = d("balance", () => {
    const e = v(0);
    return {
        balance: e,
        increment: s => {
            e.value += s
        }
    }
}
)
    , w = k({
        color: String,
        ...f(),
        ...P(),
        ...B(),
        ...R(),
        ...p(),
        ...T(),
        ...D(),
        ...C(),
        ...S()
    }, "VSheet")
    , H = g()({
        name: "VSheet",
        props: w(),
        setup(e, a) {
            let { slots: s } = a;
            const { themeClasses: o } = h(e)
                , { backgroundColorClasses: t, backgroundColorStyles: n } = E(b(e, "color"))
                , { borderClasses: l } = L(e)
                , { dimensionStyles: r } = j(e)
                , { elevationClasses: c } = x(e)
                , { locationStyles: u } = F(e)
                , { positionClasses: i } = N(e)
                , { roundedClasses: m } = q(e);
            return y(() => V(e.tag, {
                class: ["v-sheet", o.value, t.value, l.value, c.value, i.value, m.value, e.class],
                style: [n.value, r.value, u.value, e.style]
            }, s)),
                {}
        }
    });
export { H as V, G as u };
