var path = require('path'); //这里引入path是为了解析相对路径，配置文件某些路径要求是绝对路径
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口文件，webpack据此对项目进行打包
  // 类型： String字符串 | Array数组 | Object对象
  // lesson1很简单，只使用一个入口
  entry: [
    // 给webpack-dev-server启动一个本地服务，并连接到8080端口
    'webpack-dev-server/client?http://localhost:8080',

    // 给上面启动的本地服务开启自动刷新功能，'only-dev-server'的'only-'意思是只有当模块允许被热更新之后才有热加载，否则就是整页刷新
    'webpack/hot/only-dev-server',
    './webpack.entry.js'
  ],
  // webpack的入口文件，后面会创建
  // 定义webpack打包时的输出文件名及路径
  output: {
    // 定义webpack打包之后的文件名
    filename: 'webpack.bundle.js',

    // 定义打包文件的存储路径：当前目录的build文件夹
    path: path.resolve(__dirname, './build'),

    // 声明资源（js、css、图片等）的引用路径
    // webpack打包时会把html页面上的相对路径根据publicPath解析成绝对路径
    // eg：当publicPath为'https://jd.com/'时，如果有html或者css含有一张图片相对路径为'./img/test.jpg',打包之后html（或css）中图片的路径就会变成'https://jd.com/img/test.jpg'
    publicPath: ''
  },

  // 用于解析entry选项的基础目录(必须是绝对路径)，该目录必须包含入口文件
  // 默认: process.cwd()
  context: __dirname,

  // 定义项目里各种类型模块的处理方式
  module: {
    rules: [{
      test: /\.css$/,
      // 处理.css文件
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(jpg|png)$/,
      // 处理.png和.jpg格式的图片文件
      use: ['url-loader?limit=10000&name=img/[name].[ext]'
      // limit参数指图片大小（10kb），当小于这个值时图片转为base64，当把值修改为60000时，1.jpg（50kb）会被解析成base64，打包后查看index.html代码可以看到
      // name参数指图片文件的命名格式，前面可以加 img/ 表示图片存储路径
      ]
    },
    {
      test: /\.html$/,
      // 处理.html文件
      use: ['html-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    // 开启webpack全局热更新
    new webpack.HotModuleReplacementPlugin(),

    // 当接收到热更新信号时，在浏览器console控制台打印更多可读性高的模块名称等信息
    new webpack.NamedModulesPlugin()
  ],
  // 定义webpack-dev-server
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    // 静态文件目录位置，只有当你需要在webpack-dev-server本地服务器查看或引用静态文件时用到。类型：boolean | string | array, 建议使用绝对路径
    hot: true,
    // 模块热更新。依赖于HotModuleReplacementPlugin
    noInfo: false,
    // 在命令行窗口显示打包信息
  }
};

