const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/queryfunction", {
      target: "https://pf921uruzh.execute-api.ap-south-1.amazonaws.com/newprod",
      changeOrigin: true
    })
  );
};