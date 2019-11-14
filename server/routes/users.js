const router = require("express").Router()

const users = [

]

router.get("https://randomuser.me/api", (req, res, next) => {
  res.json(users)
})

module.exports = router

