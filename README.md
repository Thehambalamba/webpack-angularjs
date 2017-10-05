# Webpack AngularJS #

### What is this repository for? ###

* Seed for AngularJS development.

The project uses webpack@3.6.0 and angularJS@1.6.6. It has webpack setup for styling using scss, font and img hashing, vendor bundle caching and babel.


### Setup ###
(You need to have NodeJS installed to run this project)

* Set up node_modules

Fork the repo and run "npm install" in ./

```node
npm install
```
### Scripts ###

The project builds the /dist dir and the projects assets using "build"

```node
npm run build
```

You can clean the dist dir with the "clean"

```node
npm run clean
```

Running "watch" makes webpack build and watch over the files for change

```node
npm run build
```

Start the webpack dev server using "build".(Note that running this command will not create the build dir, the dev server will create its own cached dist dir)

```node
npm run build
```

### Dependencies ###

```JavaScript
"devDependencies": {
  "babel-core": "^6.26.0",
  "babel-loader": "^7.1.2",
  "babel-preset-angular": "^6.0.15",
  "babel-preset-env": "^1.6.0",
  "css-loader": "^0.28.7",
  "extract-text-webpack-plugin": "^3.0.1",
  "file-loader": "^1.1.4",
  "html-webpack-plugin": "^2.30.1",
  "node-sass": "^4.5.3",
  "raw-loader": "^0.5.1",
  "rimraf": "^2.6.2",
  "sass-loader": "^6.0.6",
  "style-loader": "^0.19.0",
  "webpack": "^3.6.0",
  "webpack-dev-middleware": "^1.12.0",
  "webpack-dev-server": "^2.9.1"
},
"dependencies": {
  "angular": "^1.6.6"
}
```

### Deployment instructions ###

Todo

### Who do I talk to? ###

* Nikola Pervic
