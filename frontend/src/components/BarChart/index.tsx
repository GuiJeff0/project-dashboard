import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {

    const options = {
        plotOptional: {
            bar: {
                horizontal: true,
            }
        },
    };

    const mockData = {
        labels: {
            categories: ['Guilherme', 'Barry', 'Pietro', 'Logan']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 70.2]
            }
        ]
    }


  return (
    <Chart 
        options= {{ ...options, xaxis: mockData.labels}}
        series={mockData.series}
        type="bar"
        height= "240"
    />

  );
}

export default BarChart;