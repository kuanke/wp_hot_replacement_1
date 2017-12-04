# wp_hot_replacement_1
webpack热更新demo1

```
npm init -y
npm install webpack --save-dev
mkdir dist && cd dist
touch index.html
cd ..
mkdir src && cd src

touch index.js print.js
cd ..
touch webpack.config.js
npm install html-loader style-loader css-loader file-loader url-loader --save-dev
npm install webpack-dev-server --save-dev
npm install html-webpack-plugin --save-dev
npm install clean-webpack-plugin --save-dev
npm install lodash --save
```