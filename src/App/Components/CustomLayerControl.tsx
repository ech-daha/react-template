import React, { type FC } from 'react'
import useAppStore from '../Store/AppStore'
import {
	Card,
	Checkbox,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'

const CustomLayerControl: FC = () => {
	const layers = useAppStore((state) => state.layers)
	const setLayerVisible = useAppStore((state) => state.setLayerVisible)
	console.log(layers)

	return (
		<Card>
			<List>
				{layers.map((layer) => (
					<ListItem key={layer.itemId}>
						<ListItemButton
							onClick={() => setLayerVisible(!layer.visible, layer.itemId)}
							dense
						>
							<ListItemIcon>
								<Checkbox checked={layer.visible} />
							</ListItemIcon>
							<ListItemText primary={layer.itemId} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Card>
	)
}

export default CustomLayerControl
