import * as React from 'react'
import {Button, Input} from 'antd'
import {getExclamationMarks} from 'utils'
//import * as THREE from 'three'
// import {OrbitControls} from 'three-examples/jsm/controls/OrbitControls'
import styles from './Hello.less'

const {useEffect, useState, useCallback} = React

// console.log(OrbitControls)
// const control = new OrbitControls(new THREE.Camera())

interface Props {
	name: string
	enthusiasmLevel?: number
}

const Hello: React.FC<Props> = ({name, enthusiasmLevel = 1}: Props) => {
	const [count, setCount] = useState(enthusiasmLevel)

	if (enthusiasmLevel <= 0) {
		throw new Error('You could be a little more enthusiastic. :D')
	}

	const handleClick = useCallback(() => {
		setCount(count + 1)
	}, [count])

	return (
		<div className={styles.hello}>
			<div className={styles.greeting}>
				Hello {name + getExclamationMarks(count)}
			</div>
			<Button onClick={handleClick}>点击</Button>
		</div>
	)
}

export default Hello
