import periodo from "./graficos/periodo.js";
import genero from "./graficos/genero.js";
import residencia from "./graficos/residgrafic.js";
import estado from "./graficos/estado.js";

let tabelaData;

fetch("http://localhost:3333/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.estado.quantidade);
    residencia.getChat(
      data.residencia.nome,
      data.residencia.quantidade,
      "Residencia"
    );
    periodo.getChat(data.periodo.nome, data.periodo.quantidade, "Periodo");
    genero.getChat(data.genero.nome, data.genero.quantidade, "Genero");
    estado.getChat(data.estado.nome, data.estado.quantidade, "estado");
  })
  .catch((error) => {
    console.log("erro");
  });
