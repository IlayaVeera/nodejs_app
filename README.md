Deployment Instruction:
=============================

1. connect server 

  ssh -i aws_key.pem ubuntu@public_ip
  
2. clone  nodejs_app to server
   git clone 
   cd nodejs_app
   
3. create env variable
   nano .env

    DB_HOST=rds_endpoint
    DB_USER=mysqluser
    DB_PASSWORD=mysql123
    DB_NAME=login
    PORT=5000

4. connect db and create table
   mysql -h DB_HOST -u DB_USER -p < db/init.sql

5. install npm and express module
   sudo apt-get install npm -y
   sudo npm install express
   
6. run application
   node app.js

