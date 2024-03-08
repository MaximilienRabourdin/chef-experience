const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/email",
    createProxyMiddleware({
      target: "https://app.loops.so/api/v1/transactional",
      changeOrigin: true,
	  pathRewrite: {
        "^/email": "",
      },
    })
  );
};
