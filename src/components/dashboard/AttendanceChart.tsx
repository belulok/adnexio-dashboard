// src/components/Dashboard/AttendanceChart.tsx
import { Line } from 'react-chartjs-2';

const AttendanceChart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    datasets: [
      {
        label: 'Attendance',
        backgroundColor: '#ff6384',
        borderColor: '#ff6384',
        data: [90, 95, 92, 98],
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default AttendanceChart;
