const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productsRouter = require('./products/products.router')
const db = require("./utils/database");
const initModels = require('./models/initModels')
const app = express();


const { port } = require("../config");
// validar la conexión

db.authenticate()
    .then(() => console.log("Database Authenticated"))
    .catch((err) => console.log(err));

db.sync()
    .then(() => console.log("Database Synced!"))
    .catch((err) => console.log(err));

initModels()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json(
        {
            message: 'Server Ok',
            myMessage: process.env.MESSAGE,
            myPort:process.env.PORT
        }
    )
})

app.use('/api/v1/products', productsRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
