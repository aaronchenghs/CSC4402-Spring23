# CSC4402-Spring23
LSU CSC4402 - Database Management Systems - Spring 2023 Group Project
Team Negative Zero

Group Members:
Aaron Cheng @aaronchenghs
Bruce Quach @bquach1
Emmanuel Ejim @Emmanuel747
Henry Nguyen @hvnguyen57
Catherine Men @catherine-men
Han Nguyen 
Miles Bellaire
Luke LeGoullon
Mark Herpin

CardEx-US

Team Negative Zero is developing a Card Trading and Selling e-commerce website. The website
will allow users to trade and sell collectible cards with other users. The database for this project
will be built using PostgreSQL, with a frontend written in ReactJS and a NodeJS API.
The database will include several tables, such as a cards table, a users table, and an orders
table. The cards table will store information about the cards, including their name, description,
rarity, and price. The users table will store user information, including their name, email, and
password. The orders table will store information about each transaction, including the buyer's
and seller's user IDs, the card ID, and the price.
We estimate it shouldn’t take more than 7 weeks to build a fully functional site. The team will
follow a step-by-step plan that includes the following:

1) Designing the database schema and creating the necessary tables.
2) Writing the API endpoints for creating, reading, updating, and deleting cards, users, and
orders.
3) Implementing user authentication and authorization ensures that only authenticated
users can access certain parts of the website.
4) Developing the website's front end using ReactJS will consume the API endpoints and
display the information to the user.
5) Testing the website to ensure it functions correctly and all features work as intended.
6) Deploying the website to a production server and configuring it for high availability and
performance.
7) Conducting soft tests to make sure the site is working as intended.
We have already assigned roles and begun working on the project; we look forward to seeing
what we can create in the next few weeks.

END

# Developer's notes
Note: Backend was built with Node.js and PostgreSQL

1) Open a Ubuntu terminal 
2) Run the Steps below:
  - run command in linux terminal: sudo service postgresql start
  - Must create a local DB named ``cardex``
  - psql create DB command: ``<username>=# create database cardex;``
  - *To populate AND reintialize* the Database run: ``npm run start:database``
  - Or to launch Database without repopulating run: ``npm start server:dev``
3) Open another terminal
4) If first launch continue else Skip to step 5:
  - Delete package-lock.json, node_modules folder
  - Run command "npm i" in your terminal
5) Run command ``npm run start:frontend``

Site should be running locally.

**Useful postgres commands**
\l - list all databases current user has access to
\c database_name; edit that database