//configración para el proyecto
const path = require ('path'); //traer path de nodejs - acceder los directorios del proyecto (nube o local)
const HtmlWebpackPlugin = require('html-webpack-plugin'); // archivo para trabajar con HTML
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js' 
    },

    resolve: {
        extensions: ['.js'],
        
    },

    module: { // compatibilidad entre navegadores
        rules: [
            {
                test: /\.js?$/, //regex
                exclude: /node_modules/, // no incluir las dependencias de node modules
                use: {
                    loader: 'babel-loader',
                }

            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'

            }
        ),

        new CopyWebpackPlugin({
            patterns: [{ from: './src/styles/styles.css',
            to: '' }],
        })
    ]

}



