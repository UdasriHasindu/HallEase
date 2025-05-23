'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';

const chartData = [
	{ month: 'January', desktop: 186, mobile: 80 },
	{ month: 'February', desktop: 305, mobile: 200 },
	{ month: 'March', desktop: 237, mobile: 120 },
	{ month: 'April', desktop: 73, mobile: 190 },
	{ month: 'May', desktop: 209, mobile: 130 },
	{ month: 'June', desktop: 214, mobile: 140 },
	{ month: 'July', desktop: 150, mobile: 100 },
	{ month: 'August', desktop: 190, mobile: 120 },
	{ month: 'September', desktop: 220, mobile: 150 },
	{ month: 'October', desktop: 250, mobile: 180 },
	{ month: 'November', desktop: 300, mobile: 200 },
	{ month: 'December', desktop: 280, mobile: 170 },
];

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: '#2563eb',
	},
	mobile: {
		label: 'Mobile',
		color: '#60a5fa',
	},
} satisfies ChartConfig;

export default function BarChartComponet() {
	return (
		<ChartContainer
			config={chartConfig}
			className='min-h-[200px] w-full box-border border-4'
		>
			<BarChart accessibilityLayer data={chartData}>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey='month'
					tickLine={false}
					tickMargin={10}
					axisLine={false}
					tickFormatter={(value) => value.slice(0, 3)}
				/>
				<Bar dataKey='desktop' fill='var(--color-desktop)' radius={4} />
				<Bar dataKey='mobile' fill='var(--color-mobile)' radius={4} />
			</BarChart>
		</ChartContainer>
	);
}
