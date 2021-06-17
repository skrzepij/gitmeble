# v2.0 #

New version of the webpage.

### Whats change? ###

Basically - everything.

There are major visual changes, but I decide to use brand new project structure based on Webpack 2.

Changelog in brief:
* New project structure
* Add Webpack 2 config
* Add npm modules
* Add PUG template engine
* Change CSS preprocessor (moving from LESS to SASS)
* Minified files on production
* Add autoprefixer for SASS
* Change carousel library
* And much more..  

### How to start ###

1. Clone/Download repo
2. Go to project folder and run `npm install`
3. For developers mode run `npm run dev` - now all files (html, css, js) will create in `dist` folder and the watcher will start to listening any changes in project files
4. For production mode run `npm run prod` now all files will be created and minified just to be served via browser
5. There is also `npm run clean` command to clean up `dist` folder

## Develop ##

If you want to work on this project, remember to DO NOT edit files in `dist` folder. Changes should be made ONLY IN `src` folder. And I recommend to make changes in developer mode (run `npm run dev`)

If you need to:
* Change markup (html) -> Edit proper `.PUG` file in `src > views` folder
* If you want to create new subpage, remember to add it into `webpack.config.js` as new `HtmlWebpackPlugin` object
* Change styles -> Edit proper `.SASS` file in `src > scss` folder
* Change JS scripts -> Edit proper `.JS` file in `src > js` folder (main .js file is entry.js and we use modules here)
* Change image -> go to `src > img`
* Change font -> go to `src > fonts`
* Change only some data (JSON) -> go to folder `src > data`
* You can also use TypeScript - webpack is aleready configured to support it. But it's need to be in separated `src > ts` folder. Besides, you can check `webpack.config.js` by your own :)
