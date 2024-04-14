import {A as c, I as f, B as i, C as d, D as e, c as t, J as r, E as m} from "./index-DuJTDyAq.js";
import {V as _, a as x, b as V} from "./VCard-D3MqCLzj.js";
import {V as n} from "./VGrid-CmoWF2CG.js";
import {V as C} from "./VContainer-Cx9vno_G.js";
import "./VImg-Dy7h4JrB.js";
const k = m("p", {
    class: "pt-3 text-caption"
}, "Selecione um tipo acima para avaliar", -1)
  , y = c({
    __name: "HelloWorld",
    setup(u) {
        const l = f()
          , s = a=>{
            l.push(`/evaluator?type=${a}`)
        }
        ;
        return (a,o)=>(i(),
        d(C, {
            class: "d-flex flex-column align-center justify-center fade"
        }, {
            default: e(()=>[t(_, {
                class: "rounded-xl w-75"
            }, {
                default: e(()=>[t(x, {
                    style: {
                        "background-color": "black"
                    },
                    class: "d-flex justify-center aling-center pa-4"
                }, {
                    default: e(()=>[r(" O QUE VOCÊ PREFERE? 👇 ")]),
                    _: 1
                }), t(V, {
                    style: {
                        "background-color": "white"
                    },
                    class: "pa-4"
                }, {
                    default: e(()=>[t(n, {
                        variant: "outlined",
                        color: "black",
                        style: {
                            "font-size": "0.8rem"
                        },
                        class: "w-100 d-flex mb-4 justify-start rounded-xl",
                        size: "large",
                        "prepend-icon": "mdi-alpha-a-circle-outline",
                        onClick: o[0] || (o[0] = p=>s("image"))
                    }, {
                        default: e(()=>[r(" Posts (Fotos) ")]),
                        _: 1
                    }), t(n, {
                        variant: "outlined",
                        color: "black",
                        style: {
                            "font-size": "0.8rem"
                        },
                        class: "w-100 rounded-xl d-flex justify-start",
                        size: "large",
                        "prepend-icon": "mdi-alpha-b-circle-outline",
                        onClick: o[1] || (o[1] = p=>s("video"))
                    }, {
                        default: e(()=>[r(" Reels (Vídeos curtos) ")]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            }), k]),
            _: 1
        }))
    }
})
  , E = c({
    __name: "index",
    setup(u) {
        return (l,s)=>{
            const a = y;
            return i(),
            d(a)
        }
    }
});
export {E as default};