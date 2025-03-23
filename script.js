<<<<<<< HEAD
// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Get the canvas element by its ID and set up the chart context
    var ctx = document.getElementById('dataChart').getContext('2d');
    
    // Create a sample bar chart using Chart.js
    var dataChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Data Points',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(0, 121, 107, 0.6)',
          borderColor: 'rgba(0, 121, 107, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
=======
// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Get the canvas element by its ID and set up the chart context
    var ctx = document.getElementById('dataChart').getContext('2d');
    
    // Create a sample bar chart using Chart.js
    var dataChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Data Points',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(0, 121, 107, 0.6)',
          borderColor: 'rgba(0, 121, 107, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
>>>>>>> 552158a9e6fbd8f0c15295d40a14472fadba09df
  