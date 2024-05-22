import z from 'zod';

const envSchema = z.object({
	DATABASE_URL: z.string().trim().min(1),
});

export const serverEnvSchema = envSchema.parse(process.env);
