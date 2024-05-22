import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { serverEnvSchema } from '../server-env-schema';

const main = async () => {
	console.log('Migrating database...');

	try {
		const client = postgres(serverEnvSchema.DATABASE_URL, { prepare: false });
		const db = drizzle(client);

		await migrate(db, { migrationsFolder: './migrations' });
		console.log('Migration completed');
		process.exit(0);
	} catch (error) {
		console.error('Error during migration:', error);
		process.exit(1);
	}
};
main();
