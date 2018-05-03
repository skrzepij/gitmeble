# v2.0 #

New version of the webpage.

Work in progress..


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
