// Middleware Version 
// const createProxyMiddleware = require("http-proxy-middleware");

const { createProxyMiddleware } = require("http-proxy-middleware");
const TARGET =
  process.env.NODE_ENV === "development" ? "http://localhost:5050" : "";
module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({ target: TARGET, changeOrigin: true })
  );
};