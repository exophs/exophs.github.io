import {
    S as _,
    i as m,
    s as u,
    C as c,
    y as p,
    a as $,
    z as d,
    c as g,
    A as y,
    b,
    D as C,
    E as S,
    F as T,
    g as l,
    d as f,
    B as h,
    h as q
} from "../chunks/index.eaa2c7e1.js";
import {
    T as v
} from "../chunks/Toaster.2621692e.js";
import "../chunks/toast.8b0d2530.js";

function w(n) {
    let s, o, a;
    s = new v({});
    const r = n[1].default,
        e = c(r, n, n[0], null);
    return {
        c() {
            p(s.$$.fragment), o = $(), e && e.c()
        },
        l(t) {
            d(s.$$.fragment, t), o = g(t), e && e.l(t)
        },
        m(t, i) {
            y(s, t, i), b(t, o, i), e && e.m(t, i), a = !0
        },
        p(t, [i]) {
            e && e.p && (!a || i & 1) && C(e, r, t, t[0], a ? T(r, t[0], i, null) : S(t[0]), null)
        },
        i(t) {
            a || (l(s.$$.fragment, t), l(e, t), a = !0)
        },
        o(t) {
            f(s.$$.fragment, t), f(e, t), a = !1
        },
        d(t) {
            h(s, t), t && q(o), e && e.d(t)
        }
    }
}

function z(n, s, o) {
    let {
        $$slots: a = {},
        $$scope: r
    } = s;
    return n.$$set = e => {
        "$$scope" in e && o(0, r = e.$$scope)
    }, [r, a]
}
class E extends _ {
    constructor(s) {
        super(), m(this, s, z, w, u, {})
    }
}
export {
    E as component
};