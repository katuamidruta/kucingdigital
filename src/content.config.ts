import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const logs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    type: z.string(),
    draft: z.boolean().optional(),
    slug: z.string().optional(),
    duration: z.string().optional(),
    artist: z.string().optional(),
  }),
});

export const collections = { logs };
