import * as React from 'react';
import {
	TrainStationSuggest,
	withSuggest,
	withHiddenValue,
	Input,
	Text,
	View,
} from 'kot-kit';
import * as readme from '../../../lib/TrainStationSuggest/readme.md';
import MarkdownViewer from '../MarkdownViewer';

const withSuggestComponent = withSuggest(TrainStationSuggest);
const EnhancedInput = withSuggestComponent(withHiddenValue(Input));

export default () => (
	<View>
		<Text header large>Train station suggest</Text>
		<Text paragraph>
			<div style={{ position: 'relative' }}>
				<EnhancedInput
					placeholder="Введите станцию"
				/>
			</div>
		</Text>

		<MarkdownViewer source={readme} />
	</View>
);