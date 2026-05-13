// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.batch4llm.de',
	integrations: [
		starlight({
			title: 'Batch4LLM docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/batch4llm/batch4llm' }],
			sidebar: [
				{
					label: 'Get started',
					items: [
						{ label: 'Quickstart', slug: 'guides/quickstart' },
						{ label: 'Batch Settings', slug: 'guides/batch_settings' },
						{ label: 'Error Handling', slug: 'guides/error_handling' },
						{ label: 'Researcher Guide', slug: 'guides/researcher_guide' },
					],
				},
				{
					label: 'Prompts',
					items: [
						{ label: 'Structured Output', slug: 'prompts/structured_output' },
						{ label: 'Multi Row Interpretation', slug: 'prompts/multi_row_interpretation' },
						{ label: 'Multi Prompt', slug: 'prompts/multi_prompt' },
					],
				},
			],
		}),
	],
});
