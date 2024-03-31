import './App.css';
import { useState } from  'react';
import biseccion from './biseccion';
import newton from './newton';
import regula_falsi from './regulafalsi';
import secante from './secante';
import CubicFunctionChart from './chart';
import imagen from './assets/images.png';

function App() {

  const [fun, setFun] = useState("");
  const [funcionGraficada, setFuncionGraficada] = useState("");

  const handleGraficada = () => {
    setFuncionGraficada(fun);
  }

  const [a, setA] = useState("");

  const [b, setB] = useState("");

  const [active, setActive] = useState("");

  const [msj, setMsj] = useState("Todavía no hay información.");

  const [error, setError] = useState(false);

  return (
    <div className="App">
      <header className="header">
        <h1 className="nombre">Gonzalo Emiliano Villalba</h1>
        <h2 className="docu">44.444.859</h2>
      </header>
      <main>
        <form className="form">
          <input className="inputFuncion" type="text" placeholder="Ingrese su función" id="funcion" value={fun}
          onChange={(e)=>{
            e.preventDefault();
            setFun(e.target.value);
          }}
          />
          <div className="containerButtons">
            <button onClick={(e)=> {
              e.preventDefault();
              setActive("biseccion")
              }}
              className={active === "biseccion" ? "boton-activo" : ""}
              >
              Bisección
            </button>
            <button onClick={(e)=> {
              e.preventDefault();
              setActive("regula")
            }}
            className={active === "regula" ? "boton-activo" : ""}>
              Regula Falsi
            </button>
            <button onClick={(e)=> {
              e.preventDefault();
              setActive("newton")
            }}
            className={active === "newton" ? "boton-activo" : ""}>
              Newton
            </button>
            <button onClick={(e)=> {
              e.preventDefault();
              setActive("secante")
            }}
            className={active === "secante" ? "boton-activo" : ""}>
              Secante
            </button>
          </div>
        </form>

        <section className="abajo">
          <div className="abajoPrimero">
            <p>!! Para la operación de potencia debe ingresar "**". Por ejemplo e**(x).<br /><br/>
            Tenga en cuenta que en Newton solo se utilizará el parametro A del intervalo para realizar el calculo.</p>
            <div className="abajoPrimero-inputs">
              <input type="text" placeholder="Ingrese A" 
              onChange={(e)=>{
                e.preventDefault();
                setA(parseFloat(e.target.value));
              }}/>
              <input type="text" placeholder="Ingrese B"
              onChange={(e)=>{
                e.preventDefault();
                setB(parseFloat(e.target.value));
              }}/>
            </div>
            <button className="calcular"
            onClick={()=> 
              {
              try {
                setError(false);
                if(a !== "") {
                  switch (active) {
                    case 'biseccion':
                      setMsj(biseccion(a,b, fun));
                      handleGraficada();
                      break;
                    case 'regula':
                      setMsj(regula_falsi(a,b, fun));
                      handleGraficada();
                      break;
                    case 'newton':
                      setMsj(newton(a, fun));
                      handleGraficada();
                      break;
                    case 'secante':
                      setMsj(secante(a,b,fun));
                      handleGraficada();
                      break;
                    default:
                      setMsj("Por favor seleccione un metodo para el calculo.")
                  }
                } else {
                  setMsj("Por favor ingrese numeros del intervalo")
                }
              } catch {
                setError(true);
              }
              }
            }
            >Calcular</button>
            <div className={"results" + (error ? " error" : "")}>
              {!error ? msj : "Ha ocurrido un error. Por favor revise si ingreso correctamente la formula. Recuerde colocar ( ) dividiendo las operaciones. Funciones: sen(), cos(), tan(), atan(), tanh(), cosh(), senh(), e**()."}
            </div>
          </div>
          <div className="grafico">
            {error ? <img src={imagen}/> : <CubicFunctionChart funcion={funcionGraficada}/>}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
