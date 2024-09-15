// src/components/Dashboard/StatCard.tsx
interface StatCardProps {
	title: string;
	children: React.ReactNode;
  }

  const StatCard = ({ title, children }: StatCardProps) => {
	return (
	  <div className="bg-white p-4 rounded-md shadow">
		<h3 className="text-lg font-semibold">{title}</h3>
		<div className="mt-4">{children}</div>
	  </div>
	);
  };

  export default StatCard;
