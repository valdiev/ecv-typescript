"use strict";
const lenght = 1000000;
const arrayNumber = Array(lenght);
for (let i = 0; i < lenght; i++) {
    arrayNumber[i] = Math.round(Math.random() * 10);
}
const logiqueDeTri = (a, b) => {
    return b - a;
};
function bench() {
    const debut = Date.now();
    const ret = arrayNumber.sort(logiqueDeTri);
    return Date.now() - debut;
}
// console.log("fonction sort: " + bench())
//# sourceMappingURL=index2.js.map