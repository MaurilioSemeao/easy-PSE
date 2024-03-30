const ctx = document.getElementById("genero");

class Cusoso {
  getChat(labels, data, title) {
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            label: title,
            data: data,
            borderWidth: 1,
            backgroundColor: ["#E3371E", "#0593A2"],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  }
}

export default new Cusoso();
