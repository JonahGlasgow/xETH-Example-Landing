# xETH-Example-Landing

This build is currently up to date with gulps latests version and will not work with gulp@3.9.1 due to breaking changes and major security updates please refer to the [Official Gulp Website](https://gulpjs.com/docs/en/getting-started/quick-start) for more information on Gulp@4.0.2 

* Before getting started please refer to the [JSON Package](#Package.json) section.

* To get started please refer to the [Quick Setup](#QuickSetup) section.

### Package.json Configuration (! important) 
Development must follow the package.json schema to import node_module dependencies to project library, this function has been integrated with gulps default task for simplicity. 

If you decide to change the package.json schema make sure you include both "dependencies" and "devDependencies" to prevent errors from occurring while starting your server.

```
"dependencies": {
    "bootstrap": "^4.4.1",
    "@popperjs/core": "^2.3.3",
    "jquery": "^3.5.0"
  },
  "devDependencies": {
    "browser-sync": "^2.26.7",
    "gulp": "^4.0.2",
    "gulp-npm-dist": "^1.0.3",
    "gulp-rename": "^1.4.0",
    "gulp-replace": "^1.0.0",
    "gulp-sass": "^4.0.2",
    "pump": "^1.0.1"
  }

```

### Quick Setup 

To get started in under 5 minutes, just fork this repo and clone it locally

```
$ git clone https://github.com/YOURFORKEDPROJECT
```

change directories to your forked project and run the following command to install all the dependencies required for the gulp starter kit  

```
npm install
```

#### Gulp Command Instructions 

Please run the following commands after all dependencies are downloaded  

1. Export scss & create style.css file 
```
run ---> "gulp style" 
```
2. Export bootstrap scss & create bootstrap.css file 
```
run ---> "gulp bootstrap" 
```
3. Export bootstrap JS & create bootstrap.js file 
```
run ---> "gulp bootstrapJS" 
```
4. Export jquery JS & create jquery.js file
```
run ---> "gulp jquery"
```  
5. Export popper JS & create popper.js file
```
run ---> "gulp popper"
```
6. Export node_modules dist to library (Currently set as default task)
```
run ---> "gulp"
```  

7. To start the server  
```
run ---> "gulp watch"
``` 


### Additional Sources 

[Gulpjs](https://gulpjs.com/)

[Bootstrap](https://getbootstrap.com/)

[Jquery](https://jquery.com/)

[Popperjs](https://popper.js.org/)

[gulp-npm-dist](https://www.npmjs.com/package/gulp-npm-dist)
