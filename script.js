document.addEventListener('DOMContentLoaded', function() {
    var calcularCorrienteBtn = document.getElementById('calcularCorriente');
    var calcularResistenciaSerieBtn = document.getElementById('calcularResistenciaSerie');
    var calcularResistenciaParaleloBtn = document.getElementById('calcularResistenciaParalelo');
    var calcularPotenciaBtn = document.getElementById('calcularPotencia');
    var calcularVoltajeBtn = document.getElementById('calcularVoltaje');
    var generarGraficoBtn = document.getElementById('generarGrafico');
  
    calcularCorrienteBtn.addEventListener('click', function() {
      var voltaje = parseFloat(document.getElementById('voltajeCorriente').value);
      var resistencia = parseFloat(document.getElementById('resistenciaCorriente').value);
      var corriente = calcularCorriente(voltaje, resistencia);
      document.getElementById('resultadoCorriente').innerHTML = 'Corriente: ' + corriente + ' A';
    });
  
    calcularResistenciaSerieBtn.addEventListener('click', function() {
      var resistencias = document.getElementById('resistenciaSerie').value.split(',').map(function(resistencia) {
        return parseFloat(resistencia.trim());
      });
      var resistenciaEquivalente = calcularResistenciaEquivalenteSerie(resistencias);
      document.getElementById('resultadoResistenciaSerie').innerHTML = 'Resistencia Equivalente: ' + resistenciaEquivalente + ' Ω';
    });
  
    calcularResistenciaParaleloBtn.addEventListener('click', function() {
      var resistencias = document.getElementById('resistenciaParalelo').value.split(',').map(function(resistencia) {
        return parseFloat(resistencia.trim());
      });
      var resistenciaEquivalente = calcularResistenciaEquivalenteParalelo(resistencias);
      document.getElementById('resultadoResistenciaParalelo').innerHTML = 'Resistencia Equivalente: ' + resistenciaEquivalente + ' Ω';
    });
  
    calcularPotenciaBtn.addEventListener('click', function() {
      var voltaje = parseFloat(document.getElementById('voltajePotencia').value);
      var corriente = parseFloat(document.getElementById('corrientePotencia').value);
      var potencia = calcularPotencia(voltaje, corriente);
      document.getElementById('resultadoPotencia').innerHTML = 'Potencia Disipada: ' + potencia + ' W';
    });
  
    calcularVoltajeBtn.addEventListener('click', function() {
      var corriente = parseFloat(document.getElementById('corrienteVoltaje').value);
      var resistencia = parseFloat(document.getElementById('resistenciaVoltaje').value);
      var voltaje = calcularVoltaje(corriente, resistencia);
      document.getElementById('resultadoVoltaje').innerHTML = 'Voltaje: ' + voltaje + ' V';
    });
  
    generarGraficoBtn.addEventListener('click', function() {
      var tiempos = document.getElementById('tiempos').value.split(',').map(function(tiempo) {
        return parseFloat(tiempo.trim());
      });
      var corrientes = document.getElementById('corrientes').value.split(',').map(function(corriente) {
        return parseFloat(corriente.trim());
      });
      generarGrafico(tiempos, corrientes);
    });
  
    function calcularCorriente(voltaje, resistencia) {
      return voltaje / resistencia;
    }
  
    function calcularResistenciaEquivalenteSerie(resistencias) {
      return resistencias.reduce(function(total, resistencia) {
        return total + resistencia;
      }, 0);
    }
  
    function calcularResistenciaEquivalenteParalelo(resistencias) {
      return 1 / resistencias.reduce(function(total, resistencia) {
        return total + 1 / resistencia;
      }, 0);
    }
  
    function calcularPotencia(voltaje, corriente) {
      return voltaje * corriente;
    }
  
    function calcularVoltaje(corriente, resistencia) {
      return corriente * resistencia;
    }
    function generarGrafico(tiempos, corrientes) {
        var canvas = document.getElementById('graficoCanvas');
        
        new Chart(canvas, {
          type: 'line',
          data: {
            labels: tiempos,
            datasets: [{
              label: 'Corriente',
              data: corrientes,
              backgroundColor: 'rgba(0, 128, 255, 0.3)',
              borderColor: 'rgb(0, 128, 255)',
              borderWidth: 1,
              pointRadius: 3,
              pointBackgroundColor: 'blue',
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'blue'
            }]
          },
          options: {
            responsive: true,
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Tiempo'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Corriente'
                }
              }
            }
          }
        });
      }
                     
    });
  