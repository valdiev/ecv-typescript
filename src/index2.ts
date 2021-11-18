const lenght: number = 1000000
const arrayNumber: number[] = Array(lenght)

for(let i=0; i<lenght; i++) {
    arrayNumber[i] = Math.round(Math.random() * 10)
}

const logiqueDeTri = (a:number, b: number) => {
    return b - a
}


function bench(): number {
    const debut : number = Date.now()
    const ret: number[] = arrayNumber.sort(logiqueDeTri)
    return Date.now() - debut
}

// console.log("fonction sort: " + bench())


