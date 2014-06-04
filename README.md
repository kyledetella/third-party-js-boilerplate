Braintree Meetup 6/4/2014
=========================

## Installation
```
npm i
```

## Run
To run the server and watch both client and server-side js files:
```
npm start
```

## Structure
```
├── host-public
│   ├── index.html
│   └── js
│       └── host-app.js
├── iframe-public
│   ├── index.html
│   └── js
│       └── iframe-app.js
├── index.js
├── package.json
├── routers
│   ├── assets.js
│   └── host.js
└── server.js
```

## Public Apis
- [github](https://developer.github.com/v3/)
- [flickr](https://www.flickr.com/services/api/)
- [twitter](https://dev.twitter.com/)
- [nasa](http://data.nasa.gov/api-info/)
- [vimeo](https://developer.vimeo.com/apis/advanced)

## Client
The client side javascript for both the host and iframe apps are setup to use [browserify](http://browserify.org/). 
```javascript
// For example:
var myModule = require('path/to/my/module');

myModule.isAGreatModule();
```

## Pages
- _HOST_ - `http://localhost:3031`
- _IFRAME_ -  `http://localhost:3032/assets` 
