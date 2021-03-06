# Description

# Usage
	import { Button } from 'kot-kit';

	export default props => <Button>Hello world!</Button>

# Props
| Name | Required | Type | Default value | Description |
|---|:-:|---|---|---|
| children || `React.ReactNode` | `null` | Текст или компонент, который отображается внутри кнопки. |
| disabled || `boolean` | `false` | Переключает стиль кнопки «заблокированная/активная». При начении `true` кнопка отображается как заблокированная. |
| href || `string` || URI, кнопка начинает вести себя как ссылка. |
| target || `string` || Если передан `props.href`, работает как атрибут тега `A`. |
| primary || `boolean` | `false` | Если клик по кнопке выполняет основной сценарий на странице, то нужно выставить значение `true`. |
| tabIndex || `number` || Порядок выставления фокуса при навигации с клавиатуры |
| expanded || `boolean` | `false` | Если `true`, занимает всё свободное пространство по ширине |
| toggled || `boolean` || Переключает состояние кнопки «Вкл/Выкл», используется в ButtonGroup и ToggledButton. |