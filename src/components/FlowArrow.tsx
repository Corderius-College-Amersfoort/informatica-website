
// allow styling of the arrow
export default function FlowArrow({className}: {className?: string}) {
	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
			<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
				  d="m8 18l4 4m0 0l4-4m-4 4V2"/>
		</svg>
	);
}
