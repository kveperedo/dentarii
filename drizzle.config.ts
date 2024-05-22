import { defineConfig } from 'drizzle-kit';
import { serverEnvSchema } from './server-env-schema';

export default defineConfig({
	schema: 'src/db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: serverEnvSchema.DATABASE_URL,
	},
	out: './migrations',
	verbose: true,
	strict: true,
});
