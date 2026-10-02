import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
	const site = import.meta.env.SITE?.replace(/\/$/, '');
	const lines = ['User-agent: *', 'Allow: /'];
	if (site) lines.push('', `Sitemap: ${site}/sitemap.xml`);
	lines.push('');

	return new Response(lines.join('\n'), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
