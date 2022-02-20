const express = require('express');

const Database = require("./data")
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("port", process.env.PORT);
app.set("host", process.env.NODEJS_IP);

app.get("/DataBase", Database.Database);

app.listen(app.get("port"), app.get("host"), () => {
    console.log(`MS on http://${app.get("host")}:${app.get("port")}`);
});