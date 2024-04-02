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
    const { residence, period, gender, states, salaryRange, ageRange } = data;

    residencia.getChat(residence.name, residence.amount, "Residencia");
    periodo.getChat(period.name, period.amount, "Periodo");
    genero.getChat(gender.name, gender.amount, "Genero");
    estado.getChat(states.name, states.amount, "estado");
    faixaSalarial.getChat(
      salaryRange.name,
      salaryRange.amount,
      "Faixa Salarial"
    );

    const nameAgeRange = [
      ageRange._18_20.name,
      ageRange._21_30.name,
      ageRange._31_40.name,
      ageRange._41_.name,
    ];

    const amountAgeRange = [
      ageRange._18_20.amount,
      ageRange._21_30.amount,
      ageRange._31_40.amount,
      ageRange._41_.amount,
    ];

    faixaEtaria.getChat(nameAgeRange, amountAgeRange, "Faixa Etaria");
  })
  .catch((error) => {
    console.log("erro");
  });
("");
