# 3102


#To start:

- cd to current dir
    
    ```
    cd /path/to/current/dir/mongo
    ```
    
- install dependencies:
    ```
    npm install
    ```
- Start mongodb 
    
    ```
    sudo mongod --dbpath /path/to/current/dir/mongo
    ```
    
    ```
	eg:sudo mongod --dbpath /Users/jerryzhang/Google\ Drive/Study/2016-4-Fall/SEG3102A/3102/mongo
    ``` 
- Start server
    
    ```npm start```
    
- Save db
    
    ```mongoexport --host 127.0.0.1 --port 27017 --db  [dbName] --collection [collectionName] --out [outputFile]```
    
    ```exmaple: mongoexport --host 127.0.0.1 --port 27017 --db  test --collection user --out /Users/jerryzhang/Google\ Drive/Study/2016-4-Fall/SEG3102A/3102/mongo/user.json```
	
- Shut the server down
    
    ```ctrl+c```

- import json document as data
    ```
	mongoimport --host 127.0.0.1 --port 27017 [dbName] --collection [collectionName] --file [inputFile]
    ```
	```
	eg:mongoimport --host 127.0.0.1 --port 27017 --db  test --collection user --file /Users/jerryzhang/Google\ Drive/Study/2016-4-Fall/SEG3102A/3102/mongo/user.json
	```
	
# Framworks
- See package.json

# Useful References
- [cookie-parser tutorial](http://expressjs-book.com/index.html%3Fp=128.html)
- [mongo shell tutorial](http://www.mkyong.com/mongodb/how-to-create-database-or-collection-in-mongodb/)

# Author


#License
MIT, see LICENSE.txt.


