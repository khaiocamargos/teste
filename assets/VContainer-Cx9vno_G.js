import "./VGrid-CmoWF2CG.js";
import {p as n, m as o, a as r, g as l, e as i, u as c, c as m} from "./index-DuJTDyAq.js";
const u = n({
    fluid: {
        type: Boolean,
        default: !1
    },
    ...o(),
    ...r()
}, "VContainer")
  , d = l()({
    name: "VContainer",
    props: u(),
    setup(e, a) {
        let {slots: s} = a;
        const {rtlClasses: t} = i();
        return c(()=>m(e.tag, {
            class: ["v-container", {
                "v-container--fluid": e.fluid
            }, t.value, e.class],
            style: e.style
        }, s)),
        {}
    }
});
export {d as V};
