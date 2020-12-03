import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'connect-redux-react-router'
import store from './Store'
import Login from './Pages/Session/Login'
import Layout from './Pages/Layout'
import NotFoundPage from './Pages/NotFoundPage'
import styles from './index.less'

/* eslint-disable */
if ((module as any).hot) {
	;(module as any).hot.accept()
}
/* eslint-enable */

const App: React.FC<{}> = () => {
	return (
		<div>
			<Layout>
				<Router store={store}>
					<Route exact path="/">
						<h1>Hello</h1>
					</Route>
					<Route path="/login">
						<Login name="test" />
					</Route>
				</Router>
			</Layout>
		</div>
	)
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#main')
)
