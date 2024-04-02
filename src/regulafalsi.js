

const regula_falsi = (a, b, fun, max_iter= 1000) => {

    let funcion = fun;
    funcion = funcion.replace("cos", "Math.cos");
    funcion = funcion.replace("sen", "Math.sin");
    funcion = funcion.replace("tan", "Math.tan");
    funcion = funcion.replace("aMath.tan", "Math.atan");
    funcion = funcion.replace("e**", "Math.exp");
    funcion = funcion.replace("log", "Math.log");
    funcion = funcion.replace("sqrt", "Math.sqrt");

    const valuar = (num) => {
        let x = num;
        return eval(funcion)
    }
    
    const dev = (x) => {
        let h = 1e-6;
        let f_prime = (valuar(x + h) - valuar(x)) / h;
        return f_prime * x
    }

    if (valuar(a) == 0){
        return "La raiz encontrada por Regula Falsi es (" + a + "," + valuar(a) + ")"
    } else if (valuar(b) == 0) {
        return "La raiz encontrada por Regula False es (" + b + "," + valuar(b) + ")"
    }

    if (valuar(a)*valuar(b) > 0) {
        console.log(valuar(a))
        console.log(valuar(b))
        return "No se puede garantizar que existe raiz en el intervalo"
    } else {
        let cont = 0;
        let punto = (b+a)/2;

        if ((dev(punto)>0 && dev(dev(punto))<0) || (dev(punto)<0 && dev(dev(punto))>0)){
            var fijo = a;
            var otro = b;
        } else {
            var fijo = b;
            var otro = a;
        }

        while (true) {
            cont++;
            
            let c = fijo - ((fijo - otro)/(valuar(fijo) - valuar(otro))) * valuar(fijo)
            if (cont >= max_iter) {
                return "La mayor aproximación encontrada por Regula Falsi fue (" + c + ",0)"
            }

            if (valuar(c) == 0) {
                return "La raiz encontrada por Regula Falsi es ("+c+","+valuar(c)+")"
            } else {
                otro = c;
            }
        }
    }
}


export default regula_falsi;