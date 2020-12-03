import * as React from 'react'
import {Layout, Menu} from 'antd'
import {Link} from 'react-router-dom'
import Header from './Header'

const {Content} = Layout
const {useState, useEffect, useMemo} = React

type Props = {
	children: React.ReactElement
}

const Home: React.FC<Props> = props => {
	return (
		<Layout>
			<Content>{props.children}</Content>
		</Layout>
	)
}

export default React.memo(Home)
