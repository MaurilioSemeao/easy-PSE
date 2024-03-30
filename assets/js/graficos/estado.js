const ctx = document.getElementById("estado");

class Estado {
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
            backgroundColor: ["#E3371E", "#0593A2", "#35FF56"],
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

export default new Estado();
