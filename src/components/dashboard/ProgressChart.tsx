// src/components/Dashboard/ProgressChart.tsx
import { Bar } from 'react-chartjs-2';

const ProgressChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Lesson Progress',
        backgroundColor: '#665df5',
        data: [70, 80, 60, 90],
      },
    ],
  };

  return ("Hi");
};

export default ProgressChart;
