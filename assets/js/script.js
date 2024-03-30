import periodo from "./graficos/periodo.js";
import genero from "./graficos/genero.js";
import residencia from "./graficos/residgrafic.js";
import estado from "./graficos/estado.js";
import faixaEtaria from "./graficos/faixaEtaria.js";
import faixaSalarial from "./graficos/faixaSalarial.js";

fetch("http://localhost:3333/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.residencia.nome);
    residencia.getChat(
      data.residencia.nome,
      data.residencia.quantidade,
      "Residencia"
    );
    periodo.getChat(data.periodo.nome, data.periodo.quantidade, "Periodo");
    genero.getChat(data.genero.nome, data.genero.quantidade, "Genero");
    estado.getChat(data.estado.nome, data.estado.quantidade, "estado");
    const faixaEtaruiaNome = [
      data.faixaEtaria._18_20.nome,
      data.faixaEtaria._21_30.nome,
      data.faixaEtaria._31_40.nome,
      data.faixaEtaria._41_.nome,
    ];

    const faixaEtariaQuantidade = [
      data.faixaEtaria._18_20.quantidade,
      data.faixaEtaria._21_30.quantidade,
      data.faixaEtaria._31_40.quantidade,
      data.faixaEtaria._41_.quantidade,
    ];
    faixaEtaria.getChat(
      faixaEtaruiaNome,
      faixaEtariaQuantidade,
      "Faixa Etaria"
    );

    faixaSalarial.getChat(
      data.faixaSalarial.nome,
      data.faixaSalarial.quantidade,
      "Faixa Salarial"
    );
  })
  .catch((error) => {
    console.log("erro");
  });
