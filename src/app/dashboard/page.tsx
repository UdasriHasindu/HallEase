import { Input } from '@/components/ui/input';
import SidebarLayout from '@/layouts/Sidebar/Layout';
import { createClient } from '@/lib/supabaseServer';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
// import { Label } from '@/components/ui/label';
import BarChartComponet from '@/app/dashboard/component';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { MoreHorizontal, ChevronRight } from 'lucide-react';
// import { Calendar } from '@/components/ui/calendar';
// import React from 'react';
import PieChart from './pie-chart';

// import TestComponent from './TestComponent';

export default async function Dashboard() {
	// navigate back to login if user not logged
	const supabase = await createClient();

	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect('/');
	}

	// const [date, setDate] = React.useState<Date | undefined>(new Date());

	return (
		<SidebarLayout>
			{/* <TestComponent /> */}
			{/* Grid Layout */}
			<div className='grid grid-cols-3 gap-x-4 gap-y-6'>
				{/* Column-1|2 */}
				<div className='col-span-2 grid grid-cols-2 gap-x-4 gap-y-6'>
					{/* HallEase Bot */}
					<div className='col-span-2 w-full'>
						<div className='flex flex-row gap-2'>
							<Input
								placeholder='Message to HallEase bot'
								className='w-full'
							/>
							<Button>Go</Button>
						</div>
					</div>
					{/* Recent Bookings */}
					<div className='flex justify-center w-full items-start'>
						<Card className='w-full'>
							<CardHeader>
								<CardTitle>Recent Bookings</CardTitle>
								<CardDescription>
									5 pending approvals
								</CardDescription>
							</CardHeader>
							<CardContent className='grid gap-4'>
								<div className='flex items-center space-x-4 rounded-md border p-4'>
									<div className='flex-1 space-y-1'>
										<p className='text-sm font-medium leading-none'>
											Annual General Meeting
										</p>
										<p className='text-sm text-muted-foreground'>
											Tomorrow
										</p>
									</div>
									<Button variant='ghost'>
										<MoreHorizontal />
									</Button>
								</div>
								<div className=' flex items-center space-x-4 rounded-md border p-4'>
									<div className='flex-1 space-y-1'>
										<p className='text-sm font-medium leading-none'>
											Business Conference
										</p>
										<p className='text-sm text-muted-foreground'>
											Next Friday
										</p>
									</div>
									<Button variant='ghost'>
										<MoreHorizontal />
									</Button>
								</div>
								<div className=' flex items-center space-x-4 rounded-md border p-4'>
									<div className='flex-1 space-y-1'>
										<p className='text-sm font-medium leading-none'>
											Networking Event
										</p>
										<p className='text-sm text-muted-foreground'>
											February 20
										</p>
									</div>
									<Button variant='ghost'>
										<MoreHorizontal />
									</Button>
								</div>
							</CardContent>
							<CardFooter>
								<Button variant='outline'>
									<span>See All</span>
									<ChevronRight />
								</Button>
							</CardFooter>
						</Card>
					</div>

					{/* Chart */}
					<div className=''>
						<PieChart />
					</div>
				</div>

				{/* Column-3 */}
				<div>
					<div className='flex items-center justify-center flex-col gap-4'>
						<div className='flex flex-row gap-1 w-full'>
							<Card className='w-1/2'>
								<CardHeader className='pb-1 pt-3 px-4'>
									<CardTitle className='font-thin'>
										Total Bookings
									</CardTitle>
									<CardDescription>
										+10% last week
									</CardDescription>
								</CardHeader>
								<CardContent className='pb-2 px-4'>
									<span className='font-extrabold text-2xl'>
										+20
									</span>
								</CardContent>
							</Card>
							<Card className='w-1/2'>
								<CardHeader className='pb-1 pt-3 px-4'>
									<CardTitle className='font-thin'>
										Upcoming Events
									</CardTitle>
									<CardDescription>
										-5% last week
									</CardDescription>
								</CardHeader>
								<CardContent className='pb-2 px-4'>
									<span className='font-extrabold text-2xl'>
										+5
									</span>
								</CardContent>
							</Card>
						</div>
						<div className='flex flex-row gap-1 w-full'>
							<Card className='w-1/2'>
								<CardHeader className='pb-1 pt-3 px-4'>
									<CardTitle className='font-thin'>
										Occupied Now
									</CardTitle>
									<CardDescription>
										-50% last hour
									</CardDescription>
								</CardHeader>
								<CardContent className='pb-2 px-4'>
									<span className='font-extrabold text-2xl'>
										+10
									</span>
								</CardContent>
							</Card>
							<Card className='w-1/2'>
								<CardHeader className='pb-1 pt-3 px-4'>
									<CardTitle className='font-thin'>
										Cancellations
									</CardTitle>
									<CardDescription>
										-90% fewer
									</CardDescription>
								</CardHeader>
								<CardContent className='pb-2 px-4'>
									<span className='font-extrabold text-2xl'>
										+3
									</span>
								</CardContent>
							</Card>
						</div>

						<div className='w-full'>
							<BarChartComponet />
						</div>
					</div>
				</div>
			</div>
		</SidebarLayout>
	);
}
