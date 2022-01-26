const API = "https://api-pacientes.herokuapp.com/pacientes";
const btnBuscar = document.querySelector("#buscar-pacientes");
const tabelaPacientes = document.querySelector("#tabela-pacientes");

const fetchPacientes = () => {
  fetch(API)
    .then((res) => res.json())
    .then((pacientes) => {
      const pacienteModel = pacientes
        .map((paciente) => {
          return `
                <tr class='paciente'>
                    <td class='info-nome'>${paciente.nome}</td>
                    <td class='info-peso'>${paciente.peso}</td>
                    <td class='info-altura'>${paciente.altura}</td>
                    <td class='info-gordura'>${paciente.gordura}</td>
                    <td class='info-imc'>${paciente.imc}</td>
                </tr>
            `;
        })
        .join("");

      tabelaPacientes.innerHTML += pacienteModel;
    });
};

btnBuscar.addEventListener("click", fetchPacientes);
