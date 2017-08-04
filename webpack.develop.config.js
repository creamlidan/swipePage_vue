var path = require('path');
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry:'./src/main.js',
	output:{
		path:path.resolve(__dirname,'./dist/'),
		filename:'build.js'
	},
	module:{
		rules:[
		{
			test:/\.css$/,
			loader:'style-loader!css-loader!autoPrefixer-loader'
		},
		{
			test:/\.js$/,
			loader:'babel-loader',
			exclude:/node_modules/
		},{
			test:/\.vue$/, 
			loader:'vue-loader',
		}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			title:'index',
			filename:'index.html',
			template:'index.html'
		})
	]
}