'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabaseClient';
import { User } from '@supabase/supabase-js';

export default function ProtectedPage({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();
	const [user, setUser] = useState<User | null | 'loading'>('loading'); // Prevents flickering

	useEffect(() => {
		const supabase = createClient();

		supabase.auth.getUser().then(({ data, error }) => {
			// Redirect to login if not authenticated
			if (error || !data?.user) {
				router.replace('/login');
			} else {
				setUser(data.user);
			}
		});
	}, [router]);

	if (user === 'loading')
		return (
			<div className='flex justify-center items-center h-screen'>
				<p className='text-gray-500 text-lg'>
					Checking authentication...
				</p>
			</div>
		);

	return <>{children}</>;
}
