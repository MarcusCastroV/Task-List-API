## Supermarket List API

API in Node.js using Express and Mongoose to connect a MongoDB DataBase

The main objective  is to make life easier for application users who find it difficult to organize themselves and manage their tasks in the simplest way possible. 

So this API aims to organize this daily tasks.

### Technologies used

-Node.js

-Express

-Mongoose

-MongoDB

### Required Technologies

- Node.js installed (https://nodejs.org)
- MongoDB instance running: 
  Ex: Running with docker
  ```
  docker run --name task-list -p 27017:27017 -d mongo
  ```

### Steps to run the project 

1. Clone the repo:
```
git clone https://github.com/MarcusCastroV/Task-List-API.git
```

2. Navigate to the repo:
```
cd supermarket-list-api
```

3. Install the dependencies:
```
npm install
```

4. Run the API:
```
npm run start:dev
```

### Important Rule

Is necessary send the username at the requisition header

### Available endpoints

-[GET]/list-task  

-[POST]/list-task  

-[DELETE]/list-task/:id  

-[PUT]/list-task/:id  