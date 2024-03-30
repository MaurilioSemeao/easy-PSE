import cursos from "./graficos/cursos.js";
import genero from "./graficos/genero.js";
import residencia from "./graficos/residgrafic.js";

let tabelaData;

fetch("http://localhost:3333/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const cit = data.residencia;
    residencia.getChat(cit.cidade, cit.quantidade, "Residencia");
    const curso = data.curso;
    cursos.getChat(curso.nomeCurso, curso.quantidade, "Periodo");
    genero.getChat(data.genero.genero, data.genero.quantidade, "Genero");
  })
  .catch((error) => {
    console.log("erro");
  });
