# BuuttiApp
### Installation

#### Requirements:

- npm

#### Cloning repository and changing directory:
- **Open a terminal in the location you wish the application to be cloned into and use the following commands**
```
git clone https://github.com/HeneDev/BuuttiApp.git
cd BuuttiApp
```

#### Inside the BuuttiApp folder open terminals in both /client and /server directories and install all the dependencies by the using the following command in both terminals:

```
npm i
```

#### Running the application
- **Provide the .env file to the /server directory to use MongoDB database**
- **Inside the /server directory, run the command**

```
npm start
```
- **Inside the /client directory**
- **In the path**
```
BuuttiApp\client\src\services\BookData.js
```
- **Replace line 3 with the following code**
```
const baseUrl = "http://localhost:3001/api/books"
```
- **After that, start the client by running the following command in terminal**
```
npm start
```
