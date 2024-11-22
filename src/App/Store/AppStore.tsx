import { create } from 'zustand'

export interface AppLayer {
	itemId: string
	visible: boolean
	opacity: number
}

interface AppStore {
	layers: AppLayer[]
	setLayerOpacity: (value: number, id: string) => void
	setLayerVisible: (value: boolean, id: string) => void
}

const useAppStore = create<AppStore>((set, get) => ({
	layers: [
		{
			itemId: 'f93a3f7b8cf444d7b80943b7dcb6568b',
			visible: true,
			opacity: 1,
		},
		{
			itemId: 'f75314ecbd094ed7befb11241279f013',
			visible: true,
			opacity: 1,
		},
		{
			itemId: '48f0d1a2006c4e89a85712a618fcff89',
			visible: false,
			opacity: 1,
		},
		{
			itemId: '52bb0360a01a4ce8baefb8c3bdda8771',
			visible: false,
			opacity: 1,
		},
	],
	setLayerOpacity: (value, id) => {
		const newLayers = get().layers.map((layer) => {
			if (layer.itemId === id) {
				return {
					...layer,
					opacity: value,
				}
			}
			return layer
		})
		set(() => ({ layers: newLayers }))
	},
	setLayerVisible: (value, id) => {
		const newLayers = get().layers.map((layer) => {
			if (layer.itemId === id) {
				return {
					...layer,
					visible: value,
				}
			}
			return layer
		})
		set(() => ({ layers: newLayers }))
	},
}))

export default useAppStore
