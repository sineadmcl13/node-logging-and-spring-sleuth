Node Logging Requests from Spring Projects that use Spring Cloud Sleuth 

With the increase of microservices, there is a need to trace requests through microservices built in different technologies.

Spring Cloud Sleuth implements a distributed tracing solution for Spring Cloud. More information can be found at
https://cloud.spring.io/spring-cloud-sleuth/

This makes it easier for developers to trace requests through multiple microservices. But what if one of your microservices is built in Node

If your Spring Project calls a Node Microservice you can easily lose the TraceID

This small project demos logging in Node to include that Spring Cloud Sleuth TraceId
 
##### Installation
 
```
npm install 
node index.js
```

This will start the project which can be accessed on [http://localhost:8080/](http://localhost:8080/)  

Hit the url with a request from your Spring Project that uses Sleuth Logging to see the TraceID being logged out 

