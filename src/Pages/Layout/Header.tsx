import * as React from 'react'
import {useSelector} from 'react-redux'
import {Tooltip, Icon} from 'antd'
import {AppState} from './../../Store'
import styles from './index.less'

interface Props {
	logout(): void
}

const Header: React.SFC<Props> = ({logout}) => {
	const user = useSelector((state: AppState) => state.sessionState.user)
	return (
		<header className={styles.header} onClick={logout}>
			Header
		</header>
	)
}

export default React.memo(Header)
