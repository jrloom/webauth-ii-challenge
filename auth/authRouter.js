const bcrypt = require("bcryptjs");
const router = require("express").Router();

const Users = require("../models/userModels");

router.post("/register", (req, res) => {
  const userInfo = req.body;
  const hash = bcrypt.hashSync(userInfo.password, 14);
  userInfo.password = hash;

  Users.add(userInfo)
    .then(user => {
      req.session.username = user.username;
      res.status(201).json(user);
    })
    .catch(error => res.status(500).json(error.message));
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.username = user.username;
        res.status(200).json({ message: `welcome ${user.username}` });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    })
    .catch(error => res.status(500).json(error.message));
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy;
    res.status(200).json({ message: "Bye" });
  } else {
    res.status(200).json({ error: "Already logged out" });
  }
});

module.exports = router;
