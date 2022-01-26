const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

const pacientes = document.querySelectorAll(".paciente");

const calculaImc = (peso, altura) => {
  let imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
};

const validaPeso = (peso) => {
  if (peso >= 0 && peso <= 1000) {
    return true;
  } else {
    return false;
  }
};

const validaAltura = (altura) => {
  if (altura >= 0 && altura <= 3) {
    return true;
  } else {
    return false;
  }
};

for (let i = 0; i < pacientes.length; i++) {
  const paciente = pacientes[i];

  const tdPeso = paciente.querySelector(".info-peso");
  const tdAltura = paciente.querySelector(".info-altura");
  const peso = tdPeso.textContent;
  const altura = tdAltura.textContent;
  const tdImc = paciente.querySelector(".info-imc");

  let pesoValido = validaPeso(peso);
  let alturaValida = validaAltura(altura);

  if (!pesoValido) {
    pesoValido = false;
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaValida) {
    alturaValida = false;
    tdImc.textContent = "Altura Inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (alturaValida && pesoValido) {
    const imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}
