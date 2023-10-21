//export defaultでないので関数の指定が必要
import {getItems, getItem} from '../functions/item'

const getItemComponent = () => {
	const items = getItems()
	const item = getItem(2)
	return (<><ul>
		{items.map(item => (
			<li key={item.id}>{item.name}</li>
			))} </ul>
		{item.name}</>)
}

export default getItemComponent
