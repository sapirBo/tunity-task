this project is about creating simple restful api which:
+ GET /prev will return the ip address of the previous client accessing that endpoint.
+ GET /total will return the total number of /prev requests served so far.
+ GET /stats will return statistics of the client ip addresses on all API endpoints.

Ips collection - will save all client's ip addresses
Command collection - now uses to count "/prev" requests. can be change to other kind of requests.

in "Routes" you can find the functions names
"Model" describes the schemas
"Controller" contains the functions implementation
