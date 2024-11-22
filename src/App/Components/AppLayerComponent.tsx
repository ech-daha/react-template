import React, { type FC, useEffect } from 'react'

interface Props {
	visible: boolean
	opacity: number
	onMount: () => void
	onDestroy: () => void
	onVisibleChange: (value: boolean) => void
	onOpacityChange: (value: number) => void
}

const AppLayerComponent: FC<Props> = (props) => {
	useEffect(() => {
		props.onMount()
		return props.onDestroy
	}, [])

	useEffect(() => props.onVisibleChange(props.visible), [props.visible])
	useEffect(() => props.onOpacityChange(props.opacity), [props.opacity])

	return <></>
}

export default AppLayerComponent
