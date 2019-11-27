const router = require("express").Router()
const axios = require('axios')

const going = []
const notgoing = []


router.get('/random', (req, res, next) => {
    axios.get('https://randomuser.me/api/').then (resp => {
        const user = resp.data.results[0]

        res.json({
            fname: user.name.first,
            lname: user.name.last,
            phone: user.phone,
            picture: user.picture.large,
            email: user.email
        })
    })
})

router.post("/going", (req, res, next) => {
   const length = going.length
   const id = length + 1
   const user = {
       ...req.body.user,
       id
    }
   going.push(user)

   res.json(user)
})

router.get("/going", (req, res, next) => {
   res.json(going)
})

router.post("/notgoing", (req, res, next) => {
    const length = notgoing.length
    const id = length + 1
    const user = {
        ...req.body.user,
        id
     }
 
    notgoing.push(user)
 
    res.json(user)
})

router.get("/notgoing", (req, res, next) => {
   res.json(notgoing)
})


module.exports = router