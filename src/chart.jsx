import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CubicFunctionChart = ({funcion}) => {
  const chartRef = useRef();
  const chartInstanceRef = useRef(null); // Mantén una referencia al objeto de instancia de Chart

  let func = funcion;
  func = func.replace("cos", "Math.cos");
  func = func.replace("sen", "Math.sin");
  func = func.replace("tan", "Math.tan");
  func = func.replace("aMath.tan", "Math.atan");
  func = func.replace("e**", "Math.exp");
  func = func.replace("log", "Math.log");
  func = func.replace("sqrt", "Math.sqrt");

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Función para calcular y
    const calcularY = (x) => { 
        return eval(func);
    };

    // Generar valores de x con paso de 0.1
    const xValues = [];
    for (let i = -10; i <= 10; i++) {
      xValues.push(i);
    }

    // Generar valores de y correspondientes
    const yValues = xValues.map(calcularY);

    // Generar labels para el eje x
    const xLabels = Array.from({ length: 21 }, (_, index) => index - 10);

    // Si ya existe una instancia de Chart, actualiza sus datos
    if (chartInstanceRef.current) {
      chartInstanceRef.current.data.datasets[0].data = yValues;
      chartInstanceRef.current.data.labels = xLabels;
      chartInstanceRef.current.update(); // Actualiza el gráfico con los nuevos datos
    } else {
      // Si no hay una instancia de Chart, crea una nueva
      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: xLabels,
          datasets: [{
            label: "Funcion",
            data: yValues,
            borderColor: '#F83C86',
            borderWidth: 2,
            fill: false,
            tension: 0.3
          }]
        },
        options: {
          scales: {
            x: {
              ticks: {
                color: 'black'
              },
              grid: {
                color: 'black'
              }
            },
            y: {
              min: -10,
              max: 10,
              ticks: {
                color: 'black'
              },
              grid: {
                color: 'black'
              }
            }
          }
        }
      });
    }
  }, [funcion]);

  return <canvas ref={chartRef} />;
};

export default CubicFunctionChart;
