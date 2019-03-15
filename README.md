# Example full-stack application using Express and React

### Starter Node.js Backend server with MongoDB and React Frontend

Generic backend server **starter-kit**.
With MongoDB connector and example route.
Folder structure provided for ease of future scale.
Basic password encryption provided.

### Run with
`docker-compose up`

To restore the data from the /data volume, run
`docker exec mongo mongorestore data`

Get `example json data` from the test route:
with httPie: `http GET localhost:8081/api/testroute`
with curl: `curl -i -H "Accept: application/json"  --GET localhost:8081/api/testroute`

You can start all components without docker-compose,
with `npm init && npm install`
If you have installed MongoDB, run mongoDB with `mongod`
and set url of the database in MONGOURL environment variable (for example in .env file in a root folder).
