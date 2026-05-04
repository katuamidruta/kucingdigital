import { defineCollection, z } from 'astro:content';

const logs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    type: z.enum(['writing', 'mix', 'review', 'conversation', 'experiment']),
    logNumber: z.number().int().positive().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { logs };
