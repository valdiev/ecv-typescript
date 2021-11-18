import { Grille } from './Grille.js';
function init() {
    const mapCanvas = document.querySelector("#map");
    const viewCanvas = document.querySelector("#view");
    // const view3D: IView3D = new View3D({
    //     canvas: viewCanvas,
    //     blockStyles,
    //     couleurPlafond: "#223344",
    //     couleurSol: "#448844"
    // })
    window.addEventListener("keyup", (evt) => {
        switch (evt.key) {
            case "ArrowUp":
                console.log("up");
                break;
            case "ArrowDown":
                console.log("down");
                break;
            case "ArrowLeft":
                console.log("left");
                break;
            case "ArrowRight":
                console.log("right");
                break;
        }
        //evt.preventDefault()
    });
    window.addEventListener("keydown", (evt) => {
        switch (evt.key) {
            case "ArrowUp":
                console.log("up");
                break;
            case "ArrowDown":
                console.log("down");
                break;
            case "ArrowLeft":
                console.log("left");
                break;
            case "ArrowRight":
                console.log("right");
                break;
        }
        //evt.preventDefault()
    });
    // const delay: number = Math.floor(1000 / 30)
    // let lastTime: number = Date.now()
    // function render () {
    //     const newTime: number = Date.now()
    //     const delay: number = newTime - lastTime
    //     /*point.deplace(delay)
    //     grille.lanceRayons( point.x, point.y, point.angle )
    //     grille.dessine()
    //     point.dessine()
    //     view3D.dessine()
    //     */
    //     //console.log(delay)
    //     lastTime = newTime
    // }
    // setInterval(render, delay)
    const blockStyles = { 1: "rgba(238,68,0,1.0)" };
    const grille = new Grille({
        canvas: mapCanvas,
        data: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        blockStyles,
        couleurFond: "#EEE",
        couleurGrille: "#333",
        nbRayons: viewCanvas.width,
        angleRayons: Math.PI * .5,
        // vue: view3D
    });
}
init();
//# sourceMappingURL=main.js.map