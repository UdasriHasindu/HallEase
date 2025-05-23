'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabaseServer';
// import { store } from '@/redux/store';
// import { clearAuth } from '@/redux/authSlice';

export async function login(formData: FormData) {
	// store.dispatch(clearAuth());

	const supabase = await createClient();

	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	};

	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		const errorMessage = encodeURIComponent(error.message);
		redirect(`/login/error?message=${errorMessage}`);
	}

	revalidatePath('/', 'layout');
	redirect('/auth/callback');
}
