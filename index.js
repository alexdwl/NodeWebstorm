const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

require("./src/modules/routes.module").init(app);
require("./src/modules/db.module").init();

app.listen(port, () =>
  console.log(`NodeWebstorm API listening on port  ${port}!`)
);
