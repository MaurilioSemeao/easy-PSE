const ctx = document.getElementById("curso");

class Cusoso {
  getChat(labels, data, title) {
    new Chart(ctx, {
      type: "pie",
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
