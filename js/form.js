const btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", (evt) => {
  evt.preventDefault();
  const form = document.querySelector("#form-adiciona");

  const paciente = obtemPacienteDoForm(form);

  let erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMesagemDeErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  document.querySelector("#mensagem-erro").innerHTML = "";

  form.reset();
});

const obtemPacienteDoForm = (form) => {
  const paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };

  return paciente;
};

const montaTr = (paciente) => {
  const pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
};

const montaTd = (dado, classe) => {
  const td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
};

const validaPaciente = (paciente) => {
  const erros = [];
  if (!validaPeso(paciente.peso)) erros.push("O peso é invalido");

  if (!validaAltura(paciente.altura)) erros.push("A altura é invalido");

  if (paciente.nome.length === 0) erros.push("O nome deve ser preenchido");
  if (paciente.gordura.length === 0)
    erros.push("A gordura deve ser preenchida");
  if (paciente.peso.length === 0) erros.push("O peso deve ser preenchido");
  if (paciente.altura.length === 0) erros.push("A altura deve ser preenchida");

  return erros;
};

const exibeMesagemDeErro = (erros) => {
  const listaErros = document.querySelector("#mensagem-erro");
  listaErros.innerHTML = "";

  erros.forEach((erro) => {
    const li = document.createElement("li");
    li.textContent = erro;

    listaErros.appendChild(li);
  });
};

const adicionaPacienteNaTabela = (paciente) => {
  const pacienteTr = montaTr(paciente);
  const tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
};
