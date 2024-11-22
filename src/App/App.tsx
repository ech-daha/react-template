import React, { type FC } from 'react'
import './App.scss'
import esriLogo from '../assets/esri_logo.png'
import MapComponent from './Components/MapComponent'
import CustomLayerControl from './Components/CustomLayerControl'

const App: FC = () => {
	return (
		<div className="app">
			<div className="logo">
				<img src={esriLogo} width={100} />
			</div>
			<MapComponent />
			<div style={{ position: 'absolute', top: '20px', right: '20px' }}>
				<CustomLayerControl />
			</div>
		</div>
	)
}

export default App
