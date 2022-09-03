const express = require("express");
const router = express.Router();
const randomUserController = require("../controllers/random.user.controller");
// let randomUsers = require("../faceData/random.users");
/* 

mathod get.
get random user.
url=>user/random
properties=> id, name, gender, contact, address, photoUrl

*/
router.get("/random", randomUserController.getRandomUser);
/* 

mathod get.
get all properties.
url=>user/all?limit=number or user/all
properties=> id, name, gender, contact, address, photoUrl.

*/
router.get("/all", randomUserController.getAllRandomUser);
/* 
random user create.
mathod post .
url=>user/save
properties=> id, name, gender, contact, address, photoUrl.

*/
router.post("/save", randomUserController.randomUserSave);
/* 

mathod patch.
random user property update.
url=>user/update/:id
properties=> id, name, gender, contact, address, photoUrl

*/
router.patch("/update/:id", randomUserController.updateRandomUser);

/* 

mathod patch.
random user property multiple user update.
note:=>array data [{},{}]
url=>user/bulk-update/
properties=> id, name, gender, contact, address, photoUrl

*/
router.patch("/bulk-update", randomUserController.randomUserMultipleUpdate);
/* 

mathod delete.
random user property delete.
url=>user/delete/:id
properties=> id, name, gender, contact, address, photoUrl

*/
router.delete("/delete/:id", randomUserController.randonUserDelete);
module.exports = router;
