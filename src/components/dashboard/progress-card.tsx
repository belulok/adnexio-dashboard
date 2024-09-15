// src/components/dashboard/progress-card.tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function ProgressCard({ title, value, color }: ProgressCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				{/* Progress bar and value */}
			</CardContent>
		</Card>
	);
}
