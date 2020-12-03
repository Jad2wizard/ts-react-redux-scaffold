import * as React from 'react'
import styles from './index.less'

const LoadingPage: React.SFC<{}> = () => {
	return (
		<div className={styles.container}>
			<h1>页面加载中</h1>
		</div>
	)
}

export default LoadingPage
