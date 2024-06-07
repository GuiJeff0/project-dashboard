import React from 'react';
import Chart from 'react-apexcharts';

const DonutChart = () => {
    const mockData = {
        series: [313, 312, 112, 421],
        labels: ['Guilherme', 'Barry', 'Pietro', 'Logan']
    }

    const options = {
        legend: {
            show: true
        }
    }


  return (
    <Chart 
        options= {{ ...options, labels: mockData.labels}}
        series={mockData.series}
        type="donut"
        height= "240"
    />

  );
}

export default DonutChart;