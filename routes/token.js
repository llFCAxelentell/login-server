/**
 * Routes related to JSON Web Tokens.
 */

const config = require("../config")
const utils = require("../utils")

module.exports = app => {

  app.get("/publicKey", (req, res) => {
    res.json({
      publicKey: config.publicKey.toString("utf8"),
      algorithm: config.jwtOptions.algorithm,
    })
  })

  app.get("/token", (req, res) => {
    if (req.user) {
      res.json(utils.getToken(req.user))
    } else {
      res.status(401).json({ status: 401, message: "Authorization necessary." })
    }
  })

}