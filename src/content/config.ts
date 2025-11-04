import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string(),
    }),
    render: true,
});

export const collections = {
    blog: blogCollection,
};
