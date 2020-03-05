const indexRouter = require("../routes/index");

const apiBaseUrl = process.env.npm_package_config_apiBaseUrl;
const version = process.env.API_VERSION;
const completeUrl = `${apiBaseUrl}/${version}`;

exports.init = app => {
  app.use(completeUrl + "/index", indexRouter);
};
