// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// 3. Define your collection(s)

/**
 * Blog collection — local MDX files in src/content/blog/
 * Each post is a .mdx file with frontmatter matching this schema.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().optional(),
    authorImage: z.string().optional(),
    authorBio: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
})

/**
 * Projects collection — local MDX files in src/content/projects/
 * Each project is a .mdx file structured as a case study.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    status: z.enum(['completed', 'in-progress', 'archived']).default('completed'),
    tools: z.array(z.string()).default([]),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    relatedLinks: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      )
      .optional(),
    // Keep for backwards compatibility
    author: z.string().optional(),
  }),
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, projects }
