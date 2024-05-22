import db from '@/db';
import { test } from '@/db/schema';

export default async function Home() {
	const values = await db.select().from(test);

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>{JSON.stringify(values)}</main>
	);
}
