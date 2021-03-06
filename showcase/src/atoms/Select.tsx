import * as React from 'react';
import {
	Select,
	Panel,
	Group,
	Text,
	View,
} from 'kot-kit'
import * as readme from '../../../lib/Select/readme.md';
import MarkdownViewer from '../MarkdownViewer';

const EXAMPLE_DATA = [
	'111',
	'222',
	'333',
];

export default () => (
	<View>
		<Text header large>Default set of Select components</Text>

		<Panel withPadding={false} withMargin={false}>
			<Group vertical withMargin={false}>
				<Select value={EXAMPLE_DATA[0]} selected onSelect={() => console.log(EXAMPLE_DATA[0])}>First value: {EXAMPLE_DATA[0]}</Select>
				<Select value={EXAMPLE_DATA[1]} onSelect={() => console.log(EXAMPLE_DATA[1])}>Second value: {EXAMPLE_DATA[1]}</Select>
				<Select value={EXAMPLE_DATA[2]} onSelect={() => console.log(EXAMPLE_DATA[2])}>Third value: {EXAMPLE_DATA[2]}</Select>
			</Group>
		</Panel>

		<MarkdownViewer source={readme} />
	</View>
)