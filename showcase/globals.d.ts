declare module "kot-kit" {
	export const Alert: any;
	export const Button: any;
	export const Group: any;
	export const Icon: any;
	export const Input: any;
	export const Link: any;
	export const Panel: any;
	export const Select: any;
	export const Spinner: any;
	export const Suggest: any;
	export const Text: any;
	export const TrainStationSuggest: any;
	export const View: any;
	export const withHiddenValue: any;
	export const withHints: any;
	export const withIcons: any;
	export const withKeyEventHandler: any;
	export const withSuggest: any;
	export const theme: any;
	export const ThemeProvider: any;
	export const withTheme: any;
	export const withStyles: any;
	export const StyleContextProvider: any;
	export const IconProvider: any;
	export const Modal: any;
	export const Popup: any;
	export const Calendar: any;
}

interface NodeRequire { // @TODO webpack patch
	context?: any;
}

type Dictionary<T> = {
	[index: string]: T;
}

declare module '*.md' {
	const content: any;
	export default content;
}

declare module '*.css' {
	const content: any;
	export default content;
}