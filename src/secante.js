const secante = (a, b, fun, max_iter=1000) => {
    let funcion = fun;
    funcion = funcion.replace("cos", "Math.cos");
    funcion = funcion.replace("sen", "Math.sin");
    funcion = funcion.replace("tan", "Math.tan");
    funcion = funcion.replace("atan", "Math.atan");
    funcion = funcion.replace("e**", "Math.exp");
    funcion = funcion.replace("log", "Math.log");
    funcion = funcion.replace("sqrt", "Math.sqrt");

    const valuar = (x) => {
        return eval(funcion)
    }

    let cont = 0;

    let x0 = a;
    let x1 = b;

    while (true) {
        if (valuar(x0) !== valuar(x1)){
            var x2 = x1 - ((valuar(x1)*(x0 - x1)) / (valuar(x0)-valuar(x1)));
        } else {
            return "La mayor aproximación encontrada por Secante fue ("+x2+",0)"
        }
        console.log(x2)
        if (valuar(x2) !== 0) {
            cont++;
            x0 = x1;
            x1 = x2;
        } else {
            return "La raiz encontrada por Secante es ("+x2+",0)"
        }
        if (cont >= max_iter) {
            return "La mayor aproximación encontrada por Secante fue ("+x2+",0)"
        }
    }
}

export default secante;
