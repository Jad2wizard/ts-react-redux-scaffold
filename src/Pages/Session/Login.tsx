import * as React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {BrowserHistory as history} from 'connect-redux-react-router'
import {Input, message} from 'antd'
import * as actions from './models/actions'
import {isLoadingSelector} from './models/selector'
import styles from './index.less'
import {checkPassword, checkUsername} from './utils'

const {useState, useCallback} = React

interface LoginProps {
	name: string
}

const Login: React.SFC<LoginProps> = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()
	const isLoading = useSelector(isLoadingSelector)
	const handleLogin = useCallback(() => {
		const usnCheckRes = checkUsername(username)
		const pwdCheckRes = checkPassword(password)
		if (usnCheckRes) {
			message.warn(usnCheckRes)
			return
		}
		if (pwdCheckRes) {
			message.warn(pwdCheckRes)
			return
		}
		dispatch(actions.login({status: 'request', username, password}))
	}, [dispatch, username, password])

	const jumpToRegister = useCallback(() => history.push('/register'), [])

	return (
		<div className={styles.container}>
			<section className={styles.loginBlock}>
				<header className={styles.header}>登录</header>
				<div className={styles.inputContainer}>
					<div className={styles.inputTitle}>
						<p>用户名</p>
					</div>
					<div className={styles.inputSection}>
						<Input
							disabled={isLoading}
							type="text"
							value={username}
							onChange={e => setUsername(e.target.value)}
							placeholder="请输入用户名"
						/>
					</div>
				</div>
				<div className={styles.inputContainer}>
					<div className={styles.inputTitle}>
						<p>密码</p>
					</div>
					<div className={styles.inputSection}>
						<Input
							disabled={isLoading}
							type="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							placeholder="请输入密码"
						/>
					</div>
				</div>
				<div className={styles.buttonContainer}>
					<button
						disabled={isLoading}
						className={`${styles.button} ${styles.loginBtn}`}
						onClick={handleLogin}
					>
						登录
					</button>
					<button
						disabled={isLoading}
						className={`${styles.button} ${styles.registerBtn}`}
						onClick={jumpToRegister}
					>
						注册
					</button>
				</div>
			</section>
		</div>
	)
}

export default React.memo(Login)
