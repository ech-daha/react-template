import React, { type FC, useEffect, useRef, useState } from 'react'
import './MapComponent.scss'
import '@arcgis/core/assets/esri/themes/dark/main.css'
import Map from '@arcgis/core/Map'
import View from '../View'
import useAppStore, { type AppLayer } from '../Store/AppStore'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import AppLayerComponent from './AppLayerComponent'
import * as reactiveUtils from '@arcgis/core/core/reactiveUtils'

const MapComponent: FC = () => {
	const mapRef = useRef<HTMLDivElement | null>(null)

	const layers = useAppStore((state) => state.layers)

	const [viewReady, setViewReady] = useState<boolean>(false)

	// Build up view...
	useEffect(() => {
		if (!mapRef.current) return
		reactiveUtils
			.whenOnce(() => View.ready)
			.then((ready) => ready && setViewReady(true))
		View.map = new Map({
			basemap: 'topo-vector',
		})
		View.container = mapRef.current
	}, [])

	const addLayer = (layer: AppLayer) => {
		const fl = new FeatureLayer({
			portalItem: { id: layer.itemId },
			opacity: layer.opacity,
			visible: layer.visible,
			id: layer.itemId,
		})
		console.log('adding')
		View.map.add(fl)
	}

	const removeLayer = (id: string) => {
		const fl = View.map.findLayerById(id)
		View.map.remove(fl)
	}

	const setVisible = (value: boolean, id: string) => {
		const fl = View.map.findLayerById(id)
		fl.visible = value
	}

	const setOpacity = (value: number, id: string) => {
		const fl = View.map.findLayerById(id)
		fl.opacity = value
	}

	return (
		<>
			<div className="map" ref={mapRef} />
			{viewReady &&
				layers.map((layer) => (
					<AppLayerComponent
						key={layer.itemId}
						visible={layer.visible}
						opacity={layer.opacity}
						onMount={() => addLayer(layer)}
						onVisibleChange={(visible) => setVisible(visible, layer.itemId)}
						onDestroy={() => removeLayer(layer.itemId)}
						onOpacityChange={(opacity) => setOpacity(opacity, layer.itemId)}
					/>
				))}
		</>
	)
}

export default MapComponent
