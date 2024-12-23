export function Title({ title, subtitle }: { title?: string, subtitle?: string }) {
	return (
		<div>
			<h1 className="text-4xl font-bold text-center">{title}</h1>
			<p className="text-center">{subtitle}</p>
		</div>
	);
}