if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = 'development'
}

const Koa = require('koa')
const path = require('path')
const fs = require('fs')
const koaStatic = require('koa-static')
const koaBody = require('koa-body')
const {env} = require('./server/utils/renderer')
const config = JSON.parse(fs.readFileSync('./config.json'))
const routers = require('./server/routers')
const {setSession} = require('./server/controllers/session')

process.on('uncaughtException', err => {
	console.log(err)
})

const app = new Koa()
const NODE_ENV = process.env.NODE_ENV

// 配置热加载
if (NODE_ENV === 'development' && config.hotUpdate) {
	const webpackHotMiddleware = require('koa-webpack-hot-middleware')
	const webpackDevMiddleware = require('koa-webpack-dev-middleware')
	const webpack = require('webpack')
	let webpackConfig = require(path.resolve(__dirname, './webpack.config'))
	if (typeof webpackConfig === 'function') {
		webpackConfig = webpackConfig({}, {mode: NODE_ENV})
	}
	const compiler = webpack(webpackConfig)
	app.use(
		webpackDevMiddleware(compiler, {
			noInfo: false,
			quiet: false,
			publicPath: webpackConfig.output.publicPath
		})
	)
	app.use(webpackHotMiddleware(compiler, {}))
}

app.use(
	koaBody({
		multipart: true,
		formLimit: '5000000kb',
		formidable: {
			maxFileSize: 200 * 1024 * 1024
		}
	})
)

//静态路由中间件
app.use(koaStatic(path.join(__dirname, './dist')))

//添加鉴权认证中间件，位于静态路由后面，静态路由不用进行认证
// setSession(app)

app.use(routers.routes()).use(routers.allowedMethods())

app.use(async ctx => {
	ctx.response.body = env.render('index.html')
})

app.listen(config.port)
console.log(`Listening on ${config.port}...`)
