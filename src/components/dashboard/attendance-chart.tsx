// src/components/dashboard/attendance-chart.tsx
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

export function AttendanceChart() {
	const data = {
		labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
		datasets: [
			{
				label: 'Attendance',
				data: [80, 85, 90, 95],
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1,
			},
		],
	};

	return <Line data={data} />;
}
