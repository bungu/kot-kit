import * as React from 'react';
import {
	Text,
	Panel
} from 'kot-kit';

export default () => (
	<div style={{width: '500px', margin: '0 auto', background: '#eee', minHeight: '500px'}}>
		<Panel
			withPadding={true}
			withMargin={true}
			withShadow={true}
		>
			<Text header large>With padding, margin and shadow</Text>
			<Text paragraph>
				Quisque ut euismod massa. Nunc sem eros, pretium at turpis sit amet, imperdiet ultricies justo. Phasellus vel rutrum libero. Nunc vitae tincidunt metus. Duis lectus turpis, mollis nec aliquet ac, tempus ac nibh. Vestibulum id placerat lacus, aliquam efficitur urna. Praesent non purus lobortis, volutpat lectus id, aliquet massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In at tempor nunc. Nam massa lectus, luctus sit amet tristique in, elementum ac lectus. In sed consequat velit. Etiam sed tellus turpis. Pellentesque a nibh a dui consequat volutpat nec vel tellus. Mauris facilisis ante nisl, egestas pellentesque sem lobortis non. Nulla ligula augue, convallis vitae sem vitae, mattis mattis lectus.
			</Text>
		</Panel>

		<Text paragraph>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium ultrices risus, at cursus arcu convallis vel. Proin fringilla purus vitae efficitur tempus. Vestibulum egestas sem vel augue condimentum, sed tincidunt lorem consectetur. Suspendisse in ligula sed dui porta placerat vitae id lacus. Etiam placerat aliquam orci, a ultrices ipsum viverra vel. Aliquam imperdiet mauris erat, ac mollis augue vulputate ac. Suspendisse potenti.
		</Text>

		<Panel
			withPadding={false}
			withMargin={false}
			withShadow={false}
		>
			<Text header large>Without padding, margin or shadow</Text>
			<Text paragraph>
				Quisque ut euismod massa. Nunc sem eros, pretium at turpis sit amet, imperdiet ultricies justo. Phasellus vel rutrum libero. Nunc vitae tincidunt metus. Duis lectus turpis, mollis nec aliquet ac, tempus ac nibh. Vestibulum id placerat lacus, aliquam efficitur urna. Praesent non purus lobortis, volutpat lectus id, aliquet massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In at tempor nunc. Nam massa lectus, luctus sit amet tristique in, elementum ac lectus. In sed consequat velit. Etiam sed tellus turpis. Pellentesque a nibh a dui consequat volutpat nec vel tellus. Mauris facilisis ante nisl, egestas pellentesque sem lobortis non. Nulla ligula augue, convallis vitae sem vitae, mattis mattis lectus.
			</Text>
		</Panel>

		<Text paragraph>
			Donec vel lectus purus. Integer consequat nunc vitae elementum gravida. Donec cursus nisi a est tincidunt consequat. Phasellus magna mauris, volutpat ut mollis ac, porta et sapien. Integer convallis lobortis lacus eget euismod. Praesent hendrerit ex quis ex bibendum imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pellentesque ante quam, mollis mollis tellus rutrum nec. Suspendisse eleifend turpis odio, nec consectetur massa dictum nec. Sed ornare, urna in lobortis egestas, tortor libero pellentesque justo, quis porttitor orci sem et purus.
		</Text>
	</div>
)