import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { serverEnvSchema } from '../../server-env-schema';

const client = postgres(serverEnvSchema.DATABASE_URL, { prepare: false });
const db = drizzle(client);

export default db;
