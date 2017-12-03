# wp_hot_replacement_1
webpack热更新demo1


npm init -y
npm install webpack --save-dev
mkdir src && cd src
# 新建html、css、js文件
touch index.html style.css main.js
# npm 安装jquery
npm install jquery --save
# 新建img文件夹，所有图片存储在里面
mkdir img 
touch webpack.config.js webpack.entry.js
npm install html-loader style-loader css-loader file-loader url-loader --save-dev
npm install html-webpack-plugin --save-dev
