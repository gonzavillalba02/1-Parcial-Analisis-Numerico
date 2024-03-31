const newton = (a, fun, max_iter=1000) => {

    let funcion = fun;
    funcion = funcion.replace("cos", "Math.cos");
    funcion = funcion.replace("sin", "Math.sin");
    funcion = funcion.replace("tan", "Math.tan");
    funcion = funcion.replace("atan", "Math.atan");
    funcion = funcion.replace("e**", "Math.exp");
    funcion = funcion.replace("log", "Math.log");
    funcion = funcion.replace("sqrt", "Math.sqrt");

    const valuar = (x) => {
        return eval(funcion)
    }
    
    const dev = (x) => {
        let h = 1e-6;
        let f_prime = (valuar(x + h) - valuar(x-h)) / (2*h);
        return f_prime
    }

    let cont = 0;
    while (true) {
        let x0 = a;
        if (cont >= max_iter) {
            return "La mayor aproximación encontrada por Newton fue ("+x0+",0)"
        }
        if (valuar(x0) == 0) {
            return "La raiz encontrada por Newton es ("+x0+","+valuar(x0)+")"
        } else {
            a = x0 - (valuar(x0)/dev(x0));
            cont++;
        }
    }
}

export default newton;