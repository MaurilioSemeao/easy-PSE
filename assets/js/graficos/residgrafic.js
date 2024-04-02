const ctx = document.getElementById("cidades");

let cor = [
  "rgb(255, 99, 132)",
  "rgb(54, 162, 235)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
];

class Residencia {
  getChat(labels, data, title) {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: title,
            data: data,
            borderWidth: 3,
            borderColor: "rgba(0, 0, 0)",
            backgroundColor: cor,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}

export default new Residencia();
