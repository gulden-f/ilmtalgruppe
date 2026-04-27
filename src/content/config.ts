import { defineCollection, z } from 'astro:content';

const notices = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    active: z.boolean().default(true),
    type: z.enum(['info', 'warning', 'success']).default('warning'),
    date: z.coerce.date(),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    phone: z.string(),
    email: z.string().optional(),
    department: z.enum(['Leitung', 'Verwaltung', 'Technik', 'Datenschutz']),
    order: z.number().default(99),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { notices, team, services };
