const ctx = document.getElementById("faixa-salarial");

class FaixaEtaria {
  getChat(labels, data, title) {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: title,
            data: data,
            borderWidth: 1,
            backgroundColor: ["#E3371E", "#0593A2", "#D465FF", "#FFD700"],
          },
        ],
      },
      options: {
        indexAxis: "y",
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  }
}

export default new FaixaEtaria();
