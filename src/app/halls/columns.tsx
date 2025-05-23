
import { Row, ColumnDef } from '@tanstack/react-table'; // Import Row type
import { Hall as HallType } from '@/types/hall';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { MoreHorizontal } from 'lucide-react';
import { toast } from 'sonner';

type ActionsCellProps = {
	row: Row<HallType>; // Use Row type from @tanstack/react-table
};

const ActionsCell: React.FC<ActionsCellProps> = ({ row }) => {
	const hall = row.original;
	const router = useRouter();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' className='h-8 w-8 p-0'>
					<span className='sr-only'>Open menu</span>
					<MoreHorizontal className='h-4 w-4' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuItem
					onClick={() => {
						navigator.clipboard.writeText(hall.id);
						toast('Hall ID Copied!');
					}}
				>
					Copy Hall ID
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Book Hall</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => router.push(`/hall/${hall.id}`)}
				>
					View Hall
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export const columns: ColumnDef<HallType>[] = [
	{ accessorKey: 'id', header: 'ID' },
	{ accessorKey: 'code', header: 'Code' },
	{ accessorKey: 'capacity', header: 'Capacity' },
	{ accessorKey: 'type', header: 'Type' },
	{ accessorKey: 'status', header: 'Status' },
	{
		id: 'actions',
		cell: ActionsCell, // Use typed component here
	},
];
