# ConferenceTravelGrantSystem-SEG3102
CTGS is a course project for SEG3102, built using Nodejs, Express.js, MongoDB ang jQuery. Usage of all packages/libraries will be listed in the "Frameworks" section below.

# To start:

1. cd to current dir
    
    ```$ cd /path/to/current/dir/mongo```
    
2.  install dependencies:
    
	```$ npm install```

3.  Start mongodb 
    
    ```$ sudo mongod --dbpath /path/to/current/dir/mongo```
    
    exmaple: 
    
    ```$ sudo mongod --dbpath /Users/jerryzhang/Google\ Drive/Study/2016-4-Fall/SEG3102A/3102/mongo``` 
	
4. import json document as data
   
    ```$ mongoimport --host 127.0.0.1 --port 27017 [dbName] --collection [collectionName] --file [inputFile]```

	exmaple:
    
    ``` $ mongoimport --host 127.0.0.1 --port 27017 --db  test --collection user --file /Users/jerryzhang/Google\ Drive/Study/2016-4-Fall/SEG3102A/3102/mongo/user.json```
	
5. Start server
    
    ```npm start```
    
6. Save db
    
    ```$ mongoexport --host 127.0.0.1 --port 27017 --db  [dbName] --collection [collectionName] --out [outputFile]```
    
    exmaple: 
    
    ```$ mongoexport --host 127.0.0.1 --port 27017 --db  test --collection user --out /Users/jerryzhang/Google\ Drive/Study/2016-4-Fall/SEG3102A/3102/mongo/user.json```
	
7. Shut the server down
    
    ctrl+c
    

# Framworks
- See package.json

# Useful References
- [cookie-parser tutorial](http://expressjs-book.com/index.html%3Fp=128.html)
- [mongo shell tutorial](http://www.mkyong.com/mongodb/how-to-create-database-or-collection-in-mongodb/)
- [express-session](https://github.com/expressjs/session)

# Author
- [Rui Liu](https://github.com/RayLLiu) - Front-end Development & Intergration
- [Gin Kwan](https://github.com/GinKwan) - Front-end Development & UI designing
- [Fengwei Zhang](https://github.com/zhang96) - Backend Development & Database Management

# License

MIT, see LICENSE.txt.


