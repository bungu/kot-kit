export default (theme: any) => ({
	display: 'block',
	height: '100%',
	borderRadius: theme.variables.interactive.borderRadius,

	'&:after': {
		borderRadius: theme.variables.interactive.borderRadius,
	},
})