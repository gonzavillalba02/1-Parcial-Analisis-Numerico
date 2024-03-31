const biseccion = (a, b, fun, max_iter=1000) => {

    let funcion = fun;
    console.log(funcion)
    funcion = funcion.replace("cos", "Math.cos");
    funcion = funcion.replace("sen", "Math.sin");
    funcion = funcion.replace("tan", "Math.tan");
    funcion = funcion.replace("atan", "Math.atan");
    funcion = funcion.replace("e**", "Math.exp");
    funcion = funcion.replace("log", "Math.log");
    funcion = funcion.replace("sqrt", "Math.sqrt");
    console.log(funcion)


    const valuar = (num) => {
        let x = num;
        return eval(funcion)
    }

    console.log(valuar(1))


    if (valuar(a) === 0) {
        return "La raiz encontrada por Bisección es (" + a + "," + valuar(a) + ")"
    } else if (valuar(b) == 0) {
        return "La raiz encontrada por Bisección es (" + b + "," + valuar(b) + ")"
    }

    if (valuar(a)*valuar(b)>0) {
        return "No se puede garantizar que existe raiz en el intervalo"
    } else {
        let cont = 0;
        while (true) {
            cont++;
            let c = (b + a) / 2;
            if (cont >= max_iter) {
                return "La mayor aproximación encontrada por el metodo de Bisección fue (" + c + ",0)"
            }
            if (valuar(c) === 0){
                return "La raiz encontrada por bisección es ("+c+","+valuar(c)+")"
            } else {
                if (valuar(a)*valuar(c)<0){
                    b = c;
                } else {
                    a = c;
                }
            }
        }
    }
}

export default biseccion;