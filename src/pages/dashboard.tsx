// src/pages/dashboard.tsx
import { Layout } from '@/components/layout';
import { withAuth } from '@/components/withAuth';
import { ProgressCard } from '@/components/dashboard/progress-card';
import { AttendanceChart } from '@/components/dashboard/attendance-chart';

function Dashboard() {
	return (
		<Layout>
			<h1 className="text-2xl font-bold mb-6">Dashboard</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
				{/* Progress Cards */}
				<ProgressCard
					title="Lesson Progress"
					value={75}
					color="bg-blue-500"
				/>
				<ProgressCard
					title="Attendance"
					value={90}
					color="bg-green-500"
				/>
				{/* Add more cards as needed */}
			</div>

			{/* Graphs */}
			<div className="mt-8">
				<h2 className="text-xl font-bold mb-4">Attendance Over Time</h2>
				<AttendanceChart />
			</div>
		</Layout>
	);
}

export default withAuth(Dashboard);
