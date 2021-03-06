import * as React from 'react';
import deepmerge from 'deepmerge';
import { ThemeProvider } from 'provider';
import cn from 'classnames';
import { IBaseInnerProps, IBaseOuterProps } from '../base';
import ViewBox from '../View';

export interface IOuterProps extends IBaseOuterProps<HTMLDivElement> {
	vertical?: boolean;
	withMargin?: boolean;
}

export interface IInnerProps extends IBaseInnerProps, IOuterProps {
	theme: any; // @TODO patch decorator provider/withTheme
}

class GroupView extends React.Component<IInnerProps> {
	public static defaultProps = {
		withMargin: true,
	};

	public render() {
		const groupTheme = deepmerge(this.props.theme, {
			mixins: {
				groupItem: (): any => ({
					display: 'block',
					height: '100%',
				}),
				metrics: {
					box: () => ({
						wrapper: [0, 0, 0, 0],
						content: this.props.theme.mixins.metrics.box(this.props.theme).content,
					}),
				},
			},
		});

		const lastIndex = React.Children.count(this.props.children) - 1;

		return (
			<ThemeProvider theme={groupTheme}>
				<ViewBox
					nowrap
					className={cn({
						[this.props.classes.vertical]: this.props.vertical,
						[this.props.classes.wrapper]: this.props.withMargin,
					})}
					elementRef={this.props.elementRef}
				>
					{React.Children.map(
						this.props.children,
						(child, index) => React.cloneElement(child as React.ReactElement<any>, {
							key: index,
							className: cn({
								[this.props.classes.groupItemFirst]: index === 0,
								[this.props.classes.groupItemLast]: index === lastIndex,
							}),
						})
					)}
				</ViewBox>
			</ThemeProvider>
		);
	}
}

export default GroupView;