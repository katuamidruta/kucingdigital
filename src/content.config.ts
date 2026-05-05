import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const logs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/logs' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    type: z.string(),
    logNumber: z.number().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { logs };
