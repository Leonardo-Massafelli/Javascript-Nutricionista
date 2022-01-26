const filtro = document.querySelector("#filtro");

filtro.addEventListener("input", (evt) => {
  console.log(evt.target.value.length);

  const pacientes = document.querySelectorAll(".paciente");

  if (evt.target.value.length > 0) {
    for (let paciente of pacientes) {
      const tdNome = paciente.querySelector(".info-nome");
      const nome = tdNome.textContent;

      const regexp = new RegExp(evt.target.value, "i");

      if (!regexp.test(nome)) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    }
  } else {
    for (let paciente of pacientes) {
      paciente.classList.remove("invisivel");
    }
  }
});
