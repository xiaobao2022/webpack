// webpack配置 - webpack.config.js(默认)
// 1. 新建src并列处, webpack.config.js
// 2. 填入配置项
// const path = require("path")
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join } = require("path")
module.exports = {
    // mode: "development",
    // mode: 'development || production',
    mode: "production",
    //指定入口，相对路径
    entry: "./src/main.js",
    output: {
        //__dirname表示当前文件名夹
        path: join(__dirname, "lib"), // 出口路径
        filename: "webpack-demo.js", // 出口文件名
        //删除上次的文件夹再打包
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            //绝对路径
            template: join(__dirname, 'public/index.html'),
        })
    ],
    devServer: {
        port: 30000, // 端口号
        open: true
    },
    module: {
        rules: [ // loader的规则
            {
                test: /\.css$/, // 匹配所有的css文件
                // use数组里从右向左运行
                // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
                // 再用 style-loader 将样式, 把css插入到dom中
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
                use: ["style-loader", "css-loader", 'less-loader']
            },
            {
                test: /\.(gif|png)$/i,
                // type: "asset/resource"
                // type: "asset/inline"
                type: "asset",
                //
                parser: {
                    dataUrlCondition: {
                        //字节
                        maxSize: 2 * 1024
                    }
                }
            },
            // { // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
            //     test: /\.(eot|svg|ttf|woff|woff2)$/,
            //     type: 'asset/resource',
            //     //[hash]随意生成字符[ext]
            //     generator: {
            //         filename: 'fonts/[hash:6][ext]'
            //     }
            // },
            {
                test:/\.js$/i,
                use:["babel-loader"]
            },
            {
                test:/\.vue$/i,
                use:["vue-loader"]
            }
        ]
    }
}
