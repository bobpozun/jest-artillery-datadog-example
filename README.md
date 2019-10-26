## Summary

This is an example of a framework using jest to test an api and artillery to load test  

Jest info: https://jestjs.io/docs/  

Artillery info: https://artillery.io/docs/  

Simple Test API docs: https://restful-booker.herokuapp.com/apidoc/index.html  


## To Run

`npm install`   
`npm install -g typescript`  
`npm run test`  

## Load Testing  
`npm run test-load load/{filename}.yml`  

generate load testing html report:  
`npm run load-report`  

artillery w/ http debugging:  
`DEBUG=http npm run test-load load/{file}.yml` 
`DEBUG=http:response npm run test-load load/{file}.yml`  

artillery w/ plugin debugging:  
`DEBUG=plugin:* npm run test-load load/{file}.yml` 
