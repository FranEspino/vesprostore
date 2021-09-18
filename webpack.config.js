const path = require('path'); 
const htmlWebpackPlugin = require('html-webpack-plugin');
const { dirname } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { loader } = require('mini-css-extract-plugin');

//configuracion de webpack 
module.exports = {
    entry: './src/index.js', //punto de entrada, permite saber cual es el archivo principal
    output:{ //lugar donde enviamos el proyecto compilado
        path: path.resolve(__dirname, 'dist'), //encontrar el directorio 
        filename: 'bundle.js', //archivo resultante
        publicPath: '/'
    },
    resolve:{ //extensiones que escucha y analiza en el proceso de compilado
        extensions: ['.js','.jsx','.tsx']
    },
    module:{ 
        //las reglas son elementos que por medio de leaders a detectar los archivos js 
        rules: [
            {
                test: /\.(js|jsx|tsx)$/, 
                exclude: /node_module/, //no debemos leer ningun archivo de esta carpeta se ignora
                use: {
                    loader: 'babel-loader' //babel para poder leer los recursos
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test : /\.css$/,
                use:[
                    {
                       loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader"
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html', //punto de entrada 
            filename: './index.html' //como se irá a producción
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ],
    devServer:{ //crear un servidor para poder programar
        contentBase: path.join(__dirname, 'dist'), 
        compress: true,
        historyApiFallback: true,
        port: 3005
    }
}