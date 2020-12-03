import * as React from 'react'
import styles from './index.less'

const NotFound: React.SFC<{}> = () => {
	return (
		<div className={styles.container}>
			<h1>页面不存在!!</h1>
		</div>
	)
}

export default React.memo(NotFound)
