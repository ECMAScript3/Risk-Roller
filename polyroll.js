const roll = require("./roll.js");
function m(x, y) {
    return(x - (x % y)) / y;
}
function polyroll(aT = 1, dT = 1, aB = 0, dB = 0, airfield = 0) {
    //max aT value = (attackTroops - 1)
    //dT always equales # defense troops
    let ret = {
        attackWon:  false,
        defenseWon:  false,
        remaining:  0
    };
    let state = {
        a: 3 + aB,
        d: 2 + dB,
        airfield: airfield
    }
    while (state.a>0 && state.d>0 && aT>0 && dT>0) {
        while (m(aT,state.a) <= 0) state.a--;
        while (m(dT,state.d) <= 0) state.d--;
        let j = m(aT, state.a)<m(dT, state.d)?m(aT,state.a):m(dT,state.d);
        while (j-- > 0 && aT>0 && dT>0) {
            let r = roll(state);
            aT -= r.aL;
            dT -= r.dL;
        }
    }
    if (aT>dT) {
        ret.attackWon = true;
        ret.remaining = aT;
    } else {
        ret.defenseWon = true;
        ret.remaining = dT;

    }
    return ret;
};
module.exports = polyroll;