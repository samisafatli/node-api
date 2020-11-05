# Brawlers API

## API to create and list Brawlers from Brawstars!

This project is just a playground for my studies. It can or it can not be upgraded to have more usabilities.

### Technology

* NodeJS
* MongoDB

### File structure

Down below there is a list of the most important files and their functionalities

* `server.js`: 
    - Starts application using Express (It uses port 3001)

* `src/controllers/BrawlerController.js`: 
    - Implements the functions below:
        * show()
        * showByID()
        * store()
        * update()
        * delete()

* `src/models/Brawler.js`: 
    - Creates Brawler Schema using Mongoose and Paginate.

* `src/routes/routes.js`: 
    - Creates the http methods using the functions from the Controller.
