const path = require('path');
//did i need to install the dependency since its Node native module??

module.exports = {
  //have to set "mode"
  mode: 'production',
  // entry file
  entry: {
    app:'./main.js',
  },
  output: {
    //changing to path.resolve
    // path: __dirname + '/build',
    //  it will dynamically generate bundle names, based on the entry point names
    path: path.resolve(__dirname, 'dist'),
    // whats publicPath (webpack docs)
    // publicPath: '/build/',
    filename: '[name].bundle.js',
    
  },
  // we will use webpack-dev-server
  devServer: {
    // contentBase : './build',
    contentBase : path.join(__dirname,'dist'),

    inline: true, // reload on the fly (auto refresh) / changed to false to try and solve an error
    port: 4567, // which port to run the server on
  },
  module: {
    // loaders are transformers basically / changing "loaders" to "rules"
    // changing to rules to try an alleviate invalid config object 
    /*
        Invalid configuration object. Webpack hasbeen initialised using a configuration obj
        ect that does not match the API schema. - configuration.module has an unknown pro
        perty 'loaders'. These properties are vali
        d:   object { exprContextCritical?, exprContextRecursive?, exprContextRegExp?, exprCon
        textRequest?, noParse?, rules?, defaultRules?, unknownContextCritical?, unknownConte
        xtRecursive?, unknownContextRegExp?, unkno
        wnContextRequest?, unsafeCache?, wrappedContextCritical?, wrappedContextRecursive?,
        wrappedContextRegExp?, strictExportPresenc
        e?, strictThisContextOnImports? }   -> Options affecting the normal modules
        (`NormalModuleFactory`).
    */
    rules: [
      {
        // All files that end with `.js`
        test: /\.js$/,
        // Do not consider node_modules for webpack bundling
        exclude: /node_modules/,
        // use babel as the loader (transformer)
        loader: 'babel-loader',
        // have to specify babel-loader NOT babel
        // Passing queries/arguments to the loader
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};