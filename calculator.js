// calculator.js
$(document).ready(function() {
    let chart;

    $('#calculatorForm').submit(function(e) {
        e.preventDefault();
        let equation = $('#equation').val();
        let canvas = document.getElementById('graph').getContext('2d');
        let xValues = [];
        let yValues = [];

        for (let x = -10; x <= 10; x += 0.1) {
            xValues.push(x);
            yValues.push(eval(equation));
        }

        if(chart) chart.destroy();

        chart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [{
                    label: equation,
                    data: yValues,
                    backgroundColor: 'rgba(0, 123, 255, 0.3)',
                    borderColor: 'rgba(0, 123, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'X'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Y'
                        }
                    }
                }
            }
        });
    });
    
    $('#resetBtn').on('click', () => {
        if(chart) chart.destroy();
    });
    
});
