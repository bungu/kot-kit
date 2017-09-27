import * as React from 'react';
import * as cn from 'classnames';

export interface IProps {
	classes: Dictionary<string>,
	value?: string;
	defaultValue?: string;
	invalid?: boolean;
	onFocus?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
	onInput?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
	elementRef?: React.Ref<HTMLInputElement>;
	disabled?: boolean;

	autoComplete?: boolean;
	autoFocus?: boolean;
	maxLength?: number;
	minLength?: number;
	name?: string;
	mask?: string; // or regexp?
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean; // ???
	tabIndex?: number;
	type?: 'text'|'password'|'email'|'tel'|'number';
}

class InputView extends React.PureComponent<IProps> {
	public static defaultProps = {
		defaultValue: '',
		value: '',
		invalid: false,
		onFocus: () => {},
		onBlur: () => {},
		onInput: () => {},
		elementRef: () => {},
		disabled: false,
		autoComplete: false,
		autoFocus: false,
		readOnly: false,
		type: 'text',
	};

	private getElementAttributes(props: IProps) {
		const {
			classes,
			invalid,
			defaultValue,
			value,
			onFocus,
			onBlur,
			onInput,
			elementRef,
			disabled,
			autoComplete,
			autoFocus,
			maxLength,
			minLength,
			name,
			placeholder,
			readOnly,
			tabIndex,
			type,
		} = props;

		const result: any = {
			className: cn({
				[classes.input]: true,
				[classes.invalid]: invalid,
			}),
			ref: elementRef,
			defaultValue,
			onFocus,
			onBlur,
			onInput,
			disabled,
			autoComplete: autoComplete ? "on" : "off",
			autoFocus,
			maxLength,
			minLength,
			name,
			placeholder,
			readOnly,
			tabIndex,
			type,
		};

		if (!!value) {
			result.value = value;
		}

		return result;
	}

	public render() {
		return (
			<input {...this.getElementAttributes(this.props)} />
		);
	}
}

export default InputView;