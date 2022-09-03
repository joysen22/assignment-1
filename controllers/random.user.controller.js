const fs = require("fs");
// let randomUsers = require("../faceData/random.users");
let randomUsers = JSON.parse(
  fs.readFileSync(`${__dirname}/../devData/users.json`)
);
/* 

mathod get.
get random user.
properties=> id, name, gender, contact, address, photoUrl

*/
exports.getRandomUser = (req, res) => {
  let random = Math.floor(Math.random() * randomUsers.length);

  const randomUserdata = randomUsers[random];
  res.status(200).json({
    message: "success",
    data: randomUserdata,
  });
};
/* 
mathod get.
get all properties and query limit=2/any number.
properties=> id, name, gender, contact, address, photoUrl.

*/

exports.getAllRandomUser = (req, res) => {
  const { limit } = req.query;

  if (limit) {
    if (randomUsers.length >= limit) {
      const limitUsers = randomUsers.slice(0, limit);
      res.status(200).json({
        message: "sucess",
        data: limitUsers,
      });
    } else {
      res.status(201).json({
        message: `limit is over because data only ${randomUsers.length}`,
        data: randomUsers,
      });
    }
  } else {
    res.status(200).json({
      message: "sucess",
      data: randomUsers,
    });
  }
};
/* 
random user create
mathod post 
properties=> id, name, gender, contact, address, photoUrl

*/
exports.randomUserSave = (req, res) => {
  const { id, name, gender, contact, address, photoUrl } = req.body;

  if (!id) {
    return res.status(400).send({
      message: "Please enter id",
    });
  } else if (!name) {
    return res.status(400).send({
      message: "Please enter name",
    });
  } else if (!contact) {
    return res.status(400).send({
      message: "Please enter contact",
    });
  } else if (!address) {
    return res.status(400).send({
      message: "Please enter address",
    });
  } else if (!photoUrl) {
    return res.status(400).send({
      message: "Please enter photoUrl",
    });
  } else if (!gender) {
    return res.status(400).send({
      message: "Please enter gender",
    });
  }

  const ExistId = randomUsers.find((user) => {
    const exist = user.id === id;
    return exist;
  });

  if (ExistId) {
    return res.status(400).send({
      message: `id:${id} is exist please enter unique id`,
    });
  }
  const newUser = { id, name, gender, contact, address, photoUrl };
  randomUsers.push(newUser);
  res.status(200).json({
    message: "success",
    data: newUser,
  });
};
/* 

mathod patch.
random user property update.
url=>user/update/:id
properties=> id, name, gender, contact, address, photoUrl

*/
exports.updateRandomUser = (req, res) => {
  const { id } = req.params;
  const ob = req.body;
  ob.id = id;
  const index = randomUsers.findIndex((user) => user.id === id);
  const user = randomUsers[index];

  // console.log("ob", ob);
  if (!user) {
    return res.status(400).send({
      message: `id ${id} is not found please enter correct id`,
      data: [],
    });
  }
  for (let property in ob) {
    if (user[property]) {
      user[property] = ob[property];
    }
  }

  return res.status(200).json({
    message: "success",
    data: user,
  });
};
/* 

mathod patch.
random user property multiple user update.
note:=>array data [{},{}]
url=>user/bulk-update/
properties=> id, name, gender, contact, address, photoUrl

*/
exports.randomUserMultipleUpdate = (req, res) => {
  const multipleUser = req.body || [];
  const lengths = multipleUser.length;

  for (let i = 0; i < lengths; i++) {
    // console.log("multi", multipleUser[i].id);
    const index = randomUsers.findIndex(
      (user) => user.id === multipleUser[i].id
    );
    const user = randomUsers[index];
    if (!user) {
      return res.status(400).send({
        message: "Envalid user data",
        data: [],
      });
    }
    if (user) {
      for (let property in multipleUser[i]) {
        if (user[property]) {
          user[property] = multipleUser[i][property];
        }
      }
    }
  }
  res.status(200).send({
    message: "success",
  });
};
/* 

mathod delete.
random user property delete.
url=>user/delete/:id
properties=> id, name, gender, contact, address, photoUrl

*/
exports.randonUserDelete = (req, res) => {
  const { id } = req.params;
  const index = randomUsers.findIndex((user) => user.id === id);
  const user = randomUsers[index];
  if (!user) {
    return res.status(400).send({
      message: `Envalid user id ${id}`,
      data: [],
    });
  }
  const newUser = randomUsers.filter((user) => user.id !== id);

  // console.log("delete", newUser);
  randomUsers = newUser;
  res.status(200).send({
    message: "success",
    data: randomUsers,
  });
};
